import { tintOf } from "../tints.js";

// First impression: name, one-line pitch and three clear actions.
export default function Hero() {
  const t = tintOf("who");
  return (
    <div className="hero" id="top" style={{ "--tint-d": t.d, "--tint-l": t.l }}>
      <p className="hero-kicker">PolyU, Electrical Engineering with AI and Data Analytics</p>
      <h1>Amanur Yoosuf</h1>
      <p className="hero-line">Electrical Engineering and AI undergraduate, seeking a 2027 internship.</p>
      <p className="hero-sub">Deep learning for smarter power grids. URIS researcher.</p>
      <div className="hero-cta">
        <a className="btn primary" href="cv.pdf" target="_blank" rel="noopener">View CV</a>
        <a className="btn" href="https://github.com/your-username" target="_blank" rel="noopener">GitHub</a>
        <a className="btn" href="mailto:amanur.yoosuf@connect.polyu.hk">Email me</a>
      </div>
      <a className="scroll-cue" href="#who" aria-label="Scroll to content">&#8595;</a>
    </div>
  );
}
