<template>
  <div :class="prefixCls + '-wrap'">
    <div :class="prefixCls + '-bar'" :style="barStyle" @click.self="sliderClick"></div>
    <div :class="prefixCls + '-button-wrap'" @mousedown="onSingleButtonDown">
    </div>
  </div>
</template>
<script>
  import {defaultProps} from '../../views/utils/props'
  // import cx from 'classnames'
  export default {
    props: defaultProps({
      prefixCls: 'slider',
      value: 0,
      min: 0,
      max: 100
    }),
    data () {
      return {
        dragging: true,
        startX: 0,
        currentX: 0,
        startPos: 0,
        singlePosition: (this.value - this.min) / (this.max - this.min) * 100
      }
    },
    methods: {
      onSingleButtonDown (event) {
        event.preventDefault()
        this.onSingleDragStart(event)
        console.log(event)
        window.addEventListener('mousemove', this.onSingleDragging)
        window.addEventListener('mouseup', this.onSingleDragEnd)
      },
      onSingleDragStart (event) {
        this.dragging = true
        this.startX = event.clientX
        this.startPos = parseInt(this.singlePosition, 10)
      },
      onSingleDragging (event) {
        if (this.dragging) {
          // this.$refs.tooltip.visible = true
          this.currentX = event.clientX
          const diff = (this.currentX - this.startX) / this.sliderWidth * 100
          this.newPos = this.startPos + diff
          this.changeSinglePosition(this.newPos)
        }
      },
      onSingleDragEnd () {
        if (this.dragging) {
          this.dragging = false
          console.log(this.$refs)
          // this.$refs.tooltip.visible = false
          this.changeSinglePosition(this.newPos)
          window.removeEventListener('mousemove', this.onSingleDragging)
          window.removeEventListener('mouseup', this.onSingleDragEnd)
        }
      },
      sliderClick (event) {
      }
    }
  }
</script>
