import React from "react";
import "./footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container container">
              <h1 className="footer_list">
              Made with ❣️
              </h1>
       


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
