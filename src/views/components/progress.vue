<template lang="md">
  # Progress

  ---

  展示操作的当前进度。

  ## 何时使用

  在操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态。

  - 当一个操作会打断当前界面，或者需要在后台运行，且耗时可能超过2秒时；
  - 当需要显示一个操作完成的百分比时。

  ## API

  |属性 | 说明 | 类型 | 默认值
  |-----|-----|-----|------
  | percentage | 设置默认进度，必填 | Enum | undefined |
  | showText | 设置是否显示进度 | Boolean | false
  | showMin | 设置是否在低百分比时显示文字 | Boolean | false
  | type | 设置按钮类型，可选值为 `success` `info` `warning` `danger` 或者不设 | Enum | undefined
  | striped | 设置是否显示条纹效果 | Boolean | false
  | active | 设置是否显示动画效果，需要在`striped=true`条件下，IE8-IE9不能显示动画效果 | Boolean | false
  | pickUp | 把多个进度条放入同一个`progress`中，使它们呈现堆叠的效果。同一progress下需都带有此属性 | Boolean | false

  <demo>
    <example title="基本">
      <v-progress :percentage="40"></v-progress>
      <v-progress :percentage="60" show-text></v-progress>
    </example>
    <example title="动态变化">
      <v-progress :percentage="percentage" show-text></v-progress>
      <v-button type="default" @click="_randomNumber()">改变进度</v-button>
    </example>
    <example title="最低百分比">
      <v-progress :percentage="0" show-min></v-progress>
      <v-progress :percentage="2" show-text show-min></v-progress>
    </example>
    <example title="根据情境变化">
      <v-progress :percentage="20" type="success"></v-progress>
      <v-progress :percentage="40" type="info"></v-progress>
      <v-progress :percentage="60" type="warning"></v-progress>
      <v-progress :percentage="80" type="danger"></v-progress>
    </example>
    <example title="条纹效果">
      <v-progress :percentage="20" type="success" striped></v-progress>
      <v-progress :percentage="40" type="info" striped></v-progress>
    </example>
    <example title="动画效果">
      <v-progress :percentage="20" type="success" striped active></v-progress>
      <v-progress :percentage="40" type="info" striped :active="active"></v-progress>
      <v-button type="default" @click="active = !active">动画效果：{{active}}</v-button>
    </example>
    <example title="堆叠效果">
      <div class="progress">
        <v-progress :percentage="20" type="success" plie-up></v-progress>
        <v-progress :percentage="20" type="info" plie-up striped></v-progress>
        <v-progress :percentage="20" type="danger" plie-up striped active></v-progress>
      </div>
    </example>
  </demo>
</template>
<script>
export default{
  data () {
    return {
      percentage: 50,
      active: false
    }
  },
  methods: {
    _randomNumber () {
      this.percentage = Math.floor(Math.random() * 100)
    }
  }
}
</script>
