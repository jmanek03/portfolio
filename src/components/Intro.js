/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './Intro.css';
export default function Intro() {
  return (
    <>
    <section id="intro" className="section scrollspy full-height">
        <div className="overlay"></div>
            <div className="container">
                <h2>
                    I want to <span className="highlight">make things</span><br />that <span className="underline">make a difference</span>.
                </h2>
                {/* <div className="container-image">
                  <img src="https://images.bitmoji.com/3d/avatar/451978050-556730612_13-s5-v1.webp?ua=2"/>
                </div> */}
            </div>
    </section>
    </>
  )
}
