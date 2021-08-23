import React from "react";
import "../../index.css";
import "../../Styles/Home/Home.css";
import HomeButton from "../../Components/HomeButton";
import HomeScroll from "../../Components/HomeScroll";
import Headshot from "../../assets/headshot.png";
import { Linkedin, GitHub, Instagram } from "react-feather";

function Home() {
  return (
    <>
      <section className="home section" id="home">
        <div className="home__container container grid">
          <div className="home__content grid">
            <div className="home__social">
              <a
                href="https://www.linkedin.com/in/isaiah-hamilton-093361209/"
                rel="noreferrer"
                target="_blank"
                className="home__social-icon"
              >
                <Linkedin size="20" color="#6e57e0" />
              </a>
              <a
                href="https://www.instagram.com/isaiah7hamilton/"
                rel="noreferrer"
                target="_blank"
                className="home__social-icon"
              >
                <Instagram size="20" color="#6e57e0" />
              </a>
              <a
                href="https://github.com/Isaiah-Hamilton/"
                rel="noreferrer"
                target="_blank"
                className="home__social-icon"
              >
                <GitHub size="20" color="#6e57e0" />
              </a>
            </div>

            <div className="home__img">
              <svg
                className="home__blob"
                viewBox="0 0 200 187"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask id="mask0" mask-type="alpha">
                  <path
                    d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
        130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
        97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
        0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                  />
                </mask>
                <g mask="url(#mask0)">
                  <path
                    d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
        165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
        129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
        -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                  />
                  <image
                    className="home__blob-img"
                    x="10"
                    y="10"
                    href={Headshot}
                  />
                </g>
              </svg>
            </div>

            <div className="home__data">
              <h1 className="home__title section-title">Hi, I'm Isaiah</h1>
              <h3 className="home__subtitle section-subtitle">
                Frontend Developer
              </h3>
              <p className="home__description">
                High level experience in web design and development knowledge,
                producing quality work.
              </p>
              <HomeButton />
            </div>
          </div>
          <HomeScroll />
        </div>
      </section>
    </>
  );
}

export default Home;
