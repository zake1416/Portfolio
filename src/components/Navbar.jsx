import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, setTheme } = useTheme();

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

  const themeOptions = [
    { id: "dark", label: "Dark" },
    { id: "light", label: "Light" },
  ];

  return (
    <nav
      className={`${styles.paddingX} fixed top-0 z-20 flex w-full items-center py-3 backdrop-blur-md ${
        scrolled
          ? "theme-navbar-shell border-b border-stone-900/10"
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
          <img src={logo} alt="logo" className="h-9 w-16 object-contain" />
          <p className="flex cursor-pointer text-[16px] font-semibold text-stone-900">
            &nbsp;<span className="hidden sm:block">| Home</span>
          </p>
        </Link>

        <div className="hidden items-center gap-6 sm:flex">
          <ul className="list-none flex-row gap-8 sm:flex">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? "text-amber-700" : "text-stone-700"
                } flex cursor-pointer text-[13px] font-semibold uppercase tracking-[0.08em] hover:text-stone-900`}
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

          <div className="theme-toggle">
            {themeOptions.map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => setTheme(option.id)}
                className={`theme-toggle-button ${
                  theme === option.id ? "theme-toggle-button-active" : ""
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end sm:hidden">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="theme-menu-icon h-[28px] w-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } theme-mobile-menu absolute right-0 top-16 z-10 mx-4 my-2 min-w-[160px] flex-col rounded-xl border border-stone-900/10 p-6`}
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

            <div className="mt-5 flex w-full flex-col gap-2 border-t border-stone-900/10 pt-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500">
                Theme
              </p>
              <div className="theme-toggle w-full">
                {themeOptions.map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setTheme(option.id)}
                    className={`theme-toggle-button flex-1 ${
                      theme === option.id ? "theme-toggle-button-active" : ""
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
