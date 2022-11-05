import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import "./skills.css";

export const Skills = () => {
  return (
    <section id="skills" className="section ">
       <h2 className="section_title">Skills</h2>
      <span className="section_subtitle">Technical level</span>
      

      <div className="container  ">
        <div className="skills_frontend skills_container">
        <h3 className="skills_title" > my technical Levels </h3>
          <div className="skills_content">
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <div>
                <h4>DSA</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <div>
                <h4>Redux</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <div>
                <h4>Chakra-UI</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <div>
                <h4>Netlify</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <div>
                <h4>Vercel</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <div>
                <h4>Git-bash</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <div>
                <h4>Node</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <div>
                <h4>Express</h4>
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
