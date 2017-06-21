<template lang="md">
  # Select

  ---

  类似 Select2 的选择器。

  ## 何时使用

  弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。

  ## 组件演示
  <demo>
    <example title="基本">
      <v-select :options="options" :value.sync="selected"></v-select>
    </example>
    <example title="可搜索">
      <v-select :options="options" show-search></v-select>
    </example>
    <example title="不可用">
      <v-select :options="options" :value.sync="selected" disabled></v-select>
    </example>
  </demo>
</template>
<script>
export default {
  data () {
    return {
      selected: 'c12',
      options: []
    }
  },
  created () {
    let self = this
    const mockData = []
    for (let i = 10; i < 36; i++) {
      mockData.push({
        value: i.toString(36) + i,
        label: i.toString(36).toUpperCase() + i
      })
    }
    self.options = mockData
  }
}
</script>
