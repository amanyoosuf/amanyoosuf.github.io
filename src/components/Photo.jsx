import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

// Shows images/<file>. The frame fits the photo's own shape, so nothing is cropped and no empty space shows.
// size: makes this photo bigger or smaller than normal (1.3 = 30% bigger). href: makes it a download link.
// If the file is missing, a labelled placeholder is shown instead (shape: "" or "wide" only shapes the placeholder).
export default function Photo({ file, r,  active = false, cls = "photo", shape = "", size = 1, href, label = "Download PDF", name }) {
  const [ratio, setRatio] = useState(null); // photo width / height, known once it loads
  const [ok, setOk] = useState(true);
  const [open, setOpen] = useState(false);       // click-to-enlarge view
  const zoomable = cls === "photo" && !href;
  useEffect(() => {
    if (!open) return;
    const esc = (e) => e.key === "Escape" && setOpen(false);
    addEventListener("keydown", esc); return () => removeEventListener("keydown", esc);
  }, [open]);
  const path = `images/${file}`;
  const base = import.meta.env.BASE_URL;
  const measure = (el) => { if (el && el.naturalWidth && el.naturalHeight && !ratio) setRatio(el.naturalWidth / el.naturalHeight); };
  const style = { "--s": size };
  if (ratio) { style["--ratio"] = ratio.toFixed(3); style["--k"] = Math.sqrt(ratio).toFixed(3); }
  return (
    <figure className={`${cls} ${ratio ? "fit" : shape} ${href ? "linked" : ""} ${zoomable ? "zoomable" : ""} ${active ? "active" : ""}`} style={style} onClick={zoomable && ratio ? () => setOpen(true) : undefined}>
      <span>{path}</span>
      {ok && <img ref={measure} src={`${base}${path}`} alt="" onLoad={(e) => measure(e.currentTarget)} onError={() => setOk(false)} />}
      {href && (
        <a className="dl" href={`${base}${href}`} download={name || true} aria-label={label}>
          <em>{label}</em>
        </a>
      )}
      {open && createPortal(
        <div className="lightbox" onClick={(e) => { e.stopPropagation(); setOpen(false); }} role="dialog" aria-label="Enlarged photo"><img src={`${base}${path}`} alt="" /></div>,
        document.body
      )}
    </figure>
  );
}
