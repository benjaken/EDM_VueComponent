<template lang="md">
  # AutoComplete

  ---

  输入框自动完成功能。

  ## 何时使用

  需要自动完成时。

  ## API

  | 参数        | 说明                                                      | 类型        | 默认值 |
  |----------- |---------------------------------------------------------  | ---------- |-------|

  ## 组件演示

  <demo>
    <example title="基本">
      <v-auto-complete :value.sync="value" :data-source="dataSource" placeholder="input here" :onselect="onselect" :style="style"></v-auto-complete>
    </example>
    <example title="自定义选项">
      <v-auto-complete :value.sync="value1" :data-source="dataSource1" placeholder="input here" :onchange="onchange" :style="style"></v-auto-complete>
    </example>
    <example title="不区分大小写">
      <v-auto-complete :value.sync="value2" :ignore-symbol="true" :data-source="dataSource" placeholder="input here" :onselect="onselect" :style="style"></v-auto-complete>
    </example>
  </demo>
</template>
<script>
import vAutoComplete from '../../components/auto-complete'
export default {
  data () {
    return {
      dataSource: ['1', '12', '123', '1234', '1345', '1236', 'a', 'ab', 'Bc', '库', '组件', '组件库'],
      dataSource1: [],
      value: '',
      value1: '',
      value2: '',
      style: 'width: 200px'
    }
  },
  components: {
    vAutoComplete
  },
  methods: {
    onchange (val) {
      let self = this
      let result
      if (!val || val.indexOf('@') >= 0) {
        result = []
      } else {
        result = ['gmail.com', '163.com', 'qq.com'].map(domain => `${val}@${domain}`)
      }
      self.dataSource1 = result
    },
    onselect (val) {
      console.log('onSelect', val)
    }
  }
}
</script>
