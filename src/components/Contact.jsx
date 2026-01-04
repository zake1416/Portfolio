import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formAction = "https://formspree.io/f/yourFormId";

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-[#0b1226] border border-white/10 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          action={formAction}
          method="POST"
          className='mt-12 flex flex-col gap-8'
        >
          <input type="hidden" name="_subject" value="Portfolio inquiry" />
          <label className='flex flex-col'>
            <span className='text-slate-200 font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              placeholder="Your name"
              required
              className='bg-[#111827] py-4 px-6 placeholder:text-slate-500 text-slate-100 rounded-lg outline-none border border-white/10 focus:border-cyan-400/60 font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-slate-200 font-medium mb-4'>Your Email</span>
            <input
              type='email'
              name='email'
              placeholder="your@email.com"
              required
              className='bg-[#111827] py-4 px-6 placeholder:text-slate-500 text-slate-100 rounded-lg outline-none border border-white/10 focus:border-cyan-400/60 font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-slate-200 font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              placeholder='Share your idea or role details.'
              required
              className='bg-[#111827] py-4 px-6 placeholder:text-slate-500 text-slate-100 rounded-lg outline-none border border-white/10 focus:border-cyan-400/60 font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-cyan-400/20 hover:bg-cyan-400/30 transition-colors py-3 px-8 rounded-xl outline-none w-fit text-slate-100 font-semibold border border-cyan-400/40 shadow-md shadow-cyan-500/20'
          >
            Send
          </button>
        </form>
        <p className="mt-4 text-xs text-slate-400">
          Replies go directly to my inbox. Expect a response within 48 hours.
        </p>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
