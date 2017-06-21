import 'babel-polyfill'
import Vue from 'vue'
import App from './views/App'
import VueRouter from 'vue-router'
import { configRouter } from './views/routes'
import edmComponent from './components/index.js'

Vue.config.debug = true

Vue.use(VueRouter)
Vue.use(edmComponent)

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
