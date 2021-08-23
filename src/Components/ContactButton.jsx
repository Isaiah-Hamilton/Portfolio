import React from "react";
import "../index.css";
import "../Styles/Contact/Contact.css";
import { Send } from "react-feather";

function ContactButton() {
  return (
    <div className="contact__button">
      <a
        href="mailto:isaiah7hamilton@gmail.com"
        className="button button--flex"
      >
        Contact Me <Send className="button__icon" color="#ffffff" size="20" />
      </a>
    </div>
  );
}

export default ContactButton;
