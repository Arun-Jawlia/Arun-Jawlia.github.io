import React from "react";

const ScrollDown = () => {
  return (
    <div className="home_scroll">
      <a href="#about" className="home_scroll_button button_flex">
        <button>
          <span class="material-symbols-outlined">expand_more</span>
        </button>
        <span className="home_scroll_name">Scroll Down</span>
      </a>
    </div>
  );
};

export default ScrollDown;
