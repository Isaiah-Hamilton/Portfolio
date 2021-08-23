import React from "react";
import "../../index.css";
import "../../Styles/Contact/Contact.css";
import ContactButton from "../../Components/ContactButton";
import { GitHub, Twitter, Linkedin, Instagram } from "react-feather";

function Contact() {
  return (
    <>
      <section className="contact section" id="contact">
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact__description">
          I'm currently looking for internship Software Engineering
          opportunities! If you know of any positions available, if you have any
          questions, or if you want to get in touch, please email me down below.
        </p>
        <ContactButton />
        <div className="contact__socials">
          <ul className="contact__socials__list clearfix">
            <li className="contact__socials__icons">
              <a
                href="https://github.com/Isaiah-Hamilton/"
                rel="noreferrer"
                target="_blank"
              >
                <GitHub className="contact__social__icon" size="25" />
              </a>
            </li>
            <li className="contact__socials__icons">
              <a
                href="https://www.linkedin.com/in/isaiah-hamilton-093361209/"
                rel="noreferrer"
                target="_blank"
              >
                <Linkedin className="contact__social__icon" size="25" />
              </a>
            </li>
            <li className="contact__socials__icons">
              <a href="https://twitter.com/" rel="noreferrer" target="_blank">
                <Twitter className="contact__social__icon" size="25" />
              </a>
            </li>
            <li className="contact__socials__icons">
              <a
                href="https://www.instagram.com/isaiah7hamilton/"
                rel="noreferrer"
                target="_blank"
              >
                <Instagram className="contact__social__icon" size="25" />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Contact;
