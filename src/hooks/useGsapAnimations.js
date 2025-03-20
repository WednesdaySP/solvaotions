import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const useGsapAnimations = () => {
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Log GSAP version (optional)
    console.log('GSAP loaded:', gsap.version);

    // Select all elements to animate
    const elements = gsap.utils.toArray(
      '.hero-content > *, .container-service > *, .about > *, .projects > *, .faq > *, .contact > *'
    );

    // Apply animations to each element
    elements.forEach((el, i) => {
      console.log('Animating:', el);

      // Hide the element initially
      gsap.set(el, { opacity: 0, y: 50 });

      // Animate the element when it comes into view
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: i * 0.1,
        scrollTrigger: {
          trigger: el.parentElement,
          start: 'top 90%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
          // markers: true // Uncomment for debugging
        },
      });
    });

    // Cleanup ScrollTrigger instances on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
};

export default useGsapAnimations;
// This hook uses the useEffect hook to run the GSAP animations when the component mounts. It also cleans up the ScrollTrigger instances when the component unmounts to avoid memory leaks.