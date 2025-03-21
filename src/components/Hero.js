// import React from 'react';
// import './Hero.css';

// const Hero = () => {
//   return (
//     <section id="home" className="hero">
//       <image src='../assets/images/bg4.webp' className='bg-image' />
//       <div className="hero-content">
//         <h1>Innovative Tech Solutions</h1>
//         <p>We bring your ideas to life with cutting-edge technology.</p>
//       </div>
//     </section>
//   );
// };

// export default Hero;


import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = require('../assets/images/bg4.webp'); // Ensure the path is correct
    img.onload = () => setImageLoaded(true);
  }, []);

  return (
    <section id="home" className={`hero ${imageLoaded ? 'loaded' : ''}`}>
      <div className="hero-content">
        <h1>Innovative Tech Solutions</h1>
        <p>We bring your ideas to life with cutting-edge technology.</p>
      </div>
    </section>
  );
};

export default Hero;
