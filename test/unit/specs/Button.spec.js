import { createTest, createVue, destroyVM } from '../util'
import Button from 'src/components/button'

describe('Button', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })

  it('create', () => {
    vm = createTest(Button, {
      type: 'primary'
    }, true)
    let buttonElm = vm.$el
    expect(buttonElm.classList.contains('btn-primary')).to.be.true
  })

  it('size', () => {
    vm = createTest(Button, {
      size: 'small'
    }, true)
    let buttonElm = vm.$el
    expect(buttonElm.classList.contains('btn-sm')).to.be.true
  })

  it('shape', () => {
    vm = createTest(Button, {
      shape: 'circle'
    }, true)
    let buttonElm = vm.$el
    expect(buttonElm.classList.contains('btn-circle')).to.be.true
  })

  it('disabled', () => {
    vm = createTest(Button, {
      disabled: true
    }, true)
    let buttonElm = vm.$el
    expect(buttonElm.classList.contains('disabled')).to.be.true
  })

  it('loading', () => {
    vm = createTest(Button, {
      loading: true
    }, true)
    let buttonElm = vm.$el
    expect(buttonElm.classList.contains('btn-loading')).to.be.true
  })

  it('htmlType', () => {
    vm = createTest(Button, {
      htmlType: 'submit'
    }, true)
    let buttonElm = vm.$el
    expect(buttonElm.getAttribute('type')).to.be.equal('submit')
  })

  it('click', () => {
    let result
    vm = createVue({
      template: `<v-button @click="handleClick"></v-button>`,
      methods: {
        handleClick (e) {
          result = e
        }
      }
    }, true)
    vm.$el.click()
    setTimeout(() => {
      expect(result).to.exist
      done()
    }, 20)
  })
})
