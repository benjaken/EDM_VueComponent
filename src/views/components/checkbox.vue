<template lang="md">
    # Checkbox

    ---

    多选框。

    ## 何时使用

    - 需要表示开关状态/两种状态之间的切换时；
    - 和 `switch`的区别是，切换 `switch` 会直接触发状态改变，而 `checkbox` 一般用于状态标记，需要和提交操作配合。

    ## API

    ### Checkbox

    参数      | 说明                                     | 类型       |  可选值 |默认值 |
    -----------|------------------------------------------|------------|-------|--------|
    checked | 指定当前是否选中 | boolean  |   | false
    default-checked | 初始是否选中 | boolean |  | false
    on-change | 变化时回调函数 | Function(e:Event) |  |

    ## 组件演示

    <demo>
      <example title="基础用法">
        <v-checkbox>Checkbox</v-checkbox>
        <v-checkbox :default-checked="checked" :on-change="_checkShow">Checkbox</v-checkbox>
      </example>
      <example title="不可用">
        <v-checkbox disabled>Checkbox</v-checkbox>
        <v-checkbox :default-checked="true" disabled>Checkbox</v-checkbox>
      </example>
      <example title="可控的checkbox">
        <v-checkbox :checked="checked" :disabled="disabled">Checkbox</v-checkbox>
        <br/>
        <v-button type="default" size="small" @click="_checkChange">改变check状态</v-button>
        <v-button type="default" size="small" @click="_disabledChange">改变disabled状态</v-button>
      </example>
    </demo>
</template>
<script>
import vCheckbox from '../../components/checkbox'
import vButton from '../../components/button'
export default{
  components: {
    vCheckbox,
    vButton
  },
  data () {
    return {
      checked: true,
      disabled: false
    }
  },
  methods: {
    _checkChange () {
      this.checked = !this.checked
    },
    _disabledChange () {
      this.disabled = !this.disabled
    },
    _checkShow () {
      console.log('Checkbox被点击')
    }
  }
}
</script>
