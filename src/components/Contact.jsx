import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formAction = "https://formspree.io/f/yourFormId";

  return (
    <div className="flex h-full min-h-0 flex-col-reverse gap-6 overflow-hidden lg:flex-row">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="paper-panel flex min-h-0 flex-[0.9] flex-col rounded-[28px] p-5 sm:p-6"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          action={formAction}
          method="POST"
          className="mt-6 flex flex-1 flex-col gap-4"
        >
          <input type="hidden" name="_subject" value="Portfolio inquiry" />
          <label className="flex flex-col">
            <span className="mb-2 text-sm font-medium uppercase tracking-[0.16em] text-stone-500">
              Your Name
            </span>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="rounded-2xl border border-stone-900/10 bg-white/70 px-4 py-3 font-medium text-stone-900 outline-none placeholder:text-stone-400 focus:border-amber-700/50"
            />
          </label>
          <label className="flex flex-col">
            <span className="mb-2 text-sm font-medium uppercase tracking-[0.16em] text-stone-500">
              Your Email
            </span>
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              required
              className="rounded-2xl border border-stone-900/10 bg-white/70 px-4 py-3 font-medium text-stone-900 outline-none placeholder:text-stone-400 focus:border-amber-700/50"
            />
          </label>
          <label className="flex flex-col">
            <span className="mb-2 text-sm font-medium uppercase tracking-[0.16em] text-stone-500">
              Your Message
            </span>
            <textarea
              rows={4}
              name="message"
              placeholder="Share your idea or role details."
              required
              className="min-h-[110px] rounded-2xl border border-stone-900/10 bg-white/70 px-4 py-3 font-medium text-stone-900 outline-none placeholder:text-stone-400 focus:border-amber-700/50"
            />
          </label>

          <button
            type="submit"
            className="w-fit rounded-full border border-amber-900/10 bg-stone-900 px-6 py-3 font-semibold text-stone-50 shadow-[0_14px_28px_rgba(85,65,39,0.14)] transition-colors hover:bg-amber-800"
          >
            Send
          </button>
        </form>
        <p className="mt-4 text-xs text-stone-500">
          Replies go directly to my inbox. Expect a response within 48 hours.
        </p>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="paper-panel geometric-grid h-[220px] min-h-0 rounded-[28px] bg-[#f2e9dd]/70 lg:h-auto lg:flex-1"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

Contact.sectionClassName =
  "relative z-0 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 py-4 sm:px-16 sm:py-6";

export default SectionWrapper(Contact, "contact");
