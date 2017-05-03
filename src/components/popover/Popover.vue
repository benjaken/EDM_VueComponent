<template>
  <div style="display: inline-block;">
    <div :class="wrapClasses" :style="wrapStyle" v-if="visible">
      <div class="arrow"></div>
      <h3 class="popover-title">{{title}}</h3>
      <div class="popover-content">{{content}}</div>
    </div>
    <div style="display: inline-block" @mouseover="_showTip('hover')" @click="_showTip('click')" @mouseout="_closeTip">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  import {defaultProps, oneOf} from '../../views/utils/props'
  import cx from 'classnames'

  function getOffset (element) {
    let rect = element.getBoundingClientRect()
    let clientTop = element.clientTop
    let clientLeft = element.clientLeft
    return {
      top: rect.top - clientTop,
      left: rect.left - clientLeft
    }
  }

  function getSize(element) {
    console.log(element)
    let clientHeight = element.clientHeight
    let clientWidth = element.clientWidth
    return {
      height: clientHeight,
      width: clientWidth
    }
  }

  export default {
    props: defaultProps({
      prefixCls: 'popover',
      title: String,
      content: String,
      trigger: oneOf(['hover', 'click'], 'hover'),
      placement: oneOf(['top', 'left', 'right', 'bottom'], 'top'),
      visible: false
    }),
    data () {
      return {
        wrapStyle: {}
      }
    },
    computed: {
      wrapClasses () {
        return cx({
          [this.prefixCls]: 1,
          [this.placement]: !!this.placement
        })
      }
    },
    methods: {
      _showTip (val) {
        var self = this
        switch (val) {
          case 'hover':
            if (val === self.trigger) {
              self.visible = true
              self._getLocation()
            }
            break
          case 'click': {
            if (val === self.trigger) {
              self.visible = !self.visible
              self._getLocation()
            }
            break
          }
        }
      },
      _getLocation () {
        var self = this
        const elemOffset = getOffset(this.$el)
        const childrenOffset = getSize(this.$el.firstElementChild)
        console.log(childrenOffset.width)
        console.log(childrenOffset.height)
        switch (self.placement) {
          case 'top':
            self.wrapStyle = {
              top: elemOffset.top - this.$el.children[0].clientHeight + 'px',
              left: elemOffset.left + this.$el.clientWidth / 2 - this.$el.firstElementChild.clientWidth / 2 + 'px'
            }
            break
          case 'left':
            self.wrapStyle = {
              top: elemOffset.top + this.$el.clientHeight / 2 - this.$el.firstElementChild.clientHeight / 2 + 'px',
              left: elemOffset.left - this.$el.firstElementChild.clientWidth + 'px'
            }
            break
          case 'right':
            self.wrapStyle = {
              top: elemOffset.top + this.$el.clientHeight / 2 - this.$el.children[0].clientHeight / 2 + 'px',
              left: elemOffset.left + this.$el.clientWidth + 'px'
            }
            break
          case 'bottom':
            self.wrapStyle = {
              top: elemOffset.top + this.$el.clientHeight + 'px',
              left: elemOffset.left + this.$el.clientWidth / 2 - this.$el.children[0].clientWidth / 2 + 'px'
            }
            break
        }
      },
      _closeTip () {
        var self = this
        if (self.trigger === 'hover') {
          self.visible = false
        }
      }
    }
  }
</script>
