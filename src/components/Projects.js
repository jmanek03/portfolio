import React from 'react'
import './Projects.css';
import './About.css';
import './Intro.css'
export default function Projects() {
  return (
    <div>
    <section id="projects" className="section scrollspy">
    <h3 className="page-title white-text teal">Projects</h3>
    <div className="container">
      <div className="row">
        {/* Math-Training-Game */}
        <div className="col s8 m6 l4">
          <div className="card medium">
            <div className="card-image waves-effect waves-block waves-light">
              <img
                alt="Screenshot of Interpol8r web app"
                src="/assets/img/interpol8r.jpg"
                className="activator"
              />
            </div>
            <div className="card-content">
              <span className="card-title activator teal-text hoverline"
                >Math-Training-Game<i className="mdi-navigation-more-vert right"></i
              ></span>
              <p>
                Experimental web app with homemade recursive string
                interpolation.
              </p>
            </div>
            <div className="card-reveal">
              <span className="card-title brown-text"
                >Accomplishments<i className="mdi-navigation-close right"></i
              ></span>
              <ul>
                <li><strong>Ruby on Rails</strong> backend</li>
                <li><strong>Bulma CSS</strong> frontend</li>
                <li>String interpolation via <strong>recursion</strong></li>
                <li><strong>Dependency free</strong> JS config</li>
              </ul>
              <div className="card-action">
                <a
                  aria-label="Visit the GitHub repo for Interpol8r project"
                  href="https://github.com/andrewborstein/interpol8r"
                  target="_blank"
                  data-position="top"
                  data-tooltip="View Source"
                  className="btn-floating btn-large waves-effect waves-light brown tooltipped"
                  rel="noreferrer"
                  ><i className="fa fa-github"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
        {/* TextUtils */}
        <div className="col s12 m6 l4">
          <div className="card medium">
            <div className="card-image waves-effect waves-block waves-light">
              <img
                alt="Screenshot of BlogSpire web app"
                src="/assets/img/blogspire.jpg"
                className="activator"
              />
            </div>
            <div className="card-content">
              <span className="card-title activator teal-text hoverline"
                >TextUtils<i className="mdi-navigation-more-vert right"></i
              ></span>
              <p>
                Blogging web app created for the Engineering team at
                WeSpire.
              </p>
            </div>
            <div className="card-reveal">
              <span className="card-title brown-text"
                >Accomplishments<i className="mdi-navigation-close right"></i
              ></span>
              <ul>
                <li><strong>Ruby on Rails</strong> backend</li>
                <li><strong>Materialize CSS</strong> frontend</li>
                <li>User <strong>authentication</strong> via Devise</li>
                <li>Implemented <strong>liking functionality</strong></li>
                <li><strong>Client-side rendering</strong> via AJAX</li>
              </ul>
              <div className="card-action">
                <a
                  aria-label="Visit the GitHub repo for BlogSpire project"
                  href="https://github.com/andrewborstein/blogspire"
                  target="_blank"
                  data-position="top"
                  data-tooltip="View Source"
                  className="btn-floating btn-large waves-effect waves-light brown tooltipped"
                  rel="noreferrer"
                  ><i className="fa fa-github"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
        {/* NewsApp */}
        <div className="col s12 m6 l4">
          <div className="card medium">
            <div className="card-image waves-effect waves-block waves-light">
              <img
                alt="Code Island logo"
                src="/assets/img/code-island.jpg"
                className="activator"
              />
            </div>
            <div className="card-content">
              <span className="card-title activator teal-text hoverline"
                >NewsApp<i className="mdi-navigation-more-vert right"></i
              ></span>
              <p>
                Online headquarters for the local Code for America brigade
                in Rhode Island.
              </p>
            </div>
            <div className="card-reveal">
              <span className="card-title brown-text"
                >Accomplishments<i className="mdi-navigation-close right"></i
              ></span>
              <ul>
                <li>
                  Integrated “Next Meeting” via <strong>Meetup API</strong>
                </li>
                <li>
                  Developed <strong>CSS and JS</strong> responsive menu
                </li>
                <li>Created member list via <strong>GitHub API</strong></li>
                <li>Refreshed branding and layout</li>
                <li>
                  Refactored all existing code (<strong>Jekyll</strong>)
                </li>
              </ul>
              <div className="card-action">
                <a
                  aria-label="Visit the GitHub repo for Code Island project"
                  href="http://github.com/andrewborstein/code-island.org"
                  target="_blank"
                  data-position="top"
                  data-tooltip="View Source"
                  className="btn-floating btn-large waves-effect waves-light brown tooltipped"
                  rel="noreferrer"
                  ><i className="fa fa-github"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
        {/* Remuneration Website */}
        <div className="col s12 m6 l4">
          <div className="card medium">
            <div className="card-image waves-effect waves-block waves-light">
              <img
                alt="Zach Morris from Saved by the Bell, on his clunky cell phone"
                src="/assets/img/saved-by-the-text.jpg"
                className="activator"
              />
            </div>
            <div className="card-content">
              <span className="card-title activator teal-text hoverline"
                >ERMS<i
                  className="mdi-navigation-more-vert right"
                ></i
              ></span>
              <p>
                Fun, TV nostalgia-themed app that sends an MMS to a user's
                phone number.
              </p>
            </div>
            <div className="card-reveal">
              <span className="card-title brown-text"
                >Accomplishments<i className="mdi-navigation-close right"></i
              ></span>
              <ul>
                <li>Built with Ruby on <strong>Rails</strong></li>
                <li>Integrated <strong>Twilio API</strong></li>
                <li>Designed in <strong>Bootstrap</strong></li>
                <li><strong>Javascript</strong> input validation</li>
              </ul>
              <div className="card-action">
                <a
                  aria-label="Visit the GitHub repo for Saved By the Text project"
                  href="http://github.com/andrewborstein/saved-by-the-text"
                  target="_blank"
                  data-position="top"
                  data-tooltip="View Source"
                  className="btn-floating btn-large waves-effect waves-light brown tooltipped"
                  rel="noreferrer"
                  ><i className="fa fa-github"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
        
        </div>
      </div>
  </section>
    </div>
  )
}
