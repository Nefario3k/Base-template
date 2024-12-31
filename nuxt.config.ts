// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
    devtools: { enabled: false },
    app: {
        // pageTransition: { name: "page", mode: "out-in" },
        head: {
            titleTemplate: "%s",
            title: "Base template",
            meta: [
                // meta data
                { charset: "UTF-8" },
                {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1, shrink-to-fit=no",
                },
                {
                    hid: "og:title",
                    property: "og:title",
                    content: "Base template",
                },
                { hid: "og:url", property: "og:url", content: "/" },
                {
                    hid: "og:description",
                    property: "og:description",
                    content:
                        "Base description",
                },
                {
                    hid: "og:image",
                    property: "og:image",
                    content: "/logo.png",
                },

                // twitter card
                {
                    hid: "twitter:card",
                    name: "twitter:card",
                    content: "summary_large_image",
                },
                { hid: "twitter:site", name: "twitter:site", content: "@base-template" },
                {
                    hid: "twitter:title",
                    name: "twitter:title",
                    content: "Base template",
                },
                {
                    hid: "twitter:url",
                    name: "twitter:url",
                    content: "",
                },
                {
                    hid: "twitter:description",
                    name: "twitter:description",
                    content:
                        "Base description",
                },
                {
                    hid: "twitter:image",
                    name: "twitter:image",
                    content: "/logo.png",
                },

                { hid: "author", name: "author", content: "Kent Rentals.ng" },
                {
                    hid: "description",
                    name: "description",
                    content:
                        "Base description",
                },
                { name: "format-detection", content: "telephone=no" },
            ],
            link: [
                // { rel: "manifest", href: "/site.webmanifest" },
                {
                    hid: "icon",
                    rel: "icon",
                    type: "image/png",
                    href: "/logo.png",
                },
                // {
                //     rel: "icon",
                //     type: "image/x-icon",
                //     href: "/favicon.ico",
                // },
                // {
                //     rel: "apple-touch-icon",
                //     sizes: "180x180",
                //     href: "/apple-touch-icon.png",
                // },
                // {
                //     rel: "icon",
                //     type: "image/png",
                //     sizes: "32x32",
                //     href: "/favicon-32x32.jpg",
                // },
                // {
                //     rel: "icon",
                //     type: "image/png",
                //     sizes: "16x16",
                //     href: "/favicon-16x16.png",
                // },
                {
                    hid: "shortcut-icon",
                    rel: "shortcut icon",
                    type: "image/png",
                    href: "/logo.png",
                },
                {
                    rel: "stylesheet",
                    type: "text/css",
                    href:
                        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css",
                },
            ],
            script: [
                {
                    src: "https://cdn.lordicon.com/lordicon.js",
                    type: "text/javascript",
                    body: true,
                    defer: false,
                },
            ],
        },
    },
    // sourcemap: false,
    // components: true,
    imports: {
        // dirs: ["~/composables", "~/composables/modules"],
    },
    modules: [
        (_options, nuxt) => {
            nuxt.hooks.hook("vite:extendConfig", (config) => {
                // @ts-expect-error
                config.plugins.push(vuetify({ autoImport: true }));
            });
        },
        //...
        // "@nuxtjs/sitemap",
        // "@sidebase/nuxt-auth",
        "nuxt-aos",
        "@pinia/nuxt",
        "@nuxtjs/tailwindcss",
    ],
    pinia: {
        storesDirs: ["./stores/**", "./custom-folder/stores/**"],
    },
    vite: {
        esbuild: {
            // Ensure target is a string
            target: "es2022",
        },
        resolve: {
            alias: {
                // Ensure aliases are strings
                "@": "/src",
            },
        },
        vue: {
            template: {
                transformAssetUrls,
            },
        },
    },
    build: {
        transpile: ["vuetify", "lord-icon"],
    },
    vue: {
        compilerOptions: {
            isCustomElement: (tag) => tag === 'lord-icon'
        }
    },

    css: [
        "~/assets/styles/variables.scss",
        "~/assets/styles/reusable.scss",
        "~/assets/styles/main.scss",
        "~/assets/styles/transitions.scss",
        "~/assets/styles/responsive.scss",
    ],
    // auth: {
    //   baseURL: process.env.API_BASE_URL,
    //   globalAppMiddleware: true,
    //   provider: {
    //     type: "local",
    //     endpoints: {
    //       signIn: { path: "login", method: "post" },
    //       signOut: { path: "logout", method: "post" },
    //       signUp: { path: "register", method: "post" },
    //       getSession: { path: "account/profile", method: "get" },
    //       // getSession: false,
    //     },
    //     token: {
    //       signInResponseTokenPointer: "/auth_token",
    //       // type: 'Bearer',
    //       maxAgeInSeconds: 2592000,
    //       autoLogout: false,
    //     },
    //     pages: {
    //       login: "/",
    //     },
    //   },
    // },

    // sitemap: {
    //   xsl: false,
    //   hostname: process.env.LANDING_PAGE_URL,
    //   cacheTime: 600000,
    //   gzip: true,
    //   i18n: true,
    // },

    // site: {
    //   url: process.env.LANDING_PAGE_URL,
    // },

    aos: {
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
        initClassName: "aos-init", // class applied after initialization
        animatedClassName: "aos-animate", // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 0, // offset (in px) from the original trigger point
        // delay: 0, // values from 0 to 3000, with step 50ms
        // duration: 50, // values from 0 to 3000, with step 50ms
        // easing: "ease", // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    },
    runtimeConfig: {
        public: {
            apiBase: process.env.API_BASE_URL,
            env: {
                API_BASE_URL: process.env.API_BASE_URL,
            },
        },
    },
});
