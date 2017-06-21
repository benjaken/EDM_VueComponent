<template lang="md">
  # Rate

  ---

  评分组件。

  ## 何时使用

  - 对评价进行展示。
  - 对事物进行快速的评级操作。

  ## API

  | 参数 | 说明 | 类型 | 默认值 |
  |------|-----|------|--------|
  | defaultValue | 当前数，受控值 | Number | 0 |
  | total | 显示总数 | Boolean | false |
  | readonly | 只读，无法进行交互 | Boolean | false |
  | icon | 自定义图标 | String | `star` |
  | onchange | 选择时的回调 | Function | function () => {} |

  ## 组件演示

  <demo>
    <example title="基本">
      <v-rate :default-value.sync="value1" :onchange="_showlog"></v-rate>
    </example>
    <example title="文案展示">
      <v-rate :default-value.sync="value2" total></v-rate>
    </example>
    <example title="只读">
      <v-rate :default-value.sync="value3" readonly></v-rate>
    </example>
    <example title="其他图标">
      <v-rate :default-value.sync="value4" icon="android"></v-rate>
      <v-rate :default-value.sync="value5" icon="apple"></v-rate>
      <v-rate :default-value.sync="value6" icon="smile-circle"></v-rate>
    </example>
  </demo>

</template>
<script>
export default {
  data () {
    return {
      value1: 2,
      value2: 3,
      value3: 3,
      value4: 2,
      value5: 3,
      value6: 4
    }
  },
  methods: {
    _showlog () {
      console.log("Rate changed!")
    }
  }
}
</script>
