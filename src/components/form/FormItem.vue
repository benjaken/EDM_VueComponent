<template>
  <div class="form-group">
    <label><span v-if="required" class="required">*</span>{{title}}</label>
    <div :class="formClasses">
      <slot></slot>
      <span class="tip" v-if="content">{{content}}</span>
    </div>
  </div>
</template>
<script>
import {defaultProps} from '../../views/utils/props'
import cx from 'classnames'
export default {
  props: defaultProps({
    prefixCls: 'form-item',
    title: '',
    required: false,
    waiting: false,
    wrong: false,
    warning: false,
    success: false,
    content: ''
  }),
  computed: {
    formClasses () {
      return cx({
        [this.prefixCls]: 1,
        [`${this.prefixCls}-danger`]: !!this.wrong,
        [`${this.prefixCls}-waiting`]: !!this.waiting,
        [`${this.prefixCls}-warning`]: !!this.warning,
        [`${this.prefixCls}-success`]: !!this.success,
        [`${this.prefixCls}-feedback`]: 1
      })
    }
  }
}
</script>
