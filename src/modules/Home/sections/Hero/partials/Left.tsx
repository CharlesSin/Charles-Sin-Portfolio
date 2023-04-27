import React from "react";
import { motion } from "framer-motion";
import Button from "@components/Button";
import { fadeUpSpring } from "@config/motion";
import AnimatedTextWord from "@components/motion/AnimatedTextWord";
import AnimatedTextCharacter from "@components/motion/AnimatedTextCherecter";

const Left = () => {
  return (
    <div className="relative col-span-2 z-10 md:text-center lg:text-left !mt-[-20px]">
      <img
        alt=""
        src="/images/glassify/blur-cyan-0.png"
        width="530"
        height="530"
        decoding="async"
        data-nimg="1"
        className="absolute bottom-full right-full -mr-72 -mb-56 opacity-50"
      />

      <div className="relative">
        <AnimatedTextWord className="text-lg text-white" text="你好, 我的名字是" />
        <h1 className="hidden"> 查尔斯。辛 | 个人作品集 </h1>

        <div>
          <AnimatedTextCharacter className="!font-medium !bg-clip-text !text-5xl !leading-normal md:!text-7xl md:!leading-[87px] !text-slate-300" text="查尔斯。辛" />
          <AnimatedTextCharacter className="font-medium text-3xl sm:text-4xl tracking-normal md:text-5xl text-slate-400 mt-1" text="我热衷于学习和建立特效网页" />
        </div>

        <div className="my-5 md:my-8 leading-7 text-slate-400 md:text-lg max-w-3xl">
          <AnimatedTextWord text="非常积极和非常热情全栈开发人员, 在 HTML、CSS、JS、Node、React、Next、Tailwindcss、Typescript、Firebase、MongoDB 方面拥有两年经验" />
        </div>
      </div>

      <motion.div variants={fadeUpSpring} initial="hidden" animate="visible">
        <a href="#works">
          <Button outlined> 查看我的项目 </Button>
        </a>
      </motion.div>
    </div>
  );
};

export default Left;
