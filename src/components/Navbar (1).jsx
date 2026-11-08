import { useEffect, useState } from "react";
import { Instagram, Mail } from "./Icons.jsx";

// `tint` is the colour of the section currently on screen, so the bar and links change with it.
export default function Navbar({ sections, active, theme, onToggle, tint }) {
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
    <header className="nav" style={{ "--tint-d": tint?.d, "--tint-l": tint?.l }}>
      <div className="nav-left">
        <a className="ig" href="https://instagram.com/amanyoosuf" target="_blank" rel="noopener" aria-label="Instagram @amanyoosuf">
          <Instagram width="20" height="20" />
          <span>@amanyoosuf</span>
        </a>
        <a className="ig mail" href="mailto:amanur.yoosuf@connect.polyu.hk" aria-label="Email amanur.yoosuf@connect.polyu.hk">
          <Mail width="20" height="20" />
          <span>amanur.yoosuf@connect.polyu.hk</span>
        </a>
      </div>
      <nav>
        {sections.map((s) => <a key={s.id} href={`#${s.id}`} className={active === s.id ? "on" : ""}>{s.label}</a>)}
      </nav>
      <button className="theme-btn" onClick={onToggle} aria-label="Toggle light and dark mode">{theme === "dark" ? "Light" : "Dark"}</button>
      <div className="bar" style={{ transform: `scaleX(${p})` }} />
    </header>
  );
}
