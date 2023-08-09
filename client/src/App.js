import React, { useRef, useState} from "react";
//import NavBar from "./components/NavBar";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Promotion from "./Pages/Promotions";
import About from "./Pages/About";
import "./app.css";
function App() {
  const home = useRef(null);
  const about = useRef(null);
  const promotion = useRef(null);
  const contact = useRef(null);
  
  const [mobile, setMobile] = useState(false);
  const toggleMobile = () => {
    setMobile(!mobile);
  };

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
        <div className="navbar-container">
          <div className="logo">
            <span>Thrilltopia</span>
          </div>
          <ul className={!mobile? "navbar":"navbar active"}>
            <div className="nav-item">
              <li onClick={() => scrollToSection(home)}>Home</li>
            </div>

            <div className="nav-item">
              <li onClick={() => scrollToSection(about)}>About</li>
            </div>

            <div className="nav-item">
              <li onClick={() => scrollToSection(promotion)}>Promotion</li>
            </div>

            <div className="nav-item">
              <li onClick={() => scrollToSection(contact)}>Contact</li>
            </div>
          </ul>
          <button className="mobile-menu-icon" onClick={toggleMobile}>
            {mobile ? <ImCross /> : <FaBars />}
          </button>
        </div>
     
      <section ref={home} className="home">
        <Home />
      </section>
      <section ref={about} className="about">
        <About />
      </section>
      <section ref={promotion} className="promotion">
        <Promotion />
      </section>
      <section ref={contact} className="contact">
        <Contact />
      </section>
      <section className="footer">
      <div className="footer-container">
            <p>&copy; 2023 Thrilltopia Amusement Park. All rights reserved.</p>
            <ul className="footer-links">
                <li onClick={() => scrollToSection(home)}>Home</li>
                <li onClick={() => scrollToSection(about)}>About Us</li>
                <li onClick={() => scrollToSection(promotion)}>Promotions</li>
                <li onClick={() => scrollToSection(contact)}>Contact</li>
            </ul>
        </div>
      </section>
    </div>
  );
}

export default App;
