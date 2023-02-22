import React from "react";
import "./project.css";
// import optimizelyImg from "../../assets/optimizely.png";
import asosImg from "../../assets/asos_image.png";
import sephoraImg from "../../assets/sephora_clone.png";
import BlogPage from "../../assets/Blog_app.png";


const projectArr= [
  {
    'project':1,
    'title':'Blog App',
    'desc':"Blog App is used to write your own thought and share with the whole world. You can easily signup, login, write, edit, delete your own post.",
    "role":'Complete Fronted Part (Login Page, Signup Page, Blog Page, Edit Page , Delete Page, Create Page and Profile Page)',
    "techStack":['ReactJS','Express', 'MongoDb','NodeJS', 'Vercel','JWT','Github','VS Code' ],
    "images":[BlogPage],
    "github":'https://github.com/MitreshPrajapati/blogApp',
    "live":'https://our-blogging-app-arun-jawlia.vercel.app/'
  },
  {
    'project':2,
    'title':'Sephora Clone',
    'desc':" Sephora is a leading lifestyle brand. It's an online luxury brand for beauty and skincare products for women. Women can now shop their favorite luxury beauty brands on the Sephora site",
    "role":'Created homepage and navbar using css',
    "techStack":['html','css', 'javascript','netlify', 'github' ],
    "images":[sephoraImg],    
    "github":'https://github.com/Yashhh08/SEPHORA-Clone',
    "live":'https://magenta-melba-85b7ee.netlify.app/'
  },
  {
    'project':3,
    'title':'Asos Clone',
    'desc':" Asos is a British online fashion and cosmetic retailer which sells over 850 brands as well as its own range of clothing and accessories and ships to all 196 countries. Our tagline 'Buy what you see on film and TV'",
    "role":" Created product page and product detail page ",
    "techStack":['html','css', 'javascript','netlify', 'github' ],
    "images":[asosImg],
    "github":'https://github.com/Arun-Jawlia/Project-ASOS-updated/',
    "live":'https://moonlit-taffy-38ae5b.netlify.app/'
  },
]








const Project = () => {
  return (
    <section className="section project" id="project">
      <h2 className="section_title">Project</h2>
      <span className="section_subtitle">My Work</span>
      <div className="project_container ">
    {
      projectArr.length>0 && projectArr?.map((project)=>
      {
        return(
          <div className="project_div" key={project.project}>
            <div>
              <img className="project_image" src={project.images} alt='' /> 
            </div>

            <div  >
               <div> <h2 className="project_title">{project.title}</h2>
                <p className="project_desc" >{project.desc}</p>
                <h4 className="project_desc" >Responsibility: <span style={{color:'#C35817', fontWeight:'500'}}>{project.role}</span> </h4>
                <br />
                <h4 className="project_techStack" > Tech Stack: &nbsp; 👉 <span style={{color:'#C35817'}}>{(project.techStack).join(' | ').toLocaleUpperCase()}</span> </h4>


                <div  style={{display:'flex',marginTop:'1rem',columnGap:'1rem'}}>
                    <a target={'blank'} className="button" href={project.github}> Source Code</a>
                    <a target={'blank'} className="button" href={project.live}>View Live</a>

                </div>
</div>
            </div>
          </div>
        )
      })
    }
             </div>
    </section>
  );
};

export default Project;






     

// {/* Second project- Asos  */}

// <div className="project_content">
//   <div className="project_img_div">
//     <a
//       href="
//     https://moonlit-taffy-38ae5b.netlify.app/"
//       target="blank"
//     >
//       <img
//         className="project_image"
//         src={asosImg}
//         alt="optimizely clone"
//       />
//     </a>
//   </div>
//   <div className="project_title_div">
//     <a href="https://moonlit-taffy-38ae5b.netlify.app/" target="blank">
//       <h3 className="project_title">Asos Clone</h3>
//     </a>
//   </div>

//   <div className="project_description">
//     Asos is an Online Shopping Website for the Latest Clothes & Fashion
//     for Man and Woman. I have created the product and product's show
//     page with using tech stacks.
//   </div>

