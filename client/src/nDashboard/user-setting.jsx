import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

function UserSetting() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate the input (e.g., check if email, phone, and address are valid)
    const isValid = validateInput();
    if (isValid) {
      setShowModal(true);
    } else {
     // setErrorMessage("Please Check the information you enter");

    }
  };

  const handleModalConfirm = () => {

    axios.post('http://localhost:5000/api/update',[email,phone,address,password]).then(res=> {
      if(res.data.success){
        navigate('');
      }
    }).catch(err => {
      console.error(err);
    })
    setEmail('');
    setPhone('');
    setAddress('');
    setShowModal(false);
  };

  const validateInput = () => {
    
      // Perform validation logic for email, phone, and address
      let isValid = true;
      // Email validation
      const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      if (!email.match(emailRegex)) {
        isValid = false;
        setErrorMessage('Please Check your email address');
        return isValid;
      }
      // Address validation
      if (address.trim() === '') {
        isValid = false;
      }
      return isValid;
  };

  return (
    <div className="user-setting-container">
      <h1>Update User Information</h1>
      <p>{errorMessage}</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone:</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="tel"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button onClick={handleSubmit} type="submit">Update</button>
      </form>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Confirmation</h2>
            <p>Are you sure you want to update your information?</p>
            <div className="modal-buttons">
              <button onClick={handleModalConfirm}>Yes</button>
              <button onClick={() => setShowModal(false)}>No</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default UserSetting;






