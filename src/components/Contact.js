// Contact.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.init('o6FCj7eybSWlzKniL');
    emailjs.send('service_gy57yxh', 'template_1hohhlv', formData)
      .then(
        () => {
          Toastify({
            text: 'Message sent successfully!',
            duration: 3000,
            gravity: 'top',
            position: 'center',
            backgroundColor: '#000',
          }).showToast();
        },
        () => {
          Toastify({
            text: 'Failed to send message. Try again later.',
            duration: 3000,
            gravity: 'top',
            position: 'center',
            backgroundColor: '#f44336',
          }).showToast();
        }
      );
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Us</h2>
      <form id="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          id="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          id="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          id="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button className="glow-on-hover" type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;

// import React from 'react';
// import './Contact.css';

// const Contact = () => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add form submission logic here
//   };

//   return (
//     <section id="contact" className="contact">
//       <h2>Contact Us</h2>
//       <form id="contact-form" onSubmit={handleSubmit}>
//         <input type="text" id="name" placeholder="Your Name" required />
//         <input type="email" id="email" placeholder="Your Email" required />
//         <textarea id="message" placeholder="Your Message" required></textarea>
//         <button className="glow-on-hover" type="submit">Send Message</button>
//       </form>
//     </section>
//   );
// };

// export default Contact;