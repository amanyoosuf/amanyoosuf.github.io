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
    </button>
  );
}

// One card: the text sits on `side` and the photos sit inside the same card on the other side.
export default function Story({ side = "left", stack = false, photos, children }) {
  const [pinned, setPinned] = useState(null);
  const [hover, setHover] = useState(null);
  const delay = useRef(-Math.random() * 8).current; // so cards do not all float in sync
  const active = hover ?? pinned;
  const togglePin = (id) => setPinned((p) => (p === id ? null : id));
  return (
    <Ctx.Provider value={{ active, setHover, togglePin }}>
      <div className="story" data-side={side}>
        <div className={`card ${stack ? "stack" : ""} ${photos.length ? "" : "solo"}`} style={{ animationDelay: `${delay}s` }}>
          <div className="card-text">{children}</div>
          {photos.length > 0 && (
            <div className="photos">
              {photos.map((p) => <Photo key={p.id} {...p} active={active === p.id} />)}
            </div>
          )}
        </div>
      </div>
    </Ctx.Provider>
  );
}
