<template lang="md">
    # Table

    ---

    展示行列数据。

    ## 何时使用

    - 当有大量结构化的数据需要展现时；
    - 当需要对数据进行排序、搜索、分页、自定义操作等复杂行为时。

    ## 如何使用

    ```html
    data () {
      return {
        data: [{
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park'
        }, {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park'
        }, {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park'
        }]
      }
    }
    ```

    ## API

    ## 组件演示

    <demo>
      <example title="基本">
        <v-table caption="Optional table caption." :colums="colums" :data="data">
        </v-table>
      </example>
      <example title="条纹状表格">
        <v-table :colums="colums" :data="data" :striped="true">
        </v-table>
      </example>
      <example title="带边框的表格">
        <v-table :colums="colums" :data="data" :bordered="true">
        </v-table>
      </example>
      <example title="鼠标悬停">
        <v-table :colums="colums" :data="data" :hover="true">
        </v-table>
      </example>
      <example title="紧缩表格">
        <v-table :colums="colums" :data="data" :condensed="true">
        </v-table>
      </example>
      <example title="状态类">
        <v-table :colums="colums" :data="data" :condensed="true">
        </v-table>
      </example>
    </demo>

</template>
<script>
  import vTable from '../../components/table/Table'
  export default {
    data () {
      return {
        colums: [{
          title: 'Name'
        }, {
          title: 'Age'
        }, {
          title: 'Address'
        }],
        data: [{
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park'
        }, {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park'
        }, {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park'
        }]
      }
    },
    components: {
      vTable
    }
  }
</script>
