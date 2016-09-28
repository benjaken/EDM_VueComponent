import Vue from 'vue'
import App from './views/App'
import VueRouter from 'vue-router'
import { configRouter } from './views/routes'

Vue.config.debug = true

Vue.use(VueRouter)

// create router
const router = new VueRouter({
  saveScrollPosition: true
})

// configure router
configRouter(router)

// boostrap the app
router.start(Vue.extend(App), '#root')

// just for debugging
window.router = router
