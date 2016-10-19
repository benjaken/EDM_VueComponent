<template lang="md">
  # Datepicker

  - category: Components
  - chinese: 日期选择框
  - type: 表单

  ---

  输入或选择日期/时间的控件。

  ## 何时使用

  当用户需要输入一个日期/时间，可以点击标准输入框，弹出日期面板进行选择。支持键盘操作。

  ## API

  | 参数         | 说明           | 类型     | 默认值       |
  |--------------|----------------|----------|--------------|
  | value        | 日期           | string   | 无           |
  | defaultValue | 默认日期       | string   | 无           |
  | format       | 展示的日期格式 | string   | "yyyy-MM-dd" |
  | disabledDate | 不可选择的日期 | function | 无           |
  | onChange     | 日期发生变化的回调，发生在用户选择日期时 | function | 无           |
  | showTime     | 显示时间选择条 | boolean  | false        |
  | disabled     | 禁用           | bool     | false        |
  | calendarStyle | 格外的弹出日历样式，例如 zIndex           | object     | {}        |
  | size         | 输入框大小，`large` 高度为 32px，`small` 为 22px，默认是 28px | string   | 无  |

  <demo>
    <example title="基本">
      <v-datepicker></v-datepicker>
    </example>
    <example title="日期格式"></example>
    <example title="三种大小"></example>
    <example title="日期时间选择">
      <v-datepicker :show-time="true"></v-datepicker>
    </example>
    <example title="禁用"></example>
    <example title="日期范围一">
      <v-datepicker range-picker="one"></v-datepicker>
    </example>
    <example title="日期范围二"></example>
    <example title="国际化"></example>
  </demo>
</template>
<script>
  import vDatepicker from '../../components/datepicker'
  export default {
    components: {
      vDatepicker
    }
  }
</script>
