import { useEffect, useRef } from "react";

// Three-phase sine waves (120 degrees apart). Amplitude follows the mouse height;
// phase drifts with time and scroll, so the grid "hums" as you move through the page.
const PHASES = [0, (2 * Math.PI) / 3, (4 * Math.PI) / 3];

export default function Waveform() {
  const paths = useRef([]);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let amp = 0.5, target = 0.5, raf, t = 0;

    const onMove = (e) => { target = 0.25 + 0.75 * (1 - e.clientY / window.innerHeight); };
    window.addEventListener("mousemove", onMove);

    const draw = () => {
      amp += (target - amp) * 0.05;
      t += reduce ? 0 : 0.012;
      const shift = window.scrollY * 0.004;
      PHASES.forEach((p, i) => {
        let d = "";
        for (let x = 0; x <= 1200; x += 10) {
          const y = 150 + Math.sin(x * 0.012 + p + t + shift) * 90 * amp;
          d += `${x ? "L" : "M"}${x} ${y.toFixed(1)}`;
        }
        paths.current[i]?.setAttribute("d", d);
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("mousemove", onMove); };
  }, []);

  return (
    <svg className="wave" viewBox="0 0 1200 300" preserveAspectRatio="none" aria-hidden="true">
      {PHASES.map((_, i) => (
        <path key={i} ref={(el) => (paths.current[i] = el)} className={`phase p${i}`} />
      ))}
    </svg>
  );
}
