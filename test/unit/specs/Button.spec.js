import { createVue, createTest, destroyVM } from '../util'
import vButton from 'src/components/button'

describe('Button', () => {
  let vm
  before(() => {
    createVue({
      template: '<div id="button"></div>'
    }, false)
  })

  // afterEach(() => {
  //   destroyVM(vm)
  // })

  // it('create', done => {
  //   vm = createVue({
  //     template: `<v-button></v-button>`
  //   }, true)
  //   let buttonElm = vm.$el
  //   console.log(buttonElm)
  //   // expect(buttonElm.classList.contains('btn')).to.be.ok
  // })

  it('size', () => {
    vm = createTest(vButton, {
      size: 'small'
    }, true)
    let buttonElm = vm.$el
    console.log(buttonElm, buttonElm.classList)
    expect(buttonElm.classList.contains('btn-sm')).to.be.true
  })

  // it('shape', () => {
  //   vm = createTest(vButton, {
  //     shape: 'circle'
  //   }, true)
  //   let buttonElm = vm.$el
  //   expect(buttonElm.classList.contains('btn-circle')).to.be.true
  // })
  //
  // it('disabled', () => {
  //   vm = createTest(vButton, {
  //     disabled: true
  //   }, true)
  //   let buttonElm = vm.$el
  //   expect(buttonElm.classList.contains('disabled')).to.be.true
  // })
  //
  // it('loading', () => {
  //   vm = createTest(vButton, {
  //     loading: true
  //   }, true)
  //   let buttonElm = vm.$el
  //   expect(buttonElm.classList.contains('btn-loading')).to.be.true
  // })
  //
  // it('htmlType', () => {
  //   vm = createTest(vButton, {
  //     htmlType: 'submit'
  //   }, true)
  //   let buttonElm = vm.$el
  //   expect(buttonElm.getAttribute('type')).to.be.equal('submit')
  // })

  // it('size', done => {
  //   let result
  //   vm = createTest(vButton, {
  //     onclick: handleClick (e) {
  //       result = e
  //     }
  //   }, true)
  //   let buttonElm = vm.$el
  //   buttonElm.click()
  //   expect(buttonElm.classList.contains('btn-sm')).to.be.true
  //   setTimeout(_ => {
  //     expect(result).to.exist
  //     done()
  //   }, 20)
  // })
})
