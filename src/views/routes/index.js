export function configRouter (router) {
  router.map({
    'components': {
      component: require('../components.vue'),
      subRoutes: {
        'introduce': {
          component: require('../docs/introduce.vue')
        }
      }
    }
  })

  router.alias({
    '/components': '/components/introduce',
    '/docs/introduce': '/components/introduce',
    '/docs/getting-started': '/components/getting-started',
    '/docs/download': '/components/download'
  })
}
