import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import { Link, animateScroll } from 'react-scroll'


const Navbar = () => {

    const [colorChange, setColorchange] = useState(false);
    const [active, setActive] = useState('home')
    const [head, setHead] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 80 || head) {
            setColorchange(true);

        }
        else {
            setColorchange(false);
        }

    };

    console.log(active);
    window.addEventListener('scroll', changeNavbarColor);
    useEffect(() => {
        if (head || colorChange) {
            setColorchange(true)
        } else {
            setColorchange(false)
        }
    }, [head, colorChange])
    return (
        <Container>
            <header className="header" style={{ backgroundColor: `${colorChange ? 'white' : 'transparent'}` }}>
                <a href="/" className="logo"> <span>A</span>run </a>
                <input className="menu-btn" type="checkbox" id="menu-btn" />
                <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
                <ul className="menu">
                    <li className={`${active === 'home' ? 'activeClass' : ''}`} ><Link activeClass="active" to="/" onClick={() => {
                        animateScroll.scrollToTop()
                        setActive('home')
                    }} spy={true} smooth={true}>Home</Link></li>
                    <li className={`${active === 'about' ? 'activeClass' : ''}`} ><Link activeClass="active" to="about" onClick={() => {
                        setHead(true)
                        setActive("about")
                    }} spy={true} smooth={true}>About</Link></li>
                    <li className={`${active === 'skills' ? 'activeClass' : ''}`}  ><Link activeClass="active" to="skills" onClick={() => {
                        setHead(true)
                        setActive("skills")
                    }} spy={true} smooth={true}>Skills</Link></li>
                    <li className={`${active === 'projects' ? 'activeClass' : ''}`}><Link activeClass="active" to="projects" onClick={() => {
                        setHead(true)
                        setActive("projects")
                    }} spy={true} smooth={true}>Projects</Link></li>
                    <li className={`${active === 'contact' ? 'activeClass' : ''}`} ><Link activeClass="active" to="contact" onClick={() => {
                        setHead(true)
                        setActive("contact")
                    }} spy={true} smooth={true}>Contact</Link></li>
                    <li onClick={() => setActive()}><div className='resumeBox'><a href="https://drive.google.com/file/d/1qF94nmtOQeZpoSX5yNapPZRziJU4Wl3E/view?usp=drive_link" target='_blank' rel='noreferrer'>
                        Resume
                    </a></div></li>
                </ul>
            </header>
        </Container>
    )
}

const Container = styled.div`
    width:100%;
    height:70px;
    z-index: 5;

    .activeClass{
        background: #088395;
        color:white;
        border-radius: 10px;
    
    }

    .activeClass a{
        background: #088395;
        color:white;
        /* border-radius: 10px; */
    }

    .activeClass a:hover{
        /* color:white; */
    }

    a {
        color: #000;
    }
    
    /* header */
    
    .header {
        position:fixed;
        width:100%;
        z-index: 3;
        padding-top:5px;
    }
    
    .header ul {
        margin: 0;
        padding: 0;
        list-style: none;
        overflow: hidden;
        /* padding-right:50px; */
    }
    
    .header li a {
        display: block;
        padding: 20px 25px;
        text-decoration: none;
    }
    
    .header .logo {
        display: flex;
        float: left;
        font-size: 2em;
        padding: 10px 30px;
        text-decoration: none;
        color:#343a40;
    }
    
    /* menu */
    
    .header .menu {
        clear: both;
        max-height: 0;
        transition: max-height .2s ease-out;
        text-transform:uppercase;
        font-size:15px;
        font-weight:700;
        color:#343a40;
    }

    li a{
        color:#343a40;
        font-size: 12px;
    }

    li a:hover{
        color:#071952;
        cursor: pointer;
    }

    .header li .resume{
        width:80px;
        padding:10px 20px;
        border-radius:10px;
        border:1px solid #01a479;
        background:#01a479;
        color:white;
        display:flex;
        align-items:center;
        justify-content:center;
        gap:5px;
        font-weight:bold;
        margin-top:5px;
    }

    
    
    /* menu icon */
    
    .header .menu-icon {
        cursor: pointer;
        display: inline-block;
        float: right;
        padding: 28px 20px;
        position: relative;
        user-select: none;
    }
    
    .header .menu-icon .navicon {
        background: #333;
        display: block;
        height: 2px;
        position: relative;
        transition: background .2s ease-out;
        width: 18px;
    }
    
    .header .menu-icon .navicon:before,
    .header .menu-icon .navicon:after {
        background: #333;
        content: '';
        display: block;
        height: 100%;
        position: absolute;
        transition: all .2s ease-out;
        width: 100%;
    }
    
    .header .menu-icon .navicon:before {
        top: 5px;
    }
    
    .header .menu-icon .navicon:after {
        top: -5px;
    }
    
    /* menu btn */
    
    .header .menu-btn {
        display: none;
    }
    
 
    .header .menu-btn:checked ~ .menu {
        width:100%;
        max-height: 450px;
        background-color:white;
    }
    
    .header .menu-btn:checked ~ .menu-icon .navicon {
        background: transparent;
    }
    
    .header .menu-btn:checked ~ .menu-icon .navicon:before {
        transform: rotate(-45deg);
    }
    
    .header .menu-btn:checked ~ .menu-icon .navicon:after {
        transform: rotate(45deg);
    }
    
    .header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
    .header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
        top: 0;
    }
    
    /* 48em = 768px */
    
    @media (min-width: 60em) {
        .header li {
            float: left;
        }
        
        .header li a {
            /* padding: 20px 30px; */
        }

        .header .menu {
            clear: none;
            float: right;
            max-height: none;
        }

        .header .menu-icon {
            display: none;
        }
       
    }

    @media only screen and (min-width: 769px) and (max-width:960px){
        .header .menu {
            font-size:small;
        }

        .resumeBox{
            display:flex;
            align-items:center;
            justify-content:center;
            margin-bottom:20px;
        }
    }
    
    @media only screen and (min-width: 481px) and (max-width:768px){
        .resumeBox{
            display:flex;
            align-items:center;
            justify-content:center;
            margin-bottom:20px;
        }

        .header {
            background: white !important;
        }
    }

    @media only screen and (min-width:320px) and (max-width:480px){
        .resumeBox{
            display:flex;
            align-items:center;
            justify-content:center;
            margin-bottom:20px;
        }

        .header {
            background: white !important;
        }
    }

    @media only screen and (max-width: 320px){
        .resumeBox{
            display:flex;
            align-items:center;
            justify-content:center;
            margin-bottom:20px;
        }

        .header {
            background: white !important;
        }

    }

    @media only screen and (max-width: 319px){
        .resumeBox{
            display:flex;
            align-items:center;
            justify-content:center;
            margin-bottom:20px;
        }

        .header {
            background: white !important;
        }

    }
`

export default Navbar