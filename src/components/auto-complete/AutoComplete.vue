<template>
  <div :class="prefixCls" :style="style">
    <input class="form-control" :placeholder="placeholder" v-model="value" @onblur="_blur"/>
    <ul class="dropdown-menu" v-show="visible" transition="slide">
      <li v-for="i in data | filter" @click="_setValue(i)">
        <a>{{i}}</a>
      </li>
    </ul>
  </div>
</template>
<script>
import {defaultProps} from '../../views/utils/props'
// import cx from 'classnames'
import vInput from '../input'

export default {
  props: defaultProps({
    prefixCls: 'auto-complete',
    value: '',
    placeholder: '',
    dataSource: [],
    style: '',
    ignoreSymbol: false,
    onchange: () => {},
    onselect: () => {}
  }),
  data () {
    return {
      visible: false,
      data: this.dataSource
    }
  },
  ready () {
    window.addEventListener('click', this._blur)
  },
  beforeDestroy() {
    window.removeEventListener('click', this._blur)
  },
  components: {
    vInput
  },
  methods: {
    _setValue (val) {
      this.value = val
      this.onselect(val)
      this.$watch('value', function () {
        this.visible = false
      })
    },
    _blur (e) {
      var self = this
      if (!self.$el.contains(e.target)) {
        self.visible = false
      }
    }
  },
  filters: {
    'filter' (val) {
      let self = this
      const target = []
      val.forEach(function (index) {
        if (self.ignoreSymbol) {
          if (index.toUpperCase().indexOf(self.value.toUpperCase()) >= 0) {
            target.push(index)
          }
        } else {
          if (index.indexOf(self.value) >= 0) {
            target.push(index)
          }
        }
      })
      if (target.length === 0) {
        target.push('暂无数据')
      } else if (target.length > 5) {
        target.splice(5)
      }
      return target
    }
  },
  watch: {
    'value' (e, val) {
      let self = this
      self.visible = true
      self.onchange(self.value)
    },
    'dataSource' (val) {
      this.data = val
    }
  }
}
</script>
