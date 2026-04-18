import { motion } from "framer-motion";
import { ComputersCanvas } from "./canvas";

const focusAreas = [
  "LLM pipelines",
  "RAG systems",
  "Agent orchestration",
  "Eval and observability",
];

const systemStats = [
  { label: "Focus", value: "Applied AI delivery" },
  { label: "Stack", value: "Models, infra, UX" },
  { label: "Mode", value: "Prototype to production" },
];

const Hero = () => {
  return (
    <section className="relative flex h-full min-h-0 w-full items-start justify-center overflow-hidden sm:items-center">
      <div className="absolute left-[8%] top-[18%] h-24 w-24 rounded-full border border-stone-900/10 bg-white/40 blur-[2px]" />
      <div className="absolute right-[10%] top-[22%] h-28 w-28 rotate-12 rounded-[28px] border border-amber-800/10 bg-[#efe2cc]/55" />
      <div className="absolute bottom-[14%] left-[12%] h-16 w-16 border border-teal-900/10 bg-[#dce9e6]/60" />
      <div className="absolute inset-0 z-0 geometric-grid" />
      <div className="absolute left-[max(1.5rem,4vw)] top-[13%] z-10 hidden w-[240px] xl:block">
        <div className="console-panel">
          <div className="flex items-center justify-between border-b border-stone-900/10 px-5 py-3">
            <p className="text-[11px] uppercase tracking-[0.28em] text-stone-500">
              System Snapshot
            </p>
            <div className="flex gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#d98b73]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#d8b46a]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#8db5ab]" />
            </div>
          </div>
          <div className="space-y-4 px-5 py-5">
            <p className="font-mono text-[12px] leading-6 text-stone-700">
              <span className="text-amber-800">pipeline.status</span> = healthy
              <br />
              <span className="text-amber-800">retrieval.mode</span> = grounded
              <br />
              <span className="text-amber-800">agent.loop</span> = monitored
              <br />
              <span className="text-amber-800">deployment.goal</span> = reliable
            </p>

            <div className="grid gap-3">
              {systemStats.map((item) => (
                <div key={item.label} className="metric-card">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-stone-500">
                    {item.label}
                  </p>
                  <p className="mt-1 text-[16px] font-semibold text-stone-900">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 top-6 z-10 mx-auto max-w-[1080px] px-6 sm:top-8 lg:px-10 xl:px-14">
        <div className="flex flex-col pb-24 sm:pb-0 lg:max-w-[34rem] lg:ml-[16rem] xl:ml-[14.5rem]">
          <div className="flex items-center gap-3">
            <div className="h-3 w-3 rounded-full bg-amber-700" />
            <p className="text-[12px] uppercase tracking-[0.32em] text-stone-500 sm:text-[13px]">
              Applied AI Engineer
            </p>
          </div>

          <p className="mt-4 text-[13px] font-semibold uppercase tracking-[0.24em] text-stone-600 sm:text-[14px]">
            Abhishek Birajdar
          </p>

          <h1 className="mt-3 text-[30px] font-semibold leading-[0.96] text-stone-900 sm:text-[50px] lg:text-[64px] xl:text-[70px]">
            Shipping AI systems
            <span className="block text-amber-800">that hold up in production.</span>
          </h1>

          <p className="mt-4 max-w-[38rem] text-[14px] leading-relaxed text-stone-600 sm:text-[17px] lg:text-[18px]">
            I build retrieval pipelines, agent workflows, and model-powered
            product features with the engineering discipline needed for real
            users: instrumentation, evaluation, fallbacks, and deployment
            readiness.
          </p>

          <div className="mt-4 flex h-[180px] w-full items-center justify-center lg:hidden">
            <div className="relative h-full w-full max-w-[210px]">
              <ComputersCanvas />
            </div>
          </div>

          <div className="mt-6 flex max-w-[42rem] flex-wrap gap-3">
            {focusAreas.map((item) => (
              <span key={item} className="signal-chip">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute right-[7vw] top-[28%] z-[1] hidden h-[42vh] w-[26vw] min-w-[280px] max-w-[430px] -translate-y-1/2 lg:block lg:right-[8vw] xl:right-[10vw] xl:top-[30%] xl:h-[46vh] xl:w-[28vw]">
        <ComputersCanvas />
      </div>

      <div className="absolute bottom-20 left-1/2 z-10 hidden w-[103%] max-w-[1800px] -translate-x-1/2 overflow-hidden sm:block lg:bottom-8">
        <div className="hero-marquee">
          <div className="hero-marquee-track">
            <span className="hero-marquee-item">
              Hi, welcome to my portfolio. Abhishek Birajdar here.
            </span>
            <span className="hero-marquee-item">
              Applied AI engineer building retrieval, agents, evals, and production systems.
            </span>
            <span className="hero-marquee-item">
              Hi, welcome to my portfolio. Abhishek Birajdar here.
            </span>
            <span className="hero-marquee-item">
              Applied AI engineer building retrieval, agents, evals, and production systems.
            </span>
          </div>
        </div>
      </div>

      <div className="mobile-hero-strip fixed bottom-0 left-0 right-0 z-30 flex items-center justify-center px-4 py-3 sm:hidden">
        <p className="truncate text-center font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-900">
          Hi, welcome to my portfolio. Abhishek Birajdar here.
        </p>
      </div>

      <div className="absolute bottom-4 hidden w-full items-center justify-center sm:flex">
        <a href="/about">
          <div className="flex h-[44px] w-[26px] justify-center rounded-3xl border-2 border-stone-400 p-2">
            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="mb-1 h-2 w-2 rounded-full bg-amber-700"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
