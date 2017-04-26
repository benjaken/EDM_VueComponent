<template>
  <div class="transfer">
    <div class="transfer-list">
      <div class="transfer-list-header">
        <v-checkbox>{{dataTotal}} items</v-checkbox>
        <span class="title">{{titles[0]}}</span>
      </div>
      <div class="transfer-list-body">
        <ul class="transfer-list-content">
          <li class="transfer-list-content-item" v-for="i in defaultDatas" :id="$index">
            <v-checkbox :disabled="i.disabled" :default-checked.sync="i.value" :onchange="_addDataArray">{{i.label}}</v-checkbox>
          </li>
        </ul>
      </div>
    </div>
    <div class="transfer-operation">
      <v-button type="default" :disabled="dataArray.length = 0" size="small"><v-icon type="left"></v-icon></v-button>
      <v-button type="default" :disabled="targetArray.length = 0 " size="small"><v-icon type="right"></v-icon></v-button>
    </div>
    <div class="transfer-list">
      <div class="transfer-list-header">
        <v-checkbox>{{targetTotal}} items</v-checkbox>
        <span class="title">{{titles[1]}}</span>
      </div>
      <div class="transfer-list-body">
        <ul class="transfer-list-content">
          <li class="transfer-list-content-item" v-for="i in target" :id="$index">
            <v-checkbox :disabled="i.disabled" :default-checked="i.value">{{i}}</v-checkbox>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import {defaultProps} from '../../views/utils/props'
import vCheckbox from '../checkbox'
import vButton from '../button'
import vIcon from '../iconfont'
// import cx from 'classnames'
export default {
  props: defaultProps({
    prefixCls: 'transfer',
    titles: [],
    datas: []
  }),
  data () {
    return {
      defaultDatas: this.datas,
      dataTotal: 0,
      target: [],
      targetTotal: 0,
      dataArray: [],
      targetArray: []
    }
  },
  ready () {
    var self = this
    self.defaultDatas.forEach(function(val, index) {
      if (val.value) {
        self.target.push(val.label)
        self.defaultDatas.splice(index, 1)
      }
    })
    self.dataTotal = self.defaultDatas.length
    self.targetTotal = self.target.length
  },
  methods: {
    _addDataArray (e) {
      var self = this
      if (e.target.checked) {
        console.log(e.target.labels[0].innerText)
        self.dataArray.push(e.target.labels[0].innerText)
      }
    }
  },
  components: {
    vCheckbox,
    vButton,
    vIcon
  }
}
</script>
