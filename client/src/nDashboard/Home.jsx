import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleCheck,faCircleXmark} from '@fortawesome/free-solid-svg-icons';


const Home = () => {
  const [purchaseData, setPurchaseData] = useState([]);

  useEffect(() => {
    // Fetch data using Axios
    axios.get('http://localhost:5000/api/invoices')
      .then(response => {
        setPurchaseData(response.data.result);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="recent-history">
      <div className='code-container'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/330px-QR_code_for_mobile_English_Wikipedia.svg.png' alt='Mike'/>
      </div>
      <h2>Recent Booking</h2>
      <table className="recent-table">
        <thead>
          <tr>
            <th>Invoice ID</th>
            <th>Type</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {purchaseData.map(item => (
            <tr key={item.id}>
              <td>{"INV"+item.id}</td>
              <td>{item.type}</td>
              <td>{"$"+item.amount}</td>
              <td>{item.date}</td>
              <td>
                <span className={`status ${item.status ? 'green' : 'red'}`}>
                  {item.status ? <FontAwesomeIcon icon={faCircleCheck}/>: <FontAwesomeIcon icon={faCircleXmark}/>}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
