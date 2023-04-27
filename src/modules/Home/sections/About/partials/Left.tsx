import React from "react";
import { motion } from "framer-motion";
import { IoMdArrowDropright } from "react-icons/io";

import { skills } from "@modules/Home/config/constanst";
import { fadeTop, motionStep } from "@config/motion";

const Left = () => {
  return (
    <motion.div variants={fadeTop} {...motionStep} className="col-span-3">
      <div className="space-y-4 mt-7 text-slate-400">
        <p>
          你好！我的名字是查尔斯。辛, 我喜欢创造生活在互联网上的东西. 我对 Web 开发的兴趣始于 2020 年, 当时我决定尝试编辑自定义Tumblr 主题 —
          结果是将一个自定义的转发按钮组合在一起教会了我很多关于 HTML 和 CSS 的知识！
        </p>

        <p>快进到今天, 我有幸在一家广告公司、一家初创公司、一家大公司和一家学生主导的设计工作室工作。这些天, 我的主要工作重点是为自己构建可访问的、包容性的产品和数字体验</p>

        <p>以下是我最近一直在使用的一些技术：</p>

        <div className="__skills md:pr-56">
          <ul className="grid grid-cols-2 space-y-2">
            {skills.map((e: string, i: number) => (
              <li key={i} className="gap-1 flex items-center transition-all duration-300 hover:translate-x-[7px] select-none hover:text-sky-400">
                {" "}
                <IoMdArrowDropright className="text-sky-400 text-xl" /> {e}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Left;
