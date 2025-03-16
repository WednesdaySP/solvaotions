import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section className="container-service" id="services">
      <h2>Our Services</h2>
      <section className="card__container">
        <div className="card__bx" style={{ '--clr': '#89ec5b' }}>
          <div className="card__data">
            <div className="card__icon"><i className="fas fa-microchip"></i></div>
            <div className="card__content">
              <h3>Embedded</h3>
              <p>Bridging hardware and software with precision for efficient solutions.</p>
            </div>
          </div>
        </div>
        <div className="card__bx" style={{ '--clr': '#eb5ae5' }}>
          <div className="card__data">
            <div className="card__icon"><i className="fa-solid fa-code"></i></div>
            <div className="card__content">
              <h3>Web Development</h3>
              <p>Responsive, scalable websites tailored to your needs.</p>
            </div>
          </div>
        </div>
        <div className="card__bx" style={{ '--clr': '#5b98eb' }}>
          <div className="card__data">
            <div className="card__icon"><i className="fas fa-mobile-alt"></i></div>
            <div className="card__content">
              <h3>App Development</h3>
              <p>High-performance, cross-platform mobile apps.</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Services;