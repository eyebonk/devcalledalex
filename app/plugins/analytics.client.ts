// Google Analytics (gtag.js), deferred until window load for performance.
// Client-only and skipped in dev so local runs don't send hits.
export default defineNuxtPlugin(() => {
  if (import.meta.dev)
    return

  const GA_ID = 'G-GEGHGSKZRY'

  window.addEventListener('load', () => {
    const w = window as unknown as { dataLayer: unknown[] }
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
    script.onload = () => {
      w.dataLayer = w.dataLayer || []
      function gtag(...args: unknown[]) {
        w.dataLayer.push(args)
      }
      gtag('js', new Date())
      gtag('config', GA_ID)
    }
    document.head.appendChild(script)
  })
})
