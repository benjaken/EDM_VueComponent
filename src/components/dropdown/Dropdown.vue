<template>
  <v-button type="default" @click="_showMenu()" @blur="_closeMenu()">{{value}}</v-button>
  <ul :class="prefixCls" v-if="showMenu">
    <li v-for="i in data" :class="_dropdownClasses(i)">
      <a v-link="`${i.path}`" v-if="i.value !== '|'">{{i.value}}</a>
    </li>
  </ul>
</template>
<script>
  import {defaultProps} from '../../views/utils/props'
  import vButton from '../button'
  import cx from 'classnames'
  export default {
    props: defaultProps({
      prefixCls: 'dropdown-menu',
      showMenu: false,
      value: '',
      data: []
    }),
    components: {
      vButton
    },
    methods: {
      _showMenu () {
        this.showMenu = true
      },
      _dropdownClasses (i) {
        return cx({
          [`divider`]: i.value === '|',
          [`disabled`]: !!i.disabled
        })
      }
    }
  }
</script>
