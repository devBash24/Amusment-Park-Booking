import React, { useState,useEffect } from 'react';
import axios from 'axios';
//import 'bootstrap/dist/css/bootstrap.min.css';

const Calendar = ({onDateSelection}) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [bookedTickets,setBookTickets ] = useState([]);


  useEffect(()=>{
    axios.get('http://localhost:5000/api/dates').then(res=>{
        setBookTickets(res.data.result);
        console.log(res.data.result);
    }).catch(err=>{
        console.error(err);
    })
},[])

  const handleDateClick = (date) => {
    setSelectedDate(date);
    onDateSelection(date);
  };

  const renderCalendar = () => {
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentDate = today.getDate();
    //const nextMonth = new Date(today.getFullYear(), currentMonth + 1, 1);
    const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat','Sun'];
    //const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1).getDay();
    const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
    let bookedTicket = []

    const calendar = [];

    for (let i = 0; i < weekdays.length; i++) {
      calendar.push(
        <th key={`weekday-${i}`} scope="col" className="text-center">
          {weekdays[i]}
        </th>
      );
    }

    let day = 1;
    let rows = [];

    for (let i = 0; i < 6; i++) {
      let cells = [];

      for (let j = 0; j < weekdays.length; j++) {
        if (day > daysInMonth) break;

        const currentDay = new Date(today.getFullYear(), today.getMonth(), day+1);
        const dateString = currentDay.toISOString().split('T')[0];

        let cellClasses = 'text-center';

        if (currentDay.getMonth() < currentMonth) {
          cellClasses += ' text-muted';
        } else if (currentDay.getMonth() > currentMonth) {
          cellClasses += ' text-muted';
        } else {
          cellClasses += ' cursor-pointer';

          if (selectedDate && selectedDate === dateString) {
            cellClasses += ' bg-primary text-white';
          } else {
            cellClasses += ' bg-light';
          }

          bookedTicket = bookedTickets.find((ticket) => ticket.date === dateString);

          if (bookedTicket) {
            cellClasses += ' booked';
          }

          if (currentDay.getDate() < currentDate) {
            cellClasses += ' disabled';
          }
        }

        cells.push(
          <td
            key={`day-${day}`}
            className={cellClasses}
            onClick={() => handleDateClick(dateString)}
          >
            {day}
            {bookedTicket && (
              <span className="badge bg-danger ms-1">{bookedTicket.count}</span>
            )}
          </td>
        );

        day++;
      }
      rows.push(<tr key={`row-${i}`}>{cells}</tr>);
    }

    return (
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead>
            <tr>{calendar}</tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="container">
      <h2 className="mt-4 mb-3">Select a Date</h2>
      {renderCalendar()}
    </div>
  );
};

export default Calendar;
