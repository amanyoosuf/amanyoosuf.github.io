import { createContext, useContext, useState } from "react";
import Photo from "./Photo.jsx";

const Ctx = createContext(null);

// A highlighted word. Clicking it toggles the photo with the same id.
export function Hl({ id, children }) {
  const { shown, toggle } = useContext(Ctx);
  return (
    <button className={`hl ${shown.has(id) ? "on" : ""}`} onClick={() => toggle(id)}>{children}</button>
  );
}

// A card that starts centred, slides to `side` when a highlight is clicked, and reveals photos.
export default function Story({ side = "left", photos, children }) {
  const [shown, setShown] = useState(new Set());
  const toggle = (id) => setShown((s) => { const n = new Set(s); n.has(id) ? n.delete(id) : n.add(id); return n; });
  return (
    <Ctx.Provider value={{ shown, toggle }}>
      <div className={`story ${shown.size ? "open" : ""}`} data-side={side}>
        <div className="card">{children}</div>
        <div className="photos">
          {photos.map((p) => <Photo key={p.id} file={p.file} r={p.r} show={shown.has(p.id)} />)}
        </div>
      </div>
    </Ctx.Provider>
  );
}
