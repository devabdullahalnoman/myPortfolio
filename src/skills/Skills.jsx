import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaFire,
  FaKey,
  FaGithub,
  FaCode,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiDaisyui,
  SiShadcnui,
  SiReactrouter,
  SiVercel,
  SiVite,
} from "react-icons/si";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.5 },
  }),
};

const Skills = () => {
  const renderSkill = (icon, label, color, index) => (
    <motion.div
      key={label}
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
    >
      <div className="bg-base-200 rounded-xl shadow-md p-6 flex flex-col items-center justify-center transition duration-300 hover:shadow-xl hover:scale-105">
        <div className={`text-5xl mb-2 ${color}`}>{icon}</div>
        <p className="text-base-content font-medium">{label}</p>
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="bg-base-100 py-24 font-space scroll-mt-20">
      <div className="w-11/12 xl:w-10/12 mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-orbitron font-bold text-primary mb-4"
        >
          My Toolbox
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base-content text-lg md:text-xl mb-12 max-w-3xl mx-auto"
        >
          A full-stack arsenal of technologies I use to build secure, scalable,
          and beautiful web applications.
        </motion.p>
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-accent mb-6">Frontend</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {renderSkill(<FaHtml5 />, "HTML5", "text-orange-500", 0)}
            {renderSkill(<FaCss3Alt />, "CSS3", "text-blue-500", 1)}
            {renderSkill(<FaJs />, "JavaScript", "text-yellow-400", 2)}
            {renderSkill(<SiTailwindcss />, "Tailwind CSS", "text-cyan-400", 3)}
            {renderSkill(<SiDaisyui />, "DaisyUI", "text-purple-400", 4)}
            {renderSkill(<SiShadcnui />, "Shadcn UI", "text-gray-700", 5)}
            {renderSkill(<FaReact />, "React", "text-blue-400", 6)}
            {renderSkill(<SiReactrouter />, "React Router", "text-rose-500", 7)}
          </div>
        </div>
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-accent mb-6">Backend</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {renderSkill(<FaNodeJs />, "Node.js", "text-green-600", 0)}
            {renderSkill(<SiExpress />, "Express.js", "text-gray-600", 1)}
            {renderSkill(<SiMongodb />, "MongoDB", "text-green-500", 2)}
          </div>
        </div>
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-accent mb-6">
            Authentication
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {renderSkill(<FaFire />, "Firebase Auth", "text-orange-400", 0)}
            {renderSkill(<FaKey />, "JWT", "text-amber-500", 1)}
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-accent mb-6">Tools</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {renderSkill(<FaCode />, "VS Code", "text-blue-600", 0)}
            {renderSkill(<FaGithub />, "GitHub", "text-gray-800", 1)}
            {renderSkill(<SiVercel />, "Vercel", "text-black", 2)}
            {renderSkill(<SiVite />, "Vite", "text-violet-600", 3)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
