<template lang="md">
  # Timeline

  ---

  垂直展示的时间流信息。

  ## 何时使用

  - 当有一系列信息需要从上至下按时间排列时；
  - 需要有一条时间轴进行视觉上的串联时；

  ## API

  |属性 | 说明 | 类型 | 默认值
  |-----|-----|-----|------
  | type | 设置按钮类型，可选值为 `success`, `info`, `warning`, `danger` 或者不设 | string | undefined
  | last | 设置为时间流的最后一个值 | Boolean | false
  | pending | 指定最后一个幽灵节点是否存在 | Boolean | false
  | icon | 自定义时间轴点 | String | undefined

  ## 组件演示

  <demo>
    <example title="基本">
      <v-timeline>
        <v-timeline-item>Technical testing 2015-09-01</v-timeline-item>
        <v-timeline-item>Network problems being solved 2015-09-01</v-timeline-item>
        <v-timeline-item :last="true">Technical testing 2015-09-01</v-timeline-item>
      </v-timeline>
    </example>
    <example title="圆圈颜色">
      <v-timeline>
        <v-timeline-item>Technical testing 2015-09-01</v-timeline-item>
        <v-timeline-item type="success">Technical testing 2015-09-01</v-timeline-item>
        <v-timeline-item type="info">Network problems being solved 2015-09-01</v-timeline-item>
        <v-timeline-item type="warning">Technical testing 2015-09-01</v-timeline-item>
        <v-timeline-item type="danger" :last="true">Technical testing 2015-09-01</v-timeline-item>
      </v-timeline>
    </example>
    <example title="最后一个可操作">
      <v-timeline :pending="true">
        <v-timeline-item>Technical testing 2015-09-01</v-timeline-item>
        <v-timeline-item>Technical testing 2015-09-01</v-timeline-item>
        <v-timeline-item :last="true">Technical testing 2015-09-01</v-timeline-item>
        <v-timeline-item><a href="#">show more</a></v-timeline-item>
      </v-timeline>
    </example>
    <example title="自定义图标">
      <v-timeline :pending="true">
        <v-timeline-item>Technical testing 2015-09-01</v-timeline-item>
        <v-timeline-item type="info" icon="clock-circle">Technical testing 2015-09-01</v-timeline-item>
        <v-timeline-item type="danger" icon="clock-circle-o">Technical testing 2015-09-01</v-timeline-item>
        <v-timeline-item :last="true">Technical testing 2015-09-01</v-timeline-item>
      </v-timeline>
    </example>
  </demo>
</template>
<script>
  import vTimeline from '../../components/timeline/TimeLine'
  import vTimelineItem from '../../components/timeline/TimeLineItem'
  export default {
    components: {
      vTimeline,
      vTimelineItem
    }
  }
</script>
