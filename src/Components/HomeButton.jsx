import React from "react";
import "../index.css";
import "../Styles/Home/Home.css";
import { Send } from "react-feather";

function homeButton() {
  return (
    <div className="home__button">
      <a
        href="mailto:isaiah7hamilton@gmail.com"
        className="button button--flex"
      >
        Contact Me <Send className="button__icon" color="#ffffff" size="20" />
      </a>
    </div>
  );
}

export default homeButton;
