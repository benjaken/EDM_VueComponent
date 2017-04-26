<template lang="md">
  # Transfer

  ---

  双栏穿梭选择框。

  ## 何时使用

  用直观的方式在两栏中移动元素，完成选择行为。

  选择一个或以上的选项后，点击对应的方向键，可以把选中的选项移动到另一栏。 其中，左边一栏为 source，右边一栏为 target，API 的设计也反应了这两个概念。

  ## API

  | 参数       | 类型           | 默认值      | 说明         |
  |------------|----------------|-------------|--------------|

  ## 组件演示

  <demo>
    <example title="基本">
      <v-transfer :titles="titles" :datas="datas"></v-transfer>
    </example>
  </demo>
</template>
<script>
  import vTransfer from '../../components/transfer'
  export default{
    data () {
      return {
        titles: ['Source', 'Target'],
        datas: [{
          'value': true,
          'label': 'content1'
        }, {
          'value': false,
          'label': 'content2'
        }, {
          'value': true,
          'label': 'content3',
          disabled: true
        }, {
          'value': false,
          'label': 'content4'
        }, {
          'value': false,
          'label': 'content5'
        }, {
          'value': false,
          'label': 'content6'
        }, {
          'value': false,
          'label': 'content7'
        }, {
          'value': false,
          'label': 'content8'
        }, {
          'value': false,
          'label': 'content9'
        }, {
          'value': true,
          'label': 'content10'
        }, {
          'value': false,
          'label': 'content11'
        }, {
          'value': false,
          'label': 'content12'
        }]
      }
    },
    components: {
      vTransfer
    }
  }
</script>
