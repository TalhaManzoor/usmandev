export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const devProjects = [
  {
    id: 0,
    name: "Web PR",
    description:
      "Streamlined web app for managing, tracking, and approving PR requests with ease.",
    technologies: ["React", "Tailwind CSS", "ASP .NET"],
    github: "",
    demo: "",
    image: require(".//../../public/projectsImages/webPRApp.png"),
    available: true,
  },
  {
    id: 1,
    name: "Dealer App",
    description:
      "Dealer app for logging daily sales, placing orders, and managing complaints efficiently.",
    technologies: ["React", "Tailwind CSS", "ASP .NET"],
    github: "",
    demo: "",
    image: require(".//../../public/projectsImages/dealerApp.png"),
    available: true,
  },
  {
    id: 2,
    name: "Sale App",
    description:
      "Sales app for users to easily post, track, and manage their sales.",
    technologies: ["Flutter", "ASP .Net"],
    github: "",
    demo: "",
    image: require(".//../../public/projectsImages/saleApp.png"),
    available: true,
  },
  {
    id: 3,
    name: "After Sale App",
    description:
      "After Sale app for managing complaints with roles for sales coordinators, supervisors, and service vendors.",
    technologies: ["Flutter", "ASP .Net"],
    github: "",
    demo: "",
    image: require(".//../../public/projectsImages/afterSaleApp.png"),
    available: true,
  },
  {
    id: 4,
    name: "WHS",
    description:
      "Efficient warehouse management app for inventory tracking, order processing, and real-time analytics.",
    technologies: ["Flutter", "ASP .NET", "Dart"],
    github: "",
    demo: "",
    image: require(".//../../public/projectsImages/warehouseApp.png"),
    available: true,
  },
  {
    id: 5,
    name: "E-Invoicing",
    description:
      "E-Invoicing IRBM is Malaysia’s digital invoicing system for tax compliance, real-time validation, and reporting.",
    technologies: ["SAP b1", "ASP .NET", "C#"],
    github: "",
    demo: "",
    image: require(".//../../public/projectsImages/einvoicing.jpeg"),
    available: true,
  },
  {
    id: 6,
    name: "Plant Maintenance",
    description:
      "Plant Maintenance ensures equipment inspection, repair, and upkeep for efficiency, safety, and minimal downtime.",
    technologies: ["SAP b1", "ASP .NET", "C#"],
    github: "",
    demo: "",
    image: require(".//../../public/projectsImages/plantMaintenance.jpeg"),
    available: true,
  },
  {
    id: 7,
    name: "Cargo and Flight Operations",
    description:
      "A system for managing air cargo, flight scheduling, tracking, inventory, and compliance efficiently.",
    technologies: ["SAP b1", "ASP .NET", "C#"],
    github: "",
    demo: "",
    image: require(".//../../public/projectsImages/cargo.jpeg"),
    available: true,
  },
  {
    id: 8,
    name: "Machine Learning",
    description:
      "Customer Segmentation and Product Recommendation System.",
    technologies: ["Flutter", "ASP .NET", "Dart"],
    github: "",
    demo: "",
    image: require(".//../../public/projectsImages/productRecommendation1.webp"),
    available: true,
  },
  {
    id: 9,
    name: "Machine Learning",
    description:
      "Biasness Identification of Talk Show’s Host by Using Video Analysis.",
    technologies: ["Flutter", "ASP .NET", "Dart"],
    github: "",
    demo: "",
    image: require(".//../../public/projectsImages/talkShow1.webp"),
    available: true,
  },
  // {
  //   id: 4,
  //   name: "SkyWatch",
  //   description:
  //     "SkyWatch is a convenient and user-friendly tool that allows you to quickly and easily check the current weather and forecast for the next 2 days in any city.",
  //   technologies: ["React", "CSS", "Chart.js"],
  //   github: "https://github.com/victorcodess/weather-forecast-website",
  //   demo: "https://sky-watch.vercel.app/",
  //   image: require(".//../../public/projects/skywatch-flip.png"),
  //   available: true,
  // },
  // {
  //   id: 4,
  //   name: "Alpaca Image Generator",
  //   description:
  //     "An image generator website that allows users to generate, combine, and download images.",
  //   technologies: ["React", "CSS", "Merge Images"],
  //   github: "https://github.com/victorcodess/alpaca-image-generator",
  //   demo: "http://alpaca-image-generator-beta.vercel.app",
  //   image: require(".//../../public/projects/alpaca-flip.png"),
  //   available: true,
  // },

  // {
  //   id: 5,
  //   name: "Link Shortener",
  //   description:
  //     "A website that reduces the length of your URL using Bit.ly's API",
  //   technologies: ["JavaScript", "CSS", "Bit.ly's API"],
  //   github: "https://github.com/victorcodess/url-shortener",
  //   demo: "https://url-shortener-nine-delta.vercel.app",
  //   image: require(".//../../public/projects/shortener-new.webp"),
  //   available: true,
  // },
  // {
  //   id: 6,
  //   name: "Carpooling Service",
  //   description:
  //     "TMTM helps Covenant University students find fellow students who are headed to the same location, so they can share a ride and split the cost.",
  //   technologies: ["Material UI", "React", "Formik"],
  //   github: "https://github.com/victorcodess/carpooling-service",
  //   demo: "",
  //   image: require(".//../../public/projects/carpool-new.webp"),
  //   available: false,
  // },
  // {
  //   id: 7,
  //   name: "MLSC.ng",
  //   description:
  //     "This is platform for Microsoft Learn Student Ambassadors to shorten links, append their sharing IDs and generate event certificates.",
  //   technologies: ["Next.js", "Next Auth", "Tailwind CSS"],
  //   github: "https://github.com/msp-nigeria/mlsc.ng-frontend",
  //   demo: "",
  //   image: require(".//../../public/projects/mlsc.png"),
  //   available: false,
  // },
];

export const designProjects = [
  {
    id: 1,
    name: "Hebron Statup Lab Website",
    description:
      "SkyWatch is a convenient and user-friendly tool that allows you to quickly and easily check the current.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fhsl.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 2,
    name: "RAGS Scrubs Website",
    description:
      "An image generator website that allows users to generate, combine, and download images.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Frags.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 3,
    name: "Crown Branding Agency Website",
    description:
      "A website that reduces the length of your URL using Bit.ly's API",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image:
      "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fcrown.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 4,
    name: "Titi Mobile App",
    description:
      "TMTM helps you find people who are headed to the same location as you, so you can share a ride and split the cost with them.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Ftiti.webp&w=1920&q=75",
    available: false,
  },
];
