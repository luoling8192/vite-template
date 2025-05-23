import { createPinia } from 'pinia'
import { setupLayouts } from 'virtual:generated-layouts'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'

import App from './App.vue'
import './style.css'
import 'virtual:uno.css'
import '@unocss/reset/normalize.css'

const router = createRouter({
  history: createWebHistory(),
  routes: setupLayouts(routes),
})

const pinia = createPinia()

createApp(App)
  .use(router)
  .use(pinia)
  .mount('#app')
