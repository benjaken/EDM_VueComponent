<template>
  <label class="checkbox-wrapper">
    <span :class="ckClasses">
      <span :class="prefixCls + '-inner'"></span>
      <input :class="prefixCls + '-input'" type="checkbox" :checked="checked" @change="_handleChange" :disabled="disabled">
    </span>
    <slot></slot>
  </label>
</template>
<script>
import {defaultProps} from '../../views/utils/props'
import cx from 'classnames'

export default{
  props: defaultProps({
    prefixCls: 'checkbox',
    checked: Boolean,
    defaultChecked: false,
    onchange: () => {},
    indeterminate: false,
    disabled: false
  }),
  computed: {
    ckClasses () {
      return cx({
        [this.prefixCls]: 1,
        [`${this.prefixCls}-checked`]: this.checked,
        [`${this.prefixCls}-checked-${this.checked ? 1 : 0}`]: !!this.checked,
        [`${this.prefixCls}-disabled`]: this.disabled
      })
    }
  },
  ready () {
    if (this.checked === null) {
      this.checked = this.defaultChecked
    }
  },
  methods: {
    _handleChange (e) {
      this.checked = this.defaultChecked = e.target.checked
      this.onchange(e)
    }
  }
}
</script>
