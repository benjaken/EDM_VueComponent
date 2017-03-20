<template>
  <li :class="timelineItemClasses">
    <div class="timeline-item-tail"></div>
    <div class="timeline-item-head timeline-item-head-custom" v-if="icon">
      <v-icon :type="icon"></v-icon>
    </div>
    <div class="timeline-item-head" v-else></div>
    <div class="timeline-item-content">
      <slot></slot>
    </div>
  </li>
</template>
<script>
  import {defaultProps, oneOf} from '../../views/utils/props'
  import vIcon from '../iconfont'
  import cx from 'classnames'
  export default {
    props: defaultProps({
      prefixCls: 'timeline-item',
      type: oneOf(['success', 'info', 'warning', 'danger', undefined]),
      last: false,
      pending: false,
      icon: ''
    }),
    computed: {
      timelineItemClasses () {
        return cx({
          [`${this.prefixCls}`]: 1,
          [`${this.prefixCls}-last`]: !!this.last,
          [`${this.prefixCls}-pending`]: !!this.pending,
          [`${this.prefixCls}-${this.type}`]: !!this.type
        })
      }
    },
    components: {
      vIcon
    }
  }
</script>
