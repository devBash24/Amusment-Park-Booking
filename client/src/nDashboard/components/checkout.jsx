import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import moment from 'moment';


const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  let invoice = queryParams.get('data');
  invoice = JSON.parse(invoice);
  const formattedDate = moment(invoice.date, 'ddd MMM DD YYYY HH:mm:ss [GMT] Z (ZZ)').format('YYYY/MM/DD');

  const handleCheckout = () => {
    // Handle checkout logic, navigate to checkout page, etc.
    const encodedData = encodeURIComponent(JSON.stringify(invoice));
    navigate(`/dashboard/book-ticket/payment?data=${encodedData}`);
  };
  return (
    <div className="invoice">
      <h2>Invoice</h2>
      <div className="invoice-details">
        <p>Date: {formattedDate}</p><br/>
        <p>Type: {invoice.type}</p>
      </div>
      <h3>Items:</h3>
      <ul className="item-list">
        {invoice.cart.map(item => (
          <li key={item.EventID}>
            {item.EventName} - ${item.EventPrice}
          </li>
        ))}
      </ul>
      <p className="total-cost">Total Cost: ${invoice.totalCost}</p>
      <button className="pay-btn" onClick={handleCheckout}>Pay</button>
    </div>
  );
};

export default Checkout;
