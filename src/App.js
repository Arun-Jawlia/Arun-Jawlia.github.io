import "./App.css";
import About from "./Component/about/About";
import Contact from "./Component/contact/Contact";
import { Footer } from "./Component/footer/Footer";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import Project from "./Component/projects/Project";
import Scrollup from "./Component/scrollup/Scrollup";
import { Skills } from "./Component/skills/Skills";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Project />
        <Contact />
      </main>
      <Footer />
      <Scrollup/>
    </>
  );
}

export default App;
