import React from 'react'
import './Projects.css';
import './About.css';
import './Intro.css';
import './Skills.css';
export default function Skills() {
  return (
    <>
    <section id="skills" class="section scrollspy">
    <h3 class="page-title white-text teal">Skills</h3>
    <div class="container">
      <div class="card">
        <div class="card-content">
          <h4 class="brown-text light">HTML</h4>
          <div class="row text-center">
            <div class="col s4 m2">
              <img
                alt=""
                src="/assets/html5.png"
                class="responsive-img"
              />HTML5
            </div>
            <div class="col s4 m2">
              <img
                alt=""
                src="/assets/react.png"
                class="responsive-img"
              />JSX
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-content">
          <h4 class="brown-text light">CSS</h4>
          <div class="row text-center">
            <div class="col s4 m2">
              <img
                alt=""
                src="/assets/css3.png"
                class="responsive-img"
              />CSS3
            </div>
            <div class="col s4 m2">
              <img
                alt=""
                src="/assets/bootstrap.png"
                class="responsive-img"
              />Bootstrap
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-content">
          <h4 class="brown-text light">Javascript</h4>
          <div class="row text-center">
            <div class="col s4 m2">
              <img
                alt=""
                src="/assets/react.png"
                class="responsive-img"
              />React
            </div>
            <div class="col s4 m2">
              <img
                alt=""
                src="/assets/img/javascript.png"
                class="responsive-img"
              />Javascript
            </div>
            <div class="col s4 m2">
              <img
                alt=""
                src="/assets/jquery.png"
                class="responsive-img"
              />jQuery
            </div>
          </div>
        </div>
      </div>
      </div>
      <div class="card">
        <div class="card-content">
          <h4 class="brown-text light">Build Tools</h4>
          <div class="row text-center">
            <div class="col s4 m2">
              <img
                alt=""
                src="/assets/webpack.png"
                class="responsive-img"
              />Visual Studio
            </div>
            <div class="col s4 m2">
              <img
                alt=""
                src="/assets/gulp.png"
                class="responsive-img"
              />Figma
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-content">
          <h4 class="brown-text light">Other</h4>
          <div class="row text-center">
            <div class="col s4 m2">
              <img
                alt=""
                src="/assets/github.png"
                class="responsive-img"
              />Github
            </div>
            <div class="col s4 m2">
              <img
                alt=""
                src="/assets/firebase.png"
                class="responsive-img"
              />Firebase
            </div>
          </div>
        </div>
      </div>
  </section>
    </>
  )
}
