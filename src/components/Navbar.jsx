// src/components/Navbar.jsx
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // set active based on current path
    const current = navLinks.find((nav) =>
      nav.path === "/"
        ? location.pathname === "/"
        : location.pathname.startsWith(nav.path)
    );
    setActive(current ? current.title : "");
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // <nav
    //   className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${
    //     scrolled ? "bg-primary" : "bg-transparent"
    //   }`}
    // >
    <nav
      className={`${styles.paddingX} w-full flex items-center py-4 fixed top-0 z-20 backdrop-blur-md ${
        scrolled ? "bg-[#050816]/90 border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("Home");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-20 h-10 object-contain" />
          <p className="text-slate-100 text-[18px] font-bold cursor-pointer flex">
            &nbsp;<span className="sm:block hidden">| Home</span>
          </p>
        </Link>

        {/* Desktop menu */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-cyan-300" : "text-slate-200"
              } hover:text-cyan-200 text-[16px] font-semibold tracking-wide cursor-pointer flex`}
            >
              <Link
                to={nav.path}
                onClick={() => {
                  setActive(nav.title);
                  window.scrollTo(0, 0);
                }}
              >
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain invert"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-[#0b1226] border border-white/10 absolute top-20 right-0 mx-4 my-2 min-w-[160px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-semibold cursor-pointer text-[14px] ${
                    active === nav.title ? "text-cyan-300" : "text-slate-200"
                  }`}
                >
                  <Link
                    to={nav.path}
                    onClick={() => {
                      setToggle(false);
                      setActive(nav.title);
                      window.scrollTo(0, 0);
                    }}
                  >
                    {nav.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
