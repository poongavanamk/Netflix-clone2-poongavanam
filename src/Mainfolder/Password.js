import React, { useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import PaymentFooter from './PaymentFooter';


export default function Password() {
  const location = useLocation();
  const navigate = useNavigate();

  const emailOrPhone = location.state?.emailOrPhone || "No Email Provided";

  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

  const handleNext = () => {
    if (password.trim() === '') {
      setError('Enter your password');
    } else if (!passwordRegex.test(password)) {
      setError('Enter a valid password');
    } else {
      setError('');
      navigate("/Plandetailss");
    }
  };

  return (
    <div>
      <div className='passwrodhead'>
      <div className="header">
      <header className="payment-header">
        <h1 className="logo">NETFLIX</h1>
      </header>
      <div className='newaraive'>
      <button className="signout-btn  ">Sign Out</button>
      </div>
     
        </div>

        <div className='stepbystep'>
          <div className='easynetflix'>
            <p>STEP 1 OF 3</p>
            <h3>Welcome back!</h3>
            <h3>Joining Netflix Is Easy.</h3>
            <p>Enter your password and you'll be watching in no time.</p>
            <p className='easynetflix-email'>Email</p>
            <p className='easynetflix-email-show'>{emailOrPhone}</p>

            <input
              type="password"
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p style={{ color: 'red', marginTop: '5px' }}>{error}</p>}
          </div>

          <a className='easynetflixatag' href="https://www.netflix.com/in/LoginHelp">Forgot Your Password</a>

          <div className='nextbutton'>
            <button onClick={handleNext}>Next</button>
          </div>
        </div>
      </div>
      <PaymentFooter />
    </div>
  );
}
