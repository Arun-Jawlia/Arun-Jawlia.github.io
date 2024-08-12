import React, { useState } from "react";
import styled from "styled-components";
import html from "../assets/Images/LanguageImages/html5.png";
import css from "../assets/Images/LanguageImages/css3.png";
import js from "../assets/Images/LanguageImages/js.png";
import git from "../assets/Images/LanguageImages/git.png";
import mongodb from "../assets/Images/LanguageImages/mongodb.png";
import nodejs from "../assets/Images/LanguageImages/nodejs.png";
import react from "../assets/Images/LanguageImages/react.png";
import reactredux from "../assets/Images/LanguageImages/redux.png";
import mern from "../assets/Images/LanguageImages/mern.png";
import next from "../assets/Images/LanguageImages/nextjs.webp";
import express from "../assets/Images/LanguageImages/express.png";
import vscode from "../assets/Images/LanguageImages/vscode.jpg";
import typescript from "../assets/Images/LanguageImages/typescript.png";
import tailwind from "../assets/Images/LanguageImages/tailwind.jpg";

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const skills = {
    frontend: [
      { img: html, title: "HTML" },
      { img: css, title: "CSS" },
      { img: js, title: "JavaScript" },
      { img: react, title: "ReactJS" },
      { img: next, title: "NextJs" },
      { img: typescript, title: "TypeScript" },
      { img: reactredux, title: "Redux" },
      { img: tailwind, title: "Tailwind" },
    ],
    backend: [
      { img: nodejs, title: "NodeJS" },
      { img: mongodb, title: "MongoDB" },
      { img: mern, title: "MERN" },
      { img: express, title: "Express" },
    ],
    tools: [
      { img: git, title: "Git/Github" },
      { img: vscode, title: "VS Code" },
    ],
  };

  const filteredSkills =
    selectedCategory === "all"
      ? [...skills.frontend, ...skills.backend, ...skills.tools]
      : skills[selectedCategory];

  return (
    <Container id="skills">
      <h1 className="sectionHeading">Skills</h1>
      <ButtonGroup>
        <Button
          onClick={() => setSelectedCategory("all")}
          isActive={selectedCategory === "all"}
        >
          All
        </Button>
        <Button
          onClick={() => setSelectedCategory("frontend")}
          isActive={selectedCategory === "frontend"}
        >
          Frontend
        </Button>
        <Button
          onClick={() => setSelectedCategory("backend")}
          isActive={selectedCategory === "backend"}
        >
          Backend
        </Button>
        <Button
          onClick={() => setSelectedCategory("tools")}
          isActive={selectedCategory === "tools"}
        >
          Tools
        </Button>
      </ButtonGroup>
      <div className="skillsWrapper">
        <div className="skillsContainer">
          {filteredSkills.map((skill, index) => (
            <div key={index} className="skillCard">
              <img
                src={skill.img}
                alt={skill.title}
                width="70px"
                height="70px"
              />
              <p className="skillname">{skill.title}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin: auto;
  margin-top: 2rem;
  padding-top: 2rem;
  padding-bottom: 2rem;

  

  h1 {
    color: #088395;
    text-transform: uppercase;
    text-align: center;
  }

  .skillsWrapper {
    margin-top: 2rem;
  }

  .skillsContainer {
    /* width: 90%; */
    margin: auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, max-content));
    justify-content: center;
    padding: 30px;
    gap: 20px;
  }

  .skillsContainer > div {
    display: flex;
    align-items: center;
    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
    padding: 20px 0px 10px 0px;
    border-radius: 10px;
  }

  .skillsContainer > div:hover {
    transform: translateY(-5px);
    transition: all 0.8s;
  }

  .skillname {
    margin-top: 10px;
    text-align: center;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap; /* Allow the buttons to wrap to a new line */
  justify-content: center;
  margin-bottom: 2rem;
  gap: 10px; /* Add some space between the buttons */
`;

const Button = styled.button`
  background-color: ${(props) => (props.isActive ? "#fff" : "#37B7C3")};
  color: ${(props) => (props.isActive ? "#088395" : "#fff")};
  border: ${(props) => (props.isActive ? "2px solid #088395" : "none")};
  padding: 5px 15px;
  margin: 5px; /* Margin for spacing on wrap */
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  text-transform: uppercase;
  transition: background-color 0.3s, color 0.3s, border 0.3s;

  &:hover {
    background-color: ${(props) => (props.isActive ? "#f0f0f0" : "#066277")};
  }
`;

export default Skills;
