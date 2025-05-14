import React from 'react';
import { useNavigate } from 'react-router-dom';
import PaymentFooter from '../Mainfolder/PaymentFooter';


export default function Pricedetails() {
    const navigate = useNavigate(); // Step 1

  const handleNext = () => {
    navigate('/Payment'); // Step 2
  };

  return (
    <div>
         <div className="header">
         <header className="payment-header">
        <h1 className="logo">NETFLIX</h1>
        
      </header>
      <div className='newaraive'>
      <button className="signout-btn  ">Sign Out</button>
      </div>
        </div>

    <div className="pricedetails-container">
      <h3>STEP 2 OF 3</h3>
      <h1>Choose the plan that’s right for you</h1>

      <div className="plans-grid">
        <div className="plan-card premium">
          <h2>Premium<br /><span>4K + HDR</span></h2>
          <p><strong>Monthly price</strong><br />₹649</p>
          <p><strong>Video and sound quality</strong><br />Best</p>
          <p><strong>Resolution</strong><br />4K (Ultra HD) + HDR</p>
          <p><strong>Spatial audio</strong><br />Included</p>
          <p><strong>Supported devices</strong><br />TV, computer, mobile phone, tablet</p>
          <p><strong>Devices your household can watch at the same time</strong><br />4</p>
          <p><strong>Download devices</strong><br />6</p>
        </div>

        <div className="plan-card standard">
          <h2>Standard<br /><span>1080p</span></h2>
          <p><strong>Monthly price</strong><br />₹499</p>
          <p><strong>Video and sound quality</strong><br />Great</p>
          <p><strong>Resolution</strong><br />1080p (Full HD)</p>
          <p><strong>Supported devices</strong><br />TV, computer, mobile phone, tablet</p>
          <p><strong>Devices your household can watch at the same time</strong><br />2</p>
          <p><strong>Download devices</strong><br />2</p>
        </div>

        <div className="plan-card basic">
          <div className="most-popular">Most Popular</div>
          <h2>Basic<br /><span>720p</span></h2>
          <p><strong>Monthly price</strong><br />₹199</p>
          <p><strong>Video and sound quality</strong><br />Good</p>
          <p><strong>Resolution</strong><br />720p (HD)</p>
          <p><strong>Supported devices</strong><br />TV, computer, mobile phone, tablet</p>
          <p><strong>Devices your household can watch at the same time</strong><br />1</p>
          <p><strong>Download devices</strong><br />1</p>
        </div>

        <div className="plan-card mobile">
          <h2>Mobile<br /><span>480p</span></h2>
          <p><strong>Monthly price</strong><br />₹149</p>
          <p><strong>Video and sound quality</strong><br />Fair</p>
          <p><strong>Resolution</strong><br />480p</p>
          <p><strong>Supported devices</strong><br />Mobile phone, tablet</p>
          <p><strong>Devices your household can watch at the same time</strong><br />1</p>
          <p><strong>Download devices</strong><br />1</p>
        </div>
      </div>
    </div>

    <div className='hdpara'>
        <p>HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet 
            service and device capabilities. Not all content is available in all resolutions. 
            See our <span>Terms of Use</span> for more details.</p>
            <p>Only people who live with you may use your account. Watch on 4 different devices at
                 the same time with Premium, 2 with Standard, and 1 with Basic and Mobile.</p>
                 <p>Live events are included with any Netflix plan and contain ads.</p>
                 <div className='nextbutton'>
            <button  onClick={handleNext}>Next</button>
          </div>
    </div>
    <PaymentFooter />
    </div>
  );
}
