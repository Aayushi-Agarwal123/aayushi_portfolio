import aiResumeImage from "../assets/AI-RESUME-IMAGE.png";
import interview from "../assets/Interview.png";

const projects = [
  {
    title: "AI Resume Screener",
    status: "Featured",

    description:
      "Built an AI-powered ATS Resume Screening platform that analyzes resumes against job descriptions, calculates ATS compatibility scores, identifies missing skills, ranks candidates, and generates intelligent hiring insights for recruiters.",

    tech: [
      "React",
      "TypeScript",
      "Python",
      "Streamlit",
      "NLP",
      "Scikit-Learn",
    ],

    github:
      "https://github.com/Aayushi-Agarwal123/AI-Resume-Screener",

    demo:
      "https://ai-resume-screener-ynpp.onrender.com",

    image: aiResumeImage,
  },

  {
    title: "InterviewVerse AI",

    status: "In Progress",

    description:
      "Developing an AI-powered interview preparation platform featuring real-time video interviews, AI interview evaluation, collaborative meetings, coding rounds, and personalized performance analytics.",

    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.io",
      "WebRTC",
      "OpenAI",
    ],

    github:
      "https://github.com/Aayushi-Agarwal123/InterviewVerseAI",

    demo: "",

    image: interview,
  },
];

export default projects;