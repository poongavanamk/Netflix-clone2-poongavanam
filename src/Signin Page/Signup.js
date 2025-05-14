import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';


import img1 from '../Treading now/chhaava.png';
import img2 from '../Treading now/jewel thief.png';
import img3 from '../Treading now/court.png';
import img4 from '../Treading now/pushpa2.png';
import img5 from '../Treading now/deva.png';
import img6 from '../Treading now/dragon.png';
import img7 from '../Treading now/when life given your tangerines.png';
import img8 from '../Treading now/mad2.png';
import img9 from '../Treading now/You.png';
import img10 from '../Treading now/squid game.png';

import moniter from '../Treading now/monitor.jpeg';
import arrow from '../Treading now/arrow.jpeg';
import scope from '../Treading now/scope.jpeg';
import smile from '../Treading now/smile.jpeg';
import Footer from '../Mainfolder/Footer';

const categories = [
  { image: img1, title: "Chhaava", description: "After the death of his father..." },
  { image: img2, title: "Jewel Thief", description: "In this high-octane battle..." },
  { image: img3, title: "Court", description: "A driven attorney battles..." },
  { image: img4, title: "Pushpa 2", description: "As his smuggling empire grows..." },
  { image: img5, title: "Deva", description: "Working on a complicated case..." },
  { image: img6, title: "Dragon", description: "After a top student faces rejection..." },
  { image: img7, title: "When Life Gives You Tangerines", description: "In Jeju, a spirited girl..." },
  { image: img8, title: "Mad 2", description: "After his wedding turns into a disaster..." },
  { image: img9, title: "You", description: "A dangerously charming, obsessive man..." },
  { image: img10, title: "Squid Game", description: "Hundreds of cash-strapped players..." },
];

