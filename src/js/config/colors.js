export const COLOR_VARS = {
  "--off-black": "#1a1a1a",
  "--off-white": "#e1e1e1",
  "--pink": "#f98bc8",
  "--blue": "#8fd7e8",
  "--green": "#b0fb96",
  "--yellow": "#fffe8e",
  "--orange": "#eea774",
};

export const TYPE_CODE = "code";
export const TYPE_GREEN_SCREEN = "green-screen";
export const TYPE_RETRO = "retro";

export const PRESETS = [
  {
    type: TYPE_CODE,
    icon: "code",
    colors: {
      "--font": ["IBM Plex Mono", "monospace"],
      "--heading": ["IBM Plex Mono", "monospace"],
      "--heading-spacing": "0.05rem",
      "--font-size": "1rem",
      "--radius": "0.25rem",
      "line-height": 1.5,
      color: "var(--off-white)",
      background: "var(--off-black)",
      ...COLOR_VARS,
    },
  },
  {
    type: TYPE_GREEN_SCREEN,
    icon: "list",
    colors: {
      "--font": ["VT323", "monospace"],
      "--heading": ["VT323", "monospace"],
      "--heading-spacing": "0.05rem",
      "--font-size": "1.5rem",
      "--radius": "0",
      "line-height": 1,
      color: "var(--green)",
      background: "var(--off-black)",
      ...COLOR_VARS,
    },
  },
  {
    type: TYPE_RETRO,
    icon: "sun",
    colors: {
      "--font": ["Rubik", "sans-serif"],
      "--heading": ["Monoton", "cursive"],
      "--heading-spacing": "0.13rem",
      "--font-size": "1.25rem",
      "--radius": "0",
      "line-height": 1.25,
      color: "var(--off-white)",
      background: "var(--pink)",
      "--green": "#1EB09C",
      "--pink": "#ED1583",
      "--orange": "#F04E36",
    },
  },
];
