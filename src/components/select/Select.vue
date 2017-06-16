<template>
  <div :class="classes" :style="`width:${width}px;`">
    <div :class="`${prefixCls}-selection`" @click="_toggleMenu">
      <span :class="`${prefixCls}-placeholder`" v-if="showPlaceholder && !showSearch">{{placeholder}}</span>
      <span :class="`${prefixCls}-selected-value`" v-if="!showPlaceholder && !showSearch && mode === 'single'">{{selectedSingle}}</span>
      <input type="text" v-if="showSearch" v-model="query" :class="`${prefixCls}-search`" :placeholder="showPlaceholder ? placeholder : ''"/>
      <v-icon type="down" :class="`${prefixCls}-arrow`"></v-icon>
    </div>
    <div :class="`${prefixCls}-dropdown`" v-show="dropVisible" transition="slide">
      <ul :class="`${prefixCls}-dropdown-list`">
        <v-option v-for="i in options | query" :value="i.value" :label="i.label" :selected.sync="model" :disabled="i.disabled" @click="_setValue(i.value)"></v-option>
      </ul>
    </div>
  </div>
</template>
<script>
  import {defaultProps, oneOf, oneOfType} from '../../views/utils/props'
  import vIcon from '../iconfont'
  import vOption from './Option.vue'
  import cx from 'classnames'

  export default {
    props: defaultProps({
      prefixCls: 'select',
      value: oneOfType([String, Number]),
      defaultValue: '',
      mode: oneOf(['multiple', 'tags', 'combobox', undefined], 'single'),
      size: oneOf(['small', 'large', undefined], 'normal'),
      allowClear: false,
      onselect: () => {},
      ondeselect: () => {},
      onchange: () => {},
      onsearch: () => {},
      placeholder: 'Please select',
      notFoundContent: 'Not Found',
      width: 200,
      showPlaceholder: true,
      showSearch: false,
      disabled: false,
      placement: oneOf(['bottom', 'top'], 'bottom'),
      options: []
    }),
    data () {
      return {
        visible: false,
        query: '',
        model: this.value,
        selectedSingle: ''
      }
    },
    components: {
      vIcon,
      vOption
    },
    computed: {
      classes () {
        return cx({
          [this.prefixCls]: 1,
          [`${this.prefixCls}-${this.mode}`]: !!this.mode,
          [`${this.prefixCls}-visible`]: !!this.dropVisible,
          [`${this.prefixCls}-disabled`]: !!this.disabled
        })
      },
      dropVisible () {
        let status = true
        return this.visible && status
      },
      transition () {
        return this.placement === 'bottom' ? 'slide-down' : 'slide-up'
      }
    },
    ready () {
      window.addEventListener('click', this._close)
      if (this.model) this._updateSingleSelected()
    },
    beforeDestroy() {
      window.removeEventListener('click', this._close)
    },
    methods: {
      _toggleMenu () {
        if (this.disabled) return
        this.visible = !this.visible
      },
      _setValue (val) {
        if (this.model === val) {
          this.visible = false
        } else {
          this.model = val
          // if (this.showSearch) this.query = val
          // this.value = val
          // this.visible = this.showPlaceholder = false
        }
      },
      _close(e) {
        var self = this
        if (!self.$el.contains(e.target)) {
          self.visible = false
        }
      },
      _updateSingleSelected () {
        const type = typeof this.model
        if (type === 'string' || type === 'number') {
          // let findModal = false
          let target = this.options.filter(item => item.value === this.model)
          if (target.length > 0) {
            this.selectedSingle = target[0].label
            this.visible = this.showPlaceholder = false
          }
        }
      }
    },
    filters: {
      'query' (val) {
        const list = []
        val.forEach(item => {
          if (new RegExp(this.query.toUpperCase()).test(item.label)) list.push(item)
        })
        if (list.length === 0) list.push({value: -1, label: this.notFoundContent})
        return list
      }
    },
    watch: {
      'model' (val) {
        this._updateSingleSelected()
      }
    }
  }
</script>
