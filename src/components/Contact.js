import React from 'react';
import './Projects.css';
import './About.css';
import './Intro.css';
import './Skills.css';
import './Education.css';
import './Contact.css';

export default function Contact() {
  return (
    <>
      <section id="contact" class="section scrollspy full-height">
    <h3 class="page-title white-text teal">Contact</h3>
    <div class="container">
      <p>
        <a
          aria-label="Email Andrew"
          href="mailto:manekj27@gmail.com"
          data-position="top"
          data-tooltip="Email Andrew"
          class="btn-floating btn-large waves-effect waves-light brown tooltipped"
          >
            <i class="fa fa-envelope"></i>
            <a
            aria-label="Email Andrew"
            href="mailto:manekj27@gmail.com"
            class="hoverline">
                manekj27@gmail.com
            </a>
        </a>
      </p>
      <p>
        <a
          aria-label="View Andrew on GitHub"
          href="https://github.com/jmanek03"
          target="_blank"
          data-position="top"
          data-tooltip="View Andrew on GitHub"
          class="btn-floating btn-large waves-effect waves-light brown tooltipped"
          rel="noreferrer">
            <i class="fa fa-github"></i>
            <a
            aria-label="Andrew on Github"
            href="https://github.com/jmanek03"
            class="hoverline"
            >
                github.com/jmanek03
            </a>
        </a>
      </p>
      <p>
        <a
          aria-label="View Andrew on LinkedIn"
          href="https://www.linkedin.com/in/jay-manek"
          target="_blank"
          data-position="top"
          data-tooltip="View Andrew on LinkedIn"
          class="btn-floating btn-large waves-effect waves-light brown tooltipped"
          rel="noreferrer">
            <i class="fa fa-linkedin"></i>
          <a
            aria-label="Andrew on LinkedIn"
            href="https://www.linkedin.com/in/jay-manek"
            class="hoverline">
                linkedin.com/in/jay-manek
          </a>
        </a>
      </p>
    </div>
  </section>
    </>
  )
}
