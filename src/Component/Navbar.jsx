import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Navbar = () => {
   
  return (
    <Wrapper>
        <LinkDiv>
            <Link to='/'><div>Home</div></Link>
            <Link to='/about'><div>About</div></Link>
             <Link to='/contact'><div>Contact</div></Link>
             <Link to='/skills'><div>Skills</div></Link>
             <Link to='/project'><div>Project</div></Link>
        </LinkDiv>
    </Wrapper>
    
    
  )
}

const Wrapper = styled.div`
display:flex;
justify-content:space-between;
`


const LinkDiv= styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:spaceBetween;
`