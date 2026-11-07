import { useEffect, useRef, useState } from "react";
import "./Skills.css";

// Logos from the free Devicon set. Items with a `file` use your own image in public/skills/ instead.
const dev = (n) => `https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/${n}/${n}-original.svg`;

// To remove a skill, delete its line. To add one, copy a line.
// fix: "invert" turns a black logo white; fix: "glow" adds a soft outline to a dark logo.
const SKILLS = [
  { name: "Python", src: dev("python") }, { name: "NumPy", src: dev("numpy") },
  { name: "Pandas", src: dev("pandas"), fix: "glow" }, { name: "SciPy", src: dev("scipy") },
  { name: "Matplotlib", src: dev("matplotlib") }, { name: "JavaScript", src: dev("javascript") },
  { name: "React", src: dev("react") }, { name: "HTML", src: dev("html5") },
  { name: "CSS", src: dev("css3") }, { name: "Git", src: dev("git") },
  { name: "GitHub", src: dev("github"), fix: "invert" }, { name: "VS Code", src: dev("vscode") },
  { name: "PyTorch", src: dev("pytorch") }, { name: "TensorFlow", src: dev("tensorflow") },
  { name: "Jupyter", src: dev("jupyter") }, { name: "MATLAB", src: dev("matlab") },
  { name: "Simulink", file: "simulink.png" }, { name: "Pandapower", file: "pandapower.png" },
  { name: "SolidWorks", file: "solidworks.png" }, { name: "Shapr3D", file: "shapr3d.png" },
  { name: "Claude", file: "claude.png" }, { name: "Copilot", file: "copilot.png" },
  { name: "Gemini", file: "gemini.png" },
];

function Chip({ s }) {
  const [ok, setOk] = useState(true);
  const src = s.src || `${import.meta.env.BASE_URL}skills/${s.file}`;
  return (
    <div className={`chip ${s.fix || ""}`}>
      {ok ? <img src={src} alt={s.name} title={s.name} onError={() => setOk(false)} /> : <span>{s.name.slice(0, 3)}</span>}
    </div>
  );
}

export default function Skills() {
  const box = useRef(null);
  const els = useRef([]);

  useEffect(() => {
    const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const el = box.current;
    let W = el.clientWidth, H = el.clientHeight;
    let S = parseFloat(getComputedStyle(el).getPropertyValue("--s"));
    const rnd = () => (Math.random() < 0.5 ? -1 : 1) * (0.25 + Math.random() * 0.25);
    const st = SKILLS.map(() => ({ x: Math.random() * (W - S), y: Math.random() * (H - S), vx: rnd(), vy: rnd() }));

    const onResize = () => {
      W = el.clientWidth; H = el.clientHeight;
      S = parseFloat(getComputedStyle(el).getPropertyValue("--s"));
    };
    addEventListener("resize", onResize);

    let raf;
    const tick = () => {
      for (const a of st) {
        if (!still) { a.x += a.vx; a.y += a.vy; }
        // Bounce off the invisible walls, keeping each logo fully inside.
        if (a.x < 0 || a.x > W - S) { a.vx *= -1; a.x = Math.min(Math.max(a.x, 0), W - S); }
        if (a.y < 0 || a.y > H - S) { a.vy *= -1; a.y = Math.min(Math.max(a.y, 0), H - S); }
      }
      // Logos bounce off each other so they never sit on top of one another.
      for (let i = 0; i < st.length; i++) {
        for (let j = i + 1; j < st.length; j++) {
          const a = st[i], b = st[j];
          const dx = b.x - a.x, dy = b.y - a.y, d = Math.hypot(dx, dy), min = S * 0.98;
          if (d > 0 && d < min) {
            const push = (min - d) / 2, nx = dx / d, ny = dy / d;
            a.x -= nx * push; a.y -= ny * push; b.x += nx * push; b.y += ny * push;
            [a.vx, b.vx] = [b.vx, a.vx]; [a.vy, b.vy] = [b.vy, a.vy];
          }
        }
      }
      st.forEach((a, i) => { if (els.current[i]) els.current[i].style.transform = `translate(${a.x}px, ${a.y}px)`; });
      raf = requestAnimationFrame(tick);
    };
    tick();
    return () => { cancelAnimationFrame(raf); removeEventListener("resize", onResize); };
  }, []);

  return (
    <div className="skills-box" ref={box}>
      {SKILLS.map((s, i) => (
        <div key={s.name} className="skill" ref={(e) => (els.current[i] = e)}>
          <Chip s={s} />
        </div>
      ))}
    </div>
  );
}
