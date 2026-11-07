import { createContext, useContext, useRef, useState } from "react";
import Photo from "./Photo.jsx";

const Ctx = createContext(null);

// A phrase linked to a photo. A small photo icon marks it; clicking underlines the phrase and shows the photo.
export function Hl({ id, children }) {
  const { shown, toggle } = useContext(Ctx);
  const on = shown.has(id);
  return (
    <button className={`hl ${on ? "on" : ""}`} onClick={() => toggle(id)} aria-pressed={on} title={on ? "Hide photo" : "Show photo"}>
      {children}
      <svg className="hl-ic" viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">
        <rect x="3" y="4" width="18" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="9" cy="10" r="1.8" fill="currentColor" />
        <path d="M4 18l5-5 4 4 3-3 4 4" fill="none" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    </button>
  );
}

// A card that starts centred, slides to `side` when a photo icon is clicked, and reveals photos.
export default function Story({ side = "left", photos, children }) {
  const [shown, setShown] = useState(new Set());
  const delay = useRef(-Math.random() * 8).current; // so cards do not all float in sync
  const toggle = (id) => setShown((s) => { const n = new Set(s); n.has(id) ? n.delete(id) : n.add(id); return n; });
  return (
    <Ctx.Provider value={{ shown, toggle }}>
      <div className={`story ${shown.size ? "open" : ""}`} data-side={side}>
        <div className="card" style={{ animationDelay: `${delay}s` }}>{children}</div>
        <div className="photos">
          {photos.map((p) => <Photo key={p.id} file={p.file} r={p.r} show={shown.has(p.id)} />)}
        </div>
      </div>
    </Ctx.Provider>
  );
}
