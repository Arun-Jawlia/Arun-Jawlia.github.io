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
            I will never forget this date <span style={{fontWeight:'600'}}>Jan 24, 2022</span>.On this date, my journey of coding started. I was in foundation batch FT-WEB-03 in Masai School. It's a hope for me to do something interesting and skillable in life.I am keen to learn new technologies. I started with basics of coding and dsa. My first code was <span  style={{fontWeight:'600'}}> print('hello world') </span>. By the way, my first programming language was Python. And It was a new life for me. Then a journey of full stack web development started. I am thankful to masai school and masai school's group to bring sunshine in my life.
          </p>
          <div >
            <h4>Something interesting about me : </h4>
            <br />
          <Info />
          </div>

          <a className="about_resume" download="" href={myCV}>
            <button>Resume</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
