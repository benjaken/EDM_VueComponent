<template lang="md">
  # Dropdown

  ---

  向下弹出的列表。

  ## 何时使用

  当页面上的操作命令过多时，用此组件可以收纳操作元素。点击或移入触点，会出现一个下拉菜单。可在列表中进行选择，并执行相应的命令。

  ## API

  | 参数      | 说明                                     | 类型          | 默认值 |
  |-----------|------------------------------------------|---------------|--------|
  | trigger   | 触发行为，可选 `hover/focus/click`        | string         | hover  |
  | placement | 气泡框位置，可选 `top/left/right/bottom`  | string         | top    |
  | title     | 卡片标题                                 | String         | 无     |
  | content   | 卡片内容                                 | String         | 无     |
  | overlayClassName | 卡片类名                          | string         | 无     |
  | overlayStyle | 卡片样式                              | object         | 无     |
  | visible   | 用于手动控制浮层显隐                       | boolean        | false  |

  ## 组件演示

  <demo>
    <example title="基本">
      <v-dropdown value="click me" :data="data"></v-dropdown>
    </example>
  </demo>
</template>
<style scoped>
  .code-box > .code-box-demo .btn {
    margin: 0;
  }
</style>
<script>
  import vDropdown from '../../components/dropdown'
  import vButton from '../../components/button'
  export default {
    data () {
      return {
        data: [
          {'value': 'Action', 'path': ''},
          {'value': 'Action', 'path': '/components/dropdown', 'disabled': true},
          {'value': '|'},
          {'value': 'Action', 'path': '/components/dropdown'}
        ]
      }
    },
    components: {
      vDropdown,
      vButton
    },
    methods: {
      _gohome () {
        console.log('111')
      }
    }
  }
</script>
