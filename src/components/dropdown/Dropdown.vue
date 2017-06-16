<template>
  <div :class="dropClasses">
    <div class="btn-group" v-if="group">
      <v-button :type="type" :onclick="onclick" :size="size" :loading="loading">
        <slot></slot>
      </v-button>
      <v-button :type="type" @click="_toggleMenu()" :size="size">
        <v-icon type="down"></v-icon>
      </v-button>
    </div>
    <v-button :type="type" @click="_toggleMenu()" :size="size"  :loading="loading" v-else>
      <slot></slot>
      <v-icon type="down"></v-icon>
    </v-button>
    <ul :class="`${prefixCls}-menu`" v-show="visible" transition="slide">
      <li v-for="i in data" :class="_dropdownClasses(i)" @click="this.visible = false">
        <a v-link="`${i.path}`" v-if="i.value !== '|' && i.path">{{i.value}}</a>
        <a @click="_toggle(i.value)" id="checkbox" v-else>
          <v-checkbox v-if="showSelect">{{i.value}}</v-checkbox>
          <span v-else>{{i.value}}</span>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
  import {defaultProps, oneOf} from '../../views/utils/props'
  import vButton from '../button'
  import vIcon from '../iconfont'
  import vCheckbox from '../checkbox'
  import cx from 'classnames'
  export default {
    props: defaultProps({
      prefixCls: 'dropdown',
      visible: false,
      group: false,
      data: [],
      size: oneOf(['xsmall', 'small', 'large', undefined]),
      type: 'default',
      loading: false,
      showSelect: false,
      onclick: () => {}
    }),
    computed: {
      dropClasses () {
        return cx({
          [this.prefixCls]: 1,
          [`${this.prefixCls}-visible`]: !!this.visible
        })
      }
    },
    components: {
      vButton,
      vIcon,
      vCheckbox
    },
    ready () {
      window.addEventListener('click', this.close)
    },
    beforeDestroy() {
      window.removeEventListener('click', this.close)
    },
    methods: {
      _toggleMenu () {
        this.visible = !this.visible
      },
      _toggle (action) {
        this.$dispatch(`dropdown:action`, action)
      },
      _dropdownClasses (i) {
        return cx({
          [`divider`]: i.value === '|',
          [`disabled`]: !!i.disabled
        })
      },
      close(e) {
        var self = this
        if (!self.$el.contains(e.target)) {
          self.visible = false
        }
      }
    }
  }
</script>
