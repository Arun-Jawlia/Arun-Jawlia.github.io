import DownloadIcon from "@mui/icons-material/Download";
import React from "react";
import styled from "styled-components";
import myImage from "../assets/Images/profilePic.jpg";
import backgroundImage from "../assets/Images/backgroundHome.jpg";
import { GitHub, LinkedIn, Phone } from "@mui/icons-material";

const Home = () => {
  return (
    <div id="home">
      <Container>
        <div className="aboutBox">
          <div className="about_leftBox">
            <p>Hi there 👋</p>
            <h1>I'm Arun Jawlia.</h1>
            <p>
              Frontend Developer with 1+ years of experience building dynamic
              and responsive web applications. Skilled in enhancing user
              experience, collaborating in agile teams, and delivering
              high-quality, scalable solutions.
            </p>

            <div className="resumesButton">
              <a href="../utils/Files/Arun-Jawlia-1yrs-Resume.pdf" download>
                <button>
                  Download Resume
                  <DownloadIcon />
                </button>
              </a>
              <div className="socialLinks">
                <div>
                  <a
                    href="https://github.com/Arun-Jawlia"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHub />
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.linkedin.com/in/arun-jawlia-0a262022b/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedIn />
                  </a>
                </div>
                <div>
                  <a
                    href="tel:+919718653508"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Phone />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="about_rightBox">
            <div>
              <img src={myImage} alt="profile-pic" width="100%" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
const Container = styled.div`
  width: 100%;
  height: 75vh;
  padding-top: 3rem;
  padding-bottom: 3rem;

  /* margin-top: 2rem; */
  /* background-image: url(${backgroundImage}); */

  .resumesButton {
    width: 100%;
    display: flex;
    gap: 1rem;
    height: 40px;
  }

  .resumesButton a button {
    font-size: small;
    /* height: 40px; */
    cursor: pointer;
    background-color: white;
    border: 2px solid #37b7c3;
    color: #071952;
    height: 100%;
  }

  .resumesButton a button svg {
    font-size: 17px;
  }
  .socialLinks {
    display: flex;
    gap: 1rem;
    height: 100%;
    align-items: center;
    justify-content: center;
  }

  .socialLinks div a {
    height: fit-content;
    border: 2px solid #37b7c3;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    color: #37b7c3;
  }

  a {
    text-decoration: none;
  }
  .aboutBox {
    width: 80%;
    height: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .about_leftBox {
    width: 50%;
    text-align: left;
    padding: 10px;
  }

  .about_leftBox > h1 {
    font-size: 36px;
    line-height: 10px;
  }

  .about_leftBox > p {
    color: #088395;
    font-size: 17px;
    font-weight: 500;
    text-align: justify;
  }

  .about_leftBox button {
    padding: 8px 12px 8px 12px;
    /* border-radius: 10px; */
    border: 1px solid #01a479;
    background: #01a479;
    color: white;
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: bold;
    font-size: 15px;
  }

  .about_leftBox button:hover {
    -webkit-transform: translateY(-2px);
    transform: translateY(-2px);
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
  }

  .about_rightBox {
    width: 50%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
  }

  .about_rightBox > div {
    width: 250px;
    height: 250px;
    margin: auto;
    border-radius: 100%;
    background-color: white;
    overflow: hidden;
    background-size: cover;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    animation: profile_animate 4s ease-in-out infinite 1s;
    transition: transform 0.5s ease-in-out;
  }
  .about_rightBox > div:hover {
   transform: scale(1.2);
  }

@keyframes profile_animate {
 0%{
  border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
 }
 50%{
  border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
 }
 100%{
  border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
 }
}


  @media only screen and (min-width: 481px) and (max-width: 768px) {
    /* min-height: 80vh; */
    padding-top: 20px;
    margin-bottom: 3rem;

    .resumesButton {
      flex-direction: column;
      align-items: center;
    }

    .resumesButton > a:last-child button {
      width: 165px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .aboutBox {
      height: 100%;
      flex-direction: column-reverse;
      gap: 0px;
    }

    .about_leftBox > h1 {
      font-size: x-large;
      line-height: 0px;
      text-align: center;
    }

    .about_leftBox > p {
      color: #8492a6;
      font-size: 17px;
      font-weight: 500;
    }

    .about_leftBox {
      width: 80%;
      display: flex;
      align-items: center;
      flex-direction: column;
      text-align: center;
    }

    .about_rightBox {
      width: 100%;
      height: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 15px;
    }

    .about_rightBox > div {
      width: 200px;
      height: 200px;
      margin: auto;
      border-radius: 100%;
      background-color: white;
      overflow: hidden;
    }

    .resumesButton {
      flex-direction: column;
      align-items: center;
    }
  }

  @media only screen and (min-width: 320px) and (max-width: 480px) {
    /* min-height: 85vh; */
    padding-top: 20px;
    margin-bottom: 4rem;

    .resumesButton {
      flex-direction: column;
      align-items: center;
    }

    .resumesButton > a:last-child button {
      width: 165px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .aboutBox {
      height: 100%;
      flex-direction: column-reverse;
    }

    .about_leftBox > h1 {
      font-size: x-large;
      line-height: 0px;
      text-align: center;
    }

    .about_leftBox > p {
      color: #8492a6;
      font-size: 17px;
      font-weight: 500;
    }

    .about_leftBox {
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      text-align: center;
    }

    .about_rightBox {
      width: 100%;
      height: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 15px;
    }

    .about_rightBox > div {
      width: 200px;
      height: 200px;
    }
  }

  @media only screen and (max-width: 320px) {
    min-height: 80vh;
    padding-top: 20px;
    .aboutBox {
      height: 100%;
      flex-direction: column-reverse;
    }

    .about_leftBox > h1 {
      font-size: x-large;
      line-height: 0px;
      text-align: center;
    }

    .about_leftBox > p {
      color: #8492a6;
      font-size: 15px;
      font-weight: 500;
    }

    .about_leftBox {
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      text-align: center;
    }

    .about_rightBox {
      width: 100%;
      height: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 15px;
    }

    .about_rightBox > div {
      width: 150px;
      height: 150px;
    }
  }

  @media only screen and (max-width: 319px) {
    min-height: 80vh;
    padding-top: 20px;

    .resumesButton {
      flex-direction: column;
      align-items: center;
    }

    .resumesButton > a:last-child button {
      width: 165px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .aboutBox {
      height: 100%;
      flex-direction: column-reverse;
    }

    .about_leftBox > h1 {
      font-size: large;
      line-height: 0px;
      text-align: center;
    }

    .about_leftBox > p {
      color: #8492a6;
      font-size: 15px;
      font-weight: 500;
    }

    .about_leftBox {
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      text-align: center;
    }

    .about_rightBox {
      width: 100%;
      height: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 15px;
    }

    .about_rightBox > div {
      width: 150px;
      height: 150px;
    }
  }
`;
