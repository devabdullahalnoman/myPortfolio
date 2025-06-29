import React from "react";
import DP from "../assets/DP.jpeg";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="bg-[#eff5ff] pt-23">
      <div className="w-11/12 xl:w-10/12 mx-auto flex flex-col-reverse lg:flex-row justify-around items-center gap-18 lg:py-32">
        <div className="space-y-8 w-10/12 md:ps-6">
          <h2 className="text-3xl xl:text-4xl 2xl:text-5xl text-accent">
            Hi there! I am
          </h2>
          <h1 className="text-5xl xl:text-6xl 2xl:text-7xl text-primary">
            Abdullah Al Noman
          </h1>
          <h2 className="text-2xl xl:text-3xl 2xl:text-4xl text-secondary">
            MERN Stack Developer
          </h2>
          <h3 className="text-xl xl:text-2xl 2xl:text-3xl leading-6 lg:leading-8 xl:leading-10 lg:w-10/12 text-base-content opacity-60">
            I’m a MERN stack developer from Bangladesh, building fast,
            responsive, and user-focused web apps. From sleek frontends to
            secure backends, I craft full-stack solutions that make an impact.
          </h3>
          <div className="flex gap-3 ps-6">
            <a href="">
              <BsGithub size={45} />
            </a>
            <a href="">
              <FaLinkedin size={45} />
            </a>
          </div>
          <button className="btn btn-outline btn-xl">Download Resume</button>
        </div>
        <div className="px-5 flex justify-end">
          <img
            src={DP}
            className="rounded-full w-sm lg:w-10/12 shadow-[0_0_30px_10px_rgba(59,130,246,0.6)]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
