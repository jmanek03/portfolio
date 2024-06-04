import React from 'react'
import './Navbar.css';
export default function Navbar() {
  return (
    <>
    <nav className="hide-on-small-only">
    <ul className="side-nav fixed section table-of-contents">
      <li className="logo">
        <a
          id="logo-container"
          aria-label="Navigate to the beginning of the page"
          href="#intro"
          className="brand-logo"
        >
          <h1>
            Jay Manek<span className="white-text light">Front End Developer</span>
          </h1>
        </a>
      </li>
      <li className="bold">
        <a
          aria-label="Navigate to the About section"
          href="#about"
          className="waves-effect waves-dark teal-text"
          ><i className="mdi-social-person small"></i><span>About</span></a>
      </li>
      <li className="bold">
        <a
          aria-label="Navigate to the Projects section"
          href="#projects"
          className="waves-effect waves-dark indigo-text"
          ><i className="mdi-av-web small"></i><span>Projects</span></a>
      </li>
      <li className="bold">
        <a
          aria-label="Navigate to the Skills section"
          href="#skills"
          className="waves-effect waves-dark purple-text"
          ><i className="mdi-av-equalizer small"></i><span>Skills</span></a>
      </li>
      <li className="bold">
        <a
          aria-label="Navigate to the Education section"
          href="#education"
          className="waves-effect waves-dark orange-text"
          ><i className="mdi-social-school small"></i><span>Education</span></a>
      </li>
      <li className="bold">
        <a
          aria-label="Navigate to the Contact section"
          href="#contact"
          className="waves-effect waves-dark brown-text"
          ><i className="mdi-content-mail small"></i><span>Contact</span></a>
      </li>
      <li className="bold">
        <a
          aria-label="Open Jay's resume in a new tab"
          href="https://drive.google.com/file/d/1Msgbr1lnMWr5eaNL4y195mk6d7JkdDsi/view?usp=drive_link"
          target="_blank"
          className="waves-effect waves-dark grey-text text-darken-3" rel="noreferrer">
            <i className="mdi-action-description small"></i><span>Resume</span></a>
      </li>
    </ul>
  </nav>
  </>
  )
}
