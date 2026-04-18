// src/pages/ContactPage.jsx
import React from "react";
import { Contact, StarsCanvas } from "../components";

const ContactPage = () => {
  return (
    <main className="relative h-[100svh] overflow-hidden pt-16 sm:pt-20">
      <Contact />
      <StarsCanvas />
    </main>
  );
};

export default ContactPage;
