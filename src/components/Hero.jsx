import React from "react";

import { ButtonOutline, ButtonPrimary } from "./Button";

const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className=" container items-center lg:grid lg:grid-cols-2 lg:gap-10">
        <div>
          <div className=" flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img
                src="/images/avatar-1.jpg"
                width={40}
                height={40}
                alt="Giridharan portrait"
                className=""
              />
            </figure>
            <div className=" status flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className=" relative h-2 w-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Available for work
            </div>
          </div>
          <h2 className="headline-1 mt-5 mb-8 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] lg:mb-10">
            Building Scalable Modern Websites for the Future
          </h2>
          <div className=" flex items-center gap-3">
            <ButtonPrimary 
              label="Download CV"
              icon = "download"
              href="/resume.pdf"
            />
            
            
            <ButtonOutline 
              href="#about"
              label="Scroll down"
              icon="arrow_downward"
            />
          </div>
        </div>

        <div className="hidden lg:block">
          <figure className=" w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] overflow-hidden">
            <img
              src="/images/giri_vector.png"
              width={656}
              height={800}
              // alt="Giridharan"
              className="w-full"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
