<template>
  <div :class="prefixCls" v-if="enableClick">
    <a v-for="i in data" :class="_listgroupClasses(i)">
      <span class="badge" v-if="i.badge">{{i.badge}}</span>
      <h4 :class="`${this.prefixCls}-item-heading`" v-if="i.content">{{i.title}}</h4>
      <p :class="`${this.prefixCls}-item-text`" v-if="i.content">{{i.content}}</p>
      <span v-else>{{i.title}}</span>
    </a>
  </div>
  <ul :class="prefixCls" v-else>
    <li v-for="i in data" :class="_listgroupClasses(i)">
      <span class="badge" v-if="i.badge">{{i.badge}}</span>
      {{i.title}}
    </li>
  </ul>
</template>
<script>
  import {defaultProps, oneOf} from '../../views/utils/props'
  import cx from 'classnames'
  export default {
    props: defaultProps({
      prefixCls: 'list-group',
      type: oneOf(['success', 'info', 'warning', 'danger', undefined]),
      data: [],
      enableClick: false
    }),
    methods: {
      _listgroupClasses (i) {
        i.disabled = i.disabled ? i.disabled : false
        return cx({
          [`${this.prefixCls}-item`]: 1,
          [`${this.prefixCls}-item-${i.type}`]: !!i.type,
          [`disabled`]: !!i.disabled,
          [`active`]: i.active
        })
      }
    }
  }
</script>
