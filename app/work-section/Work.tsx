import AnimatedBody from "../animations/AnimatedBody";
import AnimatedWords2 from "../animations/AnimatedWords2";
import { monaSans } from "../fonts/monaSans";
import ProjectGrid from "./ProjectGrid";

const Work = () => {
  return (
    <section
      className="relative z-10 flex w-full flex-col items-center justify-center bg-[#0E1016] bg-cover bg-center py-16 md:py-20 lg:py-20"
      id="work"
    >
      {/* <h2 className="mb-10 hidden text-[36px] text-[#e4ded7] md:mb-16 md:text-[42px] lg:mb-16 lg:text-[72px]">
        Featured Work
      </h2> */}

    <AnimatedWords2
          title={"My Work"}
          style={`flex max-w-[500px] mb-2  flex-col items-start text-left pr-5 ${monaSans.className} font-extrabold uppercase leading-[0.9em] text-[#e4ded7] sm:max-w-full sm:flex-row sm:items-center sm:justify-center sm:text-center lg:text-center text-[clamp(70px,14vw,155.04px)]`}
        />

       <AnimatedBody
                  text="Bringing ideas to life through innovative and efficient development—here are some of my projects."
                  className="w-[90%] text-center text-[14px] mb-12 font-semibold uppercase sm:w-[500px] md:w-[550px] md:text-[16px]"
                />

      <ProjectGrid />
    </section>
  );
};

export default Work;
