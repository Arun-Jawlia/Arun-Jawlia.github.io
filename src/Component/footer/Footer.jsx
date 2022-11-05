import React from "react";
import "./footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container container">
        <h1 className="footer_title">
          <span>Arun</span>
          <span> </span>
          <span
            style={{
              backgroundColor: "red",
              paddingLeft: "4px",
              borderTopLeftRadius: "10px",
              borderBottomRightRadius: "10px",
              paddingRight: "4px",
              color: "black",
            }}
          >
            Jawlia
          </span>
        </h1>

        <ul className="footer_list">
          <li>
            <a href="#about" className="footer_link">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="footer_link">
              Skills
            </a>
          </li>
          <li>
            <a href="#project" className="footer_link">
              Project
            </a>
          </li>
        </ul>

        <div className="footer_social">
          <a
            href="https://www.instagram.com/arunjawlia/"
            className="home_social_icon"
            target="blank"
          >
            <i class="bx bxl-instagram-alt"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/arun-jawlia-0a262022b/"
            className="home_social_icon"
            target="blank"
          >
            <i class="bx bxl-linkedin"></i>
          </a>

          <a
            href="https://github.com/Arun-Jawlia"
            className="home_social_icon"
            target="blank"
          >
            <i class="bx bxl-github"></i>
          </a>
        </div>
        <span className="footer_copy">&#169; Arun Jawlia. All rights reserved</span>
      </div>
    </footer>
  );
};
