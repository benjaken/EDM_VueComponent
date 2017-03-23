<template>
  <ol :class="prefixCls">
    <li v-for="item in data">
      <a :class="{'active': item.active}" v-link="{path : item.link}">
        <v-icon :type="item.icon" v-if="item.icon"></v-icon>
        <span v-if="item.name">{{item.name}}</span>
      </a>
    </li>
  </ol>
</template>
<script>
  import {defaultProps} from '../../views/utils/props'
  import vIcon from '../iconfont'

  export default {
    props: defaultProps({
      prefixCls: 'breadcrumb',
      data: []
    }),
    components: {
      vIcon
    }
  }
</script>
