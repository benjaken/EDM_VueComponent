<template>
  <button :type="htmlType || 'button'" :class="btClasses" @click="onclick">
    <slot></slot>
  </button>
</template>
<script>
import {defaultProps, oneOf} from '../../utils/props'
import cx from 'classnames'
export default {
  props: defaultProps({
    prefixCls: 'btn',
    type: oneOf(['primary', 'default', undefined]),
    htmlType: 'button',
    shape: oneOf(['circle', 'circle-outline', undefined]),
    size: oneOf(['small', 'large', undefined]),
    loading: Boolean,
    className: '',
    onclick: () => {}
  }),
  computed: {
    btClasses () {
      const sizeCls = ({
        'large': 'lg',
        'small': 'sm'
      })[this.size] || ''
      return cx({
        [this.prefixCls]: 1,
        [`${this.prefixCls}-${this.type}`]: !!this.type,
        [`${this.prefixCls}-${this.shape}`]: !!this.shape,
        [`${this.prefixCls}-${sizeCls}`]: !!sizeCls,
        [`${this.prefixCls}-loading`]: this.loading != null && this.loading,
        [this.className]: !!this.className
      })
    }
  }
}
</script>
