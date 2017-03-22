<template lang="md">
  # Steps

  ---

  引导用户按照流程完成任务的导航条。

  ## 何时使用

  当任务复杂或者存在先后关系时，将其分解成一系列步骤，从而简化任务。

  ## API

  |参数      | 说明  | 类型       |  可选值  |默认值   |
  |---------|------|------------|---------|--------|
  | checked | 指定当前是否选中 | boolean  |  | false |
  | defaultChecked | 初始是否选中 | boolean |  | false |
  | onChange | 变化时回调函数 | Function(checked:boolean) |  |  |
  | slot::checkedChildren | 选中时的内容 | slot node |   |   |
  | slot::unCheckedChildren | 非选中时的内容 | slot node |   |  |  |

  ## 组件演示
  <demo>
    <example title="基本">
      <v-step></v-step>
    </example>
  </demo>
</template>
<script>
  import vStep from '../../components/steps'
  export default {
    components: {
      vStep
    }
  }
</script>
