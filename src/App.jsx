import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About/>
        <Skills/>
      </main>
    </>
  );
};

export default App;
