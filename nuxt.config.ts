// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: false,
  css:[
     "@sjmc11/tourguidejs/src/scss/tour.scss" 
  ],
 
  app: {
    
    head: {
      link:[
        {href:"/assets/vendor/css/rtl/core.css",rel:"stylesheet" },
        {href:"/assets/vendor/css/rtl/theme-default.css",rel:"stylesheet" },
        {href:"/assets/css/demo.css",rel:"stylesheet" },
        {href:"/assets/vendor/libs/node-waves/node-waves.css",rel:"stylesheet" },
        {href:"/assets/vendor/libs/@form-validation/umd/styles/index.min.css",rel:"stylesheet" },
        {href:"/assets/vendor/css/pages/page-auth.css",rel:"stylesheet" },
        {
          rel: "stylesheet",
          type: "text/css",
          href: "/assets/vendor/libs/sweetalert2/sweetalert2.css",
        },
      ],
      script: [
        { src: "/assets/js/config.js", defer: true },
        { src: "/assets/vendor/libs/jquery/jquery.js", defer: true },
        { src: "/assets/vendor/libs/popper/popper.js", defer: true },
        { src: "/assets/vendor/js/bootstrap.js", defer: true },
        { src: "/assets/vendor/libs/node-waves/node-waves.js", defer: true },
        { src: "/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js", defer: true },
        { src: "/assets/vendor/libs/hammer/hammer.js", defer: true },
        { src: "/assets/vendor/libs/typeahead-js/typeahead.js", defer: true },
        { src: "/assets/vendor/js/menu.js", defer: true },
        { src: "/assets/vendor/libs/apex-charts/apexcharts.js", defer: true },
        { src: "/assets/vendor/libs/sweetalert2/sweetalert2.js", defer: true },
        { src: "/assets/vendor/libs/select2/select2.js", defer: true },
        { src: "/assets/vendor/libs/bootstrap-select/bootstrap-select.js", defer: true },
        { src: "/assets/vendor/libs/block-ui/block-ui.js", defer: true },
        { src: "/assets/vendor/js/helpers.js", defer: true },
        { src: "/assets/js/main.js", defer: true },
        // { src: "/assets/js/dashboards-crm.js", defer: true },
      ]
    },
  }
})
