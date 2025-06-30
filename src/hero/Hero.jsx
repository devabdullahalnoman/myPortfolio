import React from "react";
import DP from "../assets/DP.jpeg";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaDev } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      className="bg-base-100 text-base-content pt-10 pb-10 shadow-2xl"
      id="hero"
    >
      <div className="w-11/12 xl:w-10/12 mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 space-y-6 text-center lg:text-left font-space lg:ms-6"
        >
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl sm:text-2xl text-accent font-semibold tracking-wide"
          >
            Hi there! I am
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl font-orbitron text-primary font-bold"
          >
            <Typewriter words={["Abdullah Al Noman"]} />
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg sm:text-xl text-secondary font-medium"
          >
            MERN Stack Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-base sm:text-lg text-base-content/80 leading-relaxed max-w-xl mx-auto lg:mx-0"
          >
            I’m a MERN stack developer from Bangladesh, building fast,
            responsive, and user-focused web apps. From sleek frontends to
            secure backends, I craft full-stack solutions that make an impact.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex justify-center lg:justify-start py-2"
          >
            <a
              className="btn btn-ghost py-8 text-primary hover:text-accent"
              href="https://github.com/devabdullahalnoman"
              target="_blank"
            >
              <BsGithub size={50} />
            </a>
            <a
              className="btn btn-ghost py-8 text-primary hover:text-accent"
              href="https://www.linkedin.com/in/dev-abdullah-al-noman/"
              target="_blank"
            >
              <FaLinkedin size={50} />
            </a>
            <a
              className="btn btn-ghost py-8 text-primary hover:text-accent"
              href="https://dev.to/devabdullahalnoman"
              target="_blank"
            >
              <FaDev size={50} />
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex justify-center lg:justify-start"
          >
            <a href="https://docs.google.com/document/d/1vwrYWy5q9oOkSRaNZVq0VTmvw4kxWPSm7dMuflpeadw/export?format=pdf">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-xl bg-accent text-base-100 font-semibold rounded-xl"
              >
                Download Resume
              </motion.button>
            </a>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ y: 70, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 flex justify-center py-8"
        >
          <div className="w-64 sm:w-72 md:w-80 lg:w-8/12 rounded-full bg-gradient-to-br from-primary via-secondary to-accent p-1 glow">
            <div className="w-full h-full rounded-full bg-base-200 overflow-hidden">
              <img
                src={DP}
                alt="Abdullah Al Noman"
                className="w-sm lg:w-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
