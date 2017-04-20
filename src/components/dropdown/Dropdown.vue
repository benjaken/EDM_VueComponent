<template>
  <div class="dropdown">
    <div class="btn-group" v-if="group">
      <v-button :type="type" :onclick="onclick" :size="size" :loading="loading">
        {{value}}
      </v-button>
      <v-button :type="type" @click="_toggleMenu()" @blur="_closeMenu()" :size="size">
        <span class="caret"></span>
      </v-button>
    </div>
    <v-button :type="type" @click="_toggleMenu()" @blur="_closeMenu()" :size="size"  :loading="loading" v-else>
      {{value}}<span class="caret"></span>
    </v-button>
    <ul :class="prefixCls" v-if="visible">
      <li v-for="i in data" :class="_dropdownClasses(i)">
        <!-- <a :href="i.path" target="_blank" v-if="i.value !== '|' && i.href">{{i.value}}</a> -->
        <a @click="i.onclick" v-if="i.value !== '|' && i.onclick">{{i.value}}</a>
        <a v-link="`${i.path}`" v-if="i.value !== '|'" v-else>{{i.value}}</a>
      </li>
    </ul>
  </div>
</template>
<script>
  import {defaultProps, oneOf} from '../../views/utils/props'
  import vButton from '../button'
  import cx from 'classnames'
  export default {
    props: defaultProps({
      prefixCls: 'dropdown-menu',
      visible: false,
      group: false,
      value: '',
      data: [],
      size: oneOf(['xsmall', 'small', 'large', undefined]),
      type: 'default',
      loading: false,
      onclick: () => {}
    }),
    components: {
      vButton
    },
    methods: {
      _toggleMenu () {
        this.visible = !this.visible
      },
      _dropdownClasses (i) {
        return cx({
          [`divider`]: i.value === '|',
          [`disabled`]: !!i.disabled
        })
      },
      _closeMenu () {
        var self = this
        setTimeout(function () {
          self.visible = false
        }, 200)
      }
    }
  }
</script>
