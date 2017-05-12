<template lang="md">
  # Dropdown

  ---

  向下弹出的列表。

  ## 何时使用

  当页面上的操作命令过多时，用此组件可以收纳操作元素。点击或移入触点，会出现一个下拉菜单。可在列表中进行选择，并执行相应的命令。

  ## 如何使用

  ```html
  data () {
    return {
      data: [
        {'value': 'Action', 'path': ''},
        {'value': 'Baidu', 'path': '/components/dropdown'},
        {'value': 'Dropdown', 'path': '/components/dropdown', 'disabled': true},
        {'value': '|'},
        {'value': 'Dropdown', 'path': '/components/dropdown', 'onclick': this._toggle}
      ]
    }
  }
  ```

  ## API

  | 参数 | 说明 | 类型 | 默认值 |
  |------|-----|------|-------|
  | visible | 菜单是否显示 | boolean | false |
  | value | 菜单按钮文字 | String | undefined |
  | type | 菜单按钮类型，可选值为 `primary` `default` `success` `info` `warning` `danger` 或者不设 | String | default |
  | size | 设置按钮大小，可选值为 `xsmall` `small` `large` 或者不设 | String | undefined
  | loading | 设置按钮载入状态，存在为 `true`，不存在为 `false`，或直接设置值，如：`loading="true"` | Bool | false
  | onclick | `click` 事件的 handler | Function | `function() {}`
  | group | 是否显示为带下拉框的按钮 | boolean | false |
  | data | 下拉列表的设置，通常为`[{'value': String , 'path': String, 'disabled': Boolean, 'onclick': Function }]` | Array | undefined

  注意：
  - 当`data`中为`[{'value': '|'}]`,显示为分割线
  - `data`中的`path`属性实际作用为v-link，跳转到其他页面需用`onclick`跳转

  ## 组件演示

  <demo>
    <example title="基本">
      <v-dropdown :data="data">click me</v-dropdown>
      <v-dropdown type="primary" :data="data">click me</v-dropdown>
      <v-dropdown type="success" :data="data">click me</v-dropdown>
      <v-dropdown type="info" :data="data">click me</v-dropdown>
      <v-dropdown type="warning" :data="data">click me</v-dropdown>
      <v-dropdown type="danger" :data="data">click me</v-dropdown>
    </example>
    <example title="带下拉框的按钮">
      <v-dropdown :data="data" group :onclick="_click" :loading.sync="loading">点击后2秒消失</v-dropdown>
      <v-dropdown type="primary" :data="data" group>click me</v-dropdown>
      <v-dropdown type="success" :data="data" group>click me</v-dropdown>
      <v-dropdown type="info" :data="data" group>click me</v-dropdown>
      <v-dropdown type="warning" :data="data" group>click me</v-dropdown>
      <v-dropdown type="danger" :data="data" group>click me</v-dropdown>
    </example>
    <example title="不同尺寸">
      <v-dropdown :data="data" size="xsmall">click me</v-dropdown>
      <v-dropdown :data="data" group size="small">click me</v-dropdown>
      <v-dropdown :data="data">click me</v-dropdown>
      <v-dropdown :data="data" group size="large">click me</v-dropdown>
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
          {'value': 'Action'},
          {'value': 'Baidu', 'path': '/components/dropdown'},
          {'value': 'Dropdown', 'path': '/components/dropdown', 'disabled': true},
          {'value': '|'},
          {'value': 'Google', 'path': '/components/dropdown'}
        ],
        loading: false
      }
    },
    methods: {
      _click () {
        var self = this
        self.loading = true
        setTimeout(function () {
          console.log('Click button!')
          self.loading = false
        }, 2000)
      }
    },
    events: {
      'dropdown:action' (action) {
        console.log('Click dropdown!', action)
      }
    },
    components: {
      vDropdown,
      vButton
    }
  }
</script>
