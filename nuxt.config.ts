// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon', '@vueuse/motion/nuxt'],

  css: [
    '~/assets/css/main.css'
  ],
  
  nitro: {
    compressPublicAssets: true,
    minify: true,
    // Increase timeout for large assets
    routeRules: {
      '/images/**': { 
        headers: { 'cache-control': 'public, max-age=31536000' },
        prerender: false
      }
    }
  },

  build: {
    transpile: ['aos'],
  },

  // Optimize for large assets
  experimental: {
    payloadExtraction: false
  }
})