export default function Signup() {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [errors, setErrors] = useState({});
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [openFAQ, setOpenFAQ] = useState(null);
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!emailOrPhone) {
      newErrors.emailOrPhone = 'Email or Phone number is required';
    } else if (!emailRegex.test(emailOrPhone) && !phoneRegex.test(emailOrPhone)) {
      newErrors.emailOrPhone = 'Enter a valid Email or Phone number';
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      navigate("/password", { state: { emailOrPhone } });
    }
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth',
      });
    }
  };

  const faqData = [
    {
      question: 'What is Netflix?',
      answer: 'Netflix is a streaming service that offers movies, shows, and more on internet-connected devices.You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. Theres always something new to discover, and new TV shows and movies are added every week',
    },
    {
      question: 'How much does Netflix cost?',
      answer: 'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.',
    },
    {
      question: 'Where can I watch?',
      answer: 'Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favourite shows with the iOS or Android app. Use downloads to watch while youre on the go and without an internet connection. Take Netflix with you anywhere.',
    },
    {
      question: 'How do I cancel?',
      answer: 'Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime..',
    },
    {
      question: 'What can I watch on Netflix?',
      answer: 'Netflix offers a wide variety of movies, TV shows, documentaries, anime, and more.',
    },
    {
      question: 'Is Netflix good for kids?',
      answer: 'Yes! There’s a Kids experience with parental controls and kid-friendly content.',
    }
  ];

  


    const [isPlaying, setIsPlaying] = useState(false);
  
    const togglePlay = () => {
      setIsPlaying(!isPlaying);
      // Optional: Add actual play/pause logic here
    };
  
    const styles = {
      button: {
        padding: "10px 20px",
        fontSize: "18px",
        backgroundColor: "#e50914",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        margin: "10px",
        
      }
    };
  

  return (
    <div className="topheadsignup">
      <div className='newback'>
      <div className="header">
      <header className="payment-header">
        <h1 className="logo">NETFLIX</h1>
        <div className="footer-language movewrk">
        <select>
          <option value="lan">Language</option>
          <option value="en">English</option>
          <option value="hi">हिन्दी</option>
        </select>
      </div>
        
      </header>
      <div className='newaraive'>
      <button className="signout-btn  ">Sign Out</button>
      </div>
      </div>

      <div className="vediosignup">
      
        <div className="contantsss">
          <h1 className="Unlimited">Unlimited movies, TV shows and more</h1>
          <p className="Starts">Starts at ₹149. Cancel at any time.</p>
          <p className="Ready">Ready to watch? Enter your email to create or restart your membership.</p>

          <form onSubmit={handleSubmit}>
            <input
              className="emilph"
              type="text"
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
              placeholder="Enter your email or phone number"
              style={{ borderColor: errors.emailOrPhone ? 'red' : '#ccc' }}
            />
            <button type="submit" className="getstarted">Get Started</button>
            {errors.emailOrPhone && <div className="error" style={{ color: 'red', marginTop: '5px' }}>{errors.emailOrPhone}</div>}
          </form>
        </div>
        <div style={styles.vediosignup}>
      
        <div>
      <button style={styles.button} onClick={togglePlay}>
        {isPlaying ? "⏸ Pause" : "▶ Play"}
      </button>
    </div>
    </div>
      </div>
      </div>

      <div className="treadingnow">
        <div className="headertreadnding">
          <h1>Trending Now</h1>
        </div>

        {selectedMovie && (
          <div className="selected-movie-section">
            <h2 style={{ margin: '20px 0 10px', color: 'white', textAlign: 'center' }}>{selectedMovie.title}</h2>
            <div className="selected-movie-preview">
              <img src={selectedMovie.image} alt="Selected" />
              <div className="movie-details">
                <h3>{selectedMovie.title}</h3>
                <p>{selectedMovie.description}</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="bottom-form">
              <input
                className="emilph"
                type="text"
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
                placeholder="Enter your email or phone number"
                style={{ borderColor: errors.emailOrPhone ? 'red' : '#ccc' }}
              />
              <button type="submit" className="getstarted">Get Started</button>
              {errors.emailOrPhone && <div className="error" style={{ color: 'red', marginTop: '5px' }}>{errors.emailOrPhone}</div>}
            </form>
          </div>
        )}

        <div className="scroll-buttons">
          <button className="scroll-left" onClick={() => scroll('left')}>&lt;</button>
          <div className="imageoerder" ref={scrollRef}>
            {categories.map((item, index) => (
              <div
                className="singleimg"
                key={index}
                onClick={() => setSelectedMovie({ ...item, index })}
                style={{ cursor: 'pointer' }}>
                <div className="number-label">{index + 1}</div>
                <img src={item.image} alt={`Trending ${index}`} />
              </div>
            ))}
          </div>
          <button className="scroll-right" onClick={() => scroll('right')}>&gt;</button>
        </div>
      </div>

      <div className='More-reasons-to-join'>
        <h1>More reasons to join</h1>
        <div className='More-join'>
          <div className='Enjoy-on-your-TV'>
            <h3>Enjoy on your TV</h3>
            <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
            <div><img src={moniter} alt='loading' /></div>
          </div>
          <div className='Enjoy-on-your-TV'>
            <h3>Download your shows to watch offline</h3>
            <p>Save your favourites easily and always have something to watch.</p>
            <div><img src={arrow} alt='loading' /></div>
          </div>
          <div className='Enjoy-on-your-TV'>
            <h3>Watch everywhere</h3>
            <p>Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.</p>
            <div><img src={scope} alt='loading' /></div>
          </div>
          <div className='Enjoy-on-your-TV'>
            <h3>Create profiles for kids</h3>
            <p>Send kids on adventures with their favourite characters in a space made just for them — free with your membership.</p>
            <div><img src={smile} alt='loading' /></div>
          </div>
        </div>
      </div>

      {/* 🎉 NEW FAQ SECTION ADDED BELOW */}
      <div className='FAQ'>
        <h1>Frequently Asked Questions</h1>
        {faqData.map((faq, index) => (
          <div key={index} className='FAQ-Item'>
            <button
              className='FAQ-Button'
              onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
            >
              {faq.question}
            </button>
            {openFAQ === index && (
              <div className='FAQ-Answer'>
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className='footerbutton'>
              <p>Ready to watch? Enter your email to create or restart your membership.</p>
              <form onSubmit={handleSubmit}>
                  <input
                    className="emilph"
                    type="text"
                    value={emailOrPhone}
                    onChange={(e) => setEmailOrPhone(e.target.value)}
                    placeholder="Enter your email or phone number"
                    style={{ borderColor: errors.emailOrPhone ? 'red' : '#ccc' }}
                  />
                  <button type="submit" className="getstarted">Get Started</button>
                  {errors.emailOrPhone && <div className="error" style={{ color: 'red', marginTop: '5px' }}>{errors.emailOrPhone}</div>}
              </form>
      </div>
      <Footer/>
    </div>
  );
}
