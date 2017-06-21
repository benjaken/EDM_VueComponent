<template lang="md">
  # Form

  ---

  具有数据收集、校验和提交功能的表单，包含复选框、单选框、输入框、下拉选择框等元素。

  ## 表单

  我们为 form 提供了以下两种排列方式：
  - 水平排列：标签和表单控件水平排列；（默认）
  - 垂直排列：标签和表单控件上下垂直排列；
  - 行内排列：表单项水平行内排列。

  ## 表单域

  表单一定会包含表单域，表单域可以是输入控件，标准表单域，标签，下拉菜单，文本域等。这里我们封装了表单域`<v-form-item></v-form-item>`

  ```html
  <v-form-item {...props}>
    {slot}
  </v-form-item>
  ```

  ## API

  Form

  |属性 | 说明 | 类型 | 默认值
  |-----|-----|-----|------
  | type | 表单布局，可选值为 `inline` `horizontal` 或者不设 | String | undefined

  Form-item

  |属性 | 说明 | 类型 | 默认值
  |-----|-----|-----|------
  | title | label 标签的文本 | String | undefined
  | required | 是否必填 | Boolean | false
  | waiting | 手动控制输入框是否为加载状态 | Boolean | false
  | wrong | 手动控制输入框是否为错误状态 | Boolean | false
  | warning | 手动控制输入框是否为警告状态 | Boolean | false
  | success | 手动控制输入框是否为成功状态 | Boolean | false
  | content | 输入框备注 | Boolean | false

  ## 组件演示

  <demo>
    <example title="基本">
      <v-form>
        <v-form-item title="Email address">
          <v-input placeholder="Email"></v-input>
        </v-form-item>
        <v-form-item title="Password">
          <v-input placeholder="Password" html-type="password"></v-input>
        </v-form-item>
        <v-form-item>
          <v-checkbox>Remember me</v-checkbox>
        </v-form-item>
        <v-form-item>
          <v-button type="default" html-type="submit">Submit</v-button>
        </v-form-item>
      </v-form>
    </example>
    <example title="内联表单">
      <v-form type="inline">
        <v-form-item>
          <v-input placeholder="Email" icon="user"></v-input>
        </v-form-item>
        <v-form-item>
          <v-input placeholder="Password" html-type="password"  icon="lock"></v-input>
        </v-form-item>
        <v-form-item>
          <v-button type="primary" html-type="submit">Login</v-button>
        </v-form-item>
      </v-form>
      <br />
      <v-form type="inline">
        <v-form-item>
          <v-input group addon-before="$" addon-after=".00" addon="addon" html-type="number"></v-input>
        </v-form-item>
        <v-form-item>
          <v-button type="primary" html-type="submit">Submit</v-button>
        </v-form-item>
      </v-form>
    </example>
    <example title="水平排列表单">
      <v-form type="horizontal">
        <v-form-item title="Email address">
          <v-input placeholder="Email"></v-input>
        </v-form-item>
        <v-form-item title="Password">
          <v-input placeholder="Password" html-type="password"></v-input>
        </v-form-item>
        <v-form-item>
          <v-checkbox>Remember me</v-checkbox>
        </v-form-item>
        <v-form-item>
          <v-button type="primary" html-type="submit">Submit</v-button>
        </v-form-item>
      </v-form>
    </example>
    <example title="弹出层中的表单">
      <v-modal title="基本" :visible.sync="visible1">
        <v-form type="horizontal">
          <v-form-item title="Email address" required>
            <v-input placeholder="Email"></v-input>
          </v-form-item>
          <v-form-item title="Password">
            <v-input placeholder="Password" html-type="password"></v-input>
          </v-form-item>
          <v-form-item>
            <v-checkbox>Remember me</v-checkbox>
          </v-form-item>
        </v-form>
      </v-modal>
      <v-button type="primary" @click="visible1 = !visible1">show Modal</v-button>
    </example>
    <example title="自定义校验">
      <v-form type="horizontal">
        <v-form-item title="Default" content="Default Input">
          <v-input placeholder="Default"></v-input>
        </v-form-item>
        <v-form-item title="Waiting" waiting>
          <v-input placeholder="Waiting"></v-input>
        </v-form-item>
        <v-form-item title="Success" success content="The email is true">
          <v-input placeholder="Success input"></v-input>
        </v-form-item>
        <v-form-item title="Warning" warning>
          <v-input placeholder="Warning"></v-input>
        </v-form-item>
        <v-form-item title="Fail" wrong content="Should be combination of numbers & alphabets">
          <v-input placeholder="unavailable choice"></v-input>
        </v-form-item>
        <v-form-item title="Wrong" wrong content="the date is wrong">
          <v-datepicker :start-date.sync="startTime" :end-date.sync="endTime" range-picker></v-datepicker>
        </v-form-item>
      </v-form>
    </example>
  </demo>

</template>
<script>
export default {
  data () {
    return {
      visible1: false,
      startTime: '2017-01-01',
      endTime: ''
    }
  }
}
</script>
