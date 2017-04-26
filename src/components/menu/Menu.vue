<template>
  <nav :class="navClasses" v-if="type === 'navbar'">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="#">
          <slot name="logo"></slot>
        </a>
      </div>
      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav navbar-right">
          <li v-for="i in data" v-link="{'path': i.path , activeClass: 'active'}" :class="{'dropdown': i.dropdown}">
            <v-dropdown :data="i.data" v-if="i.dropdown">{{i.value}}</v-dropdown>
            <a href="JavaScript:void(0)" v-else>{{i.value}}</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div :class="sideClasses" v-if="type === 'sidebar'">
    <slot name="button"></slot>
    <ul class="sidebar-side">
      <li v-for="i in data" v-link="{'path': i.path , activeClass: 'active'}">
        <a href="JavaScript:void(0)"><v-icon :type="i.icon"></v-icon>{{i.value}}</a>
      </li>
    </ul>
  </div>
</template>
<script>
import {defaultProps, oneOf} from '../../views/utils/props'
import cx from 'classnames'
import vDropdown from '../dropdown'
import vIcon from '../iconfont'

export default {
  props: defaultProps({
    prefixCls: 'navbar',
    prefixCls1: 'sidebar',
    type: oneOf(['navbar', 'sidebar']),
    theme: oneOf(['default', 'inverse'], 'default'),
    data: [],
    visible: false
  }),
  components: {
    vDropdown,
    vIcon
  },
  computed: {
    navClasses () {
      return cx({
        [this.prefixCls]: 1,
        [`${this.prefixCls}-${this.theme}`]: !!this.theme
      })
    },
    sideClasses () {
      return cx({
        [this.prefixCls1]: 1,
        [`${this.prefixCls1}-${this.theme}`]: !!this.theme
      })
    }
  },
  methods: {
    _toggleMenu () {
      this.visible = !this.visible
    }
  }
}
</script>
