<template lang="md">
  # InputNumber

  ---

  通过鼠标或键盘，输入范围内的数值。

  ## 何时使用

  当需要获取标准数值时。

  ## API

  属性如下

  | 成员        | 说明           | 类型               | 默认值       |
  |-------------|----------------|--------------------|--------------|
  | min     | 最小值   | Number | -Infinity        |
  | max     | 最大值       | Number      | Infinity           |
  | value     | 当前值       | Number      |       1     |
  | step     | 每次改变步数       | Number      |      1      |
  | defaultValue     | 初始值       | Number      |            |
  | onChange     | 变化回调       | Function      |            |
  | disabled     | 禁用       | Boolean      |      false      |
  | size    | 输入框大小  | String      |      无      |

  ## 组件演示

  <demo>
    <example title="基本">
      <v-input-number :min="1" :max="10"></v-input-number>
    </example>
    <example title="三种大小">
      <v-input-number :min="1" :max="10" type="small"></v-input-number>
      <v-input-number :min="1" :max="10"></v-input-number>
      <v-input-number :min="1" :max="10" type="big"></v-input-number>
    </example>
    <example title="不可用">
      <v-input-number :default-value="10" :disabled="true"></v-input-number>
    </example>
    <example title="大步数">
      <v-input-number :step="10"></v-input-number>
    </example>
  </demo>
</template>
<script>
  import vInputNumber from '../../components/inputnumber'
  export default{
    components: {
      vInputNumber
    }
  }
</script>
