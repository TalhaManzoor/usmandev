import { StaticImageData } from "next/image";
import alex from "../../public/samuel.avif";
import jerry from "../../public/jerry.avif";
import mauro from "../../public/mauro.jpeg";
import fahad from "../../public/testimonials/fahad.jpeg";
import olamide from "../../public/olamide.jpeg";
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
  {
    name: "Samuel Alex",
    role: "Product Designer",
    company: "Umoja Linn",
    profileImg: alex,
    testimonial:
      "I had the opportunity to work alongside Usman on multiple projects, and I was continually impressed by his exceptional talent and leadership as a development consultant...",
  },
  {
    name: "Jeremiah Oloyede",
    role: "Founder",
    company: "Crown Branding Agency",
    profileImg: jerry,
    testimonial:
      "Victor's work is truly outstanding, and I can't recommend him enough! He completely transformed our branding agency's website. Since launch, we've seen a significant jump in website traffic and, crucially, conversions.",
  },
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
    name: "Olamide Sholanke",
    role: "Senior Frontend Engineer",
    company: "Mono",
    profileImg: olamide,
    testimonial:
      "I had the pleasure of working with Victor on a frontend development project at Mono, and I highly recommend him. He consistently delivered high-quality code, and brought a proactive and creative approach to problem-solving.",
  },
 
  
];
