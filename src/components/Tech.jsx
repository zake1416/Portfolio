import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="paper-panel rounded-[32px] px-6 py-8">
      <div className="mb-8 flex flex-col gap-2 text-center">
        <p className="text-[12px] uppercase tracking-[0.28em] text-stone-500">
          AI Stack
        </p>
        <h3 className="text-[34px] font-semibold text-stone-900">
          Tools I use to ship model-powered products
        </h3>
      </div>

      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="flex flex-col items-center gap-3" key={technology.name}>
            <div className="h-28 w-28">
              <BallCanvas icon={technology.icon} />
            </div>
            <p className="text-sm font-medium text-stone-700">{technology.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