//   <div className="project_tech_icon">
//     <span>TECH STACKS: </span>
//     HTML | CSS | JAVASCRIPT | NETLIFY | GITHUB
//   </div>
//   <div className="project_button">
//     <a
//       href="https://github.com/Arun-Jawlia/Project-ASOS-updated/tree/Arun/Unit-3%20project%20ASOS"
//       target="blank"
//     >
//       <button>
//         <i class="uil uil-github"></i>
//       </button>
//     </a>
//     <a href="https://moonlit-taffy-38ae5b.netlify.app/" target="blank">
//       <button>
//         <i class="uil uil-eye"></i>
//       </button>
//     </a>
//   </div>
// </div>

// {/* Third project sephora */}

// <div className="project_content">
//   <div className="project_img_div">
//     <a
//       href="
//       https://magenta-melba-85b7ee.netlify.app/"
//       target="blank"
//     >
//       <img
//         className="project_image"
//         src={sephoraImg}
//         alt="sephora clone"
//       />
//     </a>
//   </div>
//   <div className="project_title_div">
//     <a href="https://magenta-melba-85b7ee.netlify.app/" target="blank">
//       <h3 className="project_title">Sephora Clone</h3>
//     </a>
//   </div>

//   <div className="project_description">
//     Sephora is a leading lifestyle brand. It's an online luxury brand
//     for beauty and skincare products for women.
//   </div>

//   <div className="project_tech_icon">
//     <span>TECH STACKS: </span>
//     HTML | CSS | JAVASCRIPT | NETLIFY | GITHUB | API
//   </div>
//   <div className="project_button">
//     <a href="https://github.com/Yashhh08/SEPHORA-Clone" target="blank">
//       <button>
//         <i class="uil uil-github"></i>
//       </button>
//     </a>
//     <a href="https://magenta-melba-85b7ee.netlify.app/" target="blank">
//       <button>
//         <i class="uil uil-eye"></i>
//       </button>
//     </a>
//   </div>
// </div>



/*
// {/* Fourth project Nordstorm */
/* <div className="project_content">
  <div className="project_img_div">
    <a
      href="
        https://optimizely-clone.vercel.app/"
      target="blank"
    >
      <img
        className="project_image"
        src={optimizelyImg}
        alt="optimizely clone"
      />
    </a>
  </div> */

  // <div className="project_title_div">
  //   <a href="https://optimizely-clone.vercel.app/" target="blank">
  //     <h3 className="project_title">Optimizely Clone</h3>
  //   </a>
  // </div>
  // <div className="project_description">
  //   Optimizely is an American company that provides digital experience
  //   platform software as a service. In this website using react, I have
  //   created the homepage of this website and make it responsive as much
  //   I can.
  // </div>

//   <div className="project_tech_icon">
//     <span>TECH STACKS: </span>
//     HTML | CSS | JAVASCRIPT | REACT |NETLIFY | GITHUB
//   </div>
//   <div className="project_button">
//     <a
//       href="https://github.com/Arun-Jawlia/sable-club-7536/tree/main/my_project_unit_4"
//       target="blank"
//     >
//       <button>
//         <i class="uil uil-github"></i>
//       </button>
//     </a>
//     <a href="https://optimizely-clone.vercel.app/" target="blank">
//       <button>
//         <i class="uil uil-eye"></i>
//       </button>
//     </a>
//   </div>
// </div>

/* <div className="project_content">
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
  </div> */

//   <div className="project_description">
//     Nordstrom, Inc. is a leading fashion retailer offering compelling
//     clothing, shoes and accessories for men, women and kids.
//   </div>

//   <div className="project_tech_icon">
//     <span>TECH STACKS: </span>
//     HTML | CSS | JAVASCRIPT | NETLIFY | GITHUB
//   </div>
//   <div className="project_button">
//     <a
//       href="https://github.com/Harshal-Jadhav/flaky-touch-8976"
//       target="blank"
//     >
//       <button>
//         <i class="uil uil-github"></i>
//       </button>
//     </a>
//     <a
//       href="https://effulgent-buttercream-91e4a5.netlify.app/"
//       target="blank"
//     >
//       <button>
//         <i class="uil uil-eye"></i>
//       </button>
//     </a>
//   </div>
// </div>