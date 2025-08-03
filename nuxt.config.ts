// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon'],
  app: {
    head: {
      title: 'Tyler\'s Portfolio',
      meta: [
        { name: 'description', content: 'My personal portfolio built with Nuxt 3' }
      ]
    }
  }
})