import React from "react";
import styled from "styled-components";
import TextAnimation from "./TextAnimation";

const About = () => {
  return (
    <AboutMeWrapper id="about">
      <div className="aboutSection">
        <div className="left">
          <h2>Personal Details</h2>
          <p>
            Email: <span>arunkumar08.mk@gmail.com</span>
          </p>
          <p>
            Language: <span>English & Hindi</span>
          </p>
          {/* <p>
            Nationality: <span>Indian</span>
          </p> */}
          <p>
            Location: <span>New Delhi, India</span>
          </p>
          <p>
            LinkedIn:{" "}
            <span>
              <a
                href="https://www.linkedin.com/in/arun-jawlia-0a262022b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Arun Jawlia
              </a>
            </span>
          </p>
          <p>
            GitHub:{" "}
            <span>
              <a
                href="https://github.com/Arun-Jawlia"
                target="_blank"
                rel="noopener noreferrer"
              >
                Arun-Jawlia
              </a>
            </span>
          </p>
        </div>
        <div className="right">
          <h2>
            I am a <span><TextAnimation/></span>
          </h2>
          <p>
            A passionate Full Stack Web & Android Developer, wielding a robust
            toolkit of{" "}
            <strong class='boldText'> JavaScript, React, Node.js, Express, and MongoDB. </strong> I
            thrive on blending these technical skills with my keen eye for user
            experience and problem-solving prowess. With a dedication to
            crafting dynamic and interactive web applications, I specialize in
            using the MERN stack to turn innovative ideas into impactful digital
            solutions.
          </p>
          <div className="moreDetails">
            <div>
              <h2>8 mon</h2>
              <p>Prof. Experience</p>
            </div>
            <div>
              <h2>10+</h2>
              <p>Solo Projects</p>
            </div>
            <div>
              <h2>300+</h2>
              <p>DSA Problems</p>
            </div>
            <div>
              <h2>3+</h2>
              <p>Team Projects</p>
            </div>
          </div>
          {/* <div className="softSkills">
            <div>
              <p>Adaptability</p>
            </div>
            <div>
              <p>Team Worker</p>
            </div>
            <div>
              <p>Fast Learner</p>
            </div>
          </div> */}
        </div>
      </div>
    </AboutMeWrapper>
  );
};

const AboutMeWrapper = styled.div`
  width: 100%;
  /* margin-top: -50px; */
  margin-bottom: 3rem;
  height: auto;

  .aboutSection {
    width: 80%;
    margin: auto;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    background-color: white;
    display: flex;
    justify-content: center;
    padding: 20px;
    border-radius: 10px;
    gap: 10px;
  }

  .left {
    width: 30%;
    text-align: left;
    background-color: #f8f9fa;
    padding: 5px 15px 5px 15px;
    border-radius: 10px;
  }

  .left > p {
    font-size: small;
    font-weight: bold;
  }

  .left > p > span {
    color: #088395;
  }
  .left > p > span > a {
    color: #088395;
    text-decoration: none;
  }

  .left > p > a {
    color: #01a479;
    text-decoration: none;
  }

  .left > p > a:hover {
    text-decoration: underline;
  }

  .left > h3 + p {
    margin-top: 0px;
    border-top: 1.5px dashed #d4dae1;
  }

  .right {
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px 10px 0px 10px;
  }

  .right > h2 {
    width: 100%;
    margin-bottom: 0px;
    /* font-size: 20px; */
    text-align: left;
  }

  .right > h2 > span {
    color:#37b7c3;
  }

  .right > p {
    text-align: left;
    margin-top: 5px;
  }

  .moreDetails {
    padding-top: 20px;
    width: 100%;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content:center;
    align-items: center;
  }

  .moreDetails div {
    border: 2px solid #37b7c3;
    height: auto;
    width: 120px;
    border-radius: 2px;
    text-align: center;
    border-radius: 2px;

  }

  .moreDetails div p {
    font-size: 12px;
    margin-top: -10px;
  }

 
  .softSkills{
    padding-top: 20px;
    width: 100%;
    display: flex;
    gap: 1rem; 
  }
  .softSkills div {
    border: 2px solid #37b7c3;
    height: auto;
    width: 100px;
    text-align: center;
    border-radius: 2px;
  }

  .softSkills div p {
    font-size: 12px;
  }

  .softSkills div h2 {
    padding: 0px;
  }


  @media only screen and (min-width: 769px) and (max-width: 1110px) {
    .left {
      width: 35%;
    }
  }

  @media only screen and (min-width: 481px) and (max-width: 768px) {
    margin-top: 20px;
    .aboutSection {
      flex-direction: column;
      align-items: center;
    }

    .left {
      width: 90%;
    }
    .right {
      width: 90%;
    }
    .right > p {
      font-size: 14px;
    }
  }

  @media only screen and (min-width: 320px) and (max-width: 480px) {
    margin-top: 20px;
    .aboutSection {
      flex-direction: column;
      align-items: center;
    }

    .left {
      width: 90%;
    }
    .right {
      width: 90%;
    }

    .right > h2 {
      font-size: 17px;
    }

    .right > p {
      font-size: 15px;
    }
  }

  @media only screen and (max-width: 320px) {
    margin-top: 20px;
    .aboutSection {
      flex-direction: column;
      align-items: center;
    }

    .left {
      width: 90%;
    }
    .right {
      width: 90%;
    }
    .right > h2 {
      font-size: 16px;
    }

    .right > p {
      font-size: 13px;
    }
  }
`;

export default About;
