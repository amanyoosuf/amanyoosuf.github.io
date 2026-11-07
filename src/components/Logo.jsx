import { useState } from "react";

// Shows images/<file>. If the file is missing, shows a small "Logo" placeholder.
export default function Logo({ file, alt }) {
  const [ok, setOk] = useState(true);
  return (
    <div className="logo" title={alt}>
      <span>Logo</span>
      {ok && <img src={`${import.meta.env.BASE_URL}images/${file}`} alt={alt} onError={() => setOk(false)} />}
    </div>
  );
}
