import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Projects from './components/Projects';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import QuickAccess from './components/QuickAccess';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import useGsapAnimations from './hooks/useGsapAnimations';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS

function App() {
  useGsapAnimations();//GSAP Animations hook for all components
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Projects />
      <FAQ />
      <Contact />
      <QuickAccess />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;