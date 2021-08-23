import React from "react";
import "../../index.css";
import "../../Styles/Footer/Footer.css";
import { Linkedin, GitHub, Instagram, Code, Heart } from "react-feather";

function Footer() {
  return (
    <>
      <section className="footer section" id="footer">
        <div className="footer__bg">
          <div className="footer__container container grid">
            <div>
              <h1 className="footer__title">Isaiah Hamilton</h1>
              <span className="footer__subtitle">Frontend Developer</span>
            </div>

            <ul className="footer__links">
              <li>
                <a href="#about" className="footer__link">
                  About Me
                </a>
              </li>
              <li>
                <a href="#skills" className="footer__link">
                  Skills
                </a>
              </li>
              <li>
                <a href="#work" className="footer__link">
                  Work
                </a>
              </li>
              <li>
                <a href="#contact" className="footer__link">
                  Contact Me
                </a>
              </li>
            </ul>

            <div className="footer__socials">
              <div className="footer__socials-div">
                <a
                  href="https://www.linkedin.com/in/isaiah-hamilton-093361209/"
                  className="footer__social"
                  rel="noreferrer"
                  target="_blank"
                >
                  <Linkedin size="20" color="#fff" />
                </a>
              </div>
              <div className="footer__socials-div">
                <a
                  href="https://www.instagram.com/isaiah7hamilton/"
                  className="footer__social"
                  rel="noreferrer"
                  target="_blank"
                >
                  <Instagram size="20" color="#fff" />
                </a>
              </div>
              <div className="footer__socials-div">
                <a
                  href="https://github.com/Isaiah-Hamilton/"
                  className="footer__social"
                  rel="noreferrer"
                  target="_blank"
                >
                  <GitHub size="20" color="#fff" />
                </a>
              </div>
            </div>
          </div>
          <p className="footer__copy">
            <Code size="12" color="#fff" /> with{` `}
            <Heart size="12" color="#DD2E44" fill="#DD2E44" /> by Isaiah
            Hamilton
          </p>
        </div>
      </section>
    </>
  );
}

export default Footer;
