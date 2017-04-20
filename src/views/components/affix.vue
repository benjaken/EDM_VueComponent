<template lang="md">
  # Affix

  ---

  将页面元素钉在可视范围。

  ## 何时使用

  当内容区域比较长，需要滚动页面时，这部分内容对应的操作或者导航需要在滚动范围内始终展现。常用于侧边菜单和按钮组合。

  页面可视范围过小时，慎用此功能以免遮挡页面内容。

  ## API

  |属性 | 说明 | 类型 | 默认值
  |-----|-----|-----|------
  | offsetTop | 距离窗口顶部达到指定偏移量后触发 | Number | undefined
  | offsetBottom | 距离窗口底部达到指定偏移量后触发 | Number | undefined
  | onChange | 固定状态改变时触发的回调函数	| Function | 无

  ## 组件演示

  <demo>
    <example title="基本">
      <v-affix>
        <v-button type="primary">Affix Top</v-button>
      </v-affix>
      <v-affix>
        <v-button type="primary">Affix Bottom</v-button>
      </v-affix>
    </example>
  </demo>

</template>
<script>
  import vAffix from '../../components/affix'
  import vButton from '../../components/button'

  export default {
    components: {
      vAffix,
      vButton
    }
  }
</script>
