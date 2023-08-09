import React, { useState } from 'react';
import Calender from './Calender';
import { useNavigate } from 'react-router-dom';

function TicketType() {
    const navigate = useNavigate();
    const [ticketType, setTicketType] = useState('adult');
    const [selectedDate, setSelectedDate] = useState(null);
    const [errormessage, setError] = useState('');

    const handleDateSelection = (date) => {
        setSelectedDate(date);
    };
    const handleTicketTypeChange = (event) => {
        setTicketType(event.target.value);
    }

    const handleBooking = () => {
        if (ticketType && selectedDate) {
            navigate(`/dashboard/book-ticket/choose-event?date=${selectedDate}&ticketType=${ticketType}`);
        } else {
            setError("Please Choose a Date");
        }
    };
    return (
        <div>
            <div>
                
                <Calender onDateSelection={handleDateSelection} />
                <p className='ticket-error'>{errormessage}</p>
            </div>
            <div className='ticket-section'>
                <h2>Choose Ticket Type</h2>
                <div>
                    <label>
                        <input
                            type="radio"
                            value="adult"
                            checked={ticketType === 'adult'}
                            onChange={handleTicketTypeChange}
                        />
                        Adult
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="radio"
                            value="child"
                            checked={ticketType === 'child'}
                            onChange={handleTicketTypeChange}
                        />
                        Child
                    </label>
                </div>
                <p>Selected Ticket Type: {ticketType}</p>
                <button onClick={handleBooking}>Book Ticket</button>
            </div>
           
        </div>
    )
}

export default TicketType