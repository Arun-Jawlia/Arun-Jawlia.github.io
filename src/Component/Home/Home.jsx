import React from 'react'
import { Data } from './Data'
import './Home.css'
import { Social } from './Social'
import myImg from '../../assets/arun_png.png'
import ScrollDown from './ScrollDown'

const Home = () => {
  return (
  <section className="home section" id="home">
    <div className="home_container container grid">
        <div className="home_content grid">
            <Social/>
            <div className="home_img">
              <img src={myImg} alt="" />
               </div>
            <Data/>

        </div>
        {/* <ScrollDown/> */}
    </div>
    
  </section>
    )

}

export default Home