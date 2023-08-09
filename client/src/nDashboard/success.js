import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';


const SuccessPage = () => {
    const navigate = useNavigate();
  
    useEffect(() => {
      const redirectTimer = setTimeout(() => {
       navigate('/dashboard');
      }, 3000);
  
      return () => {
        clearTimeout(redirectTimer);
      };
    }, [navigate]);
  
    return (
      <div className='success-page'>
        <h1>Success!</h1>
        <p>Ticket Booking Successful</p>
        <FontAwesomeIcon icon={faSpinner} className="loading-icon" />
      </div>
    );
  };
  
export default SuccessPage;