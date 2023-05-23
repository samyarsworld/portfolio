import React, { useState, useRef } from "react";
import MapChart from "./Map";

import emailjs from "@emailjs/browser";

const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(process.env.REACT_APP_PUBLIC_KEY);

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_KEY,
        process.env.REACT_APP_TEMPLATE_KEY,
        ref.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      )
      .finally(() => ref.current.reset());
  };

  return (
    <div className="contact-main">
      <div className="contact-left">
        <form className="contact-left-form" ref={ref} onSubmit={handleSubmit}>
          <h1 className="contact-left-title">Contact Samyar</h1>
          <input
            name="name"
            type="text"
            className="contact-left-input"
            placeholder="Name"></input>
          <input
            name="email"
            type="email"
            className="contact-left-input"
            placeholder="Email"></input>

          <textarea
            className="contact-left-textarea"
            placeholder="Write.."
            name="message"
            cols="30"
            rows="10"></textarea>
          <button type="submit" className="contact-left-btn">
            Submit
          </button>
        </form>
      </div>
      <div className="contact-right">
        <MapChart className="contact-right-map" />
      </div>
    </div>
  );
};

export default Contact;
