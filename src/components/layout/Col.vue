
<template>
<div :class="wrapClasses"><slot></slot></div>
</template>

<script>
import { defaultProps, oneOf, oneOfType } from '../../views/utils/props'
import cx from 'classnames'
export default {
  props: defaultProps({
    span: oneOfType([String, Number]),
    type: oneOf(['xs', 'sm', 'lg', 'md']),
    offset: oneOfType([String, Number]),
    push: oneOfType([String, Number]),
    pull: oneOfType([String, Number]),
    className: String
  }),
  computed: {
    wrapClasses () {
      return cx({
        [`col-${this.type}-${this.span}`]: this.span,
        [`col-${this.type}-offset-${this.offset}`]: this.offset,
        [`col-${this.type}-push-${this.push}`]: this.push,
        [`col-${this.type}-pull-${this.pull}`]: this.pull,
        [`${this.className}`]: this.className
      })
    }
  }
}
</script>
