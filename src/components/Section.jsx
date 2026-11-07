import { useEffect, useRef, useState } from "react";
import { tintOf } from "../tints.js";

// Titled section with its own tint colour. Fades in the first time it scrolls into view.
export default function Section({ id, title, children }) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  const t = tintOf(id);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setSeen(true), { threshold: 0.08 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return (
    <section id={id} ref={ref} className={`rv ${seen ? "in" : ""}`} style={{ "--tint-d": t.d, "--tint-l": t.l }}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
