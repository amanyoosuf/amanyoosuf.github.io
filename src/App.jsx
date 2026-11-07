import { useEffect, useState } from "react";
import useScrollSpy from "./useScrollSpy";
import Navbar from "./components/Navbar.jsx";
import SpaceBackground from "./components/SpaceBackground.jsx";
import Section from "./components/Section.jsx";
import Story, { Hl } from "./components/Story.jsx";
import Photo from "./components/Photo.jsx";
import Logo from "./components/Logo.jsx";
import Hero from "./components/Hero.jsx";
import Skills from "./components/Skills.jsx";
import { tintOf } from "./tints.js";

/*
 HOW TO EDIT
 - Each <Story> is one card. Delete the whole <Story> to remove it.
 - A photo-linked phrase is <Hl id="x">word</Hl>. Its photo is the entry with id "x" in that Story's photos array.
   To remove one, delete the <Hl> (keep the plain text) and delete its entry from photos.
 - Photos: save a file with the exact name shown on the placeholder.
 - Logos: save a file with the name used in <Logo file="..."> (no spaces in file names).
 - Skills: edit the SKILLS list at the top of components/Skills.jsx.
 - side="left" or "right" is where the card moves to when opened.
*/

const SECTIONS = [
  { id: "who", label: "Who Am I?" }, { id: "education", label: "Education" }, { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" }, { id: "skills", label: "Skills" }, { id: "tutoring", label: "Tutoring" },
  { id: "awards", label: "Awards" }, { id: "more", label: "More" },
];
const IDS = SECTIONS.map((s) => s.id);

// Your awards, in the order they scroll. shape: "tall", "wide" or "" (square). Delete a line to remove one.
const AWARDS = [
  { file: "uris.jpg", shape: "tall" },
  { file: "tds.jpg", shape: "wide" },
  { file: "edexcel.jpg", shape: "tall" },
  { file: "cambridge.jpg", shape: "tall" },
];

export default function App() {
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem("theme") || "dark"; } catch { return "dark"; }
  });
  const active = useScrollSpy(IDS);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem("theme", theme); } catch {}
  }, [theme]);

  return (
    <>
      <SpaceBackground tint={tintOf(active)} />
      <Navbar sections={SECTIONS} active={active} theme={theme} tint={tintOf(active)} onToggle={() => setTheme(theme === "dark" ? "light" : "dark")} />
      <main>
        <Hero />
        <Section id="who" title="Who is Aman?">
          <Story side="left" photos={[
            { id: "w1", file: "who-1.jpg", r: -4 }, { id: "w2", file: "who-2.jpg", r: 3 }, { id: "w3", file: "who-3.jpg", r: -2 },
          ]}>
            <p>I'm an electrical engineering undergraduate at PolyU with a second major in AI and Data Analytics. As a 2026/27 URIS researcher, I build <Hl id="w1">LSTM models that forecast voltage problems in EV- and solar-heavy power grids</Hl> and turn them into colour-coded operator alerts.</p>
            <p>I learn by building: <Hl id="w2">three Industrial Centre courses (MATLAB, SolidWorks, Shapr3D) and a year on PolyU's E-Formula EEE subteam</Hl>, plus projects like this site. Off the clock, I teach 50+ students and <Hl id="w3">play cricket for PolyU, University Cricket League champions 2025/26</Hl>.</p>
            <p className="hint">Hover over or tap the text to spotlight its photo.</p>
          </Story>
        </Section>

        <Section id="education" title="Education">
          <Story side="right" photos={[{ id: "ed1", file: "education-1.jpg", r: 3 }]}>
            <div className="head">
              <Logo file="polyu.png" alt="PolyU" />
              <h3>The Hong Kong Polytechnic University</h3>
            </div>
            <p>B.Eng (Hons) Scheme in Electrical Engineering with a Secondary Major in AI and Data Analytics. <small>Expected June 2029, CGPA 3.53/4.30</small></p>
            <p>Scholarships: <Hl id="ed1">URIS Scholarship (2026/27), Full Entry Scholarship and Talent Development Scholarship (2025/26)</Hl>.</p>
          </Story>
          <Story side="left" photos={[{ id: "ed2", file: "education-2.jpg", r: -3 }]}>
            <div className="head">
              <Logo file="lyceum.jpg" alt="Lyceum International School" />
              <h3>Lyceum International School, Nugegoda <small>Completed June 2024</small></h3>
            </div>
            <p>Edexcel International Advanced Level: Mathematics, Chemistry, Biology, Physics.</p>
            <p>Cambridge GCE Ordinary Level: Mathematics, Chemistry, Biology, Physics, Computer Science, English Language, Literature in English.</p>
            <p>Awards: <Hl id="ed2">Cambridge Outstanding Learner Award and Edexcel High Achiever Award</Hl>.</p>
          </Story>
        </Section>

        <Section id="experience" title="Experience">
          <Story side="right" photos={[{ id: "e1", file: "exp-1.jpg", r: 3 }]}>
            <div className="head">
              <Logo file="polyugs.jpg" alt="PolyU Graduate School" />
              <h3>URIS Research Project, PolyU <small>Sep 2026 to present</small></h3>
            </div>
            <p>Dept. of Electrical and Electronic Engineering, supervised by Prof. Siqi Bu.</p>
            <p>Project: <Hl id="e1">Data-Driven Dynamic State Estimation for Situational Awareness of Modern Power Grids</Hl></p>
            <ul>
              <li>Training an LSTM (PyTorch/TensorFlow) to forecast bus voltages from sparse measurements in grids with high EV and solar penetration.</li>
              <li>Building a Pandapower simulation of the IEEE 33-bus feeder, benchmarked against persistence, static DNN and WLS baselines.</li>
              <li>Testing robustness to measurement loss and bad data, and designing colour-coded early warnings for grid operators.</li>
            </ul>
          </Story>
          <Story side="left" photos={[{ id: "e2", file: "exp-2.jpg", r: -3 }]}>
            <div className="head">
              <Logo file="scholastic.jpg" alt="Scholastic Academy" />
              <h3>STEM Tutor and Project Developer, Scholastic Academy <small>Sep 2025 to present</small></h3>
            </div>
            <p>I teach Minecraft Education, Scratch, MIT App Inventor and other STEM activities to learners aged 6 to 13, adapting lessons to different ages and learning paces.</p>
            <p>I also prototype <Hl id="e2">interactive digital learning tools</Hl> using AI tools and automation workflows, and analyse usage data to improve them.</p>
          </Story>
          <Story side="right" photos={[{ id: "e3", file: "exp-3.jpg", r: 2 }]}>
            <div className="head">
              <Logo file="eformula.png" alt="PolyU E-Formula" />
              <h3>Electrical Sub-Team Member, PolyU E-Formula <small>Oct 2025 to Jun 2026</small></h3>
            </div>
            <p>I supported the design, testing and optimisation of the car's electrical systems, including wiring, sensors and motor control.</p>
            <p>I ran <Hl id="e3">functional testing and debugging of embedded electronics</Hl>, documented the results and wrote progress reports.</p>
          </Story>
          <Story side="left" photos={[{ id: "e4", file: "exp-4.jpg", r: -2 }]}>
            <div className="head">
              <Logo file="for-you.jpg" alt="For You Education" />
              <h3>[Role], For You Education <small>[Dates]</small></h3>
            </div>
            <p>[Tell me your role here and I'll write it.] <Hl id="e4">Highlighted detail</Hl></p>
          </Story>
        </Section>

        <Section id="projects" title="Projects">
          <Story side="left" photos={[{ id: "p1", file: "project-1.jpg", r: -3 }]}>
            <h3>Circuit Calculator <small>Dec 2025</small></h3>
            <p>A Python tool that automates circuit calculations and plots the results, built with <Hl id="p1">NumPy and Matplotlib</Hl>. I checked it against 10+ circuit types through systematic debugging and testing.</p>
          </Story>
          <Story side="right" photos={[{ id: "p2", file: "project-2.jpg", r: 3 }]}>
            <h3>Google Maps API Data Pipeline <small>Jan to Mar 2026</small></h3>
            <p>As a research assistant in PolyU's Civil and Environmental Engineering department, I ran <Hl id="p2">1,000+ API queries</Hl> with error-free retrieval and validation, and documented every processing step and quality check.</p>
          </Story>
          <Story side="left" photos={[{ id: "p3", file: "project-3.jpg", r: -2 }]}>
            <h3>This Portfolio Website <small>2026 to present</small></h3>
            <p>A responsive site built in <Hl id="p3">React, JavaScript, HTML and CSS</Hl> with reusable components, scroll animations and dark/light mode, version-controlled with Git and hosted on GitHub.</p>
          </Story>
          <Story side="right" photos={[{ id: "p4", file: "project-4.jpg", r: 2 }]}>
            <h3>CS50P, Harvard <small>In progress</small></h3>
            <p>Harvard's Introduction to Programming with Python. I'm working through the <Hl id="p4">problem sets and projects</Hl>, with all code committed on GitHub.</p>
          </Story>
        </Section>

        <Section id="skills" title="Skills">
          <Skills />
        </Section>

        <Section id="tutoring" title="Tutoring">
          <Story side="left" photos={[
            { id: "t1", file: "tutoring-1.jpg", r: 3 }, { id: "t2", file: "tutoring-2.jpg", r: -4 }, { id: "t3", file: "tutoring-3.jpg", r: 2 },
          ]}>
            <p>I've taught <Hl id="t1">50+ students over four years</Hl> across the IAL, IGCSE, IB MYP, IB and AP curricula.</p>
            <p>I've also led <Hl id="t2">technical workshops and projects that bring STEM and AI into school subjects</Hl>.</p>
            <p>Next, I'm working towards <Hl id="t3">starting my own education centre</Hl>.</p>
          </Story>
        </Section>

        <Section id="awards" title="Awards">
          <div className="wall">
            <div className="track">
              {[0, 1].map((half) => (
                <div className="half" key={half} aria-hidden={half === 1 ? "true" : undefined}>
                  {[0, 1, 2].map((c) => AWARDS.map((w) => <Photo key={`${c}-${w.file}`} file={w.file} cls={`frame ${w.shape}`} />))}
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section id="more" title="More of me">
          <p className="lead">Currently looking for an electrical engineering or AI internship. Get in touch.</p>
          <div className="links">
            <a href="https://instagram.com/amanyoosuf" target="_blank" rel="noopener">Instagram</a>
            <a href="https://linkedin.com/in/your-handle" target="_blank" rel="noopener">LinkedIn</a>
            <a href="https://github.com/your-username" target="_blank" rel="noopener">GitHub</a>
            <a href="mailto:amanur.yoosuf@connect.polyu.hk">Email</a>
            <a href="cv.pdf" target="_blank" rel="noopener">CV (PDF)</a>
          </div>
        </Section>
      </main>
      <footer>Aman. Built with React and hosted on GitHub Pages.</footer>
    </>
  );
}
