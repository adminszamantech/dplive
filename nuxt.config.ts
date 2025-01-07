// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: [
    '~/assets/css/main.css',
    '~/assets/css/global.css',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL
    }
  },
  modules: [
    '@nuxt/image',
    'nuxt-icon',
    '@nuxtjs/device',
    '@vueuse/nuxt',
    '@samk-dev/nuxt-vcalendar',
    'nuxt-gtag'/* darkmode change */
  ],

  gtag: {
    id: 'G-75HYGMGRDV',
    loadingStrategy: "async"
  },
  image: {
    quality: 80,
  },
  
})
