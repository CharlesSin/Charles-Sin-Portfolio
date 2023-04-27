import React from "react";
import { motion } from "framer-motion";

import Content from "./partials/Content";
import { fadeLeft, motionStep } from "@config/motion";

const Worked = () => {
  return (
    <section id="experience">
      <motion.h2 variants={fadeLeft} {...motionStep} className="flex items-center gap-2 text-3xl font-medium text-slate-300">
        <span className="text-sky-400 font-mono">02. </span>
        我的工作
      </motion.h2>

      <div className="mt-14">
        <Content />
      </div>
    </section>
  );
};

export default Worked;
