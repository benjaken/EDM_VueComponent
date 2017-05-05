<template>
  <div class="dropdown">
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
    <ul :class="prefixCls" v-if="visible">
      <li v-for="i in data" :class="_dropdownClasses(i)" @click="this.visible = false">
        <!-- <a :href="i.path" target="_blank" v-if="i.value !== '|' && i.href">{{i.value}}</a> -->
        <a v-link="`${i.path}`" v-if="i.value !== '|' && i.path">{{i.value}}</a>
        <a @click="_toggle(i.value)" v-else>{{i.value}}</a>
      </li>
    </ul>
  </div>
</template>
<script>
  import {defaultProps, oneOf} from '../../views/utils/props'
  import vButton from '../button'
  import vIcon from '../iconfont'
  import cx from 'classnames'
  export default {
    props: defaultProps({
      prefixCls: 'dropdown-menu',
      visible: false,
      group: false,
      data: [],
      size: oneOf(['xsmall', 'small', 'large', undefined]),
      type: 'default',
      loading: false,
      onclick: () => {}
    }),
    components: {
      vButton,
      vIcon
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
