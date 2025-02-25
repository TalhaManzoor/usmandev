"use client";
import { useEffect } from "react";
import { preLoaderAnim } from "./loader";
import "./preloader.css";

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);

  return (
    <div className="preloader px-5 gap-[5px] overflow-hidden text-[8x] sm:gap-[5px] sm:text-[12px] md:text-[16px] lg:text-[20px]">
      <div className="texts-container w-500 flex h-60 items-center justify-center gap-[5px] overflow-hidden text-[7px] font-extrabold text-[#e4ded7] opacity-0 sm:gap-[4px] sm:text-[7px] md:text-[12px] lg:text-[20px]">
        <span>Software</span>
        <span>Engineer</span>
        <span>|</span>
        <span>Innovating</span>
        <span>with</span>
        <span>AI</span>
        <span>&</span>
        <span>Robotics.</span>
        <div className="sub hidden"></div>
      </div>
    </div>
  );
};

export default PreLoader;
