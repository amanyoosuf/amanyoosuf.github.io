
// Edit this file only. Put images in /public/images and set the path, e.g. "/images/profile.jpg".
// Leave an image as "" to show a placeholder box.
 
export const profile = {
  name: "Your Name",
  headline: "Electrical engineering and AI, aimed at smarter power grids.",
  summary:
    "EE undergraduate at PolyU with a second major in AI and Data Analytics. I build data-driven tools for power systems, from state estimation to forecasting. [Replace with 2-3 sentences about you.]",
  photo: "", // /images/profile.jpg
  email: "you@connect.polyu.hk",
  links: [
    { label: "GitHub", href: "https://github.com/your-username" },
    { label: "LinkedIn", href: "https://linkedin.com/in/your-handle" },
    { label: "CV (PDF)", href: "/cv.pdf" },
  ],
  stack: ["Python", "TensorFlow", "React", "MATLAB/Simulink", "NumPy / pandas", "Git"],
};
 
export const education = [
  {
    school: "The Hong Kong Polytechnic University",
    logo: "", // /images/polyu.png
    degree: "BEng Electrical Engineering, second major in AI and Data Analytics",
    period: "2025 to 2029",
    notes: ["GPA: [add]", "Relevant courses: [add]", "Awards: [add]"],
  },
];
 
export const experience = [
  {
    org: "PolyU URIS (Undergraduate Research and Innovation Scheme)",
    logo: "",
    role: "Student researcher, data-driven dynamic state estimation for smart grids",
    period: "2026 to present",
    points: [
      "Estimate grid states from measurements using learned models instead of purely model-based filters.",
      "Tools: Python, TensorFlow. [Add datasets, results and a number that shows impact.]",
    ],
    tags: ["State estimation", "TensorFlow", "Smart grid"],
    link: "",
  },
  {
    org: "[Company or lab]",
    logo: "",
    role: "[Role]",
    period: "[Dates]",
    points: ["[What you did]", "[What changed because of it]"],
    tags: ["[Skill]"],
    link: "",
  },
];
 
export const projects = [
  {
    title: "Robotic arm",
    image: "", // /images/arm.jpg
    text: "[One sentence on the problem, one on what you built, one on the result.]",
    tags: ["Control", "MATLAB"],
    link: "",
  },
  {
    title: "Fuzzy logic (Tsukamoto) model",
    image: "",
    text: "[Describe the model and what it predicts.]",
    tags: ["Python", "Fuzzy logic"],
    link: "",
  },
  {
    title: "This website",
    image: "",
    text: "React portfolio with a scroll-reactive waveform. Source on GitHub.",
    tags: ["React", "CSS"],
    link: "https://github.com/your-username/your-repo",
  },
];
 
export const tutoring = {
  intro:
    "I run my own tutoring business for [subjects and levels]. [Add how many students, how long, outcomes.]",
  logo: "",
  highlights: ["[Students taught]", "[Subjects]", "[A result you are proud of]"],
};
 
export const other = [
  { title: "CS50P (Harvard)", text: "Introduction to Programming with Python, in progress." },
  { title: "Awards and activities", text: "[Add]" },
  { title: "Interests", text: "[Add]" },
];
 
