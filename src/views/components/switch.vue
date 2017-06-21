<template lang="md">
  # Switch

  ---

  开关选择器。

  ## 何时使用

  - 需要表示开关状态/两种状态之间的切换时；
  - 和 `checkbox `的区别是，切换 `switch` 会直接触发状态改变，而 `checkbox` 一般用于状态标记，需要和提交操作配合。


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
    <example title="最简单的用法">
      <v-switch :on-change="showValue"></v-switch>
      <v-switch :checked.sync="defaultChecked" :on-change="showValue"></v-switch>
    </example>
    <example title="不可用">
      <v-switch disabled></v-switch>
    </example>
    <example title="带文字和图标">
      <v-switch :disabled="disabled" :on-change="showValue">
        <span slot="checkedChildren">开</span>
        <span slot="unCheckedChildren">关</span>
      </v-switch>
      <v-switch :disabled="disabled" :on-change="showValue">
        <span slot="checkedChildren">
          <i class="icon icon-check"></i>
        </span>
        <span slot="unCheckedChildren">
          <i class="icon icon-cross"></i>
        </span>
      </v-switch>
    </example>
</template>
<script>
export default {
  data () {
    return {
      defaultChecked: true
    }
  },
  methods: {
    showValue (val) {
      console.log('开关的值为' + val)
    }
  }
}
</script>
