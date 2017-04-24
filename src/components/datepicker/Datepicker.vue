<template>
  <div class="datePicker" v-if="rangePicker">
    <v-calendar :value.sync="startDate" :panel-type="panelType" :error="error" :show-time='showTime' :disabled='disabled' :format='format'></v-calendar>
    <span v-if="!closeGroup"> 至 </span>
    <v-calendar :value.sync="endDate" :panel-type="panelType" :error="error" :show-time='showTime' :disabled='disabled' :format='format'></v-calendar>
    <span class="error" v-if="error">{{errorString}}</span>
  </div>
  <div class="datePicker" v-else>
    <v-calendar :value.sync="Date" :panel-type="panelType" :error="error" :show-time='showTime' :disabled='disabled' :format='format'></v-calendar>
  </div>
</template>
<script>
import {defaultProps} from '../../views/utils/props'
import moment from 'moment'
import vCalendar from './DatepickerItem.vue'
export default {
  components: {
    vCalendar
  },
  props: defaultProps({
    Date: '',
    startDate: '',
    endDate: '',
    disabled: false,
    showTime: false,
    rangePicker: false,
    format: 'yyyy-mm-dd',
    closeGroup: false,
    panelType: 'date',
    onSearch: () => {}
  }),
  data () {
    return {
      error: false,
      errorString: ''
    }
  },
  watch: {
    'startDate' (val) {
      if (Number(moment(val).format('x')) > Number(moment(this.endDate).format('x'))) {
        this.error = true
        this.errorString = '起始时间不能晚于终止时间'
      } else {
        this.error = false
        this.errorString = ''
      }
    },
    'endDate' (val) {
      if (Number(moment(val).format('x')) < Number(moment(this.startDate).format('x'))) {
        this.error = true
        this.errorString = '终止时间不能早于起始时间'
      } else {
        this.error = false
        this.errorString = ''
      }
    }
  }
}
</script>
