import { useEffect, useState } from "react";
import "./App.css";
import useScrollSpy from "./useScrollSpy";
import Navbar from "./components/Navbar";
import { Section, Card, ImgSlot, Tags } from "./components/Bits";
import { profile, education, experience, projects, tutoring, other } from "./data";

const SECTIONS = [
  { id: "summary", label: "Summary" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "tutoring", label: "Tutoring" },
  { id: "other", label: "Other" },
];
const IDS = SECTIONS.map((s) => s.id);

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
      <Navbar sections={SECTIONS} active={active} theme={theme}
        onToggle={() => setTheme(theme === "dark" ? "light" : "dark")} />

      <main>
        <section id="summary" className="hero">
          <div className="hero-inner">
            <ImgSlot src={profile.photo} alt={profile.name} hint="Add profile photo: public/images/profile.jpg" className="avatar" />
            <div>
              <h1>{profile.name}</h1>
              <p className="lead">{profile.headline}</p>
              <p className="muted">{profile.summary}</p>
              <Tags items={profile.stack} />
              <p className="links">
                <a href={`mailto:${profile.email}`}>Email me</a>
                {profile.links.map((l) => <a key={l.label} href={l.href}>{l.label}</a>)}
              </p>
            </div>
          </div>
        </section>

        <Section id="education" title="Education">
          {education.map((e) => (
            <Card key={e.school} className="row">
              <ImgSlot src={e.logo} alt={e.school} hint="School logo: public/images/polyu.png" className="logo" />
              <div>
                <h3>{e.school}</h3>
                <p>{e.degree}</p>
                <p className="muted">{e.period}</p>
                <ul>{e.notes.map((n) => <li key={n}>{n}</li>)}</ul>
              </div>
            </Card>
          ))}
        </Section>

        <Section id="experience" title="Undergraduate experience">
          {experience.map((x) => (
            <Card key={x.org} className="row">
              <ImgSlot src={x.logo} alt={x.org} hint="Add logo" className="logo" />
              <div>
                <h3>{x.role}</h3>
                <p>{x.org} <span className="muted">({x.period})</span></p>
                <ul>{x.points.map((p) => <li key={p}>{p}</li>)}</ul>
                <Tags items={x.tags} />
                {x.link && <a href={x.link}>Read more</a>}
              </div>
            </Card>
          ))}
        </Section>

        <Section id="projects" title="Projects">
          <div className="grid">
            {projects.map((p) => (
              <Card key={p.title}>
                <ImgSlot src={p.image} alt={p.title} hint="Add project image: public/images/..." className="shot" />
                <h3>{p.title}</h3>
                <p className="muted">{p.text}</p>
                <Tags items={p.tags} />
                {p.link && <a href={p.link}>View project</a>}
              </Card>
            ))}
          </div>
        </Section>

        <Section id="tutoring" title="Tutoring">
          <Card className="row">
            <ImgSlot src={tutoring.logo} alt="Tutoring business" hint="Add business logo" className="logo" />
            <div>
              <p>{tutoring.intro}</p>
              <ul>{tutoring.highlights.map((h) => <li key={h}>{h}</li>)}</ul>
            </div>
          </Card>
        </Section>

        <Section id="other" title="Other">
          <div className="grid">
            {other.map((o) => (
              <Card key={o.title}><h3>{o.title}</h3><p className="muted">{o.text}</p></Card>
            ))}
          </div>
        </Section>
      </main>

      <footer className="footer">
        <p className="muted">{profile.name}. Built with React.</p>
      </footer>
    </>
  );
}
