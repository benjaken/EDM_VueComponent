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
<style lang='less'>
  .inputnumber {
    position: relative;
    display: inline-block;
    width: 120px;

    .form-control[readonly]{
      width: 100%;
      background: #fff;

      &:disabled{
        background: #eeeeee;
      }
    }

    &-toolbox {
      width: 22px;
      height: 34px;
      border: 1px solid #ccc;
      border-radius: 0 4px 4px 0;
      position: absolute;
      right: 0;
      background: #fff;
      z-index: 900;

      .operation{
        display: block;
        height: 16px;
        width: 100%;
        text-align: center;
        line-height: 16px;
        text-decoration: none;
        cursor: pointer;
        padding: 0;
        border: none;
        background: #fff;

        &:first-child {
          border-bottom: 1px solid #ccc;
        }

        i {
          color: #666;
          font-size: 10px;
        }

        &:hover {
          i {
            color: #21A3E9;
          }
        }

        &:disabled {
          i {
            color: #ccc
          }
        }
      }
    }

    &.small {
      .inputnumber-toolbox {
        height: 30px;

        .operation{
          line-height: 14px;
          height: 14px;
        }
      }

      input {
        height: 30px;
      }
    }

    &.big {
      .inputnumber-toolbox {
        height: 38  px;

        .operation{
          line-height: 18px;
          height: 18px;
        }
      }

      input {
        height: 38px;
      }
    }
  }
</style>
