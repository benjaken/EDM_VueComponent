<template>
  <div class="transfer">
    <div class="transfer-list">
      <div class="transfer-list-header">
        <span>{{dataTotal}} items</span>
        <!-- <v-checkbox></v-checkbox> -->
        <span class="title">{{titles[0]}}</span>
      </div>
      <div :class="wrapClasses">
        <div class="transfer-list-content-input" v-if="showFilter">
          <input class="input" v-model="sourceInput" :placeholder="searchPlaceholder" />
        </div>
        <ul class="transfer-list-content" id="data">
          <li class="transfer-list-content-item" v-for="i in dataSource | filter 'data' sourceInput" :id="$index" :title="i.title + ' - ' + i.description">
            <v-checkbox :disabled="i.disabled" :id="i.key" :onchange="_handleSelectSource">{{i.title}}<span v-if="showDescription"> - {{i.description}}</span></v-checkbox>
          </li>
        </ul>
      </div>
      <div class="transfer-list-footer" v-if="showReload">
        <v-button type="default" size="xsmall" @click="targetKeys = defaultTargetKeys">Reload</v-button>
      </div>
    </div>
    <div class="transfer-operation">
      <v-button type="primary" size="small" @click="_handleChange('left', targetSelectedKeys)" v-if="targetSelectedKeys.length !== 0"><v-icon type="left"></v-icon>{{operations[0]}}</v-button>
      <v-button type="default" :disabled="true" size="small" v-else><v-icon type="left"></v-icon>{{operations[0]}}</v-button>
      <v-button type="primary" size="small" @click="_handleChange('right', sourceSelectedKeys)" v-if="sourceSelectedKeys.length !== 0">{{operations[1]}}<v-icon type="right"></v-icon></v-button>
      <v-button type="default" :disabled="true" size="small" v-else>{{operations[1]}}<v-icon type="right"></v-icon></v-button>
    </div>
    <div class="transfer-list">
      <div class="transfer-list-header">
        <span>{{targetTotal}} items</span>
        <!-- <v-checkbox>{{targetTotal}} items</v-checkbox> -->
        <span class="title">{{titles[1]}}</span>
      </div>
      <div :class="wrapClasses">
        <div class="transfer-list-content-input" v-if="showFilter">
          <input class="input" v-model="targetInput" :placeholder="searchPlaceholder" />
        </div>
        <ul class="transfer-list-content" id="target">
          <li class="transfer-list-content-item" v-for="i in dataSource | filter 'target' targetInput" :id="$index" :title="i.title + ' - ' + i.description">
            <v-checkbox :disabled="i.disabled" :id="i.key" :onchange="_handleSelectTarget">{{i.title}}<span v-if="showDescription"> - {{i.description}}</span></v-checkbox>
          </li>
          <li class="transfer-list-content-item" v-if="targetKeys.length === 0">{{notFoundContent}}</li>
        </ul>
      </div>
      <div class="transfer-list-footer" v-if="showReload">
        <v-button type="default" size="xsmall" @click="targetKeys = []">Clear all</v-button>
      </div>
    </div>
  </div>
</template>
<script>
import {defaultProps} from '../../views/utils/props'
import vCheckbox from '../checkbox'
import vButton from '../button'
import vIcon from '../iconfont'
import cx from 'classnames'
function sortNumber (a, b) {
  return a - b
}

export default {
  props: defaultProps({
    prefixCls: 'transfer',
    titles: [],
    dataSource: [],
    targetKeys: [],
    showFilter: false,
    showDescription: false,
    showReload: false,
    operations: [],
    searchPlaceholder: 'Search',
    notFoundContent: 'Not Result',
    onchange: () => {}
  }),
  data () {
    return {
      sourceInput: '',
      targetInput: '',
      dataTotal: 0,
      targetTotal: 0,
      sourceSelectedKeys: [],
      targetSelectedKeys: [],
      defaultTargetKeys: this.targetKeys
    }
  },
  computed: {
    wrapClasses () {
      return cx({
        [`${this.prefixCls}-list-body`]: 1,
        [`${this.prefixCls}-list-body-with-search`]: !!this.showFilter,
        [`${this.prefixCls}-list-body-with-footer`]: !!this.showReload
      })
    }
  },
  filters: {
    'filter' (val, index, inputValue) {
      const target = []
      var self = this
      switch (index) {
        case 'target':
          val.forEach(function (val) {
            if (self.targetKeys.includes(val.key)) {
              if (inputValue && inputValue.toString().length > 0) {
                if (val.title.indexOf(inputValue) > -1) {
                  target.push(val)
                }
              } else {
                target.push(val)
              }
            }
          })
          self.targetTotal = target.length
          break
        case 'data':
          val.forEach(function (val) {
            if (!self.targetKeys.includes(val.key)) {
              if (inputValue && inputValue.toString().length > 0) {
                if (val.title.indexOf(inputValue) > -1) {
                  target.push(val)
                }
              } else {
                target.push(val)
              }
            }
          })
          self.dataTotal = target.length
          break
      }
      return target
    }
  },
  methods: {
    _handleSelectSource (e) {
      var self = this
      if (e.target.checked) {
        this.sourceSelectedKeys.push(parseInt(e.target.labels[0].id))
      } else {
        self.sourceSelectedKeys.forEach(function (val, index) {
          if (val === parseInt(e.target.labels[0].id)) {
            self.sourceSelectedKeys.splice(index, 1)
          }
        })
      }
    },
    _handleSelectTarget (e) {
      var self = this
      if (e.target.checked) {
        this.targetSelectedKeys.push(parseInt(e.target.labels[0].id))
      } else {
        self.targetSelectedKeys.forEach(function (val, index) {
          if (val === parseInt(e.target.labels[0].id)) {
            self.targetSelectedKeys.splice(index, 1)
          }
        })
      }
    },
    _handleChange (direction, moveKeys) {
      switch (direction) {
        case 'left':
          let target = new Set(this.targetKeys)
          let move = new Set(moveKeys)
          let difference = Array.from(new Set(this.targetKeys.concat(moveKeys).filter(v => !target.has(v) || !move.has(v))))
          this.targetKeys = difference.sort(sortNumber)
          this.targetSelectedKeys = []
          this.onchange()
          break
        case 'right':
          let difference1 = Array.from(new Set(this.targetKeys.concat(moveKeys)))
          this.targetKeys = difference1.sort(sortNumber)
          this.sourceSelectedKeys = []
          this.onchange()
          break
      }
    }
  },
  // watch: {
  //   'targetSelectedKeys' (val) {
  //     console.log('targetSelectedKeys:' + val)
  //   },
  //   'sourceSelectedKeys' (val) {
  //     console.log('sourceSelectedKeys:' + val)
  //   }
  // },
  components: {
    vCheckbox,
    vButton,
    vIcon
  }
}
</script>
