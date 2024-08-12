import React from 'react'
import Navbar from '../components/Navbar'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
// import Github from '../components/Github'
import ContactUs from '../components/ContactUs'
import About from '../components/About'
import Home from '../components/Home'
import Footer from '../components/Footer'

const Homepage = () => {
    return (
        <>
            <Navbar />
            <Home/>
            <About />
            {/* <Experience/> */}
            <Skills/>
            <Projects/>
            {/* <Github/> */}
            <ContactUs/>
            <Footer/>
        </>
    )
}

export default Homepage