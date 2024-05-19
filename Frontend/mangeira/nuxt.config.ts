// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript:{
    typeCheck: true
  },
  modules: [
    'nuxt-primevue',
    '@sidebase/nuxt-auth',
    '@pinia/nuxt'
  ],
  primevue:{
    components: {
      include : ['Button', 'Avatar', 'InputText', 'FloatLabel', 'Menubar']
    }
  },
  css:[
    'primeicons/primeicons.css',
    'primevue/resources/themes/aura-light-green/theme.css',
    'primeflex/primeflex.css', 
    '~/assets/global.scss'
  ],
  auth: {
    baseURL: 'http://localhost:8000',
    provider: {
      type: 'refresh',
      endpoints: {
        signIn:{path: '/token/login', method: 'post'},
        signOut:{path: '/token/logout', method: 'post'},
        signUp:{ },
        getSession:{path: '/vendas', method: 'get'},
        refresh: {}
      },
      token: { signInResponseTokenPointer: '/auth_token', type: 'Token'},
      pages: {login: '/login'}
    }
  }
})
