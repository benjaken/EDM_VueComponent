<template>
  <ul :class="pagClasses" v-if="simple">
    <li :class="{'disabled': !changeBefore}">
      <a @click="_minus()">
        <span><v-icon type="left"></v-icon></span>
      </a>
    </li>
    <li class="quick-jumper">
      <v-input size="small" :value="current" @keyup.enter="_update($children)"></v-input>
    </li>
    <li class="pagination-ellipsis">
      <a>/ {{page}}</a>
    </li>
    <li :class="{'disabled': changeAfter}">
      <a @click="_plus()">
        <span><v-icon type="right"></v-icon></span>
      </a>
    </li>
    <li class="sizeChanger" v-if="showSizeChanger">
      <v-dropdown :value="limit + ' / page'" :data="data" size="small"></v-dropdown>
    </li>
    <li class="pagination-ellipsis" v-if="showTotal">
      <a>Total {{total}} items</a>
    </li>
  </ul>
  <ul :class="pagClasses" v-else>
    <li :class="{'disabled': !changeBefore}">
      <a @click="_minus()">
        <span><v-icon type="left"></v-icon></span>
      </a>
    </li>
    <li v-if="current > 5" :class="{'active': current === 1}">
      <a @click="_update(1)">1</a>
    </li>
    <li v-if="current > 5" class="pagination-ellipsis">
      <a><v-icon type="ellipsis"></v-icon></a>
    </li>
    <li v-for="i in defaultPage" :class="{'active': i + base === current}">
      <a @click="_update(i + base)">{{i + base}}</a>
    </li>
    <li v-if="current + 1 < page && page > 5" class="pagination-ellipsis">
      <a><v-icon type="ellipsis"></v-icon></a>
    </li>
    <li v-if="current < page && page > 5" :class="{'active': current === page}">
      <a @click="_update(page)">{{page}}</a>
    </li>
    <li :class="{'disabled': changeAfter}">
      <a @click="_plus()">
        <span><v-icon type="right"></v-icon></span>
      </a>
    </li>
    <li class="sizeChanger" v-if="showSizeChanger">
      <v-dropdown :value="limit + ' / page'" :data="data" size="small"></v-dropdown>
    </li>
    <li class="quick-jumper" v-if="showQuickJumper">
      <label>Goto</label>
      <v-input size="small" :value="current"  @keyup.enter="_update($children)"></v-input>
    </li>
    <li class="pagination-ellipsis" v-if="showTotal">
      <a>Total {{total}} items</a>
    </li>
  </ul>
</template>
<script>
  import {defaultProps, oneOf} from '../../views/utils/props'
  import vIcon from '../iconfont'
  import vDropdown from '../dropdown'
  import vInput from '../input'
  import cx from 'classnames'

  export default {
    props: defaultProps({
      prefixCls: 'pagination',
      size: oneOf(['small', 'large', undefined]),
      total: 1,
      limit: 10,
      defaultCurrent: 1,
      showSizeChanger: false,
      pageSizeOptions: ['10', '20', '30', '40'],
      showQuickJumper: false,
      simple: false,
      showTotal: false,
      onchange: () => {}
    }),
    data () {
      return {
        current: 0,
        page: Math.ceil(this.total / this.limit),
        defaultPage: 1,
        base: 1,
        changeBefore: 0,
        changeAfter: 0,
        data: []
      }
    },
    ready () {
      var self = this
      self.current = self.defaultCurrent
      self.defaultPage = self.page >= 5 ? 5 : self.page
      self.pageSizeOptions.forEach(function (val) {
        var arr = {
          'value': val + ' / page',
          'onclick': function () { self.limit = val }
        }
        self.data.push(arr)
      })
    },
    computed: {
      pagClasses () {
        const sizeCls = ({
          'large': 'lg',
          'small': 'sm'
        })[this.size] || ''
        return cx({
          [this.prefixCls]: 1,
          [`${this.prefixCls}-${sizeCls}`]: !!sizeCls,
          [`${this.prefixCls}-simple`]: !!this.simple
        })
      }
    },
    methods: {
      _update (result) {
        var self = this
        if (typeof result === 'number') {
          self.current = result
        } else {
          result.forEach(function (val) {
            if (val.value) {
              let input = parseInt(val.value)
              input = input > self.page ? self.page : input
              input = input < 1 ? 1 : input
              self.current = parseInt(input)
            }
          })
        }
      },
      _minus () {
        if (this.changeBefore === 1) {
          this.current -= 1
        }
      },
      _plus () {
        if (this.changeAfter === 0) {
          this.current += 1
        }
      }
    },
    components: {
      vIcon,
      vDropdown,
      vInput
    },
    watch: {
      'current' (val) {
        var self = this
        self.changeBefore = val === 1 ? 0 : 1
        self.changeAfter = val === this.page ? 1 : 0
        if (val <= this.page) {
          self.base = val > 5 ? this.current - 4 : 1
        }
        self.defaultCurrent = val
      },
      'limit' (val) {
        var self = this
        self.page = Math.ceil(self.total / val)
        self.defaultPage = self.page >= 5 ? 5 : self.page
        self.current = self.current > self.page ? self.page : self.current
        self.changeBefore = self.current === 1 ? 0 : 1
        self.changeAfter = self.current === this.page ? 1 : 0
      }
    }
  }
</script>
