import React from "react";
import "../index.css";
import "../Styles/About/About.css";
import { Download } from "react-feather";

function AboutDownload() {
  return (
    <div className="about__buttons">
      <a
        download="../assets/AboutImg.jpg"
        href="#home"
        className="button button--flex"
      >
        Download CV <Download color="#ffffff" size="20" />
      </a>
    </div>
  );
}

export default AboutDownload;
