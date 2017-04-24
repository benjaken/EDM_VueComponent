<template>
  <form :class="formClasses">
    <slot></slot>
    <div class="clear"></div>
  </form>
</template>
<script>
import {defaultProps, oneOf} from '../../views/utils/props'
import cx from 'classnames'
export default {
  props: defaultProps({
    prefixCls: 'form',
    type: oneOf(['inline', 'horizontal', undefined])
  }),
  computed: {
    formClasses () {
      return cx({
        [`${this.prefixCls}-${this.type}`]: !!this.type
      })
    }
  }
}
</script>
