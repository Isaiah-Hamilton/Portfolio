import React from "react";
import "../../index.css";
import "../../Styles/About/About.css";
import AboutDownload from "../../Components/AboutDownload";
import ABoutImg from "../../assets/AboutImg.jpg";

function About() {
  return (
    <>
      <section className="about section" id="about">
        <h2 className="section-title">About Me</h2>

        <div className="about__container container grid">
          <img
            src={ABoutImg}
            alt="An image of Isaiah Hamilton on his computer looking up."
            className="about__img"
          />

          <div className="about__data">
            <p className="about__description">
              Web developer, with extensive knowledge and years of experience,
              working in web technologies and UI / UX design, delivering quality
              work.
            </p>
            <div className="about__info">
              <div>
                <span className="about__info-title">4</span>
                <span className="about__info-name">
                  Years <br /> experience
                </span>
              </div>

              <div>
                <span className="about__info-title">7</span>
                <span className="about__info-name">
                  Completed <br /> project
                </span>
              </div>

              <div>
                <span className="about__info-title">0</span>
                <span className="about__info-name">
                  Companies <br /> worked
                </span>
              </div>
            </div>

            <AboutDownload />
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
