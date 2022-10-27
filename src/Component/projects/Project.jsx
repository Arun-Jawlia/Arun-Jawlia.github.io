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
          <a href="https://optimizely-clone.vercel.app/" target="blank">
            <h3 className="project_title">Optimizely Website Clone</h3>
          </a>
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

          <div className="project_description">
            <div>
              <span>Description:</span>
            </div>
            Optimizely is an American company that provides digital experience
            platform software as a service. Optimizely provides A/B testing and
            multivariate testing tools, website personalization, and feature
            toggle capabilities, as well as web content management and digital
            commerce.
          </div>
          <div className="project_responsible">
            <div>
              <span>My Role:</span>
            </div>
            I am responsible for the Home Page of this website.
          </div>

          <div className="project_tech_icon">
            <i class="bx bxl-html5 tech_icon"></i>
            <i class="bx bxl-css3 tech_icon"></i>
            <i class="bx bxl-javascript tech_icon"></i>
          </div>
          <div className="project_button">
            <a
              href="https://github.com/Arun-Jawlia/sable-club-7536/tree/main/my_project_unit_4"
              target="blank"
            >
              <button>Github</button>
            </a>
            <a href="https://optimizely-clone.vercel.app/" target="blank">
              <button>View</button>
            </a>
          </div>
        </div>

        {/* Second project- Asos  */}

        <div className="project_content">
          <a href="https://moonlit-taffy-38ae5b.netlify.app/" target="blank">
            <h3 className="project_title">Asos Website Clone</h3>
          </a>
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

          <div className="project_description">
            <div>
              <span>Description:</span>
            </div>
            It's an Online Shopping website for the Latest Clothes & Fashion for
            Man and Woman.
          </div>
          <div className="project_responsible">
            <div>
              <span>My Role:</span>
            </div>
            I am responsible for the Product Page and Show Page of this website.
          </div>

          <div className="project_tech_icon">
            <i class="bx bxl-html5 tech_icon"></i>
            <i class="bx bxl-css3 tech_icon"></i>
            <i class="bx bxl-javascript tech_icon"></i>
          </div>
          <div className="project_button">
            <a
              href="https://github.com/Arun-Jawlia/Project-ASOS-updated/tree/Arun/Unit-3%20project%20ASOS"
              target="blank"
            >
              <button>Github</button>
            </a>
            <a href="https://moonlit-taffy-38ae5b.netlify.app/" target="blank">
              <button>View</button>
            </a>
          </div>
        </div>

        {/* Third project sephora */}

        <div className="project_content">
          <a href="https://optimizely-clone.vercel.app/" target="blank">
            <h3 className="project_title">Sephora Website Image</h3>
          </a>
          <a
            href="
                https://optimizely-clone.vercel.app/"
            target="blank"
          >
            <img
              className="project_image"
              src={sephoraImg}
              alt="sephora clone"
            />
          </a>

          <div className="project_description">
            <div>
              <span>Description:</span>
            </div>
              NNNow is a leading lifestyle brand online with a wide range of
              quality products, I always received original authentic stuff from
              here. I have never received a fake or rip-off product when
              shopping from Nnnow. It's an online luxury brand for beauty and
              skincare products for women.
          </div>
          <div className="project_responsible">
            <div>
              <span>My Role:</span>
            </div>
            I am responsible for the Home Page of this website.
          </div>

          <div className="project_tech_icon">
            <i class="bx bxl-html5 tech_icon"></i>
            <i class="bx bxl-css3 tech_icon"></i>
            <i class="bx bxl-javascript tech_icon"></i>
          </div>
          <div className="project_button">
            <a href="https://github.com/Yashhh08/SEPHORA-Clone" target="blank">
              <button>Github</button>
            </a>
            <a href="https://optimizely-clone.vercel.app/" target="blank">
              <button>View</button>
            </a>
          </div>
        </div>

        {/* Fourth project Nordstorm */}

        <div className="project_content">
          <a
            href="https://effulgent-buttercream-91e4a5.netlify.app/"
            target="blank"
          >
            <h3 className="project_title">Nordstorm Website Clone</h3>
          </a>
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

          <div className="project_description">
            <div>
              <span>Description:</span>
            </div>
            Optimizely is an American company that provides digital experience
            platform software as a service. Optimizely provides A/B testing and
            multivariate testing tools, website personalization, and feature
            toggle capabilities, as well as web content management and digital
            commerce.
          </div>
          <div className="project_responsible">
            <div>
              <span>My Role:</span>
            </div>
            I am responsible for the Home Page of this website.
          </div>

          <div className="project_tech_icon">
            <i class="bx bxl-html5 tech_icon"></i>
            <i class="bx bxl-css3 tech_icon"></i>
            <i class="bx bxl-javascript tech_icon"></i>
          </div>
          <div className="project_button">
            <a
              href="https://github.com/Harshal-Jadhav/flaky-touch-8976"
              target="blank"
            >
              <button>Github</button>
            </a>
            <a
              href="https://effulgent-buttercream-91e4a5.netlify.app/"
              target="blank"
            >
              <button>View</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
