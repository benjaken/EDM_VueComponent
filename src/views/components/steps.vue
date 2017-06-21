<template lang="md">
  # Steps

  ---

  引导用户按照流程完成任务的导航条。

  ## 何时使用

  当任务复杂或者存在先后关系时，将其分解成一系列步骤，从而简化任务。

  ## API

  ### Steps

  整体步骤条。

  | 参数      | 说明                                     | 类型       |  可选值 |默认值 |
  |-----------|------------------------------------------|------------|-------|--------|
  |  current | 可选参数，指定当前处理正在执行状态的步骤，从0开始记数。在子Step元素中，可以通过status属性覆盖状态。  | number | 无  | 0 |
  |  size | 可选参数，指定大小（目前只支持普通和迷你两种大小）。 | string    |  small, default | default    |
  |  direction | 可选参数，指定步骤条方向（目前支持水平和竖直两种方向，默认水平方向）。 | string    |  vertical |  无   |
  |  maxDescriptionWidth | 可选参数，指定步骤的详细描述文字的最大宽度。 | number | 无 | 100 |

  ### Steps.Step

  步骤条内的每一个步。

  | 参数      | 说明                                     | 类型       |  可选值 |默认值 |
  |-----------|------------------------------------------|------------|-------|--------|
  |  status | 可选参数，指定状态。当不配置该属性时，会使用父Steps元素的current来自动指定状态。 | string    |  wait, process, finish | wait |
  |  title   | 必要参数，标题。 | string/jsx | 无 | 无     |
  |  description | 可选参数，步骤的详情描述。 | string/jsx | 无 | 空  |
  |  icon    | 可选参数，步骤的Icon。如果不指定，则使用默认的样式。 | string/jsx | 无  | 空 |

  ## 组件演示
  <demo>
    <example title="简单的步骤条">
      <v-step :current="1">
        <v-step-item title="已完成" description="这里是多信息的描述啊"></v-step-item>
        <v-step-item title="进行中" description="这里是多信息的耶哦耶哦哦耶哦耶"></v-step-item>
        <v-step-item title="有一个待运行" description="描述啊描述啊"></v-step-item>
        <v-step-item title="待运行" description="这里是多信息的描述啊"></v-step-item>
      </v-step>
    </example>
    <example title="迷你版">
      <v-step size="small" :current="1">
        <v-step-item title="已完成" status="finish"></v-step-item>
        <v-step-item title="进行中" status="process"></v-step-item>
        <v-step-item title="待运行" status="wait"></v-step-item>
        <v-step-item title="待运行" status="wait"></v-step-item>
      </v-step>
    </example>
    <example title="带ICON图标的步骤条">
      <v-step>
        <v-step-item title="步骤1" status="finish" icon="cloud"></v-step-item>
        <v-step-item title="步骤2" status="process" icon="apple"></v-step-item>
        <v-step-item title="步骤3" status="wait" icon="github"></v-step-item>
      </v-step>
    </example>
    <example title="切换到下一步">
      <div>当前正在执行第 {{currentStep + 1}} 步</div>
      <br>
      <v-step :current="currentStep">
        <v-step-item title="步骤1"></v-step-item>
        <v-step-item title="步骤2"></v-step-item>
        <v-step-item title="步骤3"></v-step-item>
      </v-step>
      <br>
      <div>
        <v-button type="primary" @click="_next">下一步</v-button>
      </div>
    </example>
    <example title="竖直方向的步骤条">
      <v-step direction="vertical" :current="1">
        <v-step-item title="已完成" description="这里是多信息的描述啊"></v-step-item>
        <v-step-item title="进行中" description="这里是多信息的描述啊"></v-step-item>
        <v-step-item title="待运行" description="这里是多信息的描述啊"></v-step-item>
        <v-step-item title="又一个待运行" description="这里是多信息的描述啊"></v-step-item>
      </v-step>
    </example>
    <example title="竖直方向的小型步骤条">
      <v-step size='small' direction="vertical" :current="1">
        <v-step-item title="已完成" description="这里是多信息的描述啊"></v-step-item>
        <v-step-item title="进行中" description="这里是多信息的描述啊"></v-step-item>
        <v-step-item title="待运行" description="这里是多信息的描述啊"></v-step-item>
      </v-step>
    </example>
    <example title="自定义状态">
      <v-step>
        <v-step-item title="已完成" status="finish" description="这里是多信息的描述啊"></v-step-item>
        <v-step-item title="进行中" status="process" description="这里是多信息的描述啊"></v-step-item>
        <v-step-item title="待运行" status="wait" description="这里是多信息的描述啊"></v-step-item>
        <v-step-item title="又一个待运行" status="wait" description="这里是多信息的描述啊"></v-step-item>
      </v-step>
    </example>
  </demo>
</template>
<script>
export default {
  data () {
    return {
      steps: 3,
      currentStep: 0
    }
  },
  beforeCompile () {
    this.currentStep = Math.floor(Math.random() * this.steps)
  },
  methods: {
    _next () {
      let s = this.currentStep + 1
      if (s === this.steps) {
        s = 0
      }
      this.currentStep = s
    }
  }
}
</script>
