import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "var(--timeline-card-bg)",
        color: "var(--timeline-card-text)",
        border: "1px solid var(--timeline-card-border)",
        boxShadow: "var(--timeline-card-shadow)",
        borderRadius: "24px",
      }}
      contentArrowStyle={{ borderRight: "7px solid var(--timeline-arrow)" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex h-full w-full items-center justify-center">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="h-[60%] w-[60%] object-contain"
          />
        </div>
      }
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-[30px] font-semibold text-stone-900">
            {experience.title}
          </h3>
          <p
            className="text-[16px] font-semibold text-stone-600"
            style={{ margin: 0 }}
          >
            {experience.company_name}
          </p>
        </div>
        <span className="signal-chip hidden sm:inline-flex">AI Systems</span>
      </div>

      <ul className="ml-5 mt-5 list-disc space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="pl-1 text-[14px] tracking-wide text-stone-700"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Shipping record
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          AI systems across research, delivery, and product.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
