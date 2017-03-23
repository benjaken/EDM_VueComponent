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
        },
        'checkbox': {
          component: require('../components/checkbox.vue')
        },
        'input-number': {
          component: require('../components/inputnumber.vue')
        },
        'radio': {
          component: require('../components/radio.vue')
        },
        'select': {
          component: require('../components/select.vue')
        },
        'slider': {
          component: require('../components/slider.vue')
        },
        'switch': {
          component: require('../components/switch.vue')
        },
        'upload': {
          component: require('../components/upload.vue')
        },
        'alert': {
          component: require('../components/alert.vue')
        },
        'badge': {
          component: require('../components/badge.vue')
        },
        'popover': {
          component: require('../components/popover.vue')
        },
        'tag': {
          component: require('../components/tag.vue')
        },
        'datepicker': {
          component: require('../components/datepicker.vue')
        },
        'carousel': {
          component: require('../components/carousel.vue')
        },
        'spin': {
          component: require('../components/spin.vue')
        },
        'progress': {
          component: require('../components/progress.vue')
        },
        'collapse': {
          component: require('../components/collapse.vue')
        },
        'dropdown': {
          component: require('../components/dropdown.vue')
        },
        'timeline': {
          component: require('../components/timeline.vue')
        },
        'modal': {
          component: require('../components/modal.vue')
        },
        'steps': {
          component: require('../components/steps.vue')
        },
        'card': {
          component: require('../components/card.vue')
        },
        'breadcrumb': {
          component: require('../components/breadcrumb.vue')
        },
        'backtop': {
          component: require('../components/backtop.vue')
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
