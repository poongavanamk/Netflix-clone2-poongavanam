import React from 'react';
import tickimg from './Treading now/tick.jpeg';
import tickimg2 from './Treading now/tickimg1.jpeg';

import { useNavigate } from 'react-router-dom';

export default function Plandetailss() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/Pricedetails');
  };

  return (
    <div>
      <div>
        <div className="header">
        <header className="payment-header">
        <h1 className="logo">NETFLIX</h1>
        
      </header>
      <div className='newaraive'>
      <button className="signout-btn  ">Sign Out</button>
      </div>
        </div>
      </div>

      <div className='plans'>
        <div className='planimg'>
          <img src={tickimg} alt='loading'></img>
        </div>

        <div className='plancontant'>
          <p>step 2 of 3</p>
          <h1>Choose your plan.</h1>

          <div className='nocommitement'>
            <img src={tickimg2} alt='loading'></img>
            <span>No commitments, cancel anytime.</span>
          </div>

          <div className='nocommitement'>
            <img src={tickimg2} alt='loading'></img>
            <span>Everything on Netflix for one low price.</span>
          </div>

          <div className='nocommitement'>
            <img src={tickimg2} alt='loading'></img>
            <span>No ads and no extra fees. Ever.</span>
          </div>

          <button onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
  );
}
