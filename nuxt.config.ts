// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: "Shopcare",
      meta: [
        {name: "description", content: "Everything about products"}
      ],
      link: [
        {rel: "stylesheet", href: "https://fonts.googleapis.com/icon?family=Material+Icons"}
      ]
    }
  }
})
