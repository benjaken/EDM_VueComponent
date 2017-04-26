<template>
  <table :class="tableClasses">
    <caption v-if="caption">{{caption}}</caption>
    <thead>
      <tr>
        <th v-for="i in colums">{{i.title}}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="i in data">
        <td>{{i.name}}</td>
        <td>{{i.age}}</td>
        <td>{{i.address}}</td>
      </tr>
    </tbody>
  </table>
</template>
<script>
import {defaultProps} from '../../views/utils/props'
import cx from 'classnames'

export default {
  props: defaultProps({
    prefixCls: 'table',
    caption: '',
    colums: [],
    data: [],
    striped: false,
    bordered: false,
    hover: false,
    condensed: false
  }),
  computed: {
    tableClasses () {
      return cx({
        [this.prefixCls]: 1,
        [`${this.prefixCls}-striped`]: !!this.striped,
        [`${this.prefixCls}-bordered`]: !!this.bordered,
        [`${this.prefixCls}-hover`]: !!this.hover,
        [`${this.prefixCls}-condensed`]: !!this.condensed
      })
    }
  }
}
</script>
