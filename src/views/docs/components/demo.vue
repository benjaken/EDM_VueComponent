<template>
  <div class='code-box'>
    <h3 class='title'>{{title}}</h3>
    <div class='code-boxes-col-2-1 code-box-demo'>
      <slot></slot>
    </div>
    <div class='code-boxes-col-2-1 code-box-code'>
    </div>
  </div>
</template>
<script>
import {defaultProps} from '../../utils/props'
import $ from 'jquery'
var Prism = require('prismjs')

export default {
  props: defaultProps({
    title: {
      type: String,
      require: true
    }
  }),
  ready () {
    var html = $('.code-box').html()
    console.log(html)
    html = String(html).replace("<div class='code-boxes-col-2-1 code-box-code'></div>", function (code) {
      console.log(this.code)
      var esCode = Prism.highlight(code, Prism.languages.markup, 'markup')
      esCode = esCode.replace(/\\n\s{4}/gi, '\\n').replace(/\s+$/gi, '')
      console.console.log(esCode)
      var str = "<div class='code-boxes-col-2-1 code-box-code'></div>"
      return str
    })
    return html
  }
}
</script>
<style>

</style>
