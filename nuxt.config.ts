// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  ssr: false,
  modules: [
    '@nuxt/icon',
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@nuxtjs/color-mode',
  ],
  css: ['@/assets/fonts/fonts.css'],
})
