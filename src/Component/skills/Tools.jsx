import React, { useState } from "react";
import "./skills.css";

import VERCEL_LOGO from "../../assets/vercel_logo.png";
import POSTMAN_LOGO from "../../assets/postman.png";
import NETLIFY_LOGO from "../../assets/netlify-logo-transparent.png";
import GIT_LOGO from "../../assets/git-logo-transparent.png";


const toolsArr=[
  {
    "logo":VERCEL_LOGO,
    name:'VERCEL'
  },  
  {
    "logo":GIT_LOGO,
    name:'GITHUB'
  },  
  {
    "logo":NETLIFY_LOGO,
    name:'NETLIFY'
  },  
  {
    "logo":POSTMAN_LOGO,
    name:'POSTMAN'
  }  
]  



export const Tools = () => {

 


  return (
    <section className="skills section" >
      <h2 className="section_title" >Tools</h2>
      <span className="section_subtitle" >My gadgets</span>
      

      <div className="tools_container  " >
     {

        toolsArr?.map((item)=>
        {
          return(
            <div   className="tools_arr" >
              <div><img src={item.logo}/></div>
              <div><p>{item.name}</p></div>
            </div>
            
          )
        })

       } 
      
       
      </div>
      
     
      
       
    </section>
  );
};
