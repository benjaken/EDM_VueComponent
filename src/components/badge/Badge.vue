<template>
  <span class="vbadge">
    <span v-if="count > 0" :class="badgeClasses" transition="zoom">{{count | short}}</span>
    <span v-if="dot" :class="badgeClasses" transition="zoom"></span>
    <slot></slot>
  </span>
</template>
<script>
import {defaultProps} from '../../views/utils/props'
import cx from 'classnames'
export default {
  props: defaultProps({
    prefixCls: 'badge',
    count: 0,
    overflowCount: 99,
    dot: false
  }),
  computed: {
    badgeClasses () {
      return cx({
        [this.prefixCls]: 1,
        [`${this.prefixCls}-count`]: this.count > 0,
        [`${this.prefixCls}-dot`]: !!this.dot
      })
    }
  },
  filters: {
    short (val) {
      return val > this.overflowCount ? `${this.overflowCount}+` : val
    }
  }
}
</script>
