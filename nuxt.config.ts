import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  buildModules: ["@pinia/nuxt", "@nuxt3/apollo-module", '@vueuse/nuxt'],
  build: { transpile: ["graphql"] },
  typeCheck: true,
  apollo: {
    default: {
      uri: process.env.API_ENDPOINT
    }
  },
  css: [
    "primevue/resources/themes/saga-blue/theme.css",
    "primevue/resources/primevue.css",
    "primeicons/primeicons.css",
    "primeflex/primeflex.css",
    "animate.css/animate.compat.css",
    "~/assets/scss/main.scss",
  ],
  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
    define: {
      "process.env.DEBUG": false,
    },
  },
});
