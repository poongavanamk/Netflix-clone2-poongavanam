import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PaymentFooter from '../Mainfolder/PaymentFooter';


export default function PaymentProcess() {
  const [agreed, setAgreed] = useState(false);
  const navigate = useNavigate();

  const handleStartMembership = (e) => {
    e.preventDefault();
    if (agreed) {
      navigate('/header'); // route to Header page
    }
  };

  return (
    <div className="payment-wrapper">
      <header className="payment-header">
        <h1 className="logo">NETFLIX</h1>
        <button className="signout-btn">Sign Out</button>
      </header>

      <div className="process-container">
        <h4 className="step-indicator">STEP 3 OF 3</h4>
        <h1 className="title">Set up your credit or debit card</h1>

        <div className="card-icons">
          <img src="https://img.icons8.com/color/48/visa.png" alt="visa" />
          <img src="https://img.icons8.com/color/48/mastercard.png" alt="mastercard" />
        </div>

        <form className="card-form" onSubmit={handleStartMembership}>
          <div className="input-group">
            <input type="text" placeholder="Card number" className="card-input" />
            <span className="input-icon">💳</span>
          </div>

          <div className="input-row">
            <input type="text" placeholder="Expiration date" className="card-input" />
            <input type="text" placeholder="CVV" className="card-input" />
          </div>

          <input type="text" className="full-input" placeholder="Name on card" />

          <div className="plan-summary">
            <span className="plan-amount">₹149/month</span>
            <span className="plan-type">Mobile</span>
            <a href="#" className="change-link">Change</a>
          </div>

          <p className="note">Any payment above ₹2000 will need additional authentication.</p>

          <p className="terms">
            By ticking the box below, you agree to our <a href="#">Terms of Use</a> and <a href="#">Privacy Statement</a>
            and confirm that you are over 18. Netflix will automatically continue your membership and
            charge the membership fee (currently ₹149/month) to your payment method until you cancel.
            You may cancel at any time to avoid future charges.
          </p>

          <label className="checkbox">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
            />
            I agree.
          </label>

          <button className="start-btn" type="submit" disabled={!agreed}>
            Start Membership
          </button>

          <p className="captcha-note">
            This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="#">Learn more.</a>
          </p>
        </form>
      </div>

      <PaymentFooter />
    </div>
  );
}
