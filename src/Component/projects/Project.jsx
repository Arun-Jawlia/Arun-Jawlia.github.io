import React from "react";
import "./project.css";
import optimizelyImg from "../../assets/optimizely.png";
import asosImg from "../../assets/asos_image.png";
import sephoraImg from "../../assets/sephora_clone.png";
import nordstormImg from "../../assets/NordStorm.png";

const Project = () => {
  return (
    <section className="section project" id="project">
      <h2 className="section_title">Project</h2>
      <span className="section_subtitle">My Work</span>
      <div className="project_container container grid">
        {/* First project */}

        <div className="project_content">
          <div className="project_img_div">
            <a
              href="
                https://optimizely-clone.vercel.app/"
              target="blank"
            >
              <img
                className="project_image"
                src={optimizelyImg}
                alt="sephora clone"
              />
            </a>
          </div>

          <div className="project_title_div">
            <a href="https://optimizely-clone.vercel.app/" target="blank">
              <h3 className="project_title">Optimizely Clone</h3>
            </a>
          </div>
          <div className="project_description">
            Optimizely is an American company that provides digital experience
            platform software as a service. In this website using react, I have
            created the homepage of this website and make it responsive as much
            I can.
          </div>

          <div className="project_tech_icon">
            <span>TECH STACKS: </span>
            HTML | CSS | JAVASCRIPT | REACT |NETLIFY | GITHUB
          </div>
          <div className="project_button">
            <a
              href="https://github.com/Arun-Jawlia/sable-club-7536/tree/main/my_project_unit_4"
              target="blank"
            >
              <button>
                <i class="uil uil-github"></i>
              </button>
            </a>
            <a href="https://optimizely-clone.vercel.app/" target="blank">
              <button>
                <i class="uil uil-eye"></i>
              </button>
            </a>
          </div>
        </div>

        {/* Second project- Asos  */}

        <div className="project_content">
          <div className="project_img_div">
            <a
              href="
            https://moonlit-taffy-38ae5b.netlify.app/"
              target="blank"
            >
              <img
                className="project_image"
                src={asosImg}
                alt="optimizely clone"
              />
            </a>
          </div>
          <div className="project_title_div">
            <a href="https://moonlit-taffy-38ae5b.netlify.app/" target="blank">
              <h3 className="project_title">Asos Clone</h3>
            </a>
          </div>

          <div className="project_description">
            Asos is an Online Shopping Website for the Latest Clothes & Fashion
            for Man and Woman. I have created the product and product's show
            page with using tech stacks.
          </div>

          <div className="project_tech_icon">
            <span>TECH STACKS: </span>
            HTML | CSS | JAVASCRIPT | NETLIFY | GITHUB
          </div>
          <div className="project_button">
            <a
              href="https://github.com/Arun-Jawlia/Project-ASOS-updated/tree/Arun/Unit-3%20project%20ASOS"
              target="blank"
            >
              <button>
                <i class="uil uil-github"></i>
              </button>
            </a>
            <a href="https://moonlit-taffy-38ae5b.netlify.app/" target="blank">
              <button>
                <i class="uil uil-eye"></i>
              </button>
            </a>
          </div>
        </div>

        {/* Third project sephora */}

        <div className="project_content">
          <div className="project_img_div">
            <a
              href="
              https://magenta-melba-85b7ee.netlify.app/"
              target="blank"
            >
              <img
                className="project_image"
                src={sephoraImg}
                alt="sephora clone"
              />
            </a>
          </div>
          <div className="project_title_div">
            <a href="https://magenta-melba-85b7ee.netlify.app/" target="blank">
              <h3 className="project_title">Sephora Clone</h3>
            </a>
          </div>

          <div className="project_description">
            Sephora is a leading lifestyle brand. It's an online luxury brand
            for beauty and skincare products for women.
          </div>

          <div className="project_tech_icon">
            <span>TECH STACKS: </span>
            HTML | CSS | JAVASCRIPT | NETLIFY | GITHUB | API
          </div>
          <div className="project_button">
            <a href="https://github.com/Yashhh08/SEPHORA-Clone" target="blank">
              <button>
                <i class="uil uil-github"></i>
              </button>
            </a>
            <a href="https://magenta-melba-85b7ee.netlify.app/" target="blank">
              <button>
                <i class="uil uil-eye"></i>
              </button>
            </a>
          </div>
        </div>

        {/* Fourth project Nordstorm */}

        <div className="project_content">
          <div className="project_img_div">
            <a
              href="
            https://effulgent-buttercream-91e4a5.netlify.app/"
              target="blank"
            >
              <img
                className="project_image"
                src={nordstormImg}
                alt="nordStorm clone"
              />
            </a>
          </div>
          <div className="project_title_div">
            <a
              href="https://effulgent-buttercream-91e4a5.netlify.app/"
              target="blank"
            >
              <h3 className="project_title">Nordstorm Clone</h3>
            </a>
          </div>

          <div className="project_description">
            Nordstrom, Inc. is a leading fashion retailer offering compelling
            clothing, shoes and accessories for men, women and kids.
          </div>

          <div className="project_tech_icon">
            <span>TECH STACKS: </span>
            HTML | CSS | JAVASCRIPT | NETLIFY | GITHUB
          </div>
          <div className="project_button">
            <a
              href="https://github.com/Harshal-Jadhav/flaky-touch-8976"
              target="blank"
            >
              <button>
                <i class="uil uil-github"></i>
              </button>
            </a>
            <a
              href="https://effulgent-buttercream-91e4a5.netlify.app/"
              target="blank"
            >
              <button>
                <i class="uil uil-eye"></i>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
