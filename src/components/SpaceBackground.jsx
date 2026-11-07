import { useEffect, useRef } from "react";

// Faint twinkling stars (behind content) plus a glowing cursor with a fading trail.
export default function SpaceBackground() {
  const sRef = useRef(null), tRef = useRef(null);
  useEffect(() => {
    const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const sc = sRef.current, sx = sc.getContext("2d");
    let stars = [], raf1, raf2;
    const size = () => {
      sc.width = innerWidth; sc.height = innerHeight;
      stars = Array.from({ length: Math.round(innerWidth * innerHeight / 7000) }, () => ({
        x: Math.random() * sc.width, y: Math.random() * sc.height,
        r: Math.random() * 1.2 + 0.2, p: Math.random() * 6.28, s: Math.random() * 0.02 + 0.005,
      }));
    };
    const drawStars = () => {
      sx.clearRect(0, 0, sc.width, sc.height);
      for (const s of stars) {
        s.p += still ? 0 : s.s;
        sx.globalAlpha = 0.25 + 0.4 * (0.5 + 0.5 * Math.sin(s.p));
        sx.fillStyle = s.r > 1 ? "#cfe0ff" : "#fff";
        sx.beginPath(); sx.arc(s.x, s.y, s.r, 0, 6.28); sx.fill();
      }
      raf1 = requestAnimationFrame(drawStars);
    };
    size(); drawStars(); addEventListener("resize", size);

    const tc = tRef.current, tx = tc.getContext("2d");
    let pts = [], mx = -100, my = -100, onMove, tsize;
    if (matchMedia("(pointer: fine)").matches && !still) {
      tsize = () => { tc.width = innerWidth; tc.height = innerHeight; };
      tsize(); addEventListener("resize", tsize);
      onMove = (e) => { mx = e.clientX; my = e.clientY; pts.push({ x: mx, y: my, t: performance.now() }); };
      addEventListener("mousemove", onMove);
      const glow = (x, y, r, a, b) => {
        const g = tx.createRadialGradient(x, y, 0, x, y, r);
        g.addColorStop(0, a); g.addColorStop(1, b);
        tx.fillStyle = g; tx.beginPath(); tx.arc(x, y, r, 0, 6.28); tx.fill();
      };
      const loop = (now) => {
        tx.clearRect(0, 0, tc.width, tc.height);
        tx.globalCompositeOperation = "lighter";
        pts = pts.filter((p) => now - p.t < 700);
        for (const p of pts) {
          const life = 1 - (now - p.t) / 700;
          glow(p.x, p.y, 6 + 22 * life, `rgba(120,180,255,${0.35 * life})`, "rgba(120,180,255,0)");
        }
        glow(mx, my, 40, "rgba(190,220,255,.5)", "rgba(120,180,255,0)");
        raf2 = requestAnimationFrame(loop);
      };
      loop(performance.now());
    }
    return () => {
      cancelAnimationFrame(raf1); cancelAnimationFrame(raf2);
      removeEventListener("resize", size);
      if (tsize) removeEventListener("resize", tsize);
      if (onMove) removeEventListener("mousemove", onMove);
    };
  }, []);
  return (<><canvas id="stars" ref={sRef} /><canvas id="trail" ref={tRef} /></>);
}
