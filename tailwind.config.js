module.exports = {
  content: ["*.html", "./src/**/*.{vue,js}"],
  prefix: "tw-",
  theme: {
    fontFamily: {
      sans: ["IBM Plex Mono", "monospace"],
      display: ["IBM Plex Mono", "monospace"],
      body: ["IBM Plex Mono", "monospace"],
    },
    container: {
      padding: "2rem",
    },
    extend: {
      fontSize: {
        h1: "4rem",
        h2: "2rem",
        h3: "1.375rem",
        h4: "1rem",
        h5: "1.5",
        h6: "1.25rem",
        md: "1rem",
        sm: "0.875rem",
      },
      colors: {
        "off-black": "var(--off-black)",
        "off-white": "var(--off-white)",
        pink: "var(--pink)",
        blue: "var(--blue)",
        green: "var(--green)",
        yellow: "var(--yellow)",
        orange: "var(--orange)",
      },
    },
  },
  plugins: [],
};
