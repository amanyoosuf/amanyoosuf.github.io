import { useEffect, useState } from "react";

export default function Navbar({ sections, active, theme, onToggle }) {
  const [p, setP] = useState(0);
  useEffect(() => {
    const f = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      setP(max > 0 ? scrollY / max : 0);
    };
    f();
    addEventListener("scroll", f, { passive: true });
    return () => removeEventListener("scroll", f);
  }, []);
  return (
    <header className="nav">
      <a className="ig" href="https://instagram.com/amanyoosuf" target="_blank" rel="noopener" aria-label="Instagram @amanyoosuf">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></svg>
        <span>@amanyoosuf</span>
      </a>
      <nav>
        {sections.map((s) => <a key={s.id} href={`#${s.id}`} className={active === s.id ? "on" : ""}>{s.label}</a>)}
      </nav>
      <button className="theme-btn" onClick={onToggle} aria-label="Toggle light and dark mode">{theme === "dark" ? "Light" : "Dark"}</button>
      <div className="bar" style={{ transform: `scaleX(${p})` }} />
    </header>
  );
}
