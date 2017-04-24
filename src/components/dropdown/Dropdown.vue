<template>
  <div class="dropdown">
    <div class="btn-group" v-if="group">
      <v-button :type="type" :onclick="onclick" :size="size" :loading="loading">
        {{value}}
      </v-button>
      <v-button :type="type" @click="_toggleMenu()" :size="size">
        <span class="caret"></span>
      </v-button>
    </div>
    <v-button :type="type" @click="_toggleMenu()" :size="size"  :loading="loading" v-else>
      {{value}}<span class="caret"></span>
    </v-button>
    <ul :class="prefixCls" v-if="visible">
      <li v-for="i in data" :class="_dropdownClasses(i)" @click="this.visible = false">
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
      _dropdownClasses (i) {
        return cx({
          [`divider`]: i.value === '|',
          [`disabled`]: !!i.disabled
        })
      },
      close(e) {
        if (!this.$el.contains(e.target)) {
          this.visible = false
        }
      }
    }
  }
</script>
