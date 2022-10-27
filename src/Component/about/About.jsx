import "./about.css";
import myCV from "../../assets/Arun-Jawlia-Resume.pdf.pdf";
import myImg from "../../assets/my_img.jpg";

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
            <ul>
              <li>Highly motivated and eager to learn new technologies.</li>
              <li>Strong motivational and leadership skills.</li>

              <li>Ability to produce best result in pressure situation.</li>

              <li>Ability to work as individual as well as in group.</li>
            </ul>
          </p>
          <Info />

          <a className="about_resume" download="" href={myCV}>
            <button>Resume</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
