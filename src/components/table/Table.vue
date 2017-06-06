<template>
  <div class="table">
    <div :class="prefixCls + '-operation'" v-if="rowSelection">
      <v-button :type="$index === 0 ? 'primary' : 'default'" v-for="x in itemActions" @click="_arrayClick(x.name)">{{x.title}}</v-button>
      <slot name="table-operation"></slot>
    </div>
    <div :class="prefixCls + '-column'" v-if="showItem">
      <v-dropdown :data="columsData" show-select>Show Items</v-dropdown>
    </div>
    <div :class="prefixCls + '-reload'" v-if="showItem">
      <v-button type="default" @click="_reload">
        <v-icon type="reload"></v-icon>
      </v-button>
    </div>
    <table :class="tableClasses">
      <caption v-if="caption" :title="caption">{{caption}}</caption>
      <thead>
        <tr>
          <th class="table-checkbox" v-if="rowSelection">
            <v-dropdown :data="selectedRow" v-if="selectedRowKeys"></v-dropdown>
          </th>
          <th v-for="i in colums" :title="i">
            <span>{{i}}</span>
            <div :class="prefixCls + '-column-sorter'">
              <span class="table-column-sorter-up" title="↑" @click="_sortData('asc', i)" :class="{'on': sortedInfo.order === 'asc' && sortedInfo.columnKey === i}">
                <v-icon type="caret-up"></v-icon>
              </span>
              <span class="table-column-sorter-down" title="↓" @click="_sortData('desc', i)" :class="{'on': sortedInfo.order === 'desc' && sortedInfo.columnKey === i}">
                <v-icon type="caret-down"></v-icon>
              </span>
            </div>
          </th>
          <th v-if="itemActions.length > 0" :title="locale.action">{{locale.action}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="data in dataSource | limit" :id="$index" :class="data.rowClassName">
          <td v-if="rowSelection" class="table-checkbox">
            <v-checkbox :checked.sync="data.checked" :id="data.id" :onchange="_handleSelectTarget"></v-checkbox>
          </td>
          <td v-for="i in data | filter" :title="i">{{i}}</td>
          <td v-if="itemActions.length > 0" class="table-action">
            <a href="JavaScript:void(0)" :title="x.title" v-for="x in itemActions" @click="_itemClick(x.name, data)">{{x.title}}</a>
          </td>
        </tr>
      </tbody>
    </table>
    <v-pagination :total="dataSource.length" :limit="limit" :current.sync="current"></v-pagination>
  </div>
</template>
<script>
import {defaultProps} from '../../views/utils/props'
import cx from 'classnames'
import vCheckbox from '../checkbox'
import vButton from '../button'
import vPagination from '../pagination'
import vDropdown from '../dropdown'
import vIcon from '../iconfont'
import _ from 'lodash'

export default {
  props: defaultProps({
    prefixCls: 'table',
    caption: '',
    colums: [],
    dataSource: [],
    itemActions: [],
    striped: false,
    bordered: false,
    hover: true,
    condensed: false,
    rowSelection: false,
    selectedRowKeys: false,
    showItem: false,
    current: 1,
    limit: 10,
    locale: {
      action: 'Action'
    },
    showReload: false
  }),
  data () {
    return {
      targetSelectedKeys: [],
      columsData: [],
      selectedRow: [{
        value: 'Select All'
      }, {
        value: 'Select Invert'
      }],
      sortedInfo: {
        order: '',
        columnKey: ''
      }
    }
  },
  filters: {
    'limit' (data) {
      let self = this
      let start = (self.current - 1) * self.limit
      data = data.slice(start, start + self.limit)
      data.map(item => {
        item['checked'] = self.targetSelectedKeys.includes(item['id'])
      })
      return data
    },
    'filter' (data) {
      let self = this
      let array = {}
      self.colums.forEach(function (val) {
        val = val.toLowerCase()
        array[val] = data[val]
      })
      return array
    }
  },
  computed: {
    tableClasses () {
      return cx({
        [this.prefixCls]: 1,
        [`${this.prefixCls}-striped`]: !!this.striped,
        [`${this.prefixCls}-bordered`]: !!this.bordered,
        [`${this.prefixCls}-hover`]: !!this.hover,
        [`${this.prefixCls}-condensed`]: !!this.condensed
      })
    }
  },
  ready () {
    this._listColums()
  },
  methods: {
    _listColums () {
      let self = this
      self.colums.map(item => {
        self.columsData.push({value: item})
      })
    },
    _arrayClick (action) {
      let target = []
      let self = this
      self.targetSelectedKeys.forEach(function (key) {
        self.dataSource.forEach(function (val) {
          if (val.id === key) {
            target.push(val)
          }
        })
      })
      this.$dispatch(`${this.prefixCls}:action`, action, target)
    },
    _sortData (order, columnKey) {
      let self = this
      self.sortedInfo.order = order
      self.sortedInfo.columnKey = columnKey
      self.targetSelectedKeys = []
      self.dataSource = _.orderBy(self.dataSource, _.toLower(columnKey), order)
    },
    _itemClick (action, data) {
      this.$dispatch(`${this.prefixCls}:action`, action, data)
    },
    _handleSelectTarget (e) {
      let self = this
      let id
      id = parseInt(e.target.labels[0].id)
      if (e.target.checked && !self.targetSelectedKeys.includes(id)) {
        self.targetSelectedKeys.push(id)
      } else {
        _.remove(self.targetSelectedKeys, function(n) { return n === id })
      }
    },
    _reload () {
      var self = this
      self.current = 1
      self.$dispatch(`${self.prefixCls}:reload`)
    }
  },
  events: {
    'dropdown:action' (action) {
      let self = this
      let data
      let start = (self.current - 1) * self.limit
      data = self.dataSource.slice(start, start + self.limit)
      data = data.map(item => item.id)
      switch (action) {
        case 'Select All':
          self.targetSelectedKeys = data
          break
        case 'Select Invert':
          self.targetSelectedKeys = _.xor(data, self.targetSelectedKeys)
          break
      }
      console.log(self.targetSelectedKeys)
    }
  },
  watch: {
    'current' () {
      this.targetSelectedKeys = []
    }
  },
  components: {
    vCheckbox,
    vButton,
    vPagination,
    vDropdown,
    vIcon
  }
}
</script>
