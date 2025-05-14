import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function DetailsPage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return <div>Invalid navigation.</div>;
  }

  const { clickedShow, category } = state;

  const scrollLeft = () => {
    const container = document.getElementById("related-shows-container");
    container.scrollLeft -= 1000;
  };

  const scrollRight = () => {
    const container = document.getElementById("related-shows-container");
    container.scrollLeft += 1000;
  };

  return (
    <div className="details-container">
      <h1 className="details-title">{clickedShow.title}</h1>

      <div className="main-image">
        {clickedShow.video ? (
          <video width="100%" controls autoPlay muted>
            <source src={clickedShow.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img src={clickedShow.image} alt={clickedShow.title} />
        )}
      </div>

      <h2 className="section-title">More from "{category.title}"</h2>

      <div className="scroll-container">
        <button className="scroll-btn left" onClick={scrollLeft}>←</button>

        <div id="related-shows-container" className="related-shows">
          {category.shows
            .filter((show) => show.title !== clickedShow.title)
            .map((show, index) => (
              <div
                key={index}
                className="related-card"
                onClick={() =>
                  navigate('/details', {
                    state: {
                      clickedShow: show,
                      category: category,
                    },
                  })
                }
                style={{ cursor: 'pointer' }}
              >
                <img src={show.image} alt={show.title} />
                <p>{show.title}</p>
              </div>
            ))}
        </div>

        <button className="scroll-btn right" onClick={scrollRight}>→</button>
      </div>

      <button className="back-btn" onClick={() => navigate('/header')}>
        ← Back to Home
      </button>
    </div>
  );
}
