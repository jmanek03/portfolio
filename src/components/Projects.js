/* eslint-disable react/style-prop-object */
import React from 'react'
import './Projects.css';
import './About.css';
import './Intro.css';
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
                alt="Screenshot of Math Training Game"
                src="/assets/math-trainig-game.png"
                className="activator"
              />
            </div>
            <div className="card-content">
              <span className="card-title activator teal-text hoverline"
                >Math Training Game<i className="mdi-navigation-more-vert right"></i
              ></span>
              <p>
              Displays basic math questions that include Addition, Subtraction, Division, and Multiplication for practice using HTML, CSS, JS
              </p>
            </div>
            <div className="card-reveal">
              <span className="card-title brown-text">
                Accomplishments<i className="mdi-navigation-close right"></i>
              </span>
              <ul>
                <li><strong>Javascript</strong> backend</li>
                <li><strong>CSS</strong>frontend</li>
              </ul>
              <div className="card-action">
                <a
                  aria-label="Visit the GitHub repo for Math-Training-Game project"
                  href="https://github.com/jmanek03/Math-Training-Game"
                  target="_blank"
                  data-position="top"
                  data-tooltip="View Source"
                  className="btn-floating btn-large waves-effect waves-light brown tooltipped"
                  rel="noreferrer"
                  ><i className="fa fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* TextUtils */}
        <div className="col s12 m6 l4">
          <div className="card medium">
            <div className="card-image waves-effect waves-block waves-light">
              <img
                alt="Screenshot of TextUtils web app"
                src="assets/TextUtils.png"
                className="activator"
              />
            </div>
            <div className="card-content">
              <span className="card-title activator teal-text hoverline"
                >TextUtils<i className="mdi-navigation-more-vert right"></i>
              </span>
              <p>
                Text analyzer website with basic text formatting functions such as upper case, lower case, remove white space etc. 
              </p>
            </div>
            <div className="card-reveal">
              <span className="card-title brown-text"
                >Accomplishments<i className="mdi-navigation-close right"></i>
              </span>
              <ul>
                <li><strong>Bootstrap CSS</strong> frontend</li>
                <li><strong>ReactJS</strong></li>
              </ul>
              <div className="card-action">
                <a
                  aria-label="Visit the GitHub repo for Texxtutils project"
                  href="https://github.com/jmanek03/textutils"
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
                alt="NewwsApp "
                src="/assets/NewsApp.png"
                className="activator"
              />
            </div>
            <div className="card-content">
              <span className="card-title activator teal-text hoverline"
                >NewsApp<i className="mdi-navigation-more-vert right"></i></span>
              <p>
                Developed a user-friendly news app providing real-time updates, personalized content, and seamless navigation for an 
                enhanced reading experience. 
              </p>
            </div>
            <div className="card-reveal" onClick={(a)=>a(document).ready(function() {
            a(document).on("click.card", ".card", function(b) {
                a(this).find(".card-reveal").length && (a(b.target).is(a(".card-reveal .card-title")) || a(b.target).is(a(".card-reveal .card-title i")) ? a(this).find(".card-reveal").velocity({
                    translateY: 0
                }, {
                    duration: 225,
                    queue: !1,
                    easing: "easeInOutQuad"
                }) : (a(b.target).is(a(".card .activator")) || a(b.target).is(a(".card .activator i"))) && a(this).find(".card-reveal").velocity({
                    translateY: "-100%"
                }, {
                    duration: 300,
                    queue: !1,
                    easing: "easeInOutQuad"
                }))
            })
            })}>
              <span className="card-title brown-text"
                >Accomplishments<i className="mdi-navigation-close right"></i>
              </span>
              <ul>
                <li>
                  Integrated “News” via <strong>News API</strong>
                </li>
                <li>
                  Developed <strong>CSS and JS</strong> responsive menu
                </li>
                <li><strong>ReactJS</strong></li>
              </ul>
              <div className="card-action">
                <a
                  aria-label="Visit the GitHub repo for NewsApp project"
                  href="https://github.com/jmanek03/newsapp"
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
                src="/assets/ERMS.png"
                className="activator"
              />
            </div>
            <div className="card-content">
              <span className="card-title activator teal-text hoverline">
                ERMS
                <i
                  className="mdi-navigation-more-vert right"
                ></i
              ></span>
              <p>
                Displays the remuneration amount for teachers and staff depending upon some factors. 
              </p>
            </div>
            <div className="card-reveal">
              <span className="card-title brown-text"
                >Accomplishments<i className="mdi-navigation-close right"></i
              ></span>
              <ul>
                <li>Built with <strong>Javascript</strong></li>
                <li>Designed in <strong>CSS</strong></li>
                <li><strong>PHP</strong> input validation</li>
                <li>Database using <strong>MySQL</strong></li>
              </ul>
              <div className="card-action">
                <a
                  aria-label="Visit the GitHub repo for ERMS project"
                  href="https://github.com/jmanek03/college-website"
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
