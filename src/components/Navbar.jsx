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
    const current = navLinks.find((nav) =>
      nav.path === "/"
        ? location.pathname === "/"
        : location.pathname.startsWith(nav.path)
    );
    setActive(current ? current.title : "");
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX} fixed top-0 z-20 flex w-full items-center py-4 backdrop-blur-md ${
        scrolled
          ? "border-b border-stone-900/10 bg-[#faf5ec]/85 shadow-[0_10px_30px_rgba(120,96,64,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("Home");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="h-10 w-20 object-contain" />
          <p className="flex cursor-pointer text-[18px] font-semibold text-stone-900">
            &nbsp;<span className="hidden sm:block">| Home</span>
          </p>
        </Link>

        <ul className="hidden list-none flex-row gap-10 sm:flex">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-amber-700" : "text-stone-700"
              } flex cursor-pointer text-[15px] font-semibold uppercase tracking-[0.08em] hover:text-stone-900`}
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

        <div className="flex flex-1 items-center justify-end sm:hidden">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="h-[28px] w-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } absolute right-0 top-20 z-10 mx-4 my-2 min-w-[160px] rounded-xl border border-stone-900/10 bg-[#fffaf2] p-6 shadow-[0_18px_40px_rgba(120,96,64,0.12)]`}
          >
            <ul className="flex flex-1 flex-col items-start justify-end gap-4 list-none">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`cursor-pointer text-[14px] font-semibold ${
                    active === nav.title ? "text-amber-700" : "text-stone-700"
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
