import { tintOf } from "../tints.js";
import { Instagram, GitHub, LinkedIn, Mail } from "./Icons.jsx";

// First impression: name, one-line pitch and contact icons.
export default function Hero() {
  const t = tintOf("who");
  return (
    <div className="hero" id="top" style={{ "--tint-d": t.d, "--tint-l": t.l }}>
      <p className="hero-kicker">2nd Year @ The Hong Kong Polytechnic University</p>
      <h1>Amanur Yoosuf</h1>
      <p className="hero-line">Electrical Engineering, w/ a Secondary Major in AI & Data Analytics</p>
      p className="hero-sub">Deep learning for smarter power grids. URIS researcher.</p>
      <div className="hero-icons">
        <a href="https://github.com/amanyoosuf" target="_blank" rel="noopener" aria-label="GitHub" title="GitHub"><GitHub /></a>
        <a href="https://linkedin.com/in/amanuryoosuf12" target="_blank" rel="noopener" aria-label="LinkedIn" title="LinkedIn"><LinkedIn /></a>
        <a href="https://instagram.com/amanyoosuf" target="_blank" rel="noopener" aria-label="Instagram" title="Instagram"><Instagram /></a>
        <a href="mailto:amanur.yoosuf@connect.polyu.hk" aria-label="Email" title="Email"><Mail /></a>
      </div>
      <a className="scroll-cue" href="#summary" aria-label="Scroll to content">&#8595;</a>
    </div>
  );
}
