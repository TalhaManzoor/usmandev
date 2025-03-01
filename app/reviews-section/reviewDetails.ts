import { StaticImageData } from "next/image";
import alex from "../../public/samuel.avif";
import jerry from "../../public/jerry.avif";
import mauro from "../../public/mauro.jpeg";
import fahad from "../../public/testimonials/fahad.jpeg";
import zain from "../../public/testimonials/zain.jpeg";
import umer from "../../public/testimonials/umer.jpeg";

export type reviewProps = {
  name: string;
  role: string;
  company: string;
  profileImg: StaticImageData;
  testimonial: string;
  index: number;
};

export const reviewDetails = [
  // {
  //   name: "Samuel Alex",
  //   role: "Product Designer",
  //   company: "Umoja Linn",
  //   profileImg: alex,
  //   testimonial:
  //     "I had the opportunity to work alongside Usman on multiple projects, and I was continually impressed by his exceptional talent and leadership as a development consultant...",
  // },
  // {
  //   name: "Jeremiah Oloyede",
  //   role: "Founder",
  //   company: "Crown Branding Agency",
  //   profileImg: jerry,
  //   testimonial:
  //     "Victor's work is truly outstanding, and I can't recommend him enough! He completely transformed our branding agency's website. Since launch, we've seen a significant jump in website traffic and, crucially, conversions.",
  // },
  {
    name: "Umer Saeed",
    role: "Data Analyst",
    company: "Huawei",
    profileImg: umer,
    testimonial:
      "I had the pleasure of working with Usman at the University of Management and Technology on several course projects and research work during our article publications. He is an amazing Python developer and an excellent programmer, with outstanding expertise in data analysis and problem-solving...",
  },
  {
    name: "Fahad Abdul Samad",
    role: "Cloud Architect & Senior DevOps Engineer",
    company: "Nahil Cloud",
    profileImg: fahad,
    testimonial:
      "I had the opportunity to work alongside Usman on multiple projects, and I was continually impressed by his exceptional talent and leadership as a development consultant...",
  },
  {
    name: "Sayed Zain Ul Hassan",
    role: "GM Commercials and Projects",
    company: "Taar Consulting",
    profileImg: zain,
    testimonial:
      "I had the pleasure of working with Usman and I can confidently say he is an exceptional professional. His dedication, strong work ethic, and keen problem-solving skills set him apart in every project he takes on. Usman's ability to combine technical expertise with creative thinking has consistently delivered impressive results. Moreover, I have no doubt that Usman will continue to achieve great success in his career, and I wholeheartedly recommend him to anyone seeking a talented and reliable professional.",
  },
 
  
];
