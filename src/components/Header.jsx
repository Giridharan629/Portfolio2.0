import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [nightMode, setNightModde] = useState(false);

  useEffect(()=>{
    document.body.classList.add("night")
  },[])

  useEffect(nightActivation,[nightMode])

  function nightActivation(){
    document.body.classList.toggle("night")
    console.log("printing")
  }

  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
      <div
        className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center
    md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]"
      >
        <h1>
          <a href="/" className="logo">
            <img
              src="/images/favicon1.png"
              width={40}
              height={40}
              alt="Giri Dharan"
            />
          </a>
        </h1>

        <div className="flex items-center  gap-5">
          <div className="menu-btn md:invisible" onClick={()=>setNightModde(!nightMode)}>
            {nightMode ? (
              <span className="material-symbols-rounded">dark_mode</span>
            )
            :(
              <span className="material-symbols-rounded">light_mode</span>
            )}
          </div>

          <div className="relative md:justify-self-center">
            <button
              className=" menu-btn md:hidden"
              onClick={() => setNavOpen(!navOpen)}
            >
              {navOpen ? (
                <span className="material-symbols-rounded">close</span>
              ) : (
                <span className="material-symbols-rounded">Menu</span>
              )}
            </button>
            <Navbar navOpen={navOpen} />
          </div>
        </div>

        <div className="flex items-center gap-5 max-md:hidden">


        <div className="menu-btn " onClick={()=>setNightModde(!nightMode)}>
            {nightMode ? (
              <span className="material-symbols-rounded">dark_mode</span>
            ) : (
              <span className="material-symbols-rounded">light_mode</span>
            )}
          </div>
        <a
          href="#contact"
          className=" btn btn-secondary min-w-[110px] md:justify-self-end "
        >
          Contact Me
        </a>
            </div>
      </div>
    </header>
  );
};

export default Header;
