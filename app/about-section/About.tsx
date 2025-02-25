import SongCarousel from "./SongCarousel";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";
import AnimatedWords2 from "../animations/AnimatedWords2";
import { monaSans } from "../fonts/monaSans";

const About = () => {
  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-20 md:pt-20 md:pb-20 lg:pt-20 lg:pb-30"
      id="about"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <AnimatedTitle
          text={
            "I am Merging AI, Computer vision and Robotics to create impactful, real world solutions"
          }
          className={
            "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />

        <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
            <AnimatedBody
              text={
                "I specialize in developing AI-driven solutions with a focus on Computer Vision, Machine Learning, and Robotics. With 10 years of experience as a software developer, I have worked on over 150 projects, ranging from AI-powered applications to autonomous systems. My expertise spans software engineering, API development, and integrating intelligent systems for real-world applications. Additionally, I have a strong background in web development and oversee a team of mobile application developers, ensuring efficient project execution and high-quality deliverables."
              }
            />
            <AnimatedBody
              text={
                "Beyond my professional work, I am deeply engaged in research and continuously exploring advancements in AI and autonomous systems. I have taken advanced courses in Machine Learning and Applied Machine Learning, achieving top grades, and actively contribute to the AI and robotics community."
              }
            />
            <AnimatedBody
              text={
                "Beyond my professional work, I am deeply engaged in research and continuously exploring advancements in AI and autonomous systems. I have taken advanced courses in Machine Learning and Applied Machine Learning, achieving top grades, and actively contribute to the AI and robotics community."
              }
              className={"hidden"}
            />
            <AnimatedBody
              text={
                "I'm always open to new opportunities, collaborations, and innovative projects that push the boundaries of AI and automation. Let’s connect and explore the future of intelligent systems together!"
              }
            />
            {/* <AnimatedBody
              text={
                "When I'm not coding, you can find me binge-watching anime, hanging out with friends, cheering on Manchester United, or discovering new music in my favorite genres like RnB, UK Drill, and Chill Rap."
              }
            />
            <AnimatedBody
              text={
                "I'm currently working on some exciting projects that I can't wait to share with you. But I’m always open to new opportunities and collaborations."
              }
            /> */}
          </div>

          <div className="mb-24 flex w-[100%] flex-col gap-4 text-[18px] font-normal leading-relaxed tracking-wide text-[#e4ded7]/80 sm:mb-32 md:mb-40 md:gap-6 md:text-[16px] md:leading-normal lg:mt-0 lg:mb-16 lg:max-w-[30%] lg:text-[18px]">
            <div className="flex flex-col gap-4 md:gap-3">
              <AnimatedTitle
                text={"Programming"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "C#, VB, Python, JavaScript, Assembly, TypeScript, Dart."
                }
              />
            </div>
            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"Libraries and Frameworks"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "Pytorch, TensorFlow, Keras, MXNet, OpenCV, NumPy, pandas, Matplotlib, Scipy, React, Next.js, Flutter, Redux, Redux Toolkit, Tailwind CSS, Material UI, Framer Motion, Bootstrap."
                }
              />
            </div>
            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"Tools"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "Visual Studio, SAP HANA, SAP B1, Android Studio, Visual Studio Code, Excel, Crystal Reports, Qlik, Power BI, Grafana, Influx DB for Digital Dashboarding."
                }
              />
            </div>
          </div>
        </div>
        {/* <div className="mt-10 flex flex-col md:-mt-0 lg:mt-28">
          <SongCarousel />
          <AnimatedBody
            text="A few songs I can recommend if you're looking for some fresh tunes :)"
            className="absolute bottom-10 right-0 left-0 mx-auto w-[90%] text-center text-[14px] font-semibold uppercase text-[#e4ded7] sm:w-[500px] md:bottom-12 md:w-[550px] md:text-[16px] "
          />
        </div> */}


     

<AnimatedTitle
          text={
            "Work Experience"
          }
          className={
            "mb-5 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />

          <div className="flex flex-col gap-3 m-2 w-[100%] text-start ">
              <AnimatedTitle
                text={"SBONE TFP Group"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
               className="text-white"
                text={
                  "• Lead Techno Functional Consultant & Developer.\t(November 2020 - Present)"
                }
              />
            </div>

            <div className="flex flex-col gap-3 m-2 w-[100%] text-start">
              <AnimatedTitle
                text={"HCC (Technolgy & Advisory)"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
               className="text-white"
                text={
                  "• Manager Development.(March 2019 – December 2020)"
                }
              />
               <AnimatedBody
                className="text-white"
                text={
                  "• Sr. Techno Functional Consultant - .Net Developer(September 2017 - March 2019)"
                }
              />
               <AnimatedBody
                className="text-white"
                text={
                  "• SAP Developer Consultant\n(March 2016 - August 2017)"
                }
              />
            </div>

            <div className="flex flex-col gap-3 m-2 w-[100%] text-start">
              <AnimatedTitle
                text={"Softzee"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
               className="text-white"
                text={
                  "• Junior Web Developer (August 2015 - March 2016)"
                }
              />
            </div>



          <div className=" h-20"/>

            <AnimatedTitle
          text={
            "Education"
          }
          className={
            "mb-5 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />


<div className="flex flex-col gap-3 m-2 w-[100%] text-start ">
              <AnimatedTitle
                text={"MS Sustainable and Autonomous Systems"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
              className="text-white"
                text={
                  "• University of Vaasa, Vaasa (2024)"
                }
              />
            </div>



            <div className="flex flex-col gap-3 m-2 w-[100%] text-start ">
              <AnimatedTitle
                text={"MS Data Sciences"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
               className="text-white"
                text={
                  "• University of Management and Technology, Lahore (2017-2020)"
                }
              />
            </div>


          <div className="flex flex-col gap-3 m-2 w-[100%] text-start ">
              <AnimatedTitle
                text={"BS Software Engineering"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
               className="text-white"
                text={
                  "• University of Management and Technology, Lahore (2012-2016)"
                }
              />
            </div>

      </div>
    </section>
  );
};

export default About;
