// Google Analytics (gtag.js), deferred until window load for performance.
// Client-only and skipped in dev so local runs don't send hits.
export default defineNuxtPlugin(() => {
  if (import.meta.dev)
    return

  const GA_ID = 'G-GEGHGSKZRY'

  window.addEventListener('load', () => {
    const w = window as unknown as { dataLayer: unknown[] }
    // gtag.js only processes genuine `arguments` objects pushed to dataLayer;
    // plain arrays are silently ignored, so this must not use rest parameters.
    w.dataLayer = w.dataLayer || []
    function gtag() {
      // eslint-disable-next-line prefer-rest-params
      w.dataLayer.push(arguments)
    }
    // @ts-expect-error gtag is intentionally untyped variadic
    gtag('js', new Date())
    // @ts-expect-error gtag is intentionally untyped variadic
    gtag('config', GA_ID)

    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
    document.head.appendChild(script)
  })
})
