// src/pages/Home.jsx
import React from "react";
import { Hero } from "../components";

const Home = () => {
  return (
    <main className="h-[100svh] overflow-hidden pt-16 sm:pt-20">
      <div className="h-full w-full">
        <Hero />
      </div>
    </main>
  );
};

export default Home;
