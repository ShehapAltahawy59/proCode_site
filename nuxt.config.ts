// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },

  ssr: true,

  css: [
    '~/assets/scss/tailwind.scss',
    '~/assets/css/materialdesignicons.min.css',
    '~/assets/libs/@iconscout/unicons/css/line.css',
    '~/assets/css/jarallax.min.css'
  ],
  app: {
    baseURL: '/',
    head: {
      title: 'ProCode Solutions',
      titleTemplate: 'ProCode Solutions',
      htmlAttrs: { class: 'light scroll-smooth', dir:'ltr' },
      bodyAttrs: {
        class: 'font-rubik text-base text-slate-900 dark:text-white dark:bg-slate-900',
      },
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
        },
        { hid: 'description', name: 'description', content: 'ProCode Solutions - Redefining the Future through Intelligent Code. We build software and AI-driven ecosystems that transform businesses.' },
        { name: 'format-detection', content: 'telephone=no' },
        // Proves to Meta that this domain (and its subdomains, such as wavelink.) is ours
        { name: 'facebook-domain-verification', content: 'l9bwltn4j42qpdcp0alwd0tya9fczc' },
        // Open Graph tags for social media & search engines
        { property: 'og:title', content: 'ProCode Solutions' },
        { property: 'og:description', content: 'Redefining the Future through Intelligent Code. We build software and AI-driven ecosystems that transform businesses.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://www.procode-solutions.com/' },
        { property: 'og:image', content: 'https://www.procode-solutions.com/favicon.png' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      ],
      script: [
        {
          // src: 'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.4/min/tiny-slider.helper.ie8.js'
        }
      ]
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  
})
