import React, { useState } from "react";

import "./Header.css";

const Header = () => {
    // Toggle menu and close button

    const [toggle,showMenu]=useState(false)


  /*====== ==== Change Background Header =*/
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");

    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove(" scroll-header");
  });

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav_logo">
          Arun
        </a>

        <div className={toggle ? 'nav_menu show_menu' : 'nav_menu'}>
          <ul className="nav_list grid">
            <li className="nav_item">
              <a href="#home" className="nav_link active_link">
                <i className="uil uil-estate nav_icon"></i>Home
              </a>
            </li>
            <li className="nav_item">
              <a href="#about" className="nav_link">
                <i className="uil uil-user nav_icon"></i>About
              </a>
            </li>
            <li className="nav_item">
              <a href="#skills" className="nav_link">
                <i className="uil uil-file-alt nav_icon"></i>Skills
              </a>
            </li>
            <li className="nav_item">
              <a href="#project" className="nav_link">
                <i className="uil uil-briefcase-alt nav_icon"></i>Project
              </a>
            </li>

            <li className="nav_item">
              <a href="#contact" className="nav_link">
                <i className="uil uil-message nav_icon"></i>Contact
              </a>
            </li>
          </ul>

          <i class="uil uil-times nav_close" onClick={()=>showMenu(!toggle)}></i>
        </div>
        <div className="nav_toggle" onClick={()=>showMenu(!toggle)}>
          <i class="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
