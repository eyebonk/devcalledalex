const SITE_URL = 'https://devcalledalex.com'
const SITE_NAME = 'devcalledalex'
const TITLE = 'Alex Smith - Staff Engineer (UI) & Founder | devcalledalex'
const DESCRIPTION = 'Alex Smith is a frontend software engineer who builds accessible, pixel perfect digital experiences for the web.'
const SOCIAL_IMAGE = `${SITE_URL}/images/splash.png`

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/sitemap'],
  site: {
    url: SITE_URL,
    name: SITE_NAME,
  },
  sitemap: {
    urls: () => [
      { loc: '/' },
    ],
  },
  tailwindcss: {
    cssPath: '~/assets/css/app.css',
    configPath: 'tailwind.config.js',
  },
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: TITLE,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'author', content: 'Alex Smith' },
        { name: 'theme-color', content: '#923941' },
        { name: 'description', content: DESCRIPTION },
        { name: 'keywords', content: 'alex smith, frontend engineer, staff engineer, UI engineer, vue.js developer, react developer, typescript, javascript, tailwind css, nuxt, component library, accessible web development, frontend architect, web development portfolio, senior frontend developer, vue3, react, scss, bootstrap, responsive design, cross-browser compatibility, W3C compliance' },
        { name: 'robots', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'en_GB' },
        { property: 'og:site_name', content: 'Alex Smith - Staff Engineer (UI) / Founder' },
        { property: 'og:title', content: 'Alex Smith - Staff Engineer (UI) / Founder' },
        { property: 'og:description', content: DESCRIPTION },
        { property: 'og:image', content: SOCIAL_IMAGE },
        { property: 'og:url', content: SITE_URL },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Alex Smith - Staff Engineer (UI) / Founder' },
        { name: 'twitter:description', content: DESCRIPTION },
        { name: 'twitter:image', content: SOCIAL_IMAGE },
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'canonical', href: SITE_URL },
        { rel: 'preload', as: 'image', type: 'image/png', href: '/silhouette.png', fetchpriority: 'high' },
        { rel: 'preload', as: 'font', type: 'font/woff2', href: '/fonts/Anton-Regular.woff2', crossorigin: 'anonymous' },
        { rel: 'preload', as: 'font', type: 'font/woff2', href: '/fonts/Poppins-Regular.woff2', crossorigin: 'anonymous' },
      ],
    },
  },
})
