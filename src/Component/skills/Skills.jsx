import React from "react";
import './skills.css'

export const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section_title">Skills</h2>
      <span className="section_subtitle">My Technical Level</span>

      <div className="skills_container container grid">
        <div className="skills_content">
          <h3 className="skills_title"> Technical Level </h3>
          <div className="skills_box">
            <div className="skills_group">
              <div className="skills_data">
                <i class="bx bx-badge-check"></i>
                <div>
                  <h3 className="skills_name">HTML</h3>
                  <span className="skills_level">Intermediate</span>
                </div>
              </div>

              <div className="skills_data">
                <i class="bx bx-badge-check"></i>
                <div>
                  <h3 className="skills_name">CSS</h3>
                  <span className="skills_level">Basic</span>
                </div>
              </div>

              <div className="skills_data">
                <i class="bx bx-badge-check"></i>
                <div>
                  <h3 className="skills_name">JavaScript</h3>
                  <span className="skills_level">Intermediate</span>
                </div>
              </div>

              <div className="skills_data">
                <i class="bx bx-badge-check"></i>
                <div>
                  <h3 className="skills_name">ReactJs</h3>
                  <span className="skills_level">Intermediate</span>
                </div>
              </div>

              <div className="skills_data">
                <i class="bx bx-badge-check"></i>
                <div>
                  <h3 className="skills_name">MongoDb</h3>
                  <span className="skills_level">Basic</span>
                </div>
              </div>

              <div className="skills_data">
                <i class="bx bx-badge-check"></i>
                <div>
                  <h3 className="skills_name">ExpressJs</h3>
                  <span className="skills_level">Basic</span>
                </div>
              </div>

              <div className="skills_data">
                <i class="bx bx-badge-check"></i>
                <div>
                  <h3 className="skills_name">NodeJs</h3>
                  <span className="skills_level">Intermediate</span>
                </div>
              </div>

              <div className="skills_data">
                <i class="bx bx-badge-check"></i>
                <div>
                  <h3 className="skills_name">Chakra UI</h3>
                  <span className="skills_level">Intermediate</span>
                </div>
              </div>

              <div className="skills_data">
                <i class="bx bx-badge-check"></i>
                <div>
                  <h3 className="skills_name">Git & Github</h3>
                  <span className="skills_level">Intermediate</span>
                </div>
              </div>

              <div className="skills_data">
                <i class="bx bx-badge-check"></i>
                <div>
                  <h3 className="skills_name">VS Code</h3>
                  <span className="skills_level">Intermediate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
