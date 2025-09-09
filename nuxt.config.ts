// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

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
