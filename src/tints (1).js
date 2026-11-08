// One tint per section: d = dark mode colour, l = matching light mode colour.
export const TINTS = {
  who:        { d: "#6aa8ff", l: "#1d4ed8" }, // blue
  summary:    { d: "#6aa8ff", l: "#1d4ed8" }, // blue (same as who)
  education:  { d: "#4ade80", l: "#15803d" }, // green
  experience: { d: "#fbbf24", l: "#b45309" }, // amber
  projects:   { d: "#f87171", l: "#b91c1c" }, // red
  skills:     { d: "#a78bfa", l: "#6d28d9" }, // purple
  tutoring:   { d: "#22d3ee", l: "#0e7490" }, // cyan
  awards:     { d: "#fb923c", l: "#c2410c" }, // orange
  more:       { d: "#f472b6", l: "#be185d" }, // pink
};
export const tintOf = (id) => TINTS[id] || TINTS.who;
