<template>
  <div :class="spinClasses" v-show="spinning">
    <div class="spinning" :class="{'spin-with-tip': tip}">
      <div class='bounce1'></div>
      <div class='bounce2'></div>
      <div class='bounce3'></div>
      <span class="tip" v-if="tip">{{tip}}</span>
    </div>
  </div>
</template>
<script>
  import {defaultProps, oneOf} from '../../views/utils/props'
  import cx from 'classnames'
  export default {
    props: defaultProps({
      prefixCls: 'spin',
      size: oneOf(['small', 'large', undefined]),
      spinning: true,
      tip: String,
      delay: Number
    }),
    computed: {
      spinClasses () {
        const sizeCls = ({
          'large': 'lg',
          'small': 'sm'
        })[this.size] || ''
        return cx({
          [this.prefixCls]: 1,
          [`${this.prefixCls}-${sizeCls}`]: !!sizeCls
        })
      }
    }
  }
</script>
