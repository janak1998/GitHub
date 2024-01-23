import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import NavBar from "./components/NavBar";
import PresentationVideo from "./components/PresentationVideo";
import Products from "./components/Products";
import Values from "./components/Values";
import "./index.css";

function App() {
  return (
    <div className="max-w-[1121px] mx-auto">
      <NavBar></NavBar>
      <Intro />
      <Products />
      <PresentationVideo />
      <Values />
      <Features />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
