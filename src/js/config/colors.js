export const COLOR_VARS = {
  "--off-black": "#1a1a1a",
  "--off-white": "#e1e1e1",
  "--pink": "#f98bc8",
  "--blue": "#8fd7e8",
  "--green": "#b0fb96",
  "--yellow": "#fffe8e",
  "--orange": "#eea774",
};

// export const TYPE_CODE = "code";
// export const PRESET_CODE = {
//   "--font": ["IBM Plex Mono", "monospace"],
//   "--font-size": "1rem",
//   "--radius": "0.25rem",
//   "line-height": 1.5,
//   color: "var(--off-white)",
//   background: "var(--off-black)",
//   type: TYPE_CODE,
// };

// export const TYPE_GREEN_SCREEN = "green-screen";
// export const PRESET_GREEN_SCREEN = {

// };

// export const TYPE_CEEFAX = "ceefax";
// export const PRESET_CEEFAX = {

// };

export const TYPE_CODE = "code";
export const TYPE_GREEN_SCREEN = "green-screen";
export const TYPE_CEEFAX = "ceefax";

export const PRESETS = [
  {
    type: TYPE_CODE,
    icon: "code",
    colors: {
      "--font": ["IBM Plex Mono", "monospace"],
      "--font-size": "1rem",
      "--radius": "0.25rem",
      "line-height": 1.5,
      color: "var(--off-white)",
      background: "var(--off-black)",
    },
  },
  {
    type: TYPE_GREEN_SCREEN,
    icon: "list",
    colors: {
      "--font": ["VT323", "monospace"],
      "--font-size": "1.5rem",
      "--radius": "0",
      "line-height": 1,
      color: "var(--green)",
      background: "var(--off-black)",
    },
  },
  {
    type: TYPE_CEEFAX,
    icon: "tv",
    colors: {
      "--font": ["VT323", "monospace"],
      "--font-size": "1.5rem",
      "--radius": "0",
      "line-height": 1,
      color: "var(--green)",
      background: "var(--pink)",
    },
  },
];
