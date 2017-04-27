<template lang="md">
  # Transfer

  ---

  双栏穿梭选择框。

  ## 何时使用

  用直观的方式在两栏中移动元素，完成选择行为。

  选择一个或以上的选项后，点击对应的方向键，可以把选中的选项移动到另一栏。 其中，左边一栏为 source，右边一栏为 target，API 的设计也反应了这两个概念。

  ## 如何使用

  ```html
  data () {
    return {
      titles: ['Source', 'Target'],
      operations: ['To Left', 'To Right'],
      datas: [],
      targets: []
    }
  },
  created () {
    var self = this
    const mockData = []
    for (let i = 0; i < 20; i++) {
      mockData.push({
        key: i,
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
        disabled: i % 3 < 1
      })
    }
    self.datas = mockData
    const targetKeys = mockData
      .filter(item => +item.key % 3 > 1)
      .map(item => item.key)
    self.targets = targetKeys
  }
  ```

  ## API

  | 参数       | 说明         | 类型           | 默认值      |
  |------------|--------------|-------------|--------------|
  | titles | 标题集合,顺序从左至右 | Array | undefined |
  | operations | 操作文案集合,顺序从上至下 | Array | undefined |
  | dataSource | 数据源，其中的数据将会被渲染到左边一栏中，`targetKeys`中指定的除外。 | Array | [] |
  | targetKeys | 显示在右侧框数据的key集合 | Array | [] |
  | onchange | 选项在两栏之间转移时的回调函数 | Function | () => {} |
  | showFilter | 是否显示搜索框 | Boolean | false |
  | showDescription | 是否显示备注 | Boolean | false |
  | showReload | 是否显示底部，底部含`clear all`和`Reload`按钮用于重置数据 | Boolean | false |
  | searchPlaceholder | 搜索框的默认值 | String | 'Search' |
  | notFoundContent | 当列表为空时显示的内容 | String | 'Not Result' |

  ## 组件演示

  <demo>
    <example title="基本">
      <v-transfer :titles="titles" :data-source="datas" :target-keys="targets"></v-transfer>
    </example>
    <example title="带搜索框">
      <v-transfer :titles="titles" :data-source="datas" :target-keys="targets" :show-filter="true"></v-transfer>
    </example>
    <example title="显示备注">
      <v-transfer :titles="titles" :data-source="datas" :target-keys="targets" :show-filter="true" :show-description="true"></v-transfer>
    </example>
    <example title="重置和清除按钮">
      <v-transfer :titles="titles" :data-source="datas" :target-keys="targets" :show-filter="true" :show-reload="true"></v-transfer>
    </example>
    <example title="自定义文字">
      <v-transfer :titles="titles" search-placeholder="搜索" :data-source="datas" :target-keys="targets" :show-filter="true" :operations="operations"></v-transfer>
    </example>
  </demo>
</template>
<script>
  import vTransfer from '../../components/transfer'
  export default{
    data () {
      return {
        titles: ['Source', 'Target'],
        operations: ['To Left', 'To Right'],
        datas: [],
        targets: []
      }
    },
    components: {
      vTransfer
    },
    created () {
      var self = this
      const mockData = []
      for (let i = 0; i < 20; i++) {
        mockData.push({
          key: i,
          title: `content${i + 1}`,
          description: `description of content${i + 1}`,
          disabled: i % 3 < 1
        })
      }
      self.datas = mockData
      const targetKeys = mockData
        .filter(item => +item.key % 3 > 1)
        .map(item => item.key)
      self.targets = targetKeys
    }
  }
</script>
