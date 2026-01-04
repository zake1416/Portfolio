// src/pages/ContactPage.jsx
import React from "react";
import { Contact, StarsCanvas } from "../components";

const ContactPage = () => {
  return (
    <main className="min-h-screen pt-24 pb-20">
      <Contact />
      <StarsCanvas />
    </main>
  );
};

export default ContactPage;
