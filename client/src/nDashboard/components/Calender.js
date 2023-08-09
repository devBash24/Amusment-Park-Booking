import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Calendar = ({onDateSelection}) => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  const [selectedDate, setSelectedDate] = useState(null);
  const [displayedMonth, setDisplayedMonth] = useState(currentMonth);
  const [calendarData, setCalendarData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/dates');
      setCalendarData(response.data.result);
    } catch (error) {
      console.error('Error fetching calendar data:', error);
    }
  };

  const handleDateClick = (day) => {
    if (day.getTime() >= currentDate.getTime()) {
      setSelectedDate(day);
      onDateSelection(day);
    }
  };

  const handlePreviousMonth = () => {
    setSelectedDate(null);
    setDisplayedMonth((prevMonth) => prevMonth - 1);
  };

  const handleNextMonth = () => {
    setSelectedDate(null);
    setDisplayedMonth((prevMonth) => prevMonth + 1);
  };

  const getTicketCount = (day) => {
    const ticketInfo = calendarData.find((ticket) => {
      const ticketDate = new Date(ticket.date);
      if (isNaN(ticketDate.getTime())) {
        // Invalid date, return false to skip this ticket
        return false;
      }
      return (
        day.getDate() === ticketDate.getDate() &&
        day.getMonth() === ticketDate.getMonth() &&
        day.getFullYear() === ticketDate.getFullYear()
      );
    });
  
    return ticketInfo ? ticketInfo.count : 0;
  };

  const daysInMonth = new Date(currentYear, displayedMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, displayedMonth, 1).getDay();

  const calendarDays = [];
  let dayIndex = 1;

  for (let week = 0; week < 6; week++) {
    const weekDays = [];
    for (let day = 0; day < 7; day++) {
      if ((week === 0 && day < firstDayOfMonth) || dayIndex > daysInMonth) {
        weekDays.push({ date: null, isCurrentMonth: false, ticketCount: 0 });
      } else {
        const dayDate = new Date(currentYear, displayedMonth, dayIndex);
        const ticketCount = getTicketCount(dayDate);
        weekDays.push({ date: dayDate, isCurrentMonth: true, ticketCount });
        dayIndex++;
      }
    }
    calendarDays.push(weekDays);
    if (dayIndex > daysInMonth) {
      break;
    }
  }

  return (
    <div className="calendar-container">
      <h2>{`${new Date(currentYear, displayedMonth).toLocaleString('default', { month: 'long' })} ${currentYear}`}</h2>
      <table>
        <thead>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>
          {calendarDays.map((week, weekIndex) => (
            <tr key={weekIndex}>
              {week.map((dayData, dayIndex) => (
                <CalendarDay
                  key={dayIndex}
                  day={dayData.date}
                  isCurrentMonth={dayData.isCurrentMonth}
                  selected={selectedDate && dayData.date && dayData.date.getTime() === selectedDate.getTime()}
                  ticketCount={dayData.ticketCount}
                  onClick={handleDateClick}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {dayIndex > daysInMonth && (
        <div className="navigation-buttons">
          <button onClick={handlePreviousMonth}>Previous Month</button>
          <button onClick={handleNextMonth}>Next Month</button>
        </div>
      )}
    </div>
  );
};

const CalendarDay = ({ day, isCurrentMonth, selected, ticketCount, onClick }) => {
  const handleClick = () => {
    if (day) {
      onClick(day);
    }
  };

  const getDayClassName = () => {
    let className = 'calendar-day';
    if (!day) {
      className += ' disabled';
    } else if (isCurrentMonth) {
      className += ' current-month';
    } else {
      className += ' other-month';
    }
    if (selected) {
      className += ' selected';
    }
    if (day && day.getDate() === new Date().getDate()) {
      className += ' current-day';
    }
    return className;
  };

  return (
    <td className={getDayClassName()} onClick={handleClick}>
      {day && (
        <div>
          <div className="day-number">{day.getDate()}</div>
          <div className="ticket-count">{ticketCount}</div>
        </div>
      )}
    </td>
  );
};

export default Calendar;
