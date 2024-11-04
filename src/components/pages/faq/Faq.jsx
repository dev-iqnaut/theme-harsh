import React, { useState } from "react";
import "./faq.css";
import faqImage from '../../../images/about-us.png'
import img from "../../../images/up.jpg"
import Back from "../../common/Back";

const FAQ = () => {
  const [faqOpen, setFaqOpen] = useState(null);
  const [benefitOpen, setBenefitOpen] = useState(null);

  const toggleFAQ = (index) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  const toggleBenefit = (index) => {
    setBenefitOpen(benefitOpen === index ? null : index);
  };

  const faqs = [
    { question: "What is your return policy?", answer: "Our return policy lasts 30 days..." },
    { question: "How do I track my order?", answer: "You can track your order by logging in..." },
    { question: "Can I change my shipping address?", answer: "Yes, you can change your shipping address..." },
  ];

  const benefits = [
    { question: "Why choose us?", answer: "We offer the best services..." },
    { question: "What are the payment methods?", answer: "We accept all major credit cards..." },
  ];

  return (
    <>
      <Back name="Pages" title="FAQ" cover={img} />
      <section className="faq-section">
        <div className="container">
          <div className="faq-left">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                  <div className="faq-question" onClick={() => toggleFAQ(index)}>
                    {faq.question}
                    <span>{faqOpen === index ? "-" : "+"}</span>
                  </div>
                  {faqOpen === index && <div className="faq-answer">{faq.answer}</div>}
                </div>
              ))}
            </div>

            <div className="faq-image-section">
              <img src={faqImage} alt="FAQ" />
              <div className="faq-bubble">
                <p>Have more questions? Feel free to ask us!</p>
              </div>
            </div>
          </div>

          <div className="faq-right">
            <h2>Ask Your Question</h2>
            <form className="faq-form">
              <label>Name:</label>
              <input type="text" placeholder="Enter your name" />
              <label>Email:</label>
              <input type="email" placeholder="Enter your email" />
              <label>Question:</label>
              <textarea placeholder="Enter your question"></textarea>
              <button type="submit">Submit</button>
            </form>

            <h2>Benefits & What We Do</h2>
            <div className="benefits-list">
              {benefits.map((benefit, index) => (
                <div key={index} className="benefit-item">
                  <div className="benefit-question" onClick={() => toggleBenefit(index)}>
                    {benefit.question}
                    <span>{benefitOpen === index ? "-" : "+"}</span>
                  </div>
                  {benefitOpen === index && <div className="benefit-answer">{benefit.answer}</div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
