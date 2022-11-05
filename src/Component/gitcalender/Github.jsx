import React from "react";
import "./github.css";
import GitHubCalendar from "react-github-calendar";

export const Github = () => {
  return (
    <section className="section calender" id="calender">
      <h2 className="section_title">
        
          Github
      </h2>
      <span className="section_subtitle" style={{ marginTop: "10px" }}>
        My Contributions
      </span>
      <div className="container git_calender">
        <a href="https://github.com/Arun-Jawlia" target="blank">
          <GitHubCalendar
            username="Arun-Jawlia"
            // showWeekdayLabels="true"
            // hideTotalCount="true"
            // hideColorLegend="true"
          />
        </a>
      </div>

      <div className="container git_stats">
        <div>
          <img
            // align="left"
            src="https://github-readme-streak-stats.herokuapp.com/?user=Arun-Jawlia&theme=dark"
            alt="arun"
          />
        </div>
        <div>
          <img
            // align="right"
            src="https://github-readme-stats.vercel.app/api?username=Arun-Jawlia&show_icons=true&theme=dark" alt="github_img"
          />
        </div>
      </div>

      <div className="container git_graph">
        {/* <a href="https://github.com/Arun-Jawlia" target="blank"> */}
        <img
          className="section"
          alt="Arun's Activity Graph"
          src="https://activity-graph.herokuapp.com/graph?username=Arun-Jawlia&custom_title=Arun-Jawlia's%20Contribution%20Graph&theme=react-dark"
        />
        {/* </a> */}
      </div>
    </section>
  );
};
