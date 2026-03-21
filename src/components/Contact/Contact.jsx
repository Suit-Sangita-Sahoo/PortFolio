import React from "react";
import "./Contact.css";
import { FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  const contactInfo = [
    { icon: <FaEnvelope />, label: "Email:", value: "Suitsangitasahoo@gmail.com" },
    { icon: <FaPhone />, label: "Tel:", value: "+91 7681027767" },
  ];

  return (
    <div id="contact" className="contact-container">
      
      {/* 🔥 Heading */}
      <h2 className="title">Get in Touch</h2>
      <p className="subtitle">
        Do you have a project in your mind? Contact me here 🚀
      </p>

      <div className="contact-content">

        {/* 🔹 LEFT SIDE */}
        <div className="contact-info">
          <h3>Find Me ↩</h3>
          {contactInfo.map((item, index) => (
            <p key={index} className="info-item">
              <span className="icon">{item.icon}</span>
              <span>
                <b>{item.label}</b> {item.value}
              </span>
            </p>
          ))}
        </div>

        {/* 🔹 FORM */}
        <form className="contact-form">
          <div className="form-row">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
          </div>

          <textarea
            id="text"
            placeholder="Your Message..."
            rows="5"
            required
          ></textarea>

          <button type="submit" className="send-btn">
            Send ✈
          </button>
        </form>

      </div>
    </div>
  );
};

export default Contact;