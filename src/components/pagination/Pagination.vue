<template>
  <ul :class="pagClasses">
    <li :class="{'disabled': !changeBefore}">
      <a @click="_minus()">
        <span><v-icon type="left"></v-icon></span>
      </a>
    </li>
    <li v-if="defaultCurrent > 5" :class="{'active': defaultCurrent === 1}">
      <a @click="_update(1)">1</a>
    </li>
    <li v-if="defaultCurrent > 5">
      <a>…</a>
    </li>
    <li v-for="i in 5" :class="{'active': i === defaultCurrent - 1}">
      <a @click="_update(i + base)">{{i + base}}</a>
    </li>
    <li v-if="defaultCurrent + 4 < page">
      <a>…</a>
    </li>
    <li v-if="defaultCurrent + 4 < page" :class="{'active': defaultCurrent === page}">
      <a @click="_update(page)">{{page}}</a>
    </li>
    <li>
      <a @click="_plus(+1)">
        <span><v-icon type="right"></v-icon></span>
      </a>
    </li>
  </ul>
</template>
<script>
  import {defaultProps} from '../../views/utils/props'
  import vIcon from '../iconfont'
  import cx from 'classnames'

  export default {
    props: defaultProps({
      prefixCls: 'pagination',
      total: 1,
      limit: 10,
      current: 1
    }),
    data () {
      return {
        defaultCurrent: this.current,
        page: Math.ceil(this.total / this.limit),
        base: 1,
        changeBefore: 0
      }
    },
    computed: {
      pagClasses () {
        return cx({
          [this.prefixCls]: 1
        })
      }
    },
    methods: {
      _update (val) {
        var self = this
        self.defaultCurrent = val
      },
      _minus () {
        if (this.changeBefore === 1) {
          var self = this
          self.defaultCurrent -= 1
        }
      },
      _plus () {
        var self = this
        self.defaultCurrent += 1
      }
    },
    components: {
      vIcon
    },
    watch: {
      'defaultCurrent' (val) {
        var self = this
        self.changeBefore = val === 1 ? 0 : 1
      }
    }
  }
</script>
