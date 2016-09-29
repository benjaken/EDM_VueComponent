export function configRouter(router) {
  router.map({
    'components': {
      component: require('../components.vue'),
      subRoutes: {
        'introduce': {
          component: require('../docs/introduce.vue')
        },
        'getting-started': {
          component: require('../docs/getting-started.vue')
        },
        'download': {
          component: require('../docs/download.vue')
        },
        'button': {
          component: require('../components/button.vue')
        },
        'iconfont': {
          component: require('../components/iconfont.vue')
        },
        'layout': {
          component: require('../components/layout.vue')
        }
      }
    },
    '*': {
      component: require('../not-found.vue')
    }
  })

  router.alias({
    '/': '/components/introduce',
    '/components': '/components/introduce',
    '/docs/introduce': '/components/introduce',
    '/docs/getting-started': '/components/getting-started',
    '/docs/download': '/components/download'
  })
}
