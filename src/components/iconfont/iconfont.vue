<template>
  <i :class="iconClasses">
    <slot></slot>
  </i>
</template>

<script>
import { defaultProps } from '../../views/utils/props'
import cx from 'classnames'
export default {
  props: defaultProps({
    className: '',
    type: {
      type: String,
      require: true
    }
  }),
  computed: {
    iconClasses () {
      return cx({
        [this.className]: !!this.className,
        [`icon`]: 1,
        [`icon-${this.type}`]: this.type
      })
    }
  }
}
</script>
