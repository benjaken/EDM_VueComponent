import Vue from 'vue'

import edmComponent from '../../src/index'
Vue.use(edmComponent)

let id = 0

const createElm = function() {
  const elm = document.createElement('div')

  elm.id = 'app' + ++id
  document.body.appendChild(elm)

  return elm
}

exports.destroyVM = function(vm) {
  vm.$el &&
  vm.$el.parentNode &&
  vm.$el.parentNode.removeChild(vm.$el)
}

exports.createVue = function(Compo, mounted = false) {
  if (Object.prototype.toString.call(Compo) === '[object String]') {
    Compo = { template: Compo }
  }
  return new Vue(Compo).$mount(mounted === false ? null : createElm())
}

exports.createTest = function(Compo, propsData = {}, mounted = false) {
  if (propsData === true || propsData === false) {
    mounted = propsData
  }
  const Ctor = Vue.extend(Compo)
  return new Ctor({ propsData }).$mount(mounted === false ? null : createElm())
}

exports.triggerEvent = function(elm, name, ...opts) {
  let eventName

  if (/^mouse|click/.test(name)) {
    eventName = 'MouseEvents'
  } else if (/^key/.test(name)) {
    eventName = 'KeyboardEvent'
  } else {
    eventName = 'HTMLEvents'
  }
  const evt = document.createEvent(eventName)

  evt.initEvent(name, ...opts)
  elm.dispatchEvent
    ? elm.dispatchEvent(evt)
    : elm.fireEvent('on' + name, evt)

  return elm
}

exports.triggerClick = function(elm, ...opts) {
  exports.triggerEvent(elm, 'mousedown', ...opts)
  exports.triggerEvent(elm, 'mouseup', ...opts)

  return elm
}
