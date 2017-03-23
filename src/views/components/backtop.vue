<template lang="md">
  # BackTop

  ---

  返回页面顶部的操作按钮。

  ## 何时使用

  - 当页面内容区域比较长时；
  - 当用户需要频繁返回顶部查看相关内容时。

  ## API

  | 参数           | 说明                             | 类型       | 默认值 |
  |----------------|----------------------------------|------------|--------|
  | visibilityHeight | 滚动高度达到此参数值才出现`BackTop` | number | 300 |
  | onClick | 点击按钮的回调函数 | Function | 无 |

  ## 组件演示
  <demo>
    <example title="基本" class="code-box-demo-1">
      <v-backtop>
        <v-icon type="to-top"></v-icon>
      </v-backtop>
    </example>
    <example title="回调函数" id="code-box-demo-2">
      <v-backtop :on-click="_handleClick" :visibility-height="200">
        <v-icon type="to-top"></v-icon>
      </v-backtop>
    </example>
    <example title="定义出现高度" id="code-box-demo-2">
      <v-backtop :visibility-height="400">
        <span style="font-weight:bold;">UP</span>
      </v-backtop>
    </example>
  </demo>
</template>
<style lang="less">
.code-box:first-child .back-top {
  right: 90px;
  .back-top-inner {
    background-color: rgba(91, 192, 222, .6);

    &:hover {
      background-color: rgba(91, 192, 222, .8);
    }
  }
}
.code-box:last-child .back-top {
  bottom: 100px;

  .back-top-inner {
    border-radius: 4px;
    background-color: rgba(33, 163, 233, .6);

    &:hover {
      background-color: rgba(33, 163, 233, .8);
    }
  }
}
</style>
<script>
  import vBacktop from '../../components/backtop'
  import vIcon from '../../components/iconfont'

  export default {
    components: {
      vBacktop,
      vIcon
    },
    methods: {
      _handleClick () {
        console.log("The back-top is clicked!")
      }
    }
  }
</script>
