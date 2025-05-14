import React from 'react';
import PaymentFooter from '../Mainfolder/PaymentFooter';
import { Link } from 'react-router-dom';


export default function PaymentPage() {
  return (
    <div className="payment-container">
      <header className="payment-header">
        <h1 className="logo">NETFLIX</h1>
        <button className="signout-btn">Sign Out</button>
      </header>

      <div className="payment-box">
        <div className="lock-icon">🔒</div>
        <p className="step">STEP 3 OF 3</p>
        <h1 className="payment-title">Choose how to pay</h1>
        <p className="subtitle">Your payment is encrypted and you can change your payment method at anytime.</p>
        <p className="secure-line"><strong>Secure for peace of mind.</strong><br />Cancel easily online.</p>

        <p className="encryption-note">End-to-end encrypted <span role="img" aria-label="lock">🔐</span></p>

        <div className="payment-option">
          <span>Credit or Debit Card</span>
          <div className="card-logos">
            <img src="https://img.icons8.com/color/48/visa.png" alt="visa" />
            <img src="https://img.icons8.com/color/48/mastercard.png" alt="mastercard" />
          </div>
          <Link to="/process" className="arrow">›</Link>
        </div>

        <div className="payment-option">
          <span>UPI AutoPay</span>
          <div className="upi-logos">
            <img src="https://img.icons8.com/color/48/bhim.png" alt="bhim" />
            <img src="https://img.icons8.com/color/48/paytm.png" alt="paytm" />
            <img src="https://th.bing.com/th/id/OIP.IrR4tRtDAhqYC-_z-mhUigHaHa?w=168&h=180&c=7&r=0&o=5&cb=iwc1&dpr=1.3&pid=1.7" alt="phonepe" />
            <img src="https://th.bing.com/th/id/OIP.xr-ZstKXMMrgpHjkhI_kngHaE7?w=252&h=180&c=7&r=0&o=5&cb=iwc1&dpr=1.3&pid=1.7" alt="amazonpay" />
            <img src="https://img.icons8.com/color/48/google-pay.png" alt="gpay" />
          </div>
          <Link to="/upiprocess" className="arrow">›</Link>
        </div>
      </div>
      <PaymentFooter />
    </div>
  );
}
