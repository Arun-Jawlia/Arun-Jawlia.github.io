import React from 'react'
import styled from 'styled-components'
const Experience = () => {
    const compExperience = [
        {
            companyName: 'ChainCode Consulting LLP',
            techStack: 'HTML, CSS, Javascript, React, Redux, Multer, JWT, bcrypt, Swiper,Mongoose, MongoDB, Express.js, Node.js, Next.js, SQL',
            areaOfResponsibility: "Worked On Frontend & Backend in NFT Project (POC)",
            role: 'Full Stack Developer',
            duration: '3 Months'
        },

    ]

    return (
        <Container id='skills'>
            <h1>Experience</h1>
            <div className='skillsContainer'>
                {compExperience.map((ele, index) => (
                    <div key={index}>
                        <p className='companyName'>{ele.companyName}</p>
                        <div className='techStackSec'>
                            <p>Role: <span>{ele.role}</span></p>
                            <p>Duration: <span>{ele.duration}</span></p>
                            <p>Tech Stack: <span>{ele.techStack}</span></p>
                            <p>Area of responsibility: <span>{ele.areaOfResponsibility}</span></p>
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    )
}

const Container = styled.div`
    width:100%;
    margin:auto;
    
    h1{
        color:#01a479;
        text-transform:uppercase;
    }

    

    .skillsContainer>div p{
        font-weight:bold;
    }

    .skillsContainer>div p span{
        font-weight:normal;
    } 

    .skillsContainer{
        width:85%;
        margin:auto;
        display:grid;
        grid-template-columns: repeat(auto-fit,minmax(auto,max-content));
        justify-content:center;
        padding:30px;
        gap:20px;
    }

    .skillsContainer>div{
       display:flex;
       align-items:center;
       flex-direction:column;
       box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
       padding: 20px;
       border-radius: 10px;
    }

    .skillsContainer>div:hover{
        -webkit-transform: translateY(-5px);
        transform: translateY(-5px);
        -webkit-transition: all 0.8s;
        transition: all 0.8s;
     }

     .techStackSec{
        text-align:left;
     }

     .techStackSec p{
       width:250px;
     }
   
`

export default Experience