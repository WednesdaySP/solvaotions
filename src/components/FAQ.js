import React, { useState, useRef } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const answerRefs = useRef([]); // Create a ref for each answer container

  const handleQuestionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    { question: "What services do you offer?", answer: "End-to-end solutions in software, embedded firmware, electronics, and app development." },
    { question: "Can you develop a complete product?", answer: "Yes, from prototype to production, including design and integration." },
    { question: "Do you offer OEM products?", answer: "Yes, with customized solutions for specific needs." },
    { question: "Which industries do you serve?", answer: "IoT, automation, electronics, automotive, and more." },
    { question: "How can I collaborate with you?", answer: "Contact us via email or form to discuss your project." },
  ];

  return (
    <section className="faq" id="faq">
      <div className="wrapper">
        <h2>FAQs</h2>
        {faqData.map((faq, index) => (
          <div className="container" key={index}>
            <div
              className={`question ${activeIndex === index ? 'active' : ''}`}
              onClick={() => handleQuestionClick(index)}
            >
              {faq.question}
            </div>
            <div
              className="answercont"
              ref={(el) => (answerRefs.current[index] = el)} // Assign ref to each answer container
              style={{
                maxHeight: activeIndex === index ? `${answerRefs.current[index]?.scrollHeight}px` : 0,
              }}
            >
              <div className="answer">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;



// // FAQ.js
// import React, { useState } from 'react';
// import './FAQ.css';

// const FAQ = () => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const handleQuestionClick = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   const faqData = [
//     { question: "What services do you offer?", answer: "End-to-end solutions in software, embedded firmware, electronics, and app development." },
//     { question: "Can you develop a complete product?", answer: "Yes, from prototype to production, including design and integration." },
//     { question: "Do you offer OEM products?", answer: "Yes, with customized solutions for specific needs." },
//     { question: "Which industries do you serve?", answer: "IoT, automation, electronics, automotive, and more." },
//     { question: "How can I collaborate with you?", answer: "Contact us via email or form to discuss your project." },
//   ];

//   return (
//     <section className="faq" id="faq">
//       <div className="wrapper">
//         <h2>FAQs</h2>
//         {faqData.map((faq, index) => (
//           <div className="container" key={index}>
//             <div
//               className={`question ${activeIndex === index ? 'active' : ''}`}
//               onClick={() => handleQuestionClick(index)}
//             >
//               {faq.question}
//             </div>
//             <div
//               className="answercont"
//               style={{ maxHeight: activeIndex === index ? `${document.querySelector(`.question.active`)?.nextElementSibling.scrollHeight}px` : 0 }}
//             >
//               <div className="answer">{faq.answer}</div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default FAQ;

