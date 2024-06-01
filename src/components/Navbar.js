import React from 'react'
import './Navbar.css';
export default function Navbar() {
  return (
    
    <nav class="hide-on-small-only">
    <ul class="side-nav fixed section table-of-contents">
      <li class="logo">
        <a
          id="logo-container"
          aria-label="Navigate to the beginning of the page"
          href="#intro"
          class="brand-logo"
        >
          <h1>
            Jay Manek<span class="white-text light">Front End Engineer</span>
          </h1>
        </a>
      </li>
      <li class="bold">
        <a
          aria-label="Navigate to the About section"
          href="#about"
          class="waves-effect waves-dark teal-text"
          ><i class="mdi-social-person small"></i><span>About</span></a
        >
      </li>
      <li class="bold">
        <a
          aria-label="Navigate to the Projects section"
          href="#projects"
          class="waves-effect waves-dark indigo-text"
          ><i class="mdi-av-web small"></i><span>Projects</span></a
        >
      </li>
      <li class="bold">
        <a
          aria-label="Navigate to the Skills section"
          href="#skills"
          class="waves-effect waves-dark purple-text"
          ><i class="mdi-av-equalizer small"></i><span>Skills</span></a
        >
      </li>
      <li class="bold">
        <a
          aria-label="Navigate to the Education section"
          href="#education"
          class="waves-effect waves-dark orange-text"
          ><i class="mdi-social-school small"></i><span>Education</span></a
        >
      </li>
      <li class="bold">
        <a
          aria-label="Navigate to the Contact section"
          href="#contact"
          class="waves-effect waves-dark brown-text"
          ><i class="mdi-content-mail small"></i><span>Contact</span></a
        >
      </li>
      <li class="bold">
        <a
          aria-label="Open Jay's resume in a new tab"
          href="https://drive.google.com/file/d/1Msgbr1lnMWr5eaNL4y195mk6d7JkdDsi/view?usp=drive_link"
          target="_blank"
          class="waves-effect waves-dark grey-text text-darken-3" rel="noreferrer">
            <i class="mdi-action-description small"></i><span>Resume</span></a
        >
      </li>
    </ul>
  </nav>
  )
}
