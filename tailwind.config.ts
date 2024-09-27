module.exports = {
  content: ['*.html', './src/**/*.{vue,js,css}'],
  prefix: 'tw-',
  theme: {
    container: {
      padding: '2rem',
      center: true,
    },
    fontFamily: {
      body: 'poppins, sans-serif',
      heading: 'anton, sans-serif',
    },
    extend: {
      colors: {
        'pink': '#f329d7',
        'light-blue': '#a9f9fe',
        'green': '#16e154',
        'red': '#fc0100',
        'blue': '#181c38',
        'dark-blue': '#0c122c',
      },
      dropShadow: {
        'glow': [
          '0 0px 20px rgba(243, 41, 215, 0.45)',
          '0 0px 65px rgba(243, 41, 215, 0.3)',
        ],
        'glow-blue': [
          '0 0px 20px rgba(169, 249, 254, 0.55)',
          '0 0px 65px rgba(169, 249, 254, 0.3)',
        ],
      },
    },
  },
  plugins: [],
}
