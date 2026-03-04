import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",

  devtools: {
    enabled: true
  },

  router: {
    options: {
      scrollBehavior(to, _from, _savedPosition) {
        if (to.hash) {
          return { el: to.hash, behavior: "smooth" };
        }
        return { top: 0 };
      },
    },
  },

  css: [
    "~/assets/css/tailwind.css"
  ],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  modules: [
    "@nuxt/image",
    "shadcn-nuxt",
    "@vueuse/nuxt",
    "@nuxt/icon",
    "@nuxt/fonts",
  ],

  icon: {
    serverBundle: {
      collections: ["lucide", "mdi"],
    }
  },
})