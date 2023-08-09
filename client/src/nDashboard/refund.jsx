import React, { useEffect, useState } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom';

const ConfirmationModal = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p className="modal-message">{message}</p>
        <div className="modal-actions">
          <button className="modal-confirm" onClick={onConfirm}>
            Confirm
          </button>
          <button className="modal-cancel" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};



const Refund =()=> {
  const [purchaseData, setPurchaseData] = useState([]);
  const [items, setItems] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/refund")
      .then((response) => {
        if (response.data.result.length > 0) {
          setPurchaseData(response.data.result);
        } else {
          setItems(i => !i);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },[]);

  const [showModal, setShowModal] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState(null);

  const handleStatusClick = (invoiceId, status) => {
    setSelectedInvoice(invoiceId);
    setShowModal(true);
  };

  const handleConfirm = () => {
    axios
      .post("http://localhost:5000/api/refund",[selectedInvoice])
      .then((response) => {
        if (response.data) {
            navigate('/dashboard');
        }else{
          console.log(response.data.error);
                } 
      })
      .catch((error) => {
        console.log(error);
      });
    
    // Perform any desired action with the selected invoice and status
    setShowModal(false);
  };

  const handleCancel = () => {
    console.log('User canceled');
    setShowModal(false);
  }

  return (
    <div>{items?
      <div className="refund-container">
        <h2>Available Refunds</h2>
        <table className="refund-table">
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
            {purchaseData.map((item) => (
              <tr key={item.invoice_id}>
                <td>{"INV"+item.invoice_id}</td>
                <td>{item.type}</td>
                <td>{"$"+item.total}</td>
                <td>{item.date.split('T')[0]}</td>
                <td>
                  <button className="status" onClick={() => handleStatusClick(item.invoice_id, item.status)}>
                    {item.status ? "Refund" : "Refund"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {showModal && (
        <ConfirmationModal
          message="Do you want to continue?"
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      )}
      </div>
      :
      <div className="purchase-history">
        No Available Refunds
        </div>
      }
    </div>

  );
}

export default Refund;
