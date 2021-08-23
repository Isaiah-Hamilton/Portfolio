import React from "react";
import "../../index.css";
import "../../Styles/Skills/Skills.css";
import Flutter from "../../assets/Flutter.svg";
import SkillsImg from "../../assets/skillsImg.svg";

function Skills() {
  return (
    <>
      <section className="skills section" id="skills">
        <h2 className="section-title">Skills</h2>
        <div className="skills__container container">
          <div className="skills__img">
            <img src={SkillsImg} alt="" />
          </div>
          <div className="software-skills-main-div">
            <ul className="dev-icons">
              <li className="software-skill-inline" name="html-5">
                <i className="fab fa-html5"></i>
                <p>html-5</p>
              </li>
              <li className="software-skill-inline" name="css3">
                <i className="fab fa-css3-alt"></i>
                <p>css3</p>
              </li>
              <li className="software-skill-inline" name="JavaScript">
                <i className="fab fa-js"></i>
                <p>JavaScript</p>
              </li>
              <li className="software-skill-inline" name="reactjs">
                <i className="fab fa-react"></i>
                <p>reactjs</p>
              </li>
              <li className="software-skill-inline" name="nodejs">
                <i className="fab fa-node"></i>
                <p>nodejs</p>
              </li>
              <li className="software-skill-inline" name="swift">
                <i className="fab fa-swift"></i>
                <p>swift</p>
              </li>
              <li className="software-skill-inline" name="swift">
                <img src={Flutter} alt="" />
                <p>Flutter</p>
              </li>
              <li className="software-skill-inline" name="npm">
                <i className="fab fa-npm"></i>
                <p>npm</p>
              </li>
              <li className="software-skill-inline" name="sql-database">
                <i className="fas fa-database"></i>
                <p>sql-database</p>
              </li>
              <li className="software-skill-inline" name="firebase">
                <i className="fas fa-fire"></i>
                <p>firebase</p>
              </li>
              <li className="software-skill-inline" name="python">
                <i className="fab fa-python"></i>
                <p>python</p>
              </li>
              <li className="software-skill-inline" name="python">
                <i className="fab fa-linux"></i>
                <p>linux</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
