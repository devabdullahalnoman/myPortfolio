import React, { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import navLogo from "/favicon.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const initial = saved || (prefersDark ? "dark" : "light");
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const links = (
    <ul className="menu menu-vertical lg:menu-horizontal gap-2 font-mono text-lg tracking-wide">
      <li>
        <a href="#skills" className="relative group px-2 py-1">
          Skills
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full"></span>
        </a>
      </li>
      <li>
        <a href="#aboutMe" className="relative group px-2 py-1">
          About Me
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full"></span>
        </a>
      </li>
      <li>
        <a href="#projects" className="relative group px-2 py-1">
          Projects
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full"></span>
        </a>
      </li>
      <li>
        <a href="#contact" className="relative group px-2 py-1">
          Contact Me
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full"></span>
        </a>
      </li>
    </ul>
  );

  return (
    <div
      className={`sticky top-0 z-50 transition-all duration-300 scroll-mt-20 ${
        scrolled
          ? "bg-base-300/50 backdrop-blur-sm shadow-md border-b border-accent/30"
          : "bg-base-100/80 dark:bg-base-300/60 backdrop-blur-sm"
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-36 p-3 shadow"
            >
              {links}
            </ul>
          </div>
          <a
            href="#hero"
            className="flex items-center ps-0 hover:scale-105 transition duration-300"
          >
            <img className="w-10 h-10" src={navLogo} alt="DevN Logo" />
            <span className="ml-2 text-base-content text-4xl font-bold tracking-widest hidden sm:inline">
              DevN
            </span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <label className="swap swap-rotate">
            <input
              type="checkbox"
              onChange={toggleTheme}
              checked={theme === "dark"}
              className="block"
            />
            <FiSun className="swap-off text-yellow-600 w-6 h-6" />
            <FiMoon className="swap-on text-blue-400 w-6 h-6" />
          </label>
          <a href="https://docs.google.com/document/d/1vwrYWy5q9oOkSRaNZVq0VTmvw4kxWPSm7dMuflpeadw/export?format=pdf">
            <button className="btn ms-5 bg-accent text-base-100 font-semibold rounded-xl">
              Download Resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
