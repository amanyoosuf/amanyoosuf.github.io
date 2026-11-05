import { useEffect, useState } from "react";

export default function Navbar({ sections, active, theme, onToggle }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="nav">
      <a className="nav-brand" href="#summary">YN</a>
      <nav className="nav-links" aria-label="Sections">
        {sections.map((s) => (
          <a key={s.id} href={`#${s.id}`} className={active === s.id ? "on" : ""}>
            {s.label}
          </a>
        ))}
      </nav>
      <button className="theme-btn" onClick={onToggle} aria-label="Toggle light and dark mode">
        {theme === "dark" ? "Light" : "Dark"}
      </button>
      <div className="progress" style={{ transform: `scaleX(${progress})` }} />
    </header>
  );
}
