<template lang="md">
  # Input

  ---

  通过鼠标或键盘输入内容，是最基础的表单域的包装。

  ## 何时使用

  - 需要用户输入表单域内容时。
  - 提供组合型输入框，带搜索的输入框，还可以进行大小选择。

  ## 如何使用

  |属性 | 说明 | 类型 | 默认值
  |-----|-----|-----|------
  | group | 设置是否为输入框组 | String | false
  | size | 设置输入框组的尺寸，可设置为`small`或`large` | String | undefined
  | placeholder | 设置输入框的placeholder | String | undefined
  | addon | 设置输入框前面或后面的type，可选`addon`、`button`、`dropdown`、`checkbox`、`radio` | String | undefined
  | addonBefore | 设置输入框前面的内容 | String | undefined
  | addonAfter | 设置输入框后面的内容 | String | undefined
  | icon | 设置输入框是否带有图标 | String | undefined
  | htmlType | 设置 `input` 原生的 `type` 值，可选值请参考 HTML标准 | String | `text`
  | type | 设置输入框为input或textarea，可选`input`、`textarea` | String | `input`
  | rows | 设置输入框textarea默认高度，需要`type = textarea` | Number | 4
  | maxLength | 设置输入框可输入最长长度 | Number | undefined
  | onClick | `click` 事件的 handler | Function | `function() {}`

  ## 组件演示

  <demo>
    <example title="基本使用">
      <v-input placeholder="请填写内容"></v-input>
      <v-input placeholder="请填写用户" icon="user"></v-input>
      <v-input placeholder="请填写密码" icon="lock" html-type="password"></v-input>
    </example>
    <example title="前置/后置标签">
      <v-input placeholder="用户名" group addon-before="@" addon="addon"></v-input>
      <v-input placeholder="Username" icon="user" group addon-after="@example.com" addon="addon"></v-input>
      <v-input group addon-before="$" addon-after=".00" addon="addon" html-type="number"></v-input>
      <label>Your vanity URL</label>
      <v-input group addon-before="https://example.com/users/" addon="addon"></v-input>
    </example>
    <example title="前置/后置按钮">
      <v-input placeholder="Username" group addon-after="Search" addon="button" :onclick="_search"></v-input>
      <!-- <v-input placeholder="Username" group addon-before="Search" addon="dropdown" :onclick="_search"></v-input> -->
    </example>
    <example title="不同尺寸">
      <v-input placeholder="用户名" group addon-before="@" addon="addon" size="small"></v-input>
      <v-input placeholder="用户名" group addon-before="@" addon="addon"></v-input>
      <v-input placeholder="用户名" group addon-before="@" addon="addon" size="large"></v-input>
    </example>
    <example title="文本框">
      <v-input type="textarea" placeholder="Autosize height based on content lines"></v-input>
      <v-input type="textarea" placeholder="Autosize height based on content lines" :rows="8" :max-length="1000"></v-input>
    </example>
  </demo>
</template>
<script>
import vInput from '../../components/input'
export default {
  components: {
    vInput
  },
  methods: {
    _search () {
      console.log("Searching!")
    }
  }
}
</script>
<style>
.code-box-demo:first-child .form-control{
  margin-bottom:8px;
}
</style>
