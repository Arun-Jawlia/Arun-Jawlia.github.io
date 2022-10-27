import React from "react";

const Info = () => {
  return (
    <div className="about_info grid">
      <div className="about_box">
        <box-icon name="briefcase-alt-2" className="about_icon"></box-icon>
        <h3 className="about_title"> Completed </h3>
        <span className="about_subtitle">4+ projects</span>
      </div>
      <div className="about_box">
        <box-icon name="briefcase-alt-2" className="about_icon"></box-icon>
        <h3 className="about_title"> Completed </h3>
        <span className="about_subtitle">1200+ hours Coding</span>
      </div>
      <div className="about_box">
        <box-icon name="briefcase-alt-2" className="about_icon"></box-icon>
        <h3 className="about_title"> Completed </h3>
        <span className="about_subtitle">500+ hours of DSA</span>
      </div>
    </div>
  );
};

export default Info;
