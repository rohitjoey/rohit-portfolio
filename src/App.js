import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import About from "./components/About";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Skill from "./components/Skills";

function App() {
  useEffect(() => {
    Aos.init({
      once: true,
    });
  }, []);
  return (
    <>
      <div className="min-h-screen py-10 px-5 sm:px-3 bg-gray-100">
        <div data-aos="fade-down" data-aos-duration="800">
          <Card />
        </div>
        <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
          <About />
        </div>
        <Skill />
      </div>
      <Footer />
    </>
  );
}

export default App;
