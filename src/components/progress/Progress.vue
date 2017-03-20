<template>
  <div v-if="plieUp" :class="progressClasses" :style="`width:${this.percentage}%;min-width:${this.minWidth};`">
    <span v-if="showText">{{percentage}}%</span>
  </div>
  <div :class="prefixCls" v-else>
    <div :class="progressClasses" :style="`width:${this.percentage}%;min-width:${this.minWidth};`">
      <span v-if="showText">{{percentage}}%</span>
    </div>
  </div>
</template>
<script>
  import {defaultProps, oneOf} from '../../views/utils/props'
  import cx from 'classnames'
  export default {
    props: defaultProps({
      prefixCls: 'progress',
      percentage: Number,
      plieUp: false,
      showText: false,
      showMin: false,
      type: oneOf(['success', 'info', 'warning', 'danger', undefined]),
      striped: false,
      active: false
    }),
    data () {
      return {
        minWidth: this.showMin ? '2em' : 0
      }
    },
    computed: {
      progressClasses () {
        return cx({
          [`${this.prefixCls}-bar`]: 1,
          [`${this.prefixCls}-bar-${this.type}`]: !!this.type,
          [`${this.prefixCls}-bar-striped`]: !!this.striped,
          [`active`]: !!this.active
        })
      }
    }
  }
</script>
