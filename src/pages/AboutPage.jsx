// src/pages/AboutPage.jsx
import React from "react";
import { About } from "../components";

const AboutPage = () => {
  return (
    <main className="h-[100svh] overflow-hidden pt-16 sm:pt-20">
      <div className="h-full w-full">
        <About />
      </div>
    </main>
  );
};

export default AboutPage;
