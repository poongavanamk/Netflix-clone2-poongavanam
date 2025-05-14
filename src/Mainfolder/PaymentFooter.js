import React from 'react';


export default function PaymentFooter() {
  return (
    <footer className="payment-footer">
      <p className="footer-question">Questions? Call 000-800-919-1743</p>
      <ul className="footer-links">
        <li><a href="#">FAQ</a></li>
        <li><a href="#">Help Centre</a></li>
        <li><a href="#">Terms of Use</a></li>
        <li><a href="#">Privacy</a></li>
        <li><a href="#">Cookie Preferences</a></li>
        <li><a href="#">Corporate Information</a></li>
      </ul>
      <div className="footer-language">
        <select>
          <option value="en">English</option>
          <option value="hi">हिन्दी</option>
        </select>
      </div>
    </footer>
  );
}
