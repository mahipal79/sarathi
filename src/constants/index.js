import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  roadmap1,
  roadmap2,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
  
} from "../assets";



export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];


export const collabText =
  "Share your knowledge and help others by becoming a contributor—make a difference with your expertise.";

export const collabContent = [
  {
    id: "0",
    title: "Share Your Expertise",
    
  },
  {
    id: "1",
    title: "Gain Recognition",
  },
  {
    id: "2",
    title: "Make a Difference",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  

  {
    id: "2",
    title: "Need Something Specific? Let Us Know!",
    description: "Can't find what you're looking for? Let us know! Request specific notes or past papers, and we’ll do our best to provide them.",
    price: null,
    features: [
      " Priority Support for Urgent Requests",
      "Quick Response Time",
      "Anonymous Requests",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Computer Science & Engineering",
    text: "Crack the code with resources that go beyond the basics. Empower your journey in CSE with top-tier notes and papers.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
    url: "/cse",  // Link to the CSE page
  },
  {
    id: "1",
    title: "Chemical Engineering",
    text: "Distill complex theories into understandable concepts. Dive deep into Chemical Engineering with notes crafted for clarity and success.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
    url: "/chemical-engineering",  // Link to the Chemical Engineering page
  },
  {
    id: "2",
    title: "Fire and Safety Engineering",
    text: "Be the first responder in knowledge with critical safety insights. Navigate your Fire and Safety studies with expertly curated content.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
    url: "/fehs",  // Link to the Fire and Safety page
  },
  {
    id: "3",
    title: "BBA",
    text: "Turn business theory into real-world mastery. Fuel your ambition with resources that make BBA concepts actionable.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
    url: "/bba",  // Link to the BBA page
  },
  {
    id: "4",
    title: "BCA",
    text: "Code your future with precision and creativity. Discover BCA materials that push the boundaries of what you can achieve.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
    url: "/bca",  // Link to the BCA page
  },
  {
    id: "5",
    title: "Bio-Tech",
    text: "Explore the cutting edge of biotechnology with resources that blend science and innovation. Master the latest in genetic research, molecular biology, and more",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    url: "/bio-tech",  // Link to the Bio-Tech page
  },
];
export const roadmap = [
  {
    id: "0",
    title: "Trusted Academic Companion",
    text: "Sarathi is your go-to resource, offering a vast and reliable collection of university notes and previous exam papers.",
    date: "Sarathi1.0",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Request What You Need",
    text: "Can’t find the notes or papers you're looking for? Use our Demand Notes System to request specific materials. ",
    date: "2.0",
    status: "progress",
    imageUrl: roadmap2,
    colorful: true,
  },

];


export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "https://discord.gg/pFKeHrkrY6",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "https://x.com/Sarathiclg",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/sarathi.clg",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "https://t.me/+ejp_eq46hpwzY2Q1",
  },
  // {
  //   id: "4",
  //   title: "Facebook",
  //   iconUrl: facebook,
  //   url: "#",
  // },
];
export const teamMembers = [
  {
    id: 1,
    name: "Mahipal Chauhan",
    role: "Web Developer",
    description: "Crafted the visual experience",
    imageUrl: "./src/assets/mahipal.jpg", 
    twitterUrl: "https://www.x.com/mahipal_79",
    githubUrl: "https://www.github.com/mahipal79",
    instagramUrl: "https://www.instagram.com/mahipal_chauhan9",
    linkedinUrl: "https://www.linkedin.com/in/mahipal-chauhan-978396268/",
  },
  {
    id: 2,
    name: "Krishna Bhatt",
    role: "Web Developer",
    description: "Crafted the core logic",
    imageUrl: "./src/assets/krsna.jpg",
    twitterUrl: "https://www.x.com/itscaybee",
    instagramUrl: "https://www.instagram.com/itscaybee",
    githubUrl: "https://www.github.com/ikrishnabhatt",
    linkedinUrl: "https://www.linkedin.com/in/krishnabhatt01",
   
  },
];
