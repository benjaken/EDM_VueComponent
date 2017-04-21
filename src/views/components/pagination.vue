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
  | total | 数据总数	 | Number | 1 |
  | defaultCurrent | 默认页数 | Number | 1 |
  | limit | 每页条数 | Number | 10 |
  | showSizeChanger | 是否可以改变 limit | Boolean | false |
  | pageSizeOptions | 指定每页可以显示多少条 | Array | ['10', '20', '30', '40'] |
  | simple | 当添加该属性时，显示为简单分页 | Boolean | false |

  ## 组件演示

  <demo>
    <example title="基本">
      <v-pagination :total="30"></v-pagination>
    </example>
    <example title="更多页数">
      <v-pagination :total="150" :default-current.sync="current"></v-pagination>
    </example>
    <example title="改变显示条目数">
      <v-pagination :total="300" :default-current.sync="current"></v-pagination>
    </example>
    <example title="跳转">
      <v-pagination :total="150" :default-current.sync="current" :show-quick-jumper="true"></v-pagination>
    </example>
    <example title="迷你">
      <v-pagination :total="150" :default-current.sync="current" :simple="true"></v-pagination>
      <br />
      <v-pagination :total="300" :default-current.sync="current" :simple="true" :show-size-changer="true" :page-size-options="options"></v-pagination>
      <br />
      <v-pagination :total="150" :default-current.sync="current" :simple="true" :show-total="true"></v-pagination>
    </example>
    <example title="总数">
      <v-pagination :total="50" :show-total="true"></v-pagination>
    </example>
  </demo>
</template>
<script>
  import vPagination from '../../components/pagination'

  export default {
    components: {
      vPagination
    },
    data () {
      return {
        options: ['10', '20', '30', '50'],
        current: 3
      }
    },
    watch: {
      'current' (val) {
        console.log('page changed:' + val)
      }
    }
  }
</script>
