<template lang="md">
  # Button

  ---

  按钮用于开始一个即时操作。

  ## 何时使用

  标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

  ## 如何使用

  - 通过设置 Button 的属性来产生不同的按钮样式，推荐顺序为：`type` -> `shape` -> `size` -> `loading` -> `disabled`

  - 按钮的属性说明如下：

  |属性 | 说明 | 类型 | 默认值
  |-----|-----|-----|------
  | type | 设置按钮类型，可选值为 `primary` `default` 或者不设 | Enum | undefined
  | htmlType | 设置 `button` 原生的 `type` 值，可选值请参考 HTML标准 | Enum | `button`
  | shape | 设置按钮形状，可选值为 `circle` `circle-outline` 或者不设 | Enum | undefined
  | size | 设置按钮大小，可选值为 `xsmall` `small` `large` 或者不设 | Enum | undefined
  | loading | 设置按钮载入状态，存在为 `true`，不存在为 `false`，或直接设置值，如：`loading="true"` | Bool | false
  | onClick | `click` 事件的 handler | Function | `function() {}`

  - 除了上表中的属性，其它属性都会直接传到 `<button></button>`

  ## 组件演示

  <demo>
    <example title="按钮类型">
      <v-button type="primary">主按钮</v-button>
      <v-button>次按钮</v-button>
      <v-button type="default">幽灵按钮</v-button>
    </example>
    <example title="按钮尺寸">
      <v-button type="primary" size="xsmall">更小按钮</v-button>
      <v-button type="primary" size="small">小按钮</v-button>
      <v-button type="primary" >正常按钮</v-button>
      <v-button type="primary" size="large">大按钮</v-button>
    </example>
    <example title="按钮形状">
      <v-button type="primary" shape='circle' size="large"><v-icon type='question'></v-icon></v-button>
      <v-button type="primary" shape='circle'><v-icon type='question'></v-icon></v-button>
      <v-button type="primary" shape='circle' size="small"><v-icon type='question'></v-icon></v-button>
      <v-button type="primary" shape='circle' size="xsmall"><v-icon type='question'></v-icon></v-button>
      <br />
      <v-button type="primary" shape='circle-outline' size="large"><v-icon type='question'></v-icon></v-button>
      <v-button type="primary" shape='circle-outline'><v-icon type='question'></v-icon></v-button>
      <v-button type="primary" shape='circle-outline' size="small"><v-icon type='question'></v-icon></v-button>
      <v-button type="primary" shape='circle-outline' size="xsmall"><v-icon type='question'></v-icon></v-button>
    </example>
    <example title="按钮状态">
      <v-button type="primary">主按钮</v-button>
      <v-button>次按钮</v-button>
      <v-button type="default">幽灵按钮</v-button>
      <br />
      <v-button type="primary" disabled>主按钮(失效)</v-button>
      <v-button disabled>次按钮(失效)</v-button>
      <v-button type="default" class="disabled">幽灵按钮(失效)</v-button>
    </example>
    <example title="按钮加载中">
      <v-button type="primary" :loading="true" size="small">加载中</v-button>
      <v-button type="primary" :loading="true">加载中</v-button>
      <v-button type="primary" size="large" :loading="true">加载中</v-button>
      <v-button type="primary" :loading="loading" @click="_enterLoading">点击加载(2s恢复原状)</v-button>
    </example>
    <example title="按钮组合">
      <v-button-group>
        <v-button type="default">1</v-button>
        <v-button type="default">2</v-button>
        <v-button type="default">3</v-button>
      </v-button-group>
    </example>
  </demo>
</template>
<script>
import vButton from '../../components/button/Button'
import vButtonGroup from '../../components/button/ButtonGroup'
import vIcon from '../../components/iconfont'
export default {
  data () {
    return {
      loading: false
    }
  },
  components: {
    vButton,
    vButtonGroup,
    vIcon
  },
  methods: {
    _enterLoading () {
      var self = this
      self.loading = true
      setTimeout(function (val) {
        self.loading = false
        return self.loading
      }, 2000)
    }
  }
}
</script>
