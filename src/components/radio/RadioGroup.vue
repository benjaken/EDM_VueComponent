<template>
  <div :class="prefixCls">
    <v-radio v-for="radio in radios" :class-name="radioClasses" :value="radio.value" :on-change="_onRadioChange.bind(radio, $index)" :checked="value === radio.value"><span>{{radio.name}}</span></v-radio>
  </div>
</template>
<script>
  import { defaultProps, oneOfType } from '../../views/utils/props'
  import vRadio from './Radio.vue'

  export default {
    props: defaultProps({
      prefixCls: 'radio-group',
      type: 'radio',
      value: oneOfType([String, Number, Boolean]),
      defaultValue: oneOfType([String, Number, Boolean]),
      radios: [],
      onChange: () => {}
    }),
    components: {
      vRadio
    },
    computed: {
      radioClasses () {
        if (this.type === 'button') {
          return 'radio-button'
        }
        return ''
      }
    },
    compiled () {
      if (this.value == null) {
        this.value = this.defaultValue
      }
    },
    methods: {
      _onRadioChange (index, e) {
        e.target.name = this.radios[index].name
        this.value = e.target.value
        this.onChange(e)
      }
    }
  }
</script>
