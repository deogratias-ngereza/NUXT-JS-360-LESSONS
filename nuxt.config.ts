//import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  /*css: ['~/assets/css/tailwind.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },*/

  modules: [
    '@nuxt/ui'
    //'shadcn-nuxt'
  ],
  css: ['~/assets/css/main.css'],
  /*shadcn: {
    prefix: '',
    componentDir: './app/components/ui'
  },*/
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  runtimeConfig: {

    // The private keys which are only available server-side
    apiSecret: process.env.API_SECRET,

    public: {
      appName : process.env.APP_NAME || 'Nuxt App',
      apiBase: process.env.NUXT_PUBLIC_API_BASE || 'http://localhost:3000'
    }
  }

})