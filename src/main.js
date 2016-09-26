import Vue from 'vue'
import App from './views/App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import { configRouter } from './views/routes'

Vue.config.debug = true

Vue.use(VueRouter)

Vue.use(VueResource)

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
