/** @type {import('tailwindcss').Config} */
export default {
  prefix: 'tw-',
  content: [
    './app.vue',
    './app/**/*.{vue,js,ts}',
    './nuxt.config.{js,ts}',
  ],
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
