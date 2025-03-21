import React, { useEffect, useRef } from 'react';
import './Services.css';

const Services = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    // Copy cardRefs.current to a local variable inside the effect
    const cards = cardRefs.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('auto-hover');
          } else {
            entry.target.classList.remove('auto-hover');
          }
        });
      },
      {
        threshold: 0.7, // Trigger when 70% of the card is visible
        rootMargin: '0px', // No extra margin
      }
    );

    cards.forEach((card) => {
      if (card) observer.observe(card);
    });

    // local 'cards' variable in the cleanup
    return () => {
      cards.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []); // Empty dependency array is fine since we don’t need to re-run on ref changes

  return (
    <section className="container-service" id="services">
      <h2>Our Services</h2>
      <section className="card__container">
        <div
          className="card__bx"
          style={{ '--clr': '#89ec5b' }}
          ref={(el) => (cardRefs.current[0] = el)}
        >
          <div className="card__data">
            <div className="card__icon"><i className="fas fa-microchip"></i></div>
            <div className="card__content">
              <h3>Embedded</h3>
              <p>Bridging hardware and software with precision for efficient solutions.</p>
            </div>
          </div>
        </div>
        <div
          className="card__bx"
          style={{ '--clr': '#eb5ae5' }}
          ref={(el) => (cardRefs.current[1] = el)}
        >
          <div className="card__data">
            <div className="card__icon"><i className="fa-solid fa-code"></i></div>
            <div className="card__content">
              <h3>Web Development</h3>
              <p>Responsive, scalable websites tailored to your needs.</p>
            </div>
          </div>
        </div>
        <div
          className="card__bx"
          style={{ '--clr': '#5b98eb' }}
          ref={(el) => (cardRefs.current[2] = el)}
        >
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


// import React, { useEffect, useRef } from 'react';
// import './Services.css';

// const Services = () => {
//   const cardRefs = useRef([]);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add('auto-hover');
//           } else {
//             entry.target.classList.remove('auto-hover');
//           }
//         });
//       },
//       {
//         threshold: 0.7, // Trigger when 70% of the card is visible
//         rootMargin: '0px', // No extra margin
//       }
//     );

//     cardRefs.current.forEach((card) => {
//       if (card) observer.observe(card);
//     });

//     return () => {
//       cardRefs.current.forEach((card) => {
//         if (card) observer.unobserve(card);
//       });
//     };
//   }, []);

//   return (
//     <section className="container-service" id="services">
//       <h2>Our Services</h2>
//       <section className="card__container">
//         <div
//           className="card__bx"
//           style={{ '--clr': '#89ec5b' }}
//           ref={(el) => (cardRefs.current[0] = el)}
//         >
//           <div className="card__data">
//             <div className="card__icon"><i className="fas fa-microchip"></i></div>
//             <div className="card__content">
//               <h3>Embedded</h3>
//               <p>Bridging hardware and software with precision for efficient solutions.</p>
//             </div>
//           </div>
//         </div>
//         <div
//           className="card__bx"
//           style={{ '--clr': '#eb5ae5' }}
//           ref={(el) => (cardRefs.current[1] = el)}
//         >
//           <div className="card__data">
//             <div className="card__icon"><i className="fa-solid fa-code"></i></div>
//             <div className="card__content">
//               <h3>Web Development</h3>
//               <p>Responsive, scalable websites tailored to your needs.</p>
//             </div>
//           </div>
//         </div>
//         <div
//           className="card__bx"
//           style={{ '--clr': '#5b98eb' }}
//           ref={(el) => (cardRefs.current[2] = el)}
//         >
//           <div className="card__data">
//             <div className="card__icon"><i className="fas fa-mobile-alt"></i></div>
//             <div className="card__content">
//               <h3>App Development</h3>
//               <p>High-performance, cross-platform mobile apps.</p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </section>
//   );
// };

// export default Services;



// import React from 'react';
// import './Services.css';

// const Services = () => {
//   return (
//     <section className="container-service" id="services">
//       <h2>Our Services</h2>
//       <section className="card__container">
//         <div className="card__bx" style={{ '--clr': '#89ec5b' }}>
//           <div className="card__data">
//             <div className="card__icon"><i className="fas fa-microchip"></i></div>
//             <div className="card__content">
//               <h3>Embedded</h3>
//               <p>Bridging hardware and software with precision for efficient solutions.</p>
//             </div>
//           </div>
//         </div>
//         <div className="card__bx" style={{ '--clr': '#eb5ae5' }}>
//           <div className="card__data">
//             <div className="card__icon"><i className="fa-solid fa-code"></i></div>
//             <div className="card__content">
//               <h3>Web Development</h3>
//               <p>Responsive, scalable websites tailored to your needs.</p>
//             </div>
//           </div>
//         </div>
//         <div className="card__bx" style={{ '--clr': '#5b98eb' }}>
//           <div className="card__data">
//             <div className="card__icon"><i className="fas fa-mobile-alt"></i></div>
//             <div className="card__content">
//               <h3>App Development</h3>
//               <p>High-performance, cross-platform mobile apps.</p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </section>
//   );
// };

// export default Services;