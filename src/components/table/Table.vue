<template>
  <div class="table">
    <div :class="prefixCls + '-operation'" v-if="rowSelection">
      <v-button :type="$index === 0 ? 'primary' : 'default'" v-for="x in itemActions" @click="_arrayClick(x.name)">{{x.title}}</v-button>
      <slot name="table-operation"></slot>
    </div>
    <div :class="prefixCls + '-column'" v-if="showItem">
      <v-dropdown :data="dropdownData">Show Items</v-dropdown>
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
            <v-dropdown :data="dropdownData" v-if="selectedRowKeys"></v-dropdown>
          </th>
          <th v-for="i in colums" :title="i">
            {{i}}
            <div :class="prefixCls + '-column-sorter'">
              <span class="table-column-sorter-up" title="↑" @click="_sortData('asc', i)" :class="{'on': sortData.action === 'asc' && sortData.data === i}">
                <v-icon type="caret-up"></v-icon>
              </span>
              <span class="table-column-sorter-down" title="↓" @click="_sortData('desc', i)" :class="{'on': sortData.action === 'desc' && sortData.data === i}">
                <v-icon type="caret-down"></v-icon>
              </span>
            </div>
          </th>
          <th v-if="itemActions.length > 0" :title="locale.action">{{locale.action}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="data in defaultData | limit" :id="$index">
          <td v-if="rowSelection" class="table-checkbox">
            <v-checkbox :checked="data.checked" :id="data.id" :onchange="_handleSelectTarget"></v-checkbox>
          </td>
          <td v-for="i in data | filter" :title="i">{{i}}</td>
          <td v-if="itemActions.length > 0" class="table-action">
            <a href="JavaScript:void(0)" :title="x.title" v-for="x in itemActions" @click="_itemClick(x.name, data)">{{x.title}}</a>
          </td>
        </tr>
      </tbody>
    </table>
    <v-pagination :total="dataSource.length" :limit="limit" :default-current.sync="current"></v-pagination>
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
    targetSelectedKeys: [],
    locale: {
      action: 'Action'
    },
    showReload: false
  }),
  data () {
    return {
      defaultData: this.dataSource,
      dropdownData: [{
        value: 'Select All'
      }, {
        value: 'select Invert'
      }, {
        value: 'Select Odd Row'
      }, {
        value: 'select Even Row'
      }],
      sortData: {
        action: '',
        data: ''
      }
    }
  },
  filters: {
    'limit' (data) {
      let self = this
      let start = (self.current - 1) * self.limit
      data = data.slice(start, start + self.limit)
      data.forEach(function (val) {
        if (self.targetSelectedKeys.indexOf(val['id']) !== -1) {
          val['checked'] = true
        } else {
          val['checked'] = false
        }
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
  methods: {
    _arrayClick (action) {
      let target = []
      let self = this
      self.targetSelectedKeys.forEach(function (key) {
        self.defaultData.forEach(function (val) {
          if (val.id === key) {
            target.push(val)
          }
        })
      })
      this.$dispatch(`${this.prefixCls}:action`, action, target)
    },
    _sortData (action, data) {
      let self = this
      self.sortData.action = action
      self.sortData.data = data
      self.defaultData = _.orderBy(self.defaultData, _.toLower(data), action)
    },
    _itemClick (action, data) {
      this.$dispatch(`${this.prefixCls}:action`, action, data)
    },
    _handleSelectTarget (e) {
      var self = this
      if (e.target.checked) {
        self.targetSelectedKeys.push(parseInt(e.target.labels[0].id))
      } else {
        self.targetSelectedKeys = _.dropRightWhile(self.targetSelectedKeys, function (n) {
          return n === e.target.labels[0].id
        })
      }
    },
    _reload () {
      this.$dispatch(`${this.prefixCls}:reload`)
    }
  },
  events: {
    'dropdown:action' (action) {
      let self = this
      let data
      if (action === 'Select All') {
        self.targetSelectedKeys = []
        let start = (self.current - 1) * self.limit
        data = self.defaultData.slice(start, start + self.limit)
        data.forEach(function (val) {
          self.targetSelectedKeys.push(val.id)
        })
        console.log(self.targetSelectedKeys)
      }
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
