import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="paper-panel w-full rounded-3xl p-8 xs:w-[320px]"
  >
    <p className="text-[44px] font-semibold text-amber-800">"</p>

    <div className="mt-1">
      <p className="text-[17px] leading-7 tracking-wide text-stone-700">
        {testimonial}
      </p>

      <div className="mt-7 flex items-center justify-between gap-3">
        <div className="flex flex-1 flex-col">
          <p className="text-[16px] font-semibold text-stone-900">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="mt-1 text-[12px] text-stone-500">
            {designation} at {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className="h-10 w-10 rounded-full object-cover"
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className="theme-section-shell mt-12 rounded-[28px]">
      <div className={`${styles.padding} rounded-2xl min-h-[220px] geometric-grid`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>External signal</p>
          <h2 className={styles.sectionHeadText}>How collaborators describe my AI work.</h2>
        </motion.div>
      </div>
      <div className={`-mt-10 flex flex-wrap gap-7 pb-14 ${styles.paddingX}`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
