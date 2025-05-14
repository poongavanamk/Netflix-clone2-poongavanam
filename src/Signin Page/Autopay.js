import React from 'react';
import { useNavigate } from 'react-router-dom';
import PaymentFooter from '../Mainfolder/PaymentFooter';

const Autopay = () => {
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate('/header'); // route to the Header page
  };

  return (
    <div className="autopay-container">
      <header className="autopay-header">
        <h1 className="logo">NETFLIX</h1>
        <button className="signout-btn">Sign Out</button>
      </header>

      <div className="autopay-box">
        <p className="step-info">STEP 3 OF 3</p>
        <h1 className="autopay-title">Set up UPI AutoPay</h1>
        <p className="autopay-desc">You can change this recurring payment any time in your settings.</p>

        <select className="upi-select">
          <option>Select your UPI app</option>
          <option>Google Pay</option>
          <option>PhonePe</option>
          <option>Paytm</option>
          <option>BHIM</option>
        </select>

        <input type="text" className="upi-input" placeholder="UPI ID" />

        <a href="#" className="upi-help">How do I find my UPI ID?</a>

        <button className="next-btn" onClick={handleNextClick}>Next</button>
      </div>

      <PaymentFooter />
    </div>
  );
};

export default Autopay;
