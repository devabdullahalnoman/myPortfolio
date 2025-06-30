import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaChevronDown } from "react-icons/fa";

const ProjectCard = ({
  title,
  description,
  features,
  tech,
  live,
  clientRepo,
  serverRepo,
  image,
  modalDescription,
}) => {
  const [showRepos, setShowRepos] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-20"
    >
      <div className="relative flex flex-col lg:flex-row bg-base-100 shadow-md rounded-xl overflow-visible hover:shadow-xl transition duration-300 h-full">
        <div className="w-full lg:w-1/2 p-4 flex">
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
        <div className="w-full lg:w-1/2 p-6 flex flex-col justify-between space-y-5 h-full">
          <h3 className="text-4xl font-bold text-accent">{title}</h3>
          <p className="text-xl text-base-content leading-relaxed">
            {description}
          </p>

          <ul className="list-disc list-inside text-base-content text-lg pl-4">
            {features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 pt-1">
            {tech.map((t, idx) => (
              <span key={idx} className="badge badge-outline text-base">
                {t}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-3">
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-md btn-primary"
            >
              <FaExternalLinkAlt className="mr-2" /> Live Site
            </a>

            <div className="relative">
              <button
                onClick={() => setShowRepos(!showRepos)}
                className="btn btn-md btn-outline"
              >
                <FaGithub className="mr-2" /> GitHub Repo
                <FaChevronDown className="ml-2" />
              </button>

              <AnimatePresence>
                {showRepos && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full mt-2 bg-base-200 p-2 rounded shadow-md z-50 space-y-2"
                  >
                    <a
                      href={clientRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-xs btn-outline w-full"
                    >
                      Client Side
                    </a>
                    {serverRepo !== "#" && (
                      <a
                        href={serverRepo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-xs btn-outline w-full"
                      >
                        Server Side
                      </a>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={() => setShowModal(true)}
              className="btn btn-md btn-secondary"
            >
              Description
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showModal && (
          <dialog open className="modal modal-bottom sm:modal-middle">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="modal-box bg-base-100 text-base-content w-full max-w-4xl"
            >
              <h3 className="font-bold text-xl text-accent">
                {title} - Full Description
              </h3>
              <p className="py-4 text-lg whitespace-pre-line">
                {modalDescription}
              </p>
              <div className="modal-action">
                <button
                  onClick={() => setShowModal(false)}
                  className="btn btn-md btn-accent"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </dialog>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="bg-base-100 py-24 scroll-mt-20">
      <div className="w-11/12 xl:w-10/12 mx-auto text-center">
        <h2 className="text-5xl font-bold text-primary mb-6">Projects</h2>
        <p className="text-base-content text-xl mb-16 max-w-3xl mx-auto">
          A selection of full-stack projects that demonstrate my ability to
          build responsive, secure, and user-focused applications.
        </p>

        <ProjectCard
          title="HobbyHub"
          description="HobbyHub is a dynamic community platform that empowers users to discover, create, and manage hobby-based groups. Whether you're into painting, hiking, gaming, or cooking, the app helps you connect with like-minded individuals, organize meetups, and grow your passions in a collaborative space."
          features={[
            "Firebase authentication with persistent login",
            "Private routes for group creation and management",
            "Animated homepage with sliders and featured groups",
            "Custom error handling with toast notifications",
            "Fully responsive design with light/dark theme toggle",
          ]}
          tech={[
            "React",
            "Vite",
            "Tailwind CSS",
            "DaisyUI",
            "Firebase",
            "React Router",
          ]}
          live="https://hobby-hub-client.web.app"
          clientRepo="https://github.com/devabdullahalnoman/Hobby-Hub-Client"
          serverRepo="https://github.com/devabdullahalnoman/Hobby-Hub-Server"
          image="https://i.ibb.co/pBCGgycX/Screenshot-from-2025-06-30-18-28-28.png"
          modalDescription={`HobbyHub is a full-featured platform designed to bring hobbyists together through shared interests and group activities. Users can browse featured groups, create their own, and manage participation in real-time. The app features secure authentication, animated UI components, and a responsive layout that adapts beautifully across devices.

🔧 Key Features:
- Firebase authentication with persistent login
- Private routes for group creation and management
- Animated homepage with sliders and dynamic content
- Custom error handling using toast notifications
- Fully responsive design with light/dark theme toggle

🚧 Challenges Faced:
- Theme Toggle Logic: Implementing a seamless dark/light mode switch without disrupting user experience or layout consistency.
- Persistent Auth State: Ensuring users remain logged in across page refreshes, especially on protected routes.
- Animation Performance: Integrating multiple animation libraries (React Awesome Reveal, Typewriter) without affecting load time or responsiveness.
- Form Validation: Creating custom validation logic for registration and password fields without relying on browser defaults.
- Expired Group Logic: Preventing users from joining groups with past start dates using dynamic date checks.
- Environment Security: Managing Firebase credentials securely using environment variables and .env.local setup.

HobbyHub reflects a thoughtful balance of user experience, performance, and maintainability — making it a strong showcase of modern full-stack development.`}
        />

        <ProjectCard
          title="Artifacts Tracker"
          description="Artifacts Tracker is a full-stack web app for cataloging and exploring historical artifacts. Users can add, update, like, and filter artifacts, all within a secure, responsive, and animated interface."
          features={[
            "Firebase + JWT authentication with secure route protection",
            "Add, update, delete, and like artifacts with ownership control",
            "Dynamic filtering, sorting, and search using MongoDB",
            "Responsive UI with animated transitions and Swiper sliders",
            "Private routes for user-specific pages like My Artifacts and Liked Artifacts",
          ]}
          tech={[
            "React",
            "Tailwind CSS",
            "DaisyUI",
            "Firebase",
            "MongoDB",
            "Express.js",
          ]}
          live="https://artifact-tracker-22c55.web.app/"
          clientRepo="https://github.com/devabdullahalnoman/Artifact-Tracker-Client"
          serverRepo="https://github.com/devabdullahalnoman/Artifact-Tracker-Server"
          image="https://i.ibb.co/H5wbpJY/Screenshot-from-2025-06-30-18-29-30.png"
          modalDescription={`Artifacts Tracker is a full-stack web application designed to catalog and showcase historical artifacts like the Rosetta Stone and Antikythera Mechanism. It allows users to explore, contribute, and interact with artifacts in a secure and engaging environment.

🔧 Key Features:
- Firebase Authentication (Email/Password + Google)
- JWT-based route protection
- Add, update, and delete artifacts (owner-only access)
- Like/dislike toggle with real-time UI updates
- Search, filter, and sort artifacts using MongoDB queries
- Responsive design with Tailwind CSS and DaisyUI
- Animated UI with Motion and Swiper
- Dynamic page titles and conditional navbar

🚧 Challenges Faced:
- Implementing dual-layer authentication (Firebase + JWT)
- Managing secure access to artifact ownership routes
- Building a like system with toggle logic and user tracking
- Handling dynamic filtering and search with MongoDB regex
- Creating a responsive, animated UI that performs well on all devices

Artifacts Tracker blends functionality, interactivity, and design to deliver a seamless experience for history enthusiasts and developers alike.`}
        />

        <ProjectCard
          title="Job Track"
          description="Job Track is a single-page application that helps job seekers explore verified listings from multiple companies. It features secure authentication, private routing, real-time data loading, and a responsive, animated interface."
          features={[
            "User authentication with Firebase and Google Sign-in",
            "Private routes and password reset via email",
            "Job detail modals with external application links",
            "Context API for global auth state",
            "Dynamic page titles and animated transitions",
          ]}
          tech={[
            "React",
            "React Router",
            "Firebase",
            "Tailwind CSS",
            "DaisyUI",
            "Framer Motion",
          ]}
          live="https://job-track-daan.netlify.app/"
          clientRepo="https://github.com/devabdullahalnoman/job-track"
          serverRepo="#"
          image="https://i.ibb.co/8L9mv6RZ/Screenshot-from-2025-06-30-18-30-04.png"
          modalDescription={`Job Track is a responsive single-page application built with React that allows users to explore verified job listings from multiple companies. It includes secure Firebase authentication, private routing, and real-time data loading using route loaders.

🔧 Key Features:
- Register, login, and Google sign-in
- Password reset via email
- Private routes for protected pages
- Context API for global auth state
- Job detail modals with external application links
- Dynamic page titles using React Helmet
- Animated transitions with Framer Motion
- Responsive layout for all screen sizes

🚧 Challenges Faced:
- Managing auth state globally while keeping routes secure
- Implementing route-based data loading with React Router v6+
- Creating a reusable modal system for job previews
- Handling password validation and error feedback
- Hosting securely with Firebase and managing environment variables

Job Track demonstrates practical frontend architecture, real-world feature integration, and a clean, accessible user experience.`}
        />
      </div>
    </section>
  );
};

export default Projects;
