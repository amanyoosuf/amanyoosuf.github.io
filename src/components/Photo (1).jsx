import { useState } from "react";

// Shows images/<file>. If the file is missing, shows a labelled placeholder instead.
export default function Photo({ file, r = 0, active = false, cls = "photo" }) {
  const [ok, setOk] = useState(true);
  const path = `images/${file}`;
  const delay = -(Math.abs(r) * 1.3 + (file.length % 5)); // photos float out of sync
  return (
    <figure className={`${cls} ${active ? "active" : ""}`} style={{ "--r": `${r}deg`, animationDelay: `${delay}s` }}>
      <span>{path}</span>
      {ok && <img src={`${import.meta.env.BASE_URL}${path}`} alt="" onError={() => setOk(false)} />}
    </figure>
  );
}
