import { useLottie } from "lottie-react";
import animation from "../Animation/aboutMe.json";
import { motion } from "framer-motion";

const AboutMe = () => {
  const options = {
    animationData: animation,
    loop: true,
  };

  const { View } = useLottie(options);

  return (
    <section id="aboutMe" className="relative z-0 bg-base-200 py-24 font-space scroll-mt-20">
      <div className="w-11/12 xl:w-10/12 mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-4xl md:text-5xl font-orbitron font-bold text-primary mb-12 tracking-wide"
        >
          Behind the Code
        </motion.h2>

        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 bg-base-100 shadow-xl rounded-xl p-8 sm:p-10 lg:p-16 border border-base-300">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex-1 text-base-content text-lg sm:text-xl leading-8 space-y-6"
          >
            <p>
              I’m{" "}
              <span className="text-accent font-semibold">
                Abdullah Al Noman
              </span>
              , a MERN stack developer based in Bangladesh, passionate about
              building fast, scalable, and user-centric web applications.
            </p>
            <p>
              With a strong foundation in{" "}
              <span className="font-medium text-secondary">
                React, Node.js, and MongoDB
              </span>
              , I specialize in crafting seamless digital experiences—from
              responsive frontends to secure, efficient backends.
            </p>
            <p>
              I thrive on turning complex ideas into clean, maintainable code
              that delivers real-world impact. Whether it's building dynamic
              dashboards, implementing secure authentication, or optimizing
              performance, I approach every challenge with a problem-solving
              mindset and a commitment to quality.
            </p>
            <p>
              My development philosophy centers on clean architecture, reusable
              components, and intuitive user interfaces. I believe great
              software is not just functional—it’s delightful to use.
            </p>
            <p>
              Beyond the code, I’m deeply invested in continuous learning and
              community. I enjoy exploring new technologies, contributing to
              open-source projects, and refining my craft through collaboration
              and feedback.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex-1 max-w-sm sm:max-w-md md:max-w-lg"
          >
            <div className="rounded-xl overflow-hidden glow">{View}</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
