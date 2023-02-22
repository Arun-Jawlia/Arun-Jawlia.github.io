import React from "react";
import myCV from "../../assets/Arun-Jawlia-Resume.pdf.pdf";
import './Home.css'
export const Data = () => {
  return (
    <div className="home_data">
      <h1 className="home_title">
       
          Arun Jawlia
      </h1>
      <h2 className="home_subtitle">Full Stack Web Developer</h2>
      <p className="home_description">
        Highly talented and motivated developer with the knowledge of MERN technologies
        and very passionate and dedicated to my work.
      </p>
      <div className="resume-contact">
      <a href="#contact" className="button button_flex">
       
          👋Hello
        
      </a>
      <a  download="" className="button button_flex" href={myCV}>
          Resume  <i class="uil uil-download-alt"></i> 
          </a>
      </div>
          
    </div>
  );
};
