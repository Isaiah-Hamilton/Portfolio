import React from "react";
import "../index.css";
import "../Styles/Home/Home.css";
import { ArrowDown } from "react-feather";

function homeButton() {
  return (
    <div className="home__scroll">
      <a href="#about" className="home__scroll-button button--flex">
        <i className="fas fa-mouse home__scroll-mouse"></i>
        <span className="home__scroll-name"> Scroll down </span>
        <ArrowDown size="20" color="#6e57e0" />
      </a>
    </div>
  );
}

export default homeButton;
