<template>
  <div :class="prefixCls" v-if="visibility" @click="_scrolltop">
    <div :class="prefixCls + '-inner'">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  import {defaultProps} from '../../views/utils/props'

  export default {
    props: defaultProps({
      prefixCls: 'back-top',
      visibilityHeight: 300,
      visibility: false,
      scrollTop: 0,
      onClick: () => {}
    }),
    ready () {
      window.addEventListener('scroll', this._handleScroll, false)
      window.addEventListener('resize', this._handleScroll, false)
    },
    beforeDestory () {
      window.removeEventListener('scorll', this._handleScroll, false)
      window.removeEventListener('resize', this._handleScroll, false)
    },
    methods: {
      _getScroll (w, top) {
        let ret = w['page' + (top ? 'Y' : 'X') + 'Offset']
        let method = 'scroll' + (top ? 'Top' : 'Left')
        if (typeof ret !== 'number') {
          let d = w.document
          ret = d.documentElement[method]
          if (typeof ret !== 'number') {
            ret = d.body[method]
          }
        }
        return ret
      },
      _handleScroll () {
        var self = this
        self.scrollTop = self._getScroll(window, true)
        if (self.scrollTop > self.visibilityHeight) {
          self.visibility = true
        } else {
          self.visibility = false
        }
      },
      _scrolltop () {
        var timer = null
        timer = setInterval(function () {
          var toTop = document.body.scrollTop || document.documentElement.scrollTop
          // 设置速度，用等式而不用具体数值是为了产生缓动效果；
          var speed = Math.ceil(toTop / 5)
          // 作差，产生缓动效果；
          document.documentElement.scrollTop = document.body.scrollTop = toTop - speed
          // 判断是否抵达顶部，若是，停止计时器；
          if (toTop === 0) {
            clearInterval(timer)
          }
        }, 50)
        this.onClick()
      }
    }
  }
</script>
