import React, { useEffect, useState } from 'react';
import axios from 'axios';

const History = () => {
  const [purchaseData, setPurchaseData] = useState([]);
  useEffect(() => {
    // Fetch data using Axios
    axios.get('http://localhost:5000/api/purchase-history')
      .then(response => {
        setPurchaseData(response.data.result);
        console.log(response.data.result);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="purchase-history">
      <h2>Purchase History</h2>
      <table className="purchase-table">
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
                  {item.status ? 'Paid' : 'Unpaid'}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default History;
