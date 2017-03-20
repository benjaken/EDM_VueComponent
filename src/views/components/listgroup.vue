<template lang="md">
  # ListGroup

  ---

  用于显示一组简单的元素，还能用于复杂的定制的内容。

  ## 何时使用

  ## API

  <demo>
    <example title="基本">
      <v-list-group :data="data1"></v-list-group>
    </example>
    <example title="带有徽章">
      <v-list-group :data="data2"></v-list-group>
    </example>
    <example title="被禁用">
      <v-list-group :data="data1" :enable-click="true"></v-list-group>
    </example>
    <example title="添加情境类">
      <v-list-group :data="data3" :enable-click="true"></v-list-group>
    </example>
    <example title="带描述性内容">
      <v-list-group :data="data4" :enable-click="true"></v-list-group>
    </example>
  </demo>
</template>
<script>
    import vListGroup from '../../components/listgroup'
    export default {
      data () {
        return {
          data1: [
            {'title': 'Cras justo odio', 'active': true},
            {'title': 'Dapibus ac facilisis in', 'disabled': true},
            {'title': 'Morbi leo risus'}
          ],
          data2: [
            {'title': 'Cras justo odio', 'badge': '14', 'active': true},
            {'title': 'Dapibus ac facilisis in', 'badge': '4'},
            {'title': 'Morbi leo risus', 'badge': '2'}
          ],
          data3: [
            {'title': 'Cras justo odio', 'type': 'success'},
            {'title': 'Dapibus ac facilisis in', 'type': 'info'},
            {'title': 'Morbi leo risus', 'type': 'warning'},
            {'title': 'Vestibulum at eros', 'type': 'danger'}
          ],
          data4: [
            {'title': 'List group item heading', 'content': 'Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.', 'active': true},
            {'title': 'List group item heading', 'content': 'Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.'},
            {'title': 'List group item heading', 'content': 'Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.'}
          ]
        }
      },
      components: {
        vListGroup
      }
    }
</script>
