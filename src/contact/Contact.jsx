import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaDev } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6tospcj",
        "template_qdf7dtd",
        formRef.current,
        "zRUttWOW3N9YVuBH5"
      )
      .then(
        () => {
          setSent(true);
          formRef.current.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <section id="contact" className="bg-base-200 py-24 font-space scroll-mt-20">
      <div className="w-11/12 xl:w-10/12 mx-auto">
        <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-primary mb-4 text-center">
          Contact Me
        </h2>

        <p className="text-base-content text-lg md:text-xl mb-12 max-w-2xl mx-auto text-center">
          Have a question, opportunity, or just want to say hi? I’d love to hear
          from you.
        </p>

        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex-1 bg-base-100 p-8 rounded-xl shadow-md space-y-4">
            <h3 className="text-2xl font-semibold text-accent">
              Abdullah Al Noman
            </h3>
            <p className="text-base-content">📍 Dhaka, Bangladesh</p>
            <p className="text-base-content">📞 +880 1303198979</p>
            <p className="text-base-content">✉️ nomanahnaf@gmail.com</p>

            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/devabdullahalnoman"
                target="_blank"
                className="btn bg-accent text-base-100 rounded-xl hover:scale-105 transition"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/dev-abdullah-al-noman/"
                target="_blank"
                className="btn bg-accent text-base-100 rounded-xl hover:scale-105 transition"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://dev.to/devabdullahalnoman"
                target="_blank"
                className="btn bg-accent text-base-100 rounded-xl hover:scale-105 transition"
                aria-label="LinkedIn"
              >
                <FaDev size={20} />
              </a>
            </div>
          </div>
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="flex-1 bg-base-100 p-8 rounded-xl shadow-md space-y-6"
          >
            <div>
              <label className="label text-base-content">Your Name</label>
              <input
                type="text"
                name="user_name"
                required
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="label text-base-content">Your Email</label>
              <input
                type="email"
                name="user_email"
                required
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="label text-base-content">Your Message</label>
              <textarea
                name="message"
                rows="5"
                required
                className="textarea textarea-bordered w-full"
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn bg-accent text-base-100 font-semibold rounded-xl hover:scale-105 transition w-full"
            >
              Send Message
            </button>
            {sent && (
              <p className="text-success text-sm pt-2">
                Message sent successfully!
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
