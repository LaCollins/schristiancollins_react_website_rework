import React, { useState } from "react";
import './Contact.css';

const FORM_ENDPOINT = "https://public.herotofu.com/v1/3436a8a0-7098-11ec-b2d5-af79f33d926c";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <div className="Home">
        <h2>Thank you!</h2>
        <div>I'll be in touch soon.</div>
      </div>
    );
  }

  return (
    <div className="Home">
        <h1>Contact Me</h1>
        <p>If you have any questions, please feel free to reach out to me. I will respond as soon as possible.</p>
        <form
        action={FORM_ENDPOINT}
        onSubmit={handleSubmit}
        method="POST"
        target="_blank"
        >
        <div className="form-group row">
            <label for="name" class="col-sm-2 col-form-label">Your Name</label>
            <input id="name" className="form-control col-sm-8" type="text" placeholder="Your name" name="name" required />
        </div>
        <div className="form-group row">
            <label class="col-sm-2 col-form-label" for="email">Email</label>
            <input id="email" className="form-control col-sm-8" type="email" placeholder="Email" name="email" required />
        </div>
        <div className="form-group row">
            <label for="message" class="col-sm-2 col-form-label">Message</label>
            <textarea id="message" className="form-control col-sm-8" placeholder="Your message" name="message" required />
        </div>
        <div>
            <button className="submit-btn" type="submit"> Send a message </button>
        </div>
        </form>
    </div>
  );
};

export default ContactForm;