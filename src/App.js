import "./App.css";
import About from "./Component/about/About";
import Contact from "./Component/contact/Contact";
import { Footer } from "./Component/footer/Footer";
import { Github } from "./Component/gitcalender/Github";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import Project from "./Component/projects/Project";
import { Skills } from "./Component/skills/Skills";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Github/>
        <Project />
        
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
