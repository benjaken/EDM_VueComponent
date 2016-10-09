<template>
  <span class="vbadge">
    <span v-if="count > 0" class="badge" :class="{'badge-count': count, 'badge-dot': dot}">{{count | short}}</span>
    <span v-if="dot" class="badge" :class="{'badge-dot': dot}"></span>
    <slot></slot>
  </span>
</template>
<script>
import {defaultProps} from '../../views/utils/props'
export default {
  props: defaultProps({
    count: Number,
    overflowCount: {
      type: Number,
      default: 99
    },
    dot: {
      type: Boolean,
      default: false
    }
  }),
  filters: {
    short (val) {
      return val > this.overflowCount ? this.overflowCount + '+' : val
    }
  }
}
</script>
