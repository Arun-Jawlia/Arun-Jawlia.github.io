import React, { useState } from "react";
import "./skills.css";
import HTML_LOGO from "../../assets/HTML5_badge.png";
// import BootStrap from '../../assets/bootstraplogo.png'
import chakralogo from '../../assets/chakralogo.png'

import CSS_LOGO from "../../assets/css3_logo.png";
import JS_LOGO from "../../assets/js.png";
import REACT_LOGO from "../../assets/react_logo.png";
import REDUX_LOGO from "../../assets/redux_logo.png";
import NODE_LOGO from "../../assets/Node-JS.png";
import MONGODB_LOGO from "../../assets/mongoDb-logo.png";
import DSA from "../../assets/dsa_img.png";
import EXPRESS from "../../assets/express.png";
import { Tools } from "./Tools";

const skillsArr=[
  {
    "logo":HTML_LOGO,
    name:'HTML',
    type:'frontend'
  },  
  {
    "logo":CSS_LOGO,
    name:'CSS',
    type:'frontend'
  },  
  {
    "logo":JS_LOGO,
    name:'JAVASCRIPT',
    type:'frontend'
  },  
  {
    "logo":REACT_LOGO,
    name:'REACTJS',
    type:'frontend'
  },  
  {
    "logo":REDUX_LOGO,
    name:'REDUX',
    type:'frontend'
  },  
  {
    "logo":NODE_LOGO,
    name:'NODEJS',
    type:'backend'
  },  
  {
    "logo":MONGODB_LOGO,
    name:'MONGODB',
    type:'backend'
  },  
  {
    "logo":EXPRESS,
    name:'EXPRESSJS',
    type:'backend'
  },  
  {
    "logo":DSA,
    name:'DSA'
  },  
  {
    "logo":chakralogo,
    name:'Chakra UI',
    type:'frontend'
  }  
]  




export const Skills = () => {

  const [type, setType]=useState('')


  return (
    <>
    <section className="skills section" id="skills">
      <h2 className="section_title" >Skills</h2>
      <span className="section_subtitle" >My Technical Level</span>
      <div style={{margin:'auto', display:"flex", columnGap:'0.8rem', justifyContent:'center'}}>
        <button className="button" onClick={()=>setType('')} >All</button>
        <button className="button" onClick={()=>setType('frontend')}>Frontend</button>
        <button className="button" onClick={()=>setType('backend')}>Backend</button>
      </div>

      <div className="skills_container  " >
       {
         skillsArr.length>0 && type!=='' ? skillsArr?.filter((item)=>item.type===type).map((item)=>
        {
          return(
            <div   className="skill_arr" >
              <div><img src={item.logo} alt=''/></div>
              <div><p>{item.name}</p></div>
            </div>
            
          )
        })
        :

        skillsArr?.map((item)=>
        {
          return(
            <div   className="skill_arr" >
              <div><img src={item.logo} alt=''/></div>
              <div><p>{item.name}</p></div>
            </div>
            
          )
        })

       } 
      
       
      </div>
      
     
      
       
    </section>
    <Tools/>
    </>
  )
};
