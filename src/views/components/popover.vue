<template lang="md">
  # Popover

  ---

  点击/鼠标移入元素，弹出气泡式的卡片浮层。

  ## 何时使用

  当目标元素有进一步的描述和相关操作时，可以收纳到卡片中，根据用户的操作行为进行展现。

  和 `Tooltip` 的区别是，用户可以对浮层上的元素进行操作，因此它可以承载更复杂的内容，比如链接或按钮等。

  ## API

  | 参数      | 说明                                     | 类型          | 默认值 |
  |-----------|------------------------------------------|---------------|--------|
  | trigger   | 触发行为，可选 `hover/focus/click`        | string         | hover  |
  | placement | 气泡框位置，可选 `top/left/right/bottom`  | string         | top    |
  | title     | 卡片标题                                 | String         | 无     |
  | content   | 卡片内容                                 | String         | 无     |
  | visible   | 用于手动控制浮层显隐                       | boolean        | false  |

  ## 组件演示

  <demo>
    <example title="基本">
      <v-popover title="title" content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." trigger="hover">
        <v-button type="primary">Hover me</v-button>
      </v-popover>
    </example>
    <example title="位置">
      <v-popover title="title" content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." trigger="click" placement="left">
        <v-button type="primary">Left</v-button>
      </v-popover>
      <v-popover title="title" content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." trigger="click" placement="right">
        <v-button type="primary">Right</v-button>
      </v-popover>
      <v-popover title="title" content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." trigger="click" placement="bottom">
        <v-button type="primary">Bottom</v-button>
      </v-popover>
    </example>
    <example title="三种触发方式"></example>
  </demo>
</template>
