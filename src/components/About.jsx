import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const operatingPrinciples = [
  "Ground outputs in retrieval and tool use.",
  "Measure quality before trusting demos.",
  "Design graceful failure paths from day one.",
];

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.15, 0.6)}
      className="w-full rounded-[24px] bg-[#0000000] p-[1px] green-pink-gradient"
    >
      <div className="paper-panel flex min-h-[142px] flex-col items-center justify-center rounded-[24px] px-4 py-5 text-center sm:min-h-[160px] sm:px-6">
        <img
          src={icon}
          alt={title}
          className="h-12 w-12 object-contain sm:h-14 sm:w-14"
        />

        <h3 className="mt-4 text-[20px] font-semibold text-stone-900 sm:text-[22px]">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <div className="grid items-start gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Working style</p>
            <h2 className={styles.sectionHeadText}>Applied AI, not AI theater.</h2>
          </motion.div>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-3 max-w-3xl text-[15px] leading-7 text-stone-600 sm:text-[16px]"
          >
            I like systems where models are only one layer of the solution.
            The real work is making them useful inside products: retrieval,
            tool orchestration, observability, eval loops, and deployment paths
            that survive real usage instead of collapsing after the demo.
          </motion.p>
        </div>

        <motion.div
          variants={fadeIn("left", "spring", 0.1, 0.75)}
          className="console-panel"
        >
          <p className="text-[11px] uppercase tracking-[0.28em] text-stone-500">
            Operating Principles
          </p>
          <div className="mt-4 space-y-3">
            {operatingPrinciples.map((item, index) => (
              <div key={item} className="metric-card flex items-start gap-3">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-amber-100 text-[11px] font-semibold text-amber-800">
                  0{index + 1}
                </span>
                <p className="text-sm leading-6 text-stone-700">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 xl:grid-cols-4">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

About.sectionClassName =
  "relative z-0 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 py-4 sm:px-16 sm:py-6";

export default SectionWrapper(About, "about");
