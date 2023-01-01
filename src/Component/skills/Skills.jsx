import React from "react";
import "./skills.css";
import HTML_LOGO from "../../assets/HTML5_badge.png";
import CSS_LOGO from "../../assets/css3_logo.png";
import JS_LOGO from "../../assets/js.png";
import REACT_LOGO from "../../assets/react_logo.png";
import REDUX_LOGO from "../../assets/redux_logo.png";
import NODE_LOGO from "../../assets/Node-JS.png";
import MONGODB_LOGO from "../../assets/mongoDb-logo.png";
import VERCEL_LOGO from "../../assets/vercel_logo.png";
import POSTMAN_LOGO from "../../assets/postman.png";
import NETLIFY_LOGO from "../../assets/netlify-logo-transparent.png";
import GIT_LOGO from "../../assets/git-logo-transparent.png";
import DSA from "../../assets/dsa_img.png";
import EXPRESS from "../../assets/express.png";
import { Box, Center, Image, SimpleGrid, Text } from "@chakra-ui/react";

const skillsArr=[
  {
    "logo":HTML_LOGO,
    name:'HTML'
  },
  {
    "logo":CSS_LOGO,
    name:'CSS'
  },
  {
    "logo":JS_LOGO,
    name:'JAVASCRIPT'
  },
  {
    "logo":REACT_LOGO,
    name:'REACTJS'
  },
  {
    "logo":REDUX_LOGO,
    name:'REDUX'
  },
  {
    "logo":NODE_LOGO,
    name:'NODEJS'
  },
  {
    "logo":MONGODB_LOGO,
    name:'MONGODB'
  },
  {
    "logo":EXPRESS,
    name:'EXPRESSJS'
  },
  {
    "logo":DSA,
    name:'DSA'
  }
]
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



export const Skills = () => {
  return (
    <section id="skills" className="section">
      <h2 className="section_title">Skills</h2>
      <span className="section_subtitle">Technical level</span>

      <div className="container skills_main_container  ">
        
          <Box w='100%' m='auto' p='10px' >
            <Text p={4}   textAlign='center' fontWeight='600' fontSize={['2xl','3xl','3xl','4xl']}>Tech Stacks</Text>
            <SimpleGrid columns={[2,3,4,4,6,7]} gap={5}>
             {
              skillsArr.length>0 && skillsArr.map((item)=>
              {
                return(
                  <Box bgGradient="linear(to-t, red.100, gray.50)" borderRadius='5px' borderColor='gray.100' bgColor='gray.100'   w='100%'  >
                  <Box w={['80%',"80%","80%","80%"]} p={3} m='auto' >
                    <Image   src={item.logo}  />
                  </Box>
                  <Box borderBottomLeftRadius='5px' borderBottomRightRadius='5px' bgColor='black' color='white' w='100%' >
                    <Text  p={2}   textAlign='center' fontWeight='500' fontSize={['sm','md','md','lg']}>{item.name}</Text>
                  </Box>
                </Box>
                )
              })
             }
             
            </SimpleGrid>
          </Box>
          <br />
          <br />
          <hr />
          <br />
          <Box w='100%' m='auto' p='10px' >
            <Text p={4}   textAlign='center' fontWeight='600' fontSize={['2xl','3xl','3xl','4xl']}>Tech Tools</Text>
            <SimpleGrid columns={[2,3,4,6]} gap={5}>
             {
              toolsArr.length>0 && toolsArr.map((item)=>
              {
                return(
                  <Box bgGradient="linear(to-t, red.100, gray.50)" borderRadius='5px' borderColor='gray.100' bgColor='gray.100'   w='100%'  >
                  <Box w={['80%',"60%","60%","60%"]} p={3} m='auto' >
                    <Image   src={item.logo}  />
                  </Box>
                  <Box borderBottomLeftRadius='5px' borderBottomRightRadius='5px' bgColor='black' color='white' w='100%' >
                    <Text  p={2}   textAlign='center' fontWeight='500' fontSize={['sm','md','md','lg']}>{item.name}</Text>
                  </Box>
                </Box>
                )
              })
             }
             
            </SimpleGrid>
          </Box>
        </div>
      
    </section>
  );
};
