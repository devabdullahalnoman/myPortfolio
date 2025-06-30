import React from "react";
import { motion } from "motion/react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const renderProject = (title, description, tech, github, demo) => (
    <motion.div
      key={title}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-base-200 rounded-xl shadow-md p-6 flex flex-col justify-between hover:shadow-xl hover:scale-[1.02] transition duration-300">
        <h3 className="text-2xl font-semibold text-accent mb-2">{title}</h3>
        <p className="text-base-content mb-4">{description}</p>
        <p className="text-sm text-secondary mb-4">Tech: {tech}</p>
        <div className="flex gap-4 mt-auto">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-outline"
          >
            <FaGithub className="mr-2" /> GitHub
          </a>
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-primary"
          >
            <FaExternalLinkAlt className="mr-2" /> Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="bg-base-100 py-24 scroll-mt-20">
      <div className="w-11/12 xl:w-10/12 mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Projects</h2>
        <p className="text-base-content text-lg md:text-xl mb-12 max-w-3xl mx-auto">
          A selection of full-stack projects that demonstrate my ability to build responsive, secure, and user-focused applications.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {renderProject(
            "HobbyHub",
            "A community platform for hobbyists to create, join, and manage interest-based groups.",
            "React, Node.js, MongoDB, JWT",
            "#",
            "#"
          )}
          {renderProject(
            "Artifact Tracker",
            "A full-stack app to catalog and visualize personal collections with charts and filters.",
            "React, Express, Recharts",
            "#",
            "#"
          )}
          {renderProject(
            "DevDeck",
            "A developer dashboard with GitHub integration, task tracking, and deployment tools.",
            "React, Firebase, Tailwind CSS",
            "#",
            "#"
          )}
          {renderProject(
            "SecureAuth",
            "A JWT-based authentication system with role-based access and protected routes.",
            "Node.js, Express, MongoDB, JWT",
            "#",
            "#"
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
