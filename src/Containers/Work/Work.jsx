import React from "react";
import "../../index.css";
import "../../Styles/Work/Work.css";
import FireFoxNewTab from "../../assets/FireFoxNewTab.png";
import Portfolio from "../../assets/Portfolio.png";

function Work() {
  return (
    <>
      <section className="work section" id="work">
        <h2 className="section-title">Some Things I’ve Built</h2>
        <div className="work__container container">
          <div className="work-cards-div">
            <div className="work-card">
              <div className="work-banner-1">
                <a
                  href="https://github.com/Isaiah-Hamilton/FireFox-New-Tab-Clone"
                  rel="noreferrer"
                  target="_blank"
                  className="img-link"
                >
                  <img
                    src={FireFoxNewTab}
                    alt="a representation of my FireFox New Tab Clone projects."
                  />
                </a>
              </div>
              <div className="work-text-details">
                <h5 className="work-text-role">FireFox New Tab Clone</h5>
                <p className="subTitle work-text-desc">
                  A clone of the New Tab page in Firefox. This clone was made
                  with React and Rest API's.
                </p>
              </div>
            </div>
          </div>
          <div className="work-cards-div">
            <div className="work-card">
              <div className="work-banner-2">
                <a
                  href="https://github.com/Isaiah-Hamilton/portfolio"
                  rel="noreferrer"
                  target="_blank"
                  className="img-link"
                >
                  <img
                    src={Portfolio}
                    alt="a representation of my FireFox New Tab Clone projects."
                  />
                </a>
              </div>
              <div className="work-text-details">
                <h5 className="work-text-role">Portfolio</h5>
                <p className="subTitle work-text-desc">
                  A portfolio to show my projects and my work. This portfolio
                  was made with React.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Work;
