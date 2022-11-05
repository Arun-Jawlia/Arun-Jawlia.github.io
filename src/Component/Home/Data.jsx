import React from "react";

export const Data = () => {
  return (
    <div className="home_data">
      <h1 className="home_title">
        <span
          style={{
            backgroundColor: "red",
            color: "black",
            paddingLeft: "3px",
            borderTopRightRadius: "10px",
            borderBottomLeftRadius: "10px",
            paddingRight: "3px",
          }}
        >
          Arun
        </span>{" "}
        <span> </span>
        <span style={{ color: "white" }}>Jawlia</span>
      </h1>
      <h3 className="home_subtitle">Full Stack Web Developer</h3>
      <p className="home_description">
        I'm highly talented and motivated developer with the knowledge of MERN
        and I'm very passionate and dedicated to my work.
      </p>
      <a href="#contact">
        <button style={{ backgroundColor: "red", color: "black" }}>
          Say Hello
        </button>
      </a>
    </div>
  );
};
