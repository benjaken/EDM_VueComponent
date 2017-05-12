<template lang="md">
  # ListGroup

  ---

  用于显示一组简单的元素，还能用于复杂的定制的内容。

  ## 何时使用

  ## API

  <demo>
    <example title="基本">
      <v-collapse :data="data1"></v-collapse>
    </example>
    <example title="带有徽章">
      <v-collapse :data="data2"></v-collapse>
    </example>
    <example title="被禁用">
      <v-collapse :data="data1" enable-click></v-collapse>
    </example>
    <example title="添加情境类">
      <v-collapse :data="data3" enable-click></v-collapse>
    </example>
    <example title="带描述性内容">
      <v-collapse :data="data4" enable-click></v-collapse>
    </example>
  </demo>
</template>
<script>
    import vCollapse from '../../components/collapse'
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
        vCollapse
      }
    }
</script>
