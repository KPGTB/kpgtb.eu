import Projects from "./section/Projects";
import Home from "./section/Home";
import Clients from "./section/Clients";
import Footer from "./section/Footer";
import './style/App.css'
import Contact from "./section/Contact";

function App() {

  return (
    <div className="App">
        <Home />
        <Projects />
        <Contact />
        <Clients />
        <Footer />
    </div>
  );
}

export default App;
