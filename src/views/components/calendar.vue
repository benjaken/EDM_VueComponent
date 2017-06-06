<template lang="md">
  # Calendar

  ---

  按照日历形式展示数据的容器。

  ## 何时使用

  当数据是日期或按照日期划分时，例如日程、课表、价格日历等，农历等。目前支持年/月切换。

  ## API

  |参数      | 说明  | 类型       |默认值   |
  |---------|------|------------|--------|

  <demo>
    <example title="基本">
      <v-calendar></v-calendar>
    </example>
  </demo>
</template>
<script>
  import vCalendar from '../../components/calendar'

  export default {
    components: {
      vCalendar
    }
  }
</script>
