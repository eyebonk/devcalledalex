module.exports = {
  content: ['*.html', './src/**/*.{vue,js}'],
  prefix: 'tw-',
  variants: {
    extend: {
      textColor: ['group-hover', 'group-focus'],
    },
  },
  theme: {
    fontFamily: {
      sans: 'var(--font)',
      display: 'var(--font)',
      body: 'var(--font)',
      heading: 'var(--heading)',
    },
    container: {
      padding: '2rem',
    },
    extend: {
      fontSize: {
        'teletext-h1': '8rem',
        'teletext-h2': '4.1rem',
        'h1': '4rem',
        'h2': '2rem',
        'h3': '1.375rem',
        'h4': '1rem',
        'h5': '1.5',
        'h6': '1.25rem',
        'md': 'var(--font-size)',
        'sm': '0.875rem',
      },
      colors: {
        'off-black': 'var(--off-black)',
        'off-white': 'var(--off-white)',
        'pink': 'var(--pink)',
        'blue': 'var(--blue)',
        'light-blue': 'var(--light-blue)',
        'green': 'var(--green)',
        'yellow': 'var(--yellow)',
        'orange': 'var(--orange)',
        'red': 'var(--red)',
      },
      borderRadius: {
        global: 'var(--radius)',
      },
    },
  },
  plugins: [],
}
