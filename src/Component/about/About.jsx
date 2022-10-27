import './about.css'
import myCV from '../../assets/Arun-Jawlia-Resume.pdf.pdf'
import myImg from '../../assets/my_img.jpg'

import React from 'react'
import Info from './Info'

const About = () => {
  return (
   <section className="about section" id="about">
    <h2 className="section_title">About Me
    </h2>
        <span className="section_subtitle">My Introduction</span>

        <div className="about_container container grid">
            <img className='about_img' src={myImg} alt='myimg'/>
            <div className="about_data">
                <Info/>
                <p className="about_description">
                    Full stack web developer, I create web pages with latest technologies available and build them user friendly.
                </p>

                <a download='' href={myCV} >
                    <button>Resume</button>
                </a>
            </div>

        </div>
   </section>
  )
}

export default About