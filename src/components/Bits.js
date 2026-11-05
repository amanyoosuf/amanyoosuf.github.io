import { useEffect, useRef, useState } from "react";

// Image or a clearly labelled placeholder. `hint` tells you where to add the file.
export function ImgSlot({ src, alt, hint, className = "" }) {
  return src ? (
    <img className={`img ${className}`} src={src} alt={alt} />
  ) : (
    <div className={`img slot ${className}`} role="img" aria-label={alt}>
      <span>{hint}</span>
    </div>
  );
}

export function Section({ id, title, children }) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setSeen(true), { threshold: 0.12 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <section id={id} ref={ref} className={`section ${seen ? "seen" : ""}`}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

// Cards grow slightly on hover and tilt toward the cursor.
export function Card({ children, className = "" }) {
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--rx", `${((e.clientY - r.top) / r.height - 0.5) * -4}deg`);
    e.currentTarget.style.setProperty("--ry", `${((e.clientX - r.left) / r.width - 0.5) * 4}deg`);
  };
  const onLeave = (e) => {
    e.currentTarget.style.setProperty("--rx", "0deg");
    e.currentTarget.style.setProperty("--ry", "0deg");
  };
  return (
    <article className={`card ${className}`} onMouseMove={onMove} onMouseLeave={onLeave}>
      {children}
    </article>
  );
}

export const Tags = ({ items }) => (
  <ul className="tags">{items.map((t) => <li key={t}>{t}</li>)}</ul>
);
