// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript:{
    typeCheck: true
  },
  modules: [
    'nuxt-primevue'
  ],
  primevue:{
    components: {
      include : ['Button', 'Avatar', 'InputText', 'FloatLabel']
    }
  },
  css:[
    'primeicons/primeicons.css',
    'primevue/resources/themes/aura-light-green/theme.css',
    'primeflex/primeflex.css', 
    '~/assets/global.scss'
  ]
})
