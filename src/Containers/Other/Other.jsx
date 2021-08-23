import React from "react";
import "../../index.css";
import "../../Styles/Other/Other.css";
import { Folder, GitHub } from "react-feather";

function Big__Projects() {
  return (
    <>
      <section className="projects section" id="projects">
        <h1 className="section-title" data-sr-id="57">
          Noteworthy Projects
        </h1>
        <a className="inline-link archive-link" href="/archive" data-sr-id="58">
          view the archive
        </a>
        <ul className="projects-grid">
          <li
            className="projects__StyledProject-sc-1v1fime-1 dIMCBf"
            data-sr-id="59"
          >
            <div className="project-inner">
              <header>
                <div className="project-top">
                  <div className="folder">
                    <Folder size="24" color="#6e57e0" />
                  </div>
                  <div className="project-links">
                    <a
                      href="https://github.com/Isaiah-Hamilton/Barcode-Generator"
                      aria-label="GitHub Link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GitHub className="github" size="24" color="#6e57e0" />
                    </a>
                  </div>
                </div>
                <h3 className="project-title">
                  <a
                    href="https://github.com/Isaiah-Hamilton/Barcode-Generator"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Barcode Generator
                  </a>
                </h3>
                <div className="project-description">
                  <p>A very simple barcode generator built with python.</p>
                </div>
              </header>
              <footer>
                <ul className="project-tech-list">
                  <li>Python</li>
                </ul>
              </footer>
            </div>
          </li>
          <li
            className="projects__StyledProject-sc-1v1fime-1 dIMCBf"
            data-sr-id="60"
          >
            <div className="project-inner">
              <header>
                <div className="project-top">
                  <div className="folder">
                    <Folder size="24" color="#6e57e0" />
                  </div>
                  <div className="project-links">
                    <a
                      href="https://github.com/Isaiah-Hamilton/python-QR-codes"
                      aria-label="GitHub Link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GitHub className="github" size="24" color="#6e57e0" />
                    </a>
                  </div>
                </div>
                <h3 className="project-title">
                  <a
                    href="https://github.com/Isaiah-Hamilton/python-QR-codes"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    QR code generator
                  </a>
                </h3>
                <div className="project-description">
                  <p>A very simple QR code generator built with Python.</p>
                </div>
              </header>
              <footer>
                <ul className="project-tech-list">
                  <li>Python</li>
                </ul>
              </footer>
            </div>
          </li>
          <li
            className="projects__StyledProject-sc-1v1fime-1 dIMCBf"
            data-sr-id="61"
          >
            <div className="project-inner">
              <header>
                <div className="project-top">
                  <div className="folder">
                    <Folder size="24" color="#6e57e0" />
                  </div>
                  <div className="project-links">
                    <a
                      href="https://github.com/Isaiah-Hamilton/python-QR-codes"
                      aria-label="GitHub Link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GitHub className="github" size="24" color="#6e57e0" />
                    </a>
                  </div>
                </div>
                <h3 className="project-title">
                  <a
                    href="https://github.com/Isaiah-Hamilton/viewbot"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Bot
                  </a>
                </h3>
                <div className="project-description">
                  <p>
                    A simple Youtube view bot built with Python and Selenium.
                    This project was for educational purpose and was never
                    intended to be used on real videos.
                  </p>
                </div>
              </header>
              <footer>
                <ul className="project-tech-list">
                  <li>Python</li>
                  <li>Selenium</li>
                </ul>
              </footer>
            </div>
          </li>
        </ul>
        <button className="more-button">Show More</button>
      </section>
    </>
  );
}

export default Big__Projects;
