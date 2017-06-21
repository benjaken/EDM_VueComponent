<template lang="md">
  # Spin

  ---

  用于页面和区块的加载中状态。

  ## 何时使用

  页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。

  ## API

  | 参数       | 类型           | 默认值      | 说明         |
  |------------|----------------|-------------|--------------|
  | size       | enum           | default     | spin组件中点的大小，可选值为 small large |
  | spinning   | boolean        | true        | 用于内嵌其他组件的模式，可以关闭 loading 效果    |
  | tip    | string        | 无        | 自定义描述文案 |
  | delay | number (毫秒) | 无 | 延迟显示 loading 效果 |

  ## 组件演示
  <demo>
    <example title="基础用法">
      <div class="spin-box">
        <v-spin spinning></v-spin>
      </div>
    </example>
    <example title="自定义描述文案">
      <div class="spin-box">
        <v-spin tip="加载中..." spinning></v-spin>
      </div>
    </example>
    <example title="各种大小">
      <div class="spin-box" spinning>
        <v-spin size="small" spinning></v-spin>
      </div>
      <div class="spin-box">
        <v-spin></v-spin>
      </div>
      <div class="spin-box">
        <v-spin size="large" spinning></v-spin>
      </div>
    </example>
    <example title="卡片加载中">
      <v-alert type="info" message="消息提示的文案">
        消息提示的文案
        <v-spin :spinning="spinning"></v-spin>
      </v-alert>
      <v-alert type="success" message="消息提示的文案">
        消息提示的文案消息提示的文案消息提示的文案消息提示的文案消息提示的文案消息提示的文案消息提示的文案消息提示的文案消息提示的文案消息提示的文案消息提示的文案消息提示的文案消息提示的文案消息提示的文案消息提示的文案
        <v-spin :spinning="spinning" tip="加载中..."></v-spin>
      </v-alert>
      加载状态：
      <v-switch :checked.sync="spinning"></v-switch>
    </example>
    <example title="全局调用">
      <v-button type="default" @click="_showSpin()">show Spin</v-button>
    </example>
  </demo>
</template>
<script>
  import vSpin from '../../components/spin'
  import vAlert from '../../components/alert'
  import vSwitch from '../../components/switch'
  import vButton from '../../components/button'
  export default {
    data () {
      return {
        spinning: true
      }
    },
    components: {
      vSpin,
      vAlert,
      vSwitch,
      vButton
    },
    methods: {
      _showSpin () {
        this.$loading({spinning: true})
      }
    }
  }
</script>
<style>
.spin-box {
  width: 100%;
  height: 50px;
  position: relative;
}
</style>
