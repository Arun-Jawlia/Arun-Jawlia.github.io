import "./about.css";
import myCV from "../../assets/Arun-Jawlia-Resume.pdf.pdf";
import myImg from "../../assets/arun_png2.png";

import React from "react";
import Info from "./Info";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section_title">About Me</h2>
      <span className="section_subtitle">My Introduction</span>

      <div className="about_container container grid">
        <img className="about_img" src={myImg} alt="myimg" />
        <div className="about_data">
          <p className="about_description">
            {/* <ul>
              <li>Highly motivated and eager to learn new technologies.</li>
              <li>Strong motivational and leadership skills.</li>

              <li>Ability to produce best result in pressure situation.</li>

              <li>Ability to work as individual as well as in group.</li>
            </ul> */}
            👉My Journey started with Masai School. I am very thankful to Masai School. I will never forget this date <span style={{fontWeight:'600'}}>Jan 24, 2022</span>. On this day, my journey of coding started. I was in the foundation batch FT-WEB-03 at Masai School. It's a hope for me to do something exciting and skillful in life. I started with the basics of coding and DSA. My first code was <span  style={{fontWeight:'600'}}> print('hello world') </span>. By the way, my first programming language was Python. And It was a new life for me. Then a journey of full-stack web development started. I worked on many projects which are either collaborative or individual. I learned different technologies and skills at Masai School which helps me to grow in my career and in life. I am thankful to Masai school and Masai school's group for bringing sunshine into my life.
          </p>
          <div >
            <h4>Something interesting about me : </h4>
            <br />
          <Info />
          </div>

          <a className="about_resume" target='blank' download="" href={myCV}>
            <button>Resume</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
