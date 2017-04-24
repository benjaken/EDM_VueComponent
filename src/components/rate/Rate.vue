<template>
  <ul class="rate">
    <li v-for="i in 5" :class="rateClasses($index)" :id="$index" @mouseover="_mouseover($index)" @mouseout="_mouseout($index)" @click="_change($index)">
      <v-icon :type="icon"></v-icon>
    </li>
    <li v-if="total" class="total">{{defaultValue}} stars</li>
  </ul>
</template>
<script>
import {defaultProps} from '../../views/utils/props'
import cx from 'classnames'
import vIcon from '../iconfont'
export default {
  props: defaultProps({
    prefixCls: 'rate',
    icon: 'star',
    defaultValue: 0,
    readonly: false,
    total: false,
    onchange: () => {}
  }),
  data () {
    return {
      value: this.defaultValue ? this.defaultValue : -1,
      isChange: false
    }
  },
  components: {
    vIcon
  },
  methods: {
    rateClasses (val) {
      val = val || 0
      return cx({
        [`${this.prefixCls}-star`]: 1,
        [`${this.prefixCls}-star-full`]: val + 1 <= this.value,
        [`${this.prefixCls}-star-abled`]: !this.readonly
      })
    },
    _mouseover (val) {
      if (!this.readonly) {
        this.isChange = false
        this.value = val
      }
    },
    _mouseout () {
      if (!this.isChange && !this.readonly) {
        this.value = this.defaultValue
      }
    },
    _change (val) {
      if (!this.readonly) {
        this.value = this.defaultValue = val + 1
        this.isChange = true
        this.onchange()
      }
    }
  }
}
</script>
