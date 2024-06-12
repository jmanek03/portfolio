import React from 'react'
import './Projects.css';
import './About.css';
import './Intro.css';
import './Skills.css';
import './Education.css'
export default function Education() {
  return (
    <>
       <section id="education" class="section scrollspy">
    <h3 class="page-title white-text teal">Education</h3>
    <div class="container">
      <div class="row flex">
        <div class="col s12 m6">
          <div class="card">
            <div class="card-content">
              <p>
                <span class="card-title">
                    <a href="https://kjsit.somaiya.edu.in/en" class="teal-text hoverline">
                    KJ SOMAIYA INSTITUTE OF TECHNOLOGY
                    </a>
                </span>
              </p>
              <p class="brown-text">SION, MUMBAI</p>
              <ul>
                <li>B.TECH IN ELECTRONICS AND TELECOMMUNICATION</li>
                <li>CGPA : 9.92</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col s12 m6">
          <div class="card">
            <div class="card-content">
              <p>
                <span class="card-title">
                  <a href="https://kjssc.somaiya.edu.in/en/" class="teal-text hoverline">
                    KJ SOMAIYA COLLEGE OF SCIENCE AND COMMERCE
                  </a>
                </span>
              </p>
              <p class="brown-text">VIDYAVIHAR, MUMBAI</p>
              <ul>
                <li>HIGHER SECONDARY EDUCATION IN COMPUTER SCIENCE</li>
                <li>Percentage : 96.17%</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row flex">
        <div class="col s12 m6">
          <div class="card">
            <div class="card-content">
              <p>
                <span class="card-title">
                  <a href="https://sharonschool.in/" class="teal-text hoverline">
                    SHARON ENGLISH HIGH SCHOOL
                  </a>
                </span>
              </p>
              <p class="brown-text">MULUND, MUMBAI</p>
              <ul>
                <li>SECONDARY EDUCATION</li>
                <li>Percentage : 96.40%</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </section>
    </>
  )
}
