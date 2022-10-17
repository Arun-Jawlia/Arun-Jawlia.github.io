import logo from './logo.svg';
import './App.css';
import { Navbar } from './Component/Navbar';
import { AllRoutes } from './Pages/AllRoutes';
import styled from 'styled-components'

function App() {
  return (
    <>
    <Container>
      <NavbarDiv>
      <Navbar/>

      </NavbarDiv>

      <AllRoutes/>
    </Container>
    </>
  );

}

export default App;


const Container = styled.div`
  display: flex;
  border:1px solid white;
  // background-color:teal
  `
const NavbarDiv = styled.div`
color:blue;
`

