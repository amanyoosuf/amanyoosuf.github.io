import { useEffect, useState } from "react";
import useScrollSpy from "./useScrollSpy";
import Navbar from "./components/Navbar.jsx";
import SpaceBackground from "./components/SpaceBackground.jsx";
import Section from "./components/Section.jsx";
import Story, { Hl } from "./components/Story.jsx";
import Photo from "./components/Photo.jsx";

/*
 HOW TO EDIT
 - Each <Story> is one card. Delete the whole <Story> to remove it.
 - A highlighted word is <Hl id="x">word</Hl>. Its photo is the entry with id "x" in that Story's photos array.
   To remove one, delete the <Hl> (keep the plain text) and delete its entry from photos.
 - Photos: save a file with the exact name shown on the placeholder in public/images/. No code change needed.
 - side="left" or "right" is where the card moves to when opened.
*/

const SECTIONS = [
  { id: "who", label: "Who Am I?" }, { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" }, { id: "tutoring", label: "Tutoring" },
  { id: "awards", label: "Awards" }, { id: "more", label: "More" },
];
const IDS = SECTIONS.map((s) => s.id);

// Gold frame sizes for the 8 award photos.
const AWARDS = ["tall", "wide", "", "wide", "tall", "", "tall", "wide"];

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
      <SpaceBackground />
      <Navbar sections={SECTIONS} active={active} theme={theme} onToggle={() => setTheme(theme === "dark" ? "light" : "dark")} />
      <main>
        <Section id="who" title="Who is Aman?">
          <Story side="left" photos={[
            { id: "w1", file: "who-1.jpg", r: -4 }, { id: "w2", file: "who-2.jpg", r: 3 }, { id: "w3", file: "who-3.jpg", r: -2 },
          ]}>
            <p>I am an electrical engineering undergraduate at PolyU with a second major in AI and Data Analytics. Lorem ipsum dolor sit amet, consectetur adipiscing elit, <Hl id="w1">sed do eiusmod tempor</Hl> incididunt ut labore et dolore magna aliqua.</p>
            <p>Ut enim ad minim veniam, quis nostrud <Hl id="w2">exercitation ullamco</Hl> laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in <Hl id="w3">reprehenderit in voluptate</Hl> velit esse.</p>
            <p className="hint">Click the highlighted words.</p>
          </Story>
        </Section>

        <Section id="experience" title="Experience">
          <Story side="right" photos={[{ id: "e1", file: "exp-1.jpg", r: 3 }]}>
            <h3>URIS Research, PolyU <small>2026 to present</small></h3>
            <p>Lorem ipsum dolor sit amet, <Hl id="e1">data-driven state estimation</Hl> consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
          </Story>
          <Story side="left" photos={[{ id: "e2", file: "exp-2.jpg", r: -3 }]}>
            <h3>Role, Company <small>Dates</small></h3>
            <p>Lorem ipsum dolor sit amet, consectetur <Hl id="e2">adipiscing elit</Hl> sed do eiusmod tempor incididunt ut labore et dolore.</p>
          </Story>
          <Story side="right" photos={[{ id: "e3", file: "exp-3.jpg", r: 2 }]}>
            <h3>Role, Company <small>Dates</small></h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <Hl id="e3">sed do eiusmod</Hl> tempor incididunt ut labore et dolore magna.</p>
          </Story>
        </Section>

        <Section id="projects" title="Projects">
          <Story side="left" photos={[{ id: "p1", file: "project-1.jpg", r: -3 }, { id: "p2", file: "project-2.jpg", r: 4 }]}>
            <h3>Project One</h3>
            <p>Lorem ipsum dolor sit amet, <Hl id="p1">consectetur adipiscing</Hl> elit, sed do eiusmod tempor, ut <Hl id="p2">labore et dolore</Hl> magna aliqua.</p>
          </Story>
          <Story side="right" photos={[{ id: "p3", file: "project-3.jpg", r: -2 }]}>
            <h3>Project Two</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <Hl id="p3">sed do eiusmod</Hl> tempor incididunt ut labore.</p>
          </Story>
        </Section>

        <Section id="tutoring" title="Tutoring">
          <Story side="left" photos={[
            { id: "t1", file: "tutoring-1.jpg", r: 3 }, { id: "t2", file: "tutoring-2.jpg", r: -4 }, { id: "t3", file: "tutoring-3.jpg", r: 2 },
          ]}>
            <p>Lorem ipsum dolor sit amet, <Hl id="t1">consectetur adipiscing</Hl> elit. Sed do eiusmod tempor <Hl id="t2">incididunt ut labore</Hl> et dolore magna aliqua, quis <Hl id="t3">nostrud exercitation</Hl> ullamco.</p>
          </Story>
        </Section>

        <Section id="awards" title="Awards">
          <div className="wall">
            {AWARDS.map((size, i) => <Photo key={i} file={`award-${i + 1}.jpg`} cls={`frame ${size}`} />)}
          </div>
        </Section>

        <Section id="more" title="More of me">
          <p className="lead">Currently looking for an electrical engineering or AI internship. Get in touch.</p>
          <div className="links">
            <a href="https://instagram.com/amanyoosuf" target="_blank" rel="noopener">Instagram</a>
            <a href="https://linkedin.com/in/your-handle" target="_blank" rel="noopener">LinkedIn</a>
            <a href="https://github.com/your-username" target="_blank" rel="noopener">GitHub</a>
            <a href="mailto:you@example.com">Email</a>
            <a href="cv.pdf" target="_blank" rel="noopener">CV (PDF)</a>
          </div>
        </Section>
      </main>
      <footer>Aman. Built with React and hosted on GitHub Pages.</footer>
    </>
  );
}
