<template>
  <li :class="classes" v-show="!hidden"><slot>{{ showLabel }}</slot></li>
</template>
<script>
  import {defaultProps, oneOfType} from '../../views/utils/props'
  import cx from 'classnames'
  export default {
    props: defaultProps({
      prefixCls: 'select-item',
      value: oneOfType([String, Number]),
      label: oneOfType([String, Number]),
      disabled: false,
      selected: oneOfType([String, Number])
    }),
    computed: {
      classes () {
        return cx({
          [this.prefixCls]: 1,
          [`${this.prefixCls}-disabled`]: !!this.disabled,
          [`${this.prefixCls}-selected`]: this.selected === this.value
        })
      },
      showLabel () {
        return this.label ? this.label : this.value
      }
    },
    events: {
      'query' (val) {
        console.log(val)
      }
    }
  }
</script>
