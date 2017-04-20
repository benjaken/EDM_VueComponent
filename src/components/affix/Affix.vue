<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
  import {defaultProps} from '../../views/utils/props'
  import cx from 'classnames'

  export default({
    props: defaultProps({
      prefixCls: 'affix',
      offsetTop: 0,
      offsetBottom: Number,
      onChange: () => {}
    }),
    data () {
      return {
        scrollTop: 0
      }
    },
    ready () {
      window.addEventListener('scroll', this._handleScroll, false)
      window.addEventListener('resize', this._handleScroll, false)
    },
    beforeDestory () {
      window.removeEventListener('scorll', this._handleScroll, false)
      window.removeEventListener('resize', this._handleScroll, false)
    },
    methods: {
      _handleScroll () {
        var self = this
        console.log(self)
      }
    },
    computed: {
      affixClasses () {
        return cx({
          [this.prefixCls]: 1
        })
      }
    }
  })
</script>
