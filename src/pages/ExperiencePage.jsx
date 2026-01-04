// src/pages/ExperiencePage.jsx
import React from "react";
import { Experience, Tech } from "../components";

const ExperiencePage = () => {
  return (
    <main className="min-h-screen pt-8 flex-col">
      <Experience />
      <Tech />
    </main>
  );
};

export default ExperiencePage;
