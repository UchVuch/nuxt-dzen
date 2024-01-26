// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@nuxtjs/eslint-module',
    'nuxt-simple-robots',
    '@nuxtjs/sitemap'
  ],
  site: {
    url: 'https://nuxt-dzen.vercel.app/'
  }
})
