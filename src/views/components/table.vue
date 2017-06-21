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
      colums: ['id', 'Name', 'Age', 'Address'],
      datas: [],
      itemActions: [{
        name: 'edit',
        title: '编辑'
      }, {
        name: 'copy',
        title: '复制'
      }, {
        name: 'delete',
        title: '删除'
      }]
    }
  },
  created () {
    var self = this
    const mockData = []
    for (let i = 0; i < 20; i++) {
      mockData.push({
        id: i,
        name: `Edward King ${i + 1}`,
        age: `${i + 20}`,
        address: `London, Park Lane no. ${i + 1}`,
        phone: `13535135${i > 10 ? i : '0' + i}`
      })
    }
    self.datas = mockData
  }
  ```

  回调方法

  ```html
  events: {
    'table:action' (action, data) {
      console.log('table:action', action, data)
    }
  }
  ```

  ## API

  | 参数 | 说明 | 类型 | 默认值 |
  |------|-----|------|-------|
  | caption | 列表的备注	| String | undefined |
  | colums | 列表列的配置 | Array | [] |
  | dataSource | 数据数组 | Array | [] |
  | itemActions | 列表的方法，通过`$event`的`table:action`获取对应的action和data | Array | [] |
  | striped | 条纹状列表 | Boolean | false |
  | bordered | 带边框的列表 | Boolean | false |
  | hover | 鼠标悬停状态下作出响应 | Boolean | true |
  | condensed | 紧缩列表 | Boolean | false |
  | rowSelection | 列表项是否可选择 | Boolean | false |
  | selectedRowKeys | 指定列表选中项，选择项有`全选`、`反选`、`选择单数项`、`选择双数项` | Boolean | false |
  | showItem | 指定列表是否显示指定的列表列 | Boolean | false |
  | current | 指定列表显示的页数 | Number | 1 |
  | limit | 指定列表页显示的条数 | Number | 10 |
  | locale | 指定部分按钮显示的文字 | {} | {} |
  | showReload | 是否显示刷新按钮，通过`$event`的`table:reload`通知方法 | Boolean | false |

  ## 组件演示

  <demo>
    <example title="基本">
      <v-table caption="Optional table caption." :colums="colums" :limit="4" :data-source="datas" :item-actions="itemActions" show-reload>
      </v-table>
    </example>
    <example title="条纹状列表">
      <v-table :colums="colums" :data-source="datas" striped :limit="4" :item-actions="itemActions">
      </v-table>
    </example>
    <example title="带边框的列表">
      <v-table :colums="colums" :data-source="datas" bordered :limit="4" :item-actions="itemActions">
      </v-table>
    </example>
    <example title="紧缩列表">
      <v-table :colums="colums" :data-source="datas" condensed :limit="4" :item-actions="itemActions">
      </v-table>
    </example>
    <example title="紧缩列表">
      <v-table :colums="colums" :data-source="datas1" :item-actions="itemActions">
      </v-table>
    </example>
    <example title="可选择">
      <v-table :colums="colums" :data-source="datas" :item-actions="itemActions" row-selection>
      </v-table>
    </example>
    <example title="选择和操作">
      <v-table :colums="colums" :data-source="datas" :target-selected-keys="targets" row-selection>
        <div slot="table-operation">
          <v-button type="primary" :loading="loading" @click="_reload">重加载</v-button>
        </div>
      </v-table>
    </example>
    <example title="自定义选择项">
      <v-table :colums="colums" :data-source="datas" :item-actions="itemActions" row-selection selected-row-keys show-item>
      </v-table>
    </example>
  </demo>
</template>
<script>
export default {
  data() {
    return {
      colums: ['Id', 'Name', 'Age', 'Address'],
      datas: [],
      datas1: [],
      itemActions: [{
        name: 'edit',
        title: '编辑'
      }, {
        name: 'copy',
        title: '复制'
      }, {
        name: 'delete',
        title: '删除'
      }],
      loading: false,
      targets: []
    }
  },
  events: {
    'table:action' (action, data) {
      console.log('table:action', action, data)
      if (action === 'delete') {
        // this.datas.splice(data.id, 1)
      }
    },
    'table:reload' () {
      console.log('table:reload')
    }
  },
  created() {
    var self = this
    const mockData = []
    for (let i = 0; i < 50; i++) {
      mockData.push({
        id: i * 2,
        name: `${i % 3 > 1 ? 'Lao King' : 'Lao Wang'} ${i}`,
        age: `${i + 20}`,
        address: `${i % 3 > 1 ? 'London' : 'BeiJing'}, Park Lane no. ${i}`,
        phone: `13535135${i > 10 ? i : '0' + i}`
      })
    }
    self.datas = mockData
    mockData.filter(item => +item.key % 3 > 1).push(item => item.rowClassName)
    self.datas1 = mockData
  },
  methods: {
    _reload() {
      this.loading = true
      setTimeout(() => {
        this.targets = []
        this.loading = false
      }, 1000)
    }
  }
}
</script>
