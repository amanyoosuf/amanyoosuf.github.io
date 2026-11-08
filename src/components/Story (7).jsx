import { useRef } from "react";
import Photo from "./Photo.jsx";

// One card: the text sits on `side` and the photos sit inside the same card on the other side.
// stack: put the photo above the text (used for the Projects grid).
// photos={[]} makes a text-only card.
export default function Story({ side = "left", stack = false, photos, children }) {
  const delay = useRef(-Math.random() * 8).current; // so cards do not all float in sync
  return (
    <div className="story" data-side={side}>
      <div className={`card ${stack ? "stack" : ""} ${photos.length ? "" : "solo"}`} style={{ animationDelay: `${delay}s` }}>
        <div className="card-text">{children}</div>
        {photos.length > 0 && (
          <div className="photos">
            {photos.map((p) => <Photo key={p.id} {...p} />)}
          </div>
        )}
      </div>
    </div>
  );
}
