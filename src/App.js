import React from "react";
import About from "./components/About";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Skill from "./components/Skills";

function App() {
  return (
    <>
      <div className="min-h-screen py-10 px-5 sm:px-3 bg-gray-100">
        <Card />
      </div>
      <About />
      <Navbar />
      <Skill />
      <Footer />
    </>
  );
}

export default App;
