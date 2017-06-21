<template>
  <div :class="prefixCls">
    <div :class="prefixCls + '-header'">
      <v-radio type="button" :on-change="_onTypeChange" :value="type" :radios="radios"></v-radio>
    </div>
    <div :class="prefixCls + '-body'">
      <table :class="prefixCls + ' table'" v-if="type === 'month'">
        <thead><tr><th v-for="i in weekList">{{i | week}}</th></tr></thead>
        <tbody>
          <tr v-for="i in 5">
            <td v-for="i in 7">
              <div :class="prefixCls + '-date'">{{i}}</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import {defaultProps} from '../../views/utils/props'
// import cx from 'classnames'
import vButton from '../button/Button'
import vRadioGroup from '../radio/Radio'

export default {
  props: defaultProps({
    prefixCls: 'calendar',
    type: 'month'
  }),
  components: {
    vButton,
    vRadioGroup
  },
  data () {
    return {
      weekList: [0, 1, 2, 3, 4, 5, 6],
      radios: [{
        value: 'month',
        name: 'Month'
      }, {
        value: 'year',
        name: 'Year'
      }]
    }
  },
  filters: {
    week (item) {
      return {
        0: 'Su',
        1: 'Mo',
        2: 'Tu',
        3: 'We',
        4: 'Th',
        5: 'Fr',
        6: 'Sa'
      }[item]
    }
  },
  methods: {
    _onTypeChange (e) {
      this.type = e.target.value
    }
  }
}
</script>
