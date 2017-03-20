<template>
  <ul :class="timelineClasses">
    <slot></slot>
  </ul>
</template>
<script>
  import {defaultProps} from '../../views/utils/props'
  import cx from 'classnames'
  export default {
    props: defaultProps({
      prefixCls: 'timeline',
      pending: false
    }),
    computed: {
      timelineClasses () {
        return cx({
          [`${this.prefixCls}`]: 1,
          [`${this.prefixCls}-pending`]: !!this.pending
        })
      }
    }
  }
</script>
