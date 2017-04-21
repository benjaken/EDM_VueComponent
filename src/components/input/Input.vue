<template>
  <div class="input">
    <textarea v-if="type === 'textarea'" class="textarea" :placeholder="placeholder" :rows="rows" v-model="value"></textarea>
    <div :class="inputClasses" v-if="type === 'input'">
      <span :class="inputAddonClasses" v-if="addonBefore">
        <v-button type="default" v-if="addon === 'button'" :onclick="onclick">{{addonBefore}}</v-button>
        <input type="checkbox" v-if="addon === 'checkbox'" :value="addonBefore">
        <input type="radio" v-if="addon === 'radio'" :value="addonBefore">
        <span v-if="addon === 'addon'">{{addonBefore}}</span>
      </span>
      <v-icon :type="icon" v-if="icon"></v-icon>
      <input v-el:input ref="input" :type="htmlType" class="form-control" :placeholder="placeholder" v-model="value" />
      <span :class="inputAddonClasses" v-if="addonAfter">
        <v-button type="default" v-if="addon === 'button'" :onclick="onclick">{{addonAfter}}</v-button>
        <input type="checkbox" v-if="addon === 'checkbox'" :value="addonAfter">
        <input type="radio" v-if="addon === 'radio'" :value="addonBefore">
        <span v-if="addon === 'addon'">{{addonAfter}}</span>
      </span>
    </div>
    <span v-if="maxLength >= 0" class="input-group-tip">你还可以输入{{maxLength}}字</span>
  </div>
</template>
<script>
import {defaultProps, oneOf, oneOfType} from '../../views/utils/props'
import cx from 'classnames'
import vButton from '../button'
import vIcon from '../iconfont'

export default {
  props: defaultProps({
    prefixCls: 'input',
    group: false,
    size: oneOf(['small', 'large', undefined]),
    value: oneOfType([String, Number]),
    placeholder: oneOfType([String, Number]),
    addonBefore: '',
    addonAfter: '',
    icon: '',
    htmlType: 'text',
    type: 'input',
    rows: 4,
    maxLength: -1,
    addon: oneOf(['addon', 'button', 'checkbox', 'radio', undefined]),
    onclick: () => {}
  }),
  data () {
    return {
      max: this.maxLength
    }
  },
  computed: {
    inputClasses () {
      const sizeCls = ({
        'large': 'lg',
        'small': 'sm'
      })[this.size] || ''
      return cx({
        [`${this.prefixCls}-group`]: !!this.group,
        [`${this.prefixCls}-group-${sizeCls}`]: !!sizeCls,
        [`${this.prefixCls}-group-icon`]: !!this.icon
      })
    },
    inputAddonClasses () {
      const addonCls = ({
        'button': 'btn',
        'addon': 'addon',
        'checkbox': 'addon',
        'radio': 'addon'
      })[this.addon] || ''
      return cx({
        [`${this.prefixCls}-group-${addonCls}`]: !!addonCls
      })
    }
  },
  components: {
    vButton,
    vIcon
  },
  watch: {
    'input' (val) {
      var self = this
      if (self.maxLength >= 0) {
        if (val.length > self.max) {
          self.input = self.input.substring(0, self.max)
          self.maxLength = 0
        } else {
          self.maxLength = self.max - val.length
        }
      }
    }
  }
}
</script>
