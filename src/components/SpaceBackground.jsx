import { useEffect, useRef } from "react";

const hex = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));

// Interactive starfield: stars drift away from the cursor and spring back, with the odd shooting star.
// The cursor glow and trail take the colour of the section on screen. Light mode mirrors it with dark stars.
export default function SpaceBackground({ tint }) {
  const sRef = useRef(null), tRef = useRef(null), tintRef = useRef(tint);
  tintRef.current = tint;

  useEffect(() => {
    const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = matchMedia("(pointer: fine)").matches;
    const isLight = () => document.documentElement.dataset.theme === "light";
    const sc = sRef.current, sx = sc.getContext("2d");
    const tc = tRef.current, tx = tc.getContext("2d");
    let stars = [], shoot = null, nextShoot = performance.now() + 5000, raf;
    let mx = -9999, my = -9999, pts = [];

    const size = () => {
      sc.width = tc.width = innerWidth; sc.height = tc.height = innerHeight;
      stars = Array.from({ length: Math.round(innerWidth * innerHeight / 9000) }, () => {
        const x = Math.random() * innerWidth, y = Math.random() * innerHeight;
        return { hx: x, hy: y, x, y, vx: 0, vy: 0, r: 0.5 + Math.random() ** 3 * 2.4, p: Math.random() * 6.28, s: 0.006 + Math.random() * 0.02 };
      });
    };
    const onMove = (e) => { mx = e.clientX; my = e.clientY; if (fine && !still) pts.push({ x: mx, y: my, t: performance.now() }); };
    const onLeave = () => { mx = my = -9999; };
    const glow = (x, y, r, a, b) => {
      const g = tx.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, a); g.addColorStop(1, b);
      tx.fillStyle = g; tx.beginPath(); tx.arc(x, y, r, 0, 6.28); tx.fill();
    };

    const frame = (now) => {
      const light = isLight();
      const [r, g, b] = hex((light ? tintRef.current?.l : tintRef.current?.d) || "#6aa8ff");
      sx.clearRect(0, 0, sc.width, sc.height);
      tx.clearRect(0, 0, tc.width, tc.height);

      for (const s of stars) {
        if (!still) {
          const dx = s.x - mx, dy = s.y - my, d = Math.hypot(dx, dy);
          if (d < 150 && d > 0.1) { const f = (1 - d / 150) ** 2 * 5; s.vx += (dx / d) * f; s.vy += (dy / d) * f; }
          s.vx += (s.hx - s.x) * 0.02; s.vy += (s.hy - s.y) * 0.02;
          s.vx *= 0.88; s.vy *= 0.88; s.x += s.vx; s.y += s.vy; s.p += s.s;
        }
        const a = 0.3 + 0.5 * (0.5 + 0.5 * Math.sin(s.p));
        sx.fillStyle = light ? "#27407a" : s.r > 1.6 ? "#d7e6ff" : "#fff";
        sx.globalAlpha = light ? a * 0.8 : a;
        sx.beginPath(); sx.arc(s.x, s.y, s.r, 0, 6.28); sx.fill();
        if (s.r > 1.7) { sx.globalAlpha = a * 0.15; sx.beginPath(); sx.arc(s.x, s.y, s.r * 3.2, 0, 6.28); sx.fill(); }
      }

      if (!still && now > nextShoot) {
        shoot = { x: Math.random() * innerWidth * 0.7, y: Math.random() * innerHeight * 0.4, vx: 9, vy: 4, life: 1 };
        nextShoot = now + 7000 + Math.random() * 8000;
      }
      if (shoot) {
        shoot.x += shoot.vx; shoot.y += shoot.vy; shoot.life -= 0.012;
        if (shoot.life <= 0) shoot = null;
        else {
          const gr = sx.createLinearGradient(shoot.x - shoot.vx * 9, shoot.y - shoot.vy * 9, shoot.x, shoot.y);
          gr.addColorStop(0, light ? "rgba(39,64,122,0)" : "rgba(255,255,255,0)");
          gr.addColorStop(1, light ? "rgba(39,64,122,.8)" : "rgba(255,255,255,.9)");
          sx.globalAlpha = shoot.life; sx.strokeStyle = gr; sx.lineWidth = 1.5;
          sx.beginPath(); sx.moveTo(shoot.x - shoot.vx * 9, shoot.y - shoot.vy * 9); sx.lineTo(shoot.x, shoot.y); sx.stroke();
        }
      }

      if (fine && !still) {
        tx.globalCompositeOperation = light ? "source-over" : "lighter";
        pts = pts.filter((p) => now - p.t < 700);
        for (const p of pts) {
          const life = 1 - (now - p.t) / 700;
          glow(p.x, p.y, 6 + 22 * life, `rgba(${r},${g},${b},${(light ? 0.22 : 0.35) * life})`, `rgba(${r},${g},${b},0)`);
        }
        if (mx > 0) glow(mx, my, 40, `rgba(${r},${g},${b},${light ? 0.3 : 0.45})`, `rgba(${r},${g},${b},0)`);
      }
      raf = requestAnimationFrame(frame);
    };

    size(); frame(performance.now());
    addEventListener("resize", size); addEventListener("mousemove", onMove); document.addEventListener("mouseleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      removeEventListener("resize", size); removeEventListener("mousemove", onMove); document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (<><canvas id="stars" ref={sRef} /><canvas id="trail" ref={tRef} /></>);
}
