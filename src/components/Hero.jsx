import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      
      <div className="absolute inset-0 top-24 max-w-6xl mx-auto px-6 flex flex-row items-start gap-6">
        
        {/* Left Vertical Line */}
        <div className="flex flex-col justify-center items-center mt-2">
          <div className="w-3 h-3 rounded-full bg-cyan-300" />
          <div className="w-1 h-28 bg-gradient-to-b from-cyan-300 to-transparent" />
        </div>

        {/* Text Content */}
        <div className="flex flex-col">
          <h1 className="text-[42px] sm:text-[50px] lg:text-[56px] font-black leading-tight text-slate-100">
            Hi, I’m <span className="text-slate-100">Abhishek Birajdar</span>
          </h1>

          <p className="mt-4 text-[18px] sm:text-[20px] text-slate-300 leading-relaxed">
            AI Engineer building reliable LLM systems, RAG pipelines, and
            agent workflows for real products.
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[28px] h-[50px] rounded-3xl border-2 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 20, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-2 h-2 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
