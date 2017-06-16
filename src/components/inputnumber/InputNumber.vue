<template>
  <div :class="prefixCls + ' ' + size">
    <div :class="prefixCls + '-toolbox'" v-show="!disabled">
      <button class="operation" @click="value += step" :disabled="value >= max"><i class="icon icon-up"></i></button>
      <button class="operation" @click="value -= step" :disabled="value <= min"><i class="icon icon-down"></i></button>
    </div>
    <input class="InputNumber form-control" :value="value" @change="_onChange" readonly="readonly" :disabled="disabled">
  </div>
</template>
<script>
import {defaultProps, oneOf} from '../../views/utils/props'

function isValueNumber (value) {
  return (/^-?\d+?$/).test(value + '')
}

export default {
  props: defaultProps({
    prefixCls: 'inputnumber',
    value: 1,
    min: -99999999,
    max: 99999999,
    step: 1,
    defaultValue: Number,
    disabled: false,
    size: oneOf(['small', 'default', 'big'], 'default'),
    onChange: () => {}
  }),
  compiled () {
    if (this.defaultValue !== null) {
      this.value = this.defaultValue
    }
  },
  methods: {
    _setValue (value) {
      var self = this
      self.value = value
    },
    _onChange (e) {
      var self = this
      let val = e.target.value.trim()
      if (isValueNumber(val)) {
        val = Number(val)
        if (val < this.min) {
          self._setValue(this.min)
        } else if (val > this.max) {
          self._setValue(this.max)
        } else {
          return val
        }
      } else if (!isValueNumber(val)) {
        self.value = '1'
      }
    }
  }
  // watch: {
  //   'value' (val) {
  //     if (isValueNumber(val)) {
  //       val = Number(val)
  //       if (val < this.min) {
  //         this.value = this.min
  //       } else if (val > this.max) {
  //         this.value = this.min
  //       }
  //     }
  //   }
  // }
}
</script>
