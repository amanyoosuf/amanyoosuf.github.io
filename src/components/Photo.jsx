import { useState } from "react";

// Shows images/<file>. If the file is missing, shows a labelled placeholder instead.
export default function Photo({ file, r = 0, show = true, cls = "photo" }) {
  const [ok, setOk] = useState(true);
  const path = `images/${file}`;
  return (
    <figure className={`${cls} ${show ? "show" : ""}`} style={{ "--r": `${r}deg` }}>
      <span>{path}</span>
      {ok && <img src={`${import.meta.env.BASE_URL}${path}`} alt="" onError={() => setOk(false)} />}
    </figure>
  );
}
