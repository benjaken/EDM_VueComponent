<template lang="md">
  # Badge

  ---

  图标右上角的圆形徽标数字。

  ## 何时使用

  一般出现在通知图标或头像的右上角，用于显示需要处理的消息条数，通过醒目视觉形式吸引用户处理。

  ## API

  | 参数           | 说明                             | 类型       |  可选值 | 默认值 |
  |----------------|----------------------------------|------------|---------|--------|
  | count          | 展示的数字，大于 overflowCount 时显示为 `${overflowCount}+`，为 0 时隐藏 | Number     |         |        |
  | overflowCount  | 展示封顶的数字值 | Number     |         |  99  |
  | dot            | 不展示数字，只有一个小红点     | boolean    |         | false  |

  ## 组件演示

  <demo>
    <example title="简单的徽章显示">
      <v-badge :count="5">
        <a href="#" class="head-example"></a>
      </v-badge>
    </example>
    <example title="大数字">
      <v-badge :count="99">
        <a href="#" class="head-example"></a>
      </v-badge>
      <v-badge :count="100">
        <a href="#" class="head-example"></a>
      </v-badge>
    </example>
    <example title="封顶数字">
      <v-badge :count="100">
        <a href="#" class="head-example"></a>
      </v-badge>
      <v-badge :count="100" :overflow-count="999">
        <a href="#" class="head-example"></a>
      </v-badge>
    </example>
    <example title="小红点">
      <v-badge dot>
        <a href="#" class="head-example"></a>
      </v-badge>
      <v-badge dot>
        <a href="#">一个连接</a>
      </v-badge>
      <v-badge dot>
        <a href="#"><i class="icon icon-github"></i></a>
      </v-badge>
    </example>
    <example title="动态">
      <v-badge :count="count">
        <a href="#" class="head-example"></a>
      </v-badge>
      <v-badge :dot="state">
        <a href="#" class="head-example"></a>
      </v-badge>
      <br/>
      <v-button type="default" size="small" @click="_plus()">+</v-button>
      <v-button type="default" size="small" @click="_sub()">-</v-button>
      <v-button type="default" size="small" @click="_changestate()">改变状态</v-button>
    </example>
  </demo>
</template>
<script>
export default {
  data () {
    return {
      count: 5,
      state: true
    }
  },
  methods: {
    _changestate () {
      var self = this
      self.state = !self.state
      return self.state
    },
    _plus () {
      var self = this
      self.count += 1
      return self.count
    },
    _sub () {
      var self = this
      self.count -= 1
      return self.count
    }
  }
}
</script>
<style>
  .head-example{
    width: 42px;
    height: 42px;
    border-radius: 6px;
    background: #eee;
    display: inline-block;
  }
  .vbadge{
    margin: 0 1rem .5rem 0;
  }
</style>
