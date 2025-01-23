import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


import { ReactLenis, useLenis } from 'lenis/react'



const App = () => {
  return (
    <ReactLenis root>
      <Header />
      <main>
        <Hero />
        <About/>
        <Skills/>
        <Work/>
        <Contact/>
      </main>
      <Footer/>
    </ReactLenis>
  );
};

export default App;
