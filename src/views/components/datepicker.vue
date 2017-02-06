<template lang="md">
  # Datepicker

  ---

  输入或选择日期/时间的控件。

  ## 何时使用

  当用户需要输入一个日期/时间，可以点击标准输入框，弹出日期面板进行选择。支持键盘操作。

  ## API

  | 参数         | 说明           | 类型     | 默认值       |
  |--------------|----------------|----------|--------------|
  | Date         | 默认日期        | string   | 当前时间      |
  | startDate    | 默认开始日期     | string   | 当前时间      |
  | endDate      | 默认结束日期     | string   | 当前时间      |
  | format       | 展示的日期格式   | string   | "yyyy-MM-dd" |
  | showTime     | 显示时间选择条   | boolean  | false        |
  | disabled     | 禁用           | bool     | false        |

  <demo>
    <example title="基本">
      <v-datepicker :Date.sync="selectedTime1"></v-datepicker>
    </example>
    <example title="日期格式">
      <v-datepicker :Date.sync="selectedTime2" format="yyyy/mm/dd"></v-datepicker>
    </example>
    <example title="日期时间选择">
      <v-datepicker :Date.sync="selectedTime3" :show-time="true"></v-datepicker>
    </example>
    <example title="禁用">
      <v-datepicker :Date.sync="selectedTime4" :disabled="true"></v-datepicker>
    </example>
    <example title="日期范围一">
      <v-datepicker :start-date.sync="startTime1" :end-date.sync="endTime1" :range-picker="true"></v-datepicker>
    </example>
    <example title="日期范围二">
      <v-datepicker :start-date.sync="startTime2" :end-date.sync="endTime2" :range-picker="true" :show-time="true"></v-datepicker>
    </example>
  </demo>
</template>
<script>
  import vDatepicker from '../../components/datepicker'
  export default {
    data () {
      return {
        selectedTime1: '',
        selectedTime2: '',
        selectedTime3: '',
        selectedTime4: '',
        startTime1: '',
        endTime1: '',
        startTime2: '',
        endTime2: ''
      }
    },
    components: {
      vDatepicker
    }
  }
</script>
