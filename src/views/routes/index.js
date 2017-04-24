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
        }, // General
        'button': {
          component: require('../components/button.vue')
        },
        'iconfont': {
          component: require('../components/iconfont.vue')
        }, // Layout
        'grid': {
          component: require('../components/grid.vue')
        }, // Navigation
        'affix': {
          component: require('../components/affix.vue')
        },
        'breadcrumb': {
          component: require('../components/breadcrumb.vue')
        },
        'backtop': {
          component: require('../components/backtop.vue')
        },
        'dropdown': {
          component: require('../components/dropdown.vue')
        },
        'menu': {
          component: require('../components/menu.vue')
        },
        'pagination': {
          component: require('../components/pagination.vue')
        },
        'steps': {
          component: require('../components/steps.vue')
        },
        'tabs': {
          component: require('../components/tabs.vue')
        }, // DataEntry
        'checkbox': {
          component: require('../components/checkbox.vue')
        },
        'datepicker': {
          component: require('../components/datepicker.vue')
        },
        'form': {
          component: require('../components/form.vue')
        },
        'input-number': {
          component: require('../components/inputnumber.vue')
        },
        'input': {
          component: require('../components/input.vue')
        },
        'rate': {
          component: require('../components/rate.vue')
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
        }, // DataDisplay
        'badge': {
          component: require('../components/badge.vue')
        },
        'card': {
          component: require('../components/card.vue')
        },
        'carousel': {
          component: require('../components/carousel.vue')
        },
        'collapse': {
          component: require('../components/collapse.vue')
        },
        'popover': {
          component: require('../components/popover.vue')
        },
        'tag': {
          component: require('../components/tag.vue')
        },
        'timeline': {
          component: require('../components/timeline.vue')
        }, // Feedback
        'alert': {
          component: require('../components/alert.vue')
        },
        'modal': {
          component: require('../components/modal.vue')
        },
        'progress': {
          component: require('../components/progress.vue')
        },
        'spin': {
          component: require('../components/spin.vue')
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
