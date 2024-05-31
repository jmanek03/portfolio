import React from 'react'
import './Navbar.css';
export default function Navbar() {
  return (
        
        <nav class="hide-on-small-only">
            <ul class="side-nav fixed table-of-contents">
                <li class="logo">
                    <a id="logo-container" aria-label="Navigate to the beginning of the page" href="#intro" class="brand-logo teal-text active">
                    <h1>
                        Jay Manek
                        <span class="brown-text light">Front End Developer</span>
                    </h1>
                    </a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#skills">Skills</a>
                </li>
                <li>
                    <a href="#education">Education</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
                <li>
                    <a href="#resume">Resume</a>
                </li>
            </ul>
        </nav>

  )
}
