// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    MAILHOST: process.env.MAILHOST,
    MAILPORT: process.env.MAILPORT,
    MAILUSER: process.env.MAILUSER,
    MAILPASSWORD: process.env.MAILPASSWORD,
    CONTACTMAIL: process.env.CONTACTMAIL,
  },
  app: {
    head: {
      title: "FastSite - Разботка web - приложений Nuxt3",
      htmlAttrs: {
        lang: "ru",
      },
      meta: [
        { charset: "utf-8" },
        { name: "yandex-verification", content: "7ab28f56f903831b" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "Создаём быстрые сайты любого типа по выгодным ценам.",
        },
        {
          hid: "og:title",
          property: "og:title",
          content: "FastSite - Разботка web - приложений Nuxt3",
        },
        {
          hid: "og:description",
          property: "og:description",
          content: "Создаём быстрые сайты любого типа по выгодным ценам.",
        },
        {
          hid: "og:url",
          property: "og:url",
          content: `https://fastsite.pro/`,
        },
        {
          hid: "og:image",
          property: "og:image",
          content: `https://fastsite.pro/nuxt-imf.webp`,
        },
        {
          hid: "og:locale",
          property: "og:locale",
          content: "ru_RU",
        },
        {
          hid: "og:type",
          property: "og:type",
          content: "website",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  modules: [
    "nuxt-simple-sitemap",
    "nuxt-icon",
    "@nuxt/image-edge",
    "@nuxt/image",
    "nuxt-aos",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "nuxt-swiper",
    "@nuxt/content",
    "@hypernym/nuxt-anime",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Montserrat: [100, 300, 400, 500, 600, 700, 800],
          download: true,
          inject: true,
        },
      },
    ],
    [
      "yandex-metrika-module-nuxt3",
      {
        id: "96527339",
        webvisor: true,
      },
    ],
  ],
  piniaPersistedstate: {
    cookieOptions: {
      sameSite: "strict",
    },
    storage: "localStorage",
  },
  image: {
    aliyun: {
      baseURL: "https://fastsite.pro/",
    },
  },
  css: ["@/node_modules/bulma/css/bulma.css", "@/assets/main.css"],
  devtools: { enabled: true },
});
