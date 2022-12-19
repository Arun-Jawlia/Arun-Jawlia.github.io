import React from "react";
import "./skills.css";

import HTML_LOGO from '../../assets/HTML5_badge.png';
import CSS_LOGO from '../../assets/css3_logo.png';
import JS_LOGO from '../../assets/js.png';
import REACT_LOGO from '../../assets/react_logo.png';
import REDUX_LOGO from '../../assets/redux_logo.png';
import NODE_LOGO from '../../assets/Node-JS.png';
import MONGODB_LOGO from '../../assets/mongoDb-logo.png';
import VERCEL_LOGO from '../../assets/vercel_logo.png';
import POSTMAN_LOGO from '../../assets/postman.png';
import NETLIFY_LOGO from '../../assets/netlify-logo-transparent.png';
import GIT_LOGO from '../../assets/git-logo-transparent.png';
import DSA from '../../assets/dsa_img.png';
import EXPRESS from '../../assets/express.png';
import BootStrap from '../../assets/bootstraplogo.png'
import chakralogo from '../../assets/chakralogo.png'





export const Skills = () => {
  return (
    <section id="skills" className="section">
      <h2 className="section_title">Skills</h2>
      <span className="section_subtitle">Technical level</span>

      <div className="container skills_main_container  ">
        <div className="skills_frontend skills_container">
          <h3 className="skills_title"> Frontend </h3>
          <div className="skills_content">
            <article className="skills_details">
              <div>
                <img alt='logo' src={HTML_LOGO} className="skills_details-icon" />
              </div>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skills_details">
              <div>
                <img alt='logo' src={CSS_LOGO} className="skills_details-icon" />
              </div>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skills_details">
              <div>
                <img alt='logo' src={JS_LOGO} className="skills_details-icon" />
              </div>
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skills_details">
              <div>
                <img alt='logo' src={REACT_LOGO} className="skills_details-icon" />
              </div>
              <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skills_details">
              <div>
                <img alt='logo' src={REDUX_LOGO} className="skills_details-icon" />
              </div>
              <div>
                <h4>Redux</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skills_details">
              <div>
                <img alt='logo' src={BootStrap} className="skills_details-icon" />
              </div>
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skills_details">
              <div>
                <img alt='logo' src={chakralogo} className="skills_details-icon" />
              </div>
              <div>
                <h4>Chakra-UI</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skills_details">
              <div>
                <img alt='logo' src={DSA} className="skills_details-icon" />
              </div>
              <div>
                <h4>DSA</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
          <br />
          <hr />
          <br />
          <h3 className="skills_title"> Backend </h3>
          <div className="skills_content">
            <article className="skills_details">
              <div>
                <img alt='logo' src={NODE_LOGO} className="skills_details-icon" />
              </div>
              <div>
                <h4>Node</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skills_details">
              <div>
                <img alt='logo' src={MONGODB_LOGO} className="skills_details-icon" />
              </div>
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skills_details">
              <div>
                <img alt='logo' src={EXPRESS} className="skills_details-icon" />
              </div>
              <div>
                <h4>Express</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>

          <hr />
          <br />
          <h3 className="skills_title"> Tech Tools </h3>
          <div className="skills_content">
            <article className="skills_details">
              <div>
                <img alt='logo' src={NETLIFY_LOGO} className="skills_details-icon" />
              </div>
              <div>
                <h4>Netlify</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skills_details">
              <div>
                <img alt='logo' src={VERCEL_LOGO} className="skills_details-icon" />
              </div>
              <div>
                <h4>Vercel</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="skills_details">
              <div>
                <img alt='logo' src={GIT_LOGO} className="skills_details-icon" />
              </div>
              <div>
                <h4>Git-bash</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skills_details">
              <div>
                <img alt='logo' src={POSTMAN_LOGO} className="skills_details-icon" />
              </div>
              <div>
                <h4>Postman</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

// import React from "react";
// import './skills.css'

// export const Skills = () => {
//   return (
//     <section className="skills section" id="skills">
//       <h2 className="section_title" >Skills</h2>
//       <span className="section_subtitle" >My Technical Level</span>

//       <div className="skills_container container grid">
//         <div className="skills_content">
//           <h3 className="skills_title" > Technical Levels </h3>
//           <div className="skills_box">
//             <div className="skills_group">
//               <div className="skills_data">
//                 <i class="bx bx-badge-check"></i>
//                 <div>
//                   <h3 className="skills_name">HTML</h3>
//                 </div>
//                   <span className="skills_level">Intermediate</span>
//               </div>

//               <div className="skills_data">
//                 <i class="bx bx-badge-check"></i>
//                 <div>
//                   <h3 className="skills_name">CSS</h3>
//                   <span className="skills_level">Basic</span>
//                 </div>
//               </div>

//               <div className="skills_data">
//                 <i class="bx bx-badge-check"></i>
//                 <div>
//                   <h3 className="skills_name">JavaScript</h3>
//                   <span className="skills_level">Intermediate</span>
//                 </div>
//               </div>

//               <div className="skills_data">
//                 <i class="bx bx-badge-check"></i>
//                 <div>
//                   <h3 className="skills_name">ReactJs</h3>
//                   <span className="skills_level">Intermediate</span>
//                 </div>
//               </div>

//               <div className="skills_data">
//                 <i class="bx bx-badge-check"></i>
//                 <div>
//                   <h3 className="skills_name">MongoDb</h3>
//                   <span className="skills_level">Basic</span>
//                 </div>
//               </div>

//               <div className="skills_data">
//                 <i class="bx bx-badge-check"></i>
//                 <div>
//                   <h3 className="skills_name">ExpressJs</h3>
//                   <span className="skills_level">Basic</span>
//                 </div>
//               </div>

//               <div className="skills_data">
//                 <i class="bx bx-badge-check"></i>
//                 <div>
//                   <h3 className="skills_name">NodeJs</h3>
//                   <span className="skills_level">Intermediate</span>
//                 </div>
//               </div>

//               <div className="skills_data">
//                 <i class="bx bx-badge-check"></i>
//                 <div>
//                   <h3 className="skills_name">Chakra UI</h3>
//                   <span className="skills_level">Intermediate</span>
//                 </div>
//               </div>

//               <div className="skills_data">
//                 <i class="bx bx-badge-check"></i>
//                 <div>
//                   <h3 className="skills_name">Git & Github</h3>
//                   <span className="skills_level">Intermediate</span>
//                 </div>
//               </div>

//               <div className="skills_data">
//                 <i class="bx bx-badge-check"></i>
//                 <div>
//                   <h3 className="skills_name">VS Code</h3>
//                   <span className="skills_level">Intermediate</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
