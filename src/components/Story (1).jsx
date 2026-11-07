import { createContext, useContext, useRef, useState } from "react";
import Photo from "./Photo.jsx";

const Ctx = createContext(null);

// A phrase linked to a photo. Hover, focus or click spotlights that photo; clicking again releases it.
export function Hl({ id, children }) {
  const { active, setHover, togglePin } = useContext(Ctx);
  return (
    <button
      className={`hl ${active === id ? "on" : ""}`}
      onClick={() => togglePin(id)}
      onMouseEnter={() => setHover(id)} onMouseLeave={() => setHover(null)}
      onFocus={() => setHover(id)} onBlur={() => setHover(null)}
    >
      {children}
      <svg className="hl-ic" viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">
        <rect x="3" y="4" width="18" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="9" cy="10" r="1.8" fill="currentColor" />
        <path d="M4 18l5-5 4 4 3-3 4 4" fill="none" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    </button>
  );
}

// A card on one side (`side`) with its photos always showing on the other.
export default function Story({ side = "left", photos, children }) {
  const [pinned, setPinned] = useState(null);
  const [hover, setHover] = useState(null);
  const delay = useRef(-Math.random() * 8).current; // so cards do not all float in sync
  const active = hover ?? pinned;
  const togglePin = (id) => setPinned((p) => (p === id ? null : id));
  return (
    <Ctx.Provider value={{ active, setHover, togglePin }}>
      <div className="story" data-side={side}>
        <div className="card" style={{ animationDelay: `${delay}s` }}>{children}</div>
        <div className="photos">
          {photos.map((p) => <Photo key={p.id} file={p.file} r={p.r} active={active === p.id} />)}
        </div>
      </div>
    </Ctx.Provider>
  );
}
