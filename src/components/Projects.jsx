import React from "react";
import styled from "styled-components";
import ESPN2 from "../assets/Images/Project/ESPN2.webp";
import GitHubIcon from "@mui/icons-material/GitHub";
import StreamIcon from "@mui/icons-material/Stream";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Full-Stack MERN Multivendor E-Commerce Store",
      img: ESPN2, // Replace with your image path
      desc: "A comprehensive e-commerce platform built using the MERN stack (MongoDB, Express.js, React.js, Node.js) designed to support multiple vendors, manage products, and handle transactions.",
      worked: "A solo project developed over several weeks, featuring a robust backend and a user-friendly frontend.",
      keyPoint1: "Scalable and secure architecture to handle multiple vendors and transactions.",
      keyPoint2: "Real-time updates and efficient product management.",
      githubLink: "https://multivendor-ecommerce-store-7d3tu3k9r-arunjawlias-projects.vercel.app/", // Replace with your GitHub link
      deployedLink: "https://multivendor-ecommerce-store-7d3tu3k9r-arunjawlias-projects.vercel.app/", // Replace with your deployed site link
      tags: ["MongoDB", "Express.js", "React.js", "Node.js"],
    },
    {
      id: 2,
      title: "Weather App using React and Chakra UI",
      img: ESPN2, // Replace with your image path
      desc: "A weather application developed using React and Chakra UI, providing real-time weather updates and a clean, responsive design.",
      worked: "A solo project built to enhance skills in React and Chakra UI, focusing on fetching and displaying weather data.",
      keyPoint1: "Live weather data integration with a user-friendly interface.",
      keyPoint2: "Responsive design for various screen sizes using Chakra UI.",
      githubLink: "https://github.com/Arun-Jawlia/Weather-App-2.0", // Replace with your GitHub link
      deployedLink: "https://weather-app-daily-hourly-current-weather.vercel.app/", // Replace with your deployed site link
      tags: ["React", "Chakra UI", "API Integration"],
    },
  ];
  

  return (
    <Container id="projects">
      <h1 className="sectionHeading">Projects</h1>
      <div className="projectsContainer">
        {projects?.map((ele, index) => (
          <div key={index} className="box">
            <div className="ContentBox">
              <h1>{ele.title}</h1>
              <p>{ele.desc}</p>
              <p style={{ fontWeight: 'bold' }}>{ele.worked}</p>
              <div className="tagsBox">
                {ele.tags.map((tag, index) => (
                  <span key={index}>#{tag}</span>
                ))}
              </div>
            </div>
            <div className="imgBox">
              <img src={ele.img} alt={ele.title} width="60%" />

              <span className="buttonGroup">
                  {ele.githubLink && (
                    <a href={ele.githubLink} target="_blank" rel="noreferrer" className="button githubButton">
                      <GitHubIcon />
                      Github
                    </a>
                  )}
                  <a href={ele.deployedLink} target="_blank" rel="noreferrer" className="button liveButton">
                    <StreamIcon />
                    Live
                  </a>
                </span>
            </div>

            <div className="imgCenterLine"></div>
            <div className="imgCenterCircle"></div>
          </div>
        ))}
        <span className="midLine"></span>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  z-index: 5;

  h1 {
    color: #088395;
    text-transform: uppercase;
    z-index: 2; /* Ensure h1 is above .imgCenterLine */
  }

  .projectsContainer {
    width: 90%;
    margin: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative; /* Ensure relative positioning for absolute children */
  }

  
  .box {
    position: relative;
    width: 100%;
    display: flex;
    gap: 10px;
    justify-content: space-between;
    margin-bottom: 80px;
    overflow: hidden;
  }

  .imgBox {
    width: 50%;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
  }

  .imgBox > img {
    display: block;
    transition: transform 0.4s;
    cursor: pointer;
  }

  .imgBox > img:hover {
    /* scale: 1.1; */
    transform: scale(1.05);
    
  }

  .liveLink {
    position: absolute;
    /* z-index: -1; */
  }

  .ContentBox {
    width: 50%;
    text-align: left;
    z-index: 2; /* Ensure this is above .imgCenterLine */
    background-color: #f8f9fa;
  }

  .imgCenterLine {
    width: 50%;
    height: 2px;
    position: absolute;
    top: 50%;
    left: 50%;
    background-color: #76e3f4;
    z-index: -1; /* Ensure this is above other elements in the box */
    transform: translateX(-50%);
  }

  .buttonGroup {
    display: flex;
    gap: 10px;
    position: absolute;
    bottom: 42%;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 3;
  }


  .imgBox:hover .buttonGroup{
    opacity: 1;
    transition: opacity 0.8s ease;
  }


  .button {
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 8px 12px;
    border: none;
    border-radius: 4px;
    font-size: 14px;
    font-weight: bold;
    text-decoration: none;
    color: #fff;
    transition: background-color 0.3s ease, transform 0.3s ease;
    cursor: pointer;
  }

  .githubButton {
    background-color: #333;
  }

  .githubButton:hover {
    background-color: #555;
    transform: scale(1.05);
  }

  .liveButton {
    background-color: #4caf50;
  }

  .liveButton:hover {
    background-color: #45a049;
    transform: scale(1.05);
  }


  .midLine {
    width: 2px;
    height: 100%;
    background-color: #088395;
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    z-index: 1;
  }

  .imgCenterCircle {
    height: 10px;
    width: 10px;
    border-radius: 50%;
    position: absolute;
    left: 49.3%;
    background-color: white;
    top: 47%;
    z-index: 2;
    border: 4px solid #088395;
  }

  .ContentBox > h1 {
    color: #343a40;
    font-size: 1.5rem;
  }

  .ContentBox > p {
    width: 90%;
    font-size: 1rem;
    margin-top: 0px;
  }

  .tagsBox {
    width: 80%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    line-height: 20px;
    gap: 5px;
    margin-bottom: 20px;
  }

  .tagsBox > span {
    color: #37b7c3;
    border: 1px solid #37b7c3;
    padding: 2px 10px;
    border-radius: 0px;
    font-size: 13px;
    border-radius: 50px;
  }

  .linkSection {
    display: flex;
    gap: 20px;
  }

  .linkSection > a {
    text-decoration: none;
  }

  .linkSection > a:first-child > button {
    background-color: black;
    color: white;
    padding: 8px 20px;
    border-radius: 8px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border: none;
    cursor: pointer;
  }

  button {
    cursor: pointer;
  }

  button:hover {
    -webkit-transform: translateY(-2px);
    transform: translateY(-2px);
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
  }

  .linkSection > a:last-child > button {
    background-color: #44a4be;
    color: white;
    padding: 8px 20px;
    border-radius: 8px;
    border: none;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  @media only screen and (min-width: 768px) and (max-width: 1120px) {
    .box {
      flex-direction: column;
      align-items: center;
      width: 95%;
    }
    .imgCenterCircle, .imgCenterLine, .midLine{
      display: none;
    }
    .projectsContainer {
      width: 80%;
      margin: auto;
    }

    .imgBox {
      width: 100%;
      /* height: 400px; */
    }

    .imgBox > img {
      width: 100%;
    }

    .ContentBox {
      width:90%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }

    .ContentBox > h1 {
      font-size: x-large;
    }

    .ContentBox > p {
      font-size: 15px;
    }

    .tagsBox {
      width: 100%;
      justify-content: center;
    }

    .midLine {
      display: none;
    }
  }

  @media only screen and (min-width: 481px) and (max-width: 768px) {
    .box {
      flex-direction: column;
      align-items: center;
      height: 100%;
      width: 95%;
    }
    .imgCenterCircle, .imgCenterLine, .midLine{
      display: none;
    }
    .projectsContainer {
      width: 100%;
      margin: auto;
    }

    .imgBox {
      width: 100%;
      height: 280px;
    }

    .imgBox > img {
      width: 100%;
    }

    .ContentBox {
      width: 90%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      text-align: center;
    }

    .ContentBox > h1 {
      font-size: x-large;
    }

    .ContentBox > p {
      font-size: 15px;
    }

    .tagsBox {
      width: 100%;
      justify-content: center;
    }

    .midLine {
      display: none;
    }
  }

  @media only screen and (min-width: 320px) and (max-width: 480px) {
    .box {
      flex-direction: column;
      align-items: center;
      height: 100%;
    }
    .imgCenterCircle, .imgCenterLine, .midLine{
      display: none;
    }

    .projectsContainer {
      width: 100%;
      margin: auto;
    }

    .imgBox {
      width: 100%;
      /* height: 200px; */
    }

    .imgBox > img {
      width: 100%;
    }

    .ContentBox {
      width: 80%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      text-align: center;
    }

    .ContentBox > h1 {
      font-size: large;
    }

    .ContentBox > p {
      font-size: 13px;
    }

    .tagsBox {
      width: 100%;
      justify-content: center;
    }

    .midLine {
      display: none;
    }
  }

  @media only screen and (max-width: 319px) {
    .box {
      flex-direction: column;
      align-items: center;
      width: 95%;
    }
    .imgCenterCircle, .imgCenterLine, .midLine{
      display: none;
    }
    .projectsContainer {
      width: 100%;
      margin: auto;
    }

    .imgBox {
      width: 100%;
      /* height: 150px; */
    }

    .imgBox > img {
      width: 100%;
    }

    .ContentBox {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      text-align: center;
    }

    .ContentBox > h1 {
      font-size: large;
    }

    .ContentBox > p {
      font-size: 13px;
    }

    .tagsBox {
      width: 100%;
      justify-content: center;
    }

    .midLine {
      display: none;
    }
  }
`;

export default Projects;
