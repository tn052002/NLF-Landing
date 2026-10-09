export default defineNuxtConfig({
  compatibilityDate: '2026-10-09',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    databaseUrl: '', rateLimitSecret: '', turnstileSecret: '',
    allowedOrigin: '', trustProxy: false,
    public: { siteUrl: '', turnstileSiteKey: '', preview: true },
  },
  routeRules: { '/': { redirect: '/vi' }, '/api/**': { headers: { 'cache-control': 'no-store' } } },
  app: { head: { title: 'NLF Vietnam', meta: [{ name: 'theme-color', content: '#080D12' }] } },
  typescript: { strict: true },
})
