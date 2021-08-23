import React, { useState } from 'react';
import './Styles/Navbar/Navbar.css';
import HomePage from './Containers/Home/Home';
import AboutPage from './Containers/About/About';
import SkillsPage from './Containers/Skills/Skills';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyle } from './Themes/Themes';
import WorkPage from './Containers/Work/Work';
import OtherPage from  './Containers/Other/Other';
import ContactPage from './Containers/Contact/Contact';
import FooterPage from './Containers/Footer/Footer';

function App() {
  const [theme, setTheme] = useState('light');

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
    theme === 'light' ? document.getElementById('themeIcon').className = 'far fa-lightbulb' : document.getElementById('themeIcon').className = 'far fa-moon';
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <div className="App">
        <header className="app-navbar">
          <div className="wrapper site-header__wrapper">
            <a href="#home" className="brand">
              Isaiah
            </a>
            <nav className="nav">
              <ul className="nav__wrapper">
                <li className="nav__item">
                  <a href="#about">About</a>
                </li>
                <li className="nav__item">
                  <a href="#skills">Skills</a>
                </li>
                <li className="nav__item">
                  <a href="#work">Work</a>
                </li>
                <li className="nav__item">
                  <a href="#projects">Archive</a>
                </li>
                <li className="nav__item">
                  <a href="#contact">Contact</a>
                </li>
                <li className="nav__item">
                  <button id='theme-button' onClick={() => themeToggler()}>
                    <i id='themeIcon' className='far fa-moon'></i>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <HomePage />
        <AboutPage />
        <SkillsPage />
        <WorkPage />
        <OtherPage />
        <ContactPage />
        <div className="spacer layer1"></div>
        <FooterPage />
      </div>
    </ThemeProvider>
  );
}

export default App;