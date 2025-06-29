import React, { useEffect, useState } from "react";
import navLogo from "../assets/DevNLogo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = (
    <div className="flex flex-col lg:flex-row gap-2">
      <li>
        <a href="#skills">Skills</a>
      </li>
      <li>
        <a href="#aboutMe">About Me</a>
      </li>
      <li>
        <a href="#projects">Projects</a>
      </li>
      <li>
        <a href="#contactMe">Contact Me</a>
      </li>
    </div>
  );

  return (
    <div
      className={`absolute w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-base-100/40 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="navbar lg:w-11/12 xl:w-10/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-36 p-3 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost ps-0">
            <div>
              <img className="max-w-30" src={navLogo} alt="" />
            </div>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
