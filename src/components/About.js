import React from 'react'
import './About.css';
import './Intro.css';
export default function About() {
  return (
    <section id="about" className="section scrollspy">
        <h3 className="page-title white-text teal">About</h3>
        <div className="container flow-text">
            <blockquote>
                <h2>
                Mission-driven, hardworking web developer, eager to learn new technologies to enhance his knowledge and efficiency.
                </h2>
            </blockquote>
            <p>
            I thrive in the fast-paced world of technology, always keen to expand my knowledge and skill set. 
            I am passionate about learning new tech stacks and integrating them into my projects to create innovative and efficient solutions.
            </p>
            <p>
            My commitment to excellence is evident in my work ethic. I tirelessly refine 
            my craft, staying updated with the latest industry trends and advancements. 
            My proactive approach to learning ensures that I am always at the forefront of 
            technological innovation, making me an invaluable asset to any team.
            </p>
            <p>
            With a strong foundation in web development, I possess the versatility 
            to adapt to various frameworks and languages. I believe in the power of 
            continuous learning and embrace every opportunity to enhance my capabilities. 
            My goal is not just to meet expectations but to exceed them, delivering high-quality, 
            impactful solutions that make a difference.
            </p>
            <p>
            <strong>Current Focus</strong>:&nbsp;
                <a
                aria-label="Navigate to the Full Stack React homepage"
                href="https://www.fullstackreact.com/"
                >React</a>
                &nbsp;//&nbsp;
                <a
                aria-label="Navigate to the Data Sturctures and Algorithms"
                href="https://www.tutorialspoint.com/python_data_structure/index.htm"
                >DSA using Python</a>
                &nbsp;//&nbsp;
                <a
                aria-label='Navigate to the MySQL'
                href="https://www.w3schools.com/mysql/mysql_intro.asp"
                >MySQL</a>
            </p>
        </div>
    </section>
  )
}
