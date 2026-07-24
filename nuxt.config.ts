const SITE_URL = 'https://devcalledalex.com'
const SITE_NAME = 'devcalledalex'
const TITLE = 'Alex Smith - Frontend Engineer & Design Systems | devcalledalex'
const DESCRIPTION = 'Alex Smith is a frontend engineer specialising in design systems, component libraries and accessible, high-quality UI across React, Next.js, Vue and TypeScript.'
const SOCIAL_TITLE = 'Alex Smith - Frontend Engineer, UI Architecture & Design Systems'
const SOCIAL_IMAGE = `${SITE_URL}/images/splash.png`

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/sitemap'],
  // SSR (server-rendered). On Amplify the app is a "Web compute" type, which
  // injects the aws-amplify Nitro preset and produces .amplify-hosting/
  // deploy-manifest.json. SSR still serves full crawlable HTML to bots.
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
        { property: 'og:site_name', content: 'devcalledalex' },
        { property: 'og:title', content: SOCIAL_TITLE },
        { property: 'og:description', content: DESCRIPTION },
        { property: 'og:image', content: SOCIAL_IMAGE },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:type', content: 'image/png' },
        { property: 'og:image:alt', content: SOCIAL_TITLE },
        { property: 'og:url', content: SITE_URL },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: SOCIAL_TITLE },
        { name: 'twitter:description', content: DESCRIPTION },
        { name: 'twitter:image', content: SOCIAL_IMAGE },
        { name: 'twitter:image:alt', content: SOCIAL_TITLE },
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
