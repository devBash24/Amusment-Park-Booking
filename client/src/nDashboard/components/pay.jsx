import React, { useState } from 'react';
import {useNavigate, useLocation} from 'react-router-dom';
import QRCode from 'qrcode';
import axios from 'axios';

function Pay() {
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    let invoice = queryParams.get('data');
    invoice = JSON.parse(invoice);

    const [paymentType, setPaymentType] = useState('');
    const [cardNumber, setCardNumber] = useState('4896024930202303');
    const [expiryDate, setExpiryDate] = useState('09/30');
    const [cvv, setCvv] = useState('235');
    const [name, setName] = useState('Susan Patton');
    const [qrCode, setQRCode] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handlePayment = async (e) => {
        e.preventDefault();
        // Perform validation checks
        if (!paymentType || !cardNumber || !expiryDate || !cvv || !name) {
            setErrorMessage('Please fill in all the fields.');
            return;
        }

        // Card number validation
        const cardNumberRegex = /^[0-9]{16}$/;
        if (!cardNumberRegex.test(cardNumber)) {
            setErrorMessage('Please enter a valid 16-digit card number.');
            return;
        }

        // Expiry date validation
        const expiryDateRegex = /^(0[1-9]|1[0-2])\/[0-9]{2}$/;
        if (!expiryDateRegex.test(expiryDate)) {
            setErrorMessage('Please enter a valid expiry date in MM/YY format.');
            return;
        }

        // CVV validation
        const cvvRegex = /^[0-9]{3}$/;
        if (!cvvRegex.test(cvv)) {
            setErrorMessage('Please enter a valid 3-digit CVV.');
            return;
        }

        // Clear error message
        setErrorMessage('');

        // Perform payment processing logic here
        const paymentInfo = {
            paymentType,
            cardNumber,
            expiryDate,
            cvv,
            name
        };
        const qrCodeData = JSON.stringify(paymentInfo);
        try {
            const generatedQRCode = await QRCode.toDataURL(qrCodeData);
            setQRCode(generatedQRCode);
            console.log('Payment processed successfully!');
            // Reset form inputs
            setPaymentType('');
            setCardNumber('');
            setExpiryDate('');
            setCvv('');
            setName('');
        } catch (error) {
            console.error('Error generating QR code:', error);
        }

        const data = {
            cart: invoice.cart,
            qrCode: qrCodeData,
            totalCost: invoice.totalCost,
            type:invoice.type,
            date: invoice.date,
            qrImg: qrCode
        }

    //const encodedData = encodeURIComponent(JSON.stringify(data));
    axios.post('http://localhost:5000/api/paymentData',data).then(response =>{
        if(response.data.status){
            console.log("The file was successfully added to the database");
            navigate('/dashboard/book-ticket/success');
        }else{
            console.log("Error submitting the file");
        }
    }).catch(error =>{
        console.log(error);
    })
   
    };




    return (
        <div className="payment">
            <h2>Payment Details</h2>
            <form onSubmit={handlePayment}>
                <div className="form-group">
                    <label htmlFor="paymentType">Payment Type</label>
                    <select
                        id="paymentType"
                        className="form-control"
                        value={paymentType}
                        onChange={(e) => setPaymentType(e.target.value)}
                        required
                    >
                        <option value="">Select payment type</option>
                        <option value="Credit Card">Credit Card</option>
                        <option value="Venmo">Debit Card</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="cardNumber">Card Number</label>
                    <input
                        type="text"
                        id="cardNumber"
                        className="form-control"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="expiryDate">Expiry Date</label>
                    <input
                        type="text"
                        id="expiryDate"
                        className="form-control"
                        value={expiryDate}
                        onChange={(e) => setExpiryDate(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="cvv">CVV</label>
                    <input
                        type="text"
                        id="cvv"
                        className="form-control"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Name on Card</label>
                    <input
                        type="text"
                        id="name"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Pay Now</button>
            </form>
            {errorMessage && (
                <div className="alert alert-danger mt-3">{errorMessage}</div>
            )}
        </div>
    )
}

export default Pay;


