<template>
  <tr v-for="i in data">
    <td>{{i.name}}</td>
    <td>{{i.age}}</td>
    <td>{{i.address}}</td>
  </tr>
</template>
<script>
import {defaultProps} from '../../views/utils/props'

export default {
  props: defaultProps({
    prefixCls: 'table-item',
    data: []
  })
}
</script>
