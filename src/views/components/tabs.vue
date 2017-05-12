<template lang="md">
  # Tabs

  ---

  选项卡切换组件。

  ## 何时使用

  提供平级的区域将大块内容进行收纳和展现，保持界面整洁。

  ## API

  |属性 | 说明 | 类型 | 默认值
  |-----|-----|-----|------
  | type | 选项卡显示样式，可选`tabs`或`pills` | String | 无
  | stacked | 选项卡排列方向，前提是在`type=pills`的情况下 | Boolean | false
  | justified | 让选项卡两端对齐 | Boolean | false
  | data | 选项卡子选项的配置，包括`link`、`value`、`active`、`disabled`、`showdrop`、`dropdown` | Array | 无

  ## 组件演示

  <demo>
    <example title="基本">
      <v-tabs type="tabs" :data="data"></v-tabs>
    </example>
    <example title="标签样式">
      <v-tabs type="pills" :data="data"></v-tabs>
    </example>
    <example title="垂直排列">
      <v-tabs type="pills" :data="data" stacked></v-tabs>
    </example>
    <example title="两端对齐">
      <v-tabs type="tabs" :data="data" justified></v-tabs>
      <br/>
      <v-tabs type="pills" :data="data" justified></v-tabs>
    </example>
    <example title="带下拉菜单">
      <v-tabs type="tabs" :data="data1"></v-tabs>
    </example>
  </demo>
</template>
<script>
  import vTabs from '../../components/tabs'

  export default {
    data () {
      return {
        data: [{
          link: '',
          value: '111'
        }, {
          link: '',
          value: '222'
        }, {
          link: '',
          value: '333',
          disabled: true
        }],
        data1: [{
          link: '',
          value: '111',
          active: true
        }, {
          link: '',
          value: '222'
        }, {
          link: '',
          value: '333',
          showdrop: true,
          dropdown: [{
            value: '111',
            onclick: function _showlog () {
              console.log("show log!")
            }
          }, {
            link: '/',
            value: '222'
          }, {
            disabled: true,
            link: '',
            value: '333'
          }]
        }]
      }
    },
    components: {
      vTabs
    }
  }
</script>
