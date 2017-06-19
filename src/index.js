import vButton from './components/button/Button.vue'

const edmComponent = {
  vButton
}

const install = function (Vue, opts = {}) {
  // locale.use(opts.locale);
  // locale.i18n(opts.i18n);

  Object.keys(edmComponent).forEach((key) => {
    Vue.component(key, edmComponent[key])
  })

  // Vue.prototype.$Loading = LoadingBar
  // Vue.prototype.$Message = Message
  // Vue.prototype.$Modal = Modal
  // Vue.prototype.$Notice = Notice
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

module.exports = Object.assign(edmComponent, {install})   // eslint-disable-line no-undef
