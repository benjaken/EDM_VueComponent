<template lang="md">
  # Radio

  ---

  单选框。

  ## 何时使用

  - 用于在多个备选项中选中单个状态。
  - 和 Select 的区别是，Radio 所有选项默认可见，方便用户在比较中选择，因此选项不宜过多。

  ## API

  Radio

  | 参数           | 说明                                     | 类型       |  可选值 | 默认值 |
  |----------------|------------------------------------------|------------|---------|--------|
  | checked        | 指定当前是否选中                         | Boolean    |         | false  |
  | defaultChecked | 初始是否选中                             | Boolean    |         | false  |
  | value          | 根据 value 进行比较，判断是否选中        | String     |         | 无     |

  RadioGroup

  单选框组合，用于包裹一组 `Radio`。

  | 参数           | 说明                             | 类型              | 可选值 | 默认值 |
  |----------------|----------------------------------|-------------------|--------|--------|
  | onChange       | 选项变化时的回调函数             | Function(e:Event) | 无     | 无     |
  | value          | 用于设置当前选中的值             | String            | 无     | 无     |
  | defaultValue   | 默认选中的值                     | String            | 无     | 无     |

  ## 组件演示

  <example title="基本">
    <v-radio :default-checked="checked"></v-radio>
  </example>
  <example title="不可用">
    <v-radio :disabled="disabled"></v-radio>
    <v-radio :checked.sync="checked" :disabled="disabled"></v-radio>
    <br />
    <v-button type="default" @click="_toggleChange">改变状态</v-button>
  </example>
  <example title="RadioGroup 组合">
    <v-radio-group :on-change="_onGroupChange" :value="groupValue" :radios="radios"></v-radio-group>
    <p>你选择了：{{groupValue}}</p>
  </example>
  <example title="RadioGroup 组合">
    <v-radio-group type="button" :on-change="_onCityChange" :value="cityValue" :radios="radios1"></v-radio-group>
    <p>你选择了：{{cityName}}</p>
  </example>
</template>
<script>
  import vRadio from '../../components/radio/Radio'
  import vRadioGroup from '../../components/radio/RadioGroup'
  import vButton from '../../components/button'

  export default {
    data () {
      return {
        checked: true,
        disabled: true,
        radios: [{
          value: 'a',
          name: 'A'
        }, {
          value: 'b',
          name: 'B'
        }, {
          value: 'c',
          name: 'C'
        }, {
          value: 'd',
          name: 'D'
        }],
        groupValue: 'a',
        radios1: [{
          value: 'a',
          name: '广州'
        }, {
          value: 'b',
          name: '深圳'
        }, {
          value: 'c',
          name: '东莞'
        }, {
          value: 'd',
          name: '汕头'
        }],
        cityValue: 'a',
        cityName: '广州'
      }
    },
    components: {
      vRadio,
      vRadioGroup,
      vButton
    },
    methods: {
      _toggleChange () {
        var self = this
        self.disabled = !self.disabled
      },
      _onGroupChange (e) {
        console.log('radio checked:' + e.target.value)
        this.groupValue = e.target.value
      },
      _onCityChange (e) {
        console.log('city checked:' + e.target.name)
        this.cityName = e.target.name
      }
    }
  }
</script>
