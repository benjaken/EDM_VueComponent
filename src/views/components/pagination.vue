<template lang="md">
  # Pagination

  ---

  采用分页的形式分隔长列表，每次只加载一个页面。

  ## 何时使用

  - 当加载/渲染所有数据将花费很多时间时；
  - 可切换页码浏览数据。

  ## API

  | 参数 | 说明 | 类型 | 默认值 |
  |------|-----|------|-------|
  | visible | 菜单是否显示 | boolean | false |

  ## 组件演示

  <demo>
    <example title="基本">
      <v-pagination :total="50"></v-pagination>
    </example>
    <example title="更多页数">
      <v-pagination :total="150" :current="5"></v-pagination>
    </example>
  </demo>
</template>
<script>
  import vPagination from '../../components/pagination'

  export default {
    components: {
      vPagination
    }
  }
</script>
