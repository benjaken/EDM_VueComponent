<template>
  <div class="datePicker" v-if="!rangePicker">
    <v-calendar :value="Date" :error="error" :show-time='showTime' :disabled='disabled' :format='format'></v-calendar>
  </div>
  <div class="datePicker" v-if="rangePicker === 'one'">
    <v-calendar :value="startDate" :error="error" :show-time='showTime' :disabled='disabled' :format='format'></v-calendar>
    <span v-if="!closeGroup"> 至 </span>
    <v-calendar :value="endDate" :error="error" :show-time='showTime' :disabled='disabled' :format='format'></v-calendar>
    <span class="error" v-if="error">{{errorString}}</span>
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
    disabled: false,
    // background: true,
    defaultvalue: '',
    showTime: {
      type: Boolean,
      default: false
    },
    rangePicker: String,
    format: {
      type: String,
      default: 'yyyy-mm-dd'
    },
    orientation: {
      type: String,
      default: 'bottom auto'
    },
    closeGroup: false,
    onSearch: () => {}
  }),
  data () {
    return {
      Date: '',
      startDate: '',
      endDate: '',
      error: false,
      errorString: ''
    }
  },
  watch: {
    'startDate' (val) {
      if (Number(moment(val).format('x')) > Number(moment(this.endDate).format('x'))) {
        this.error = true
        this.errorString = '起始时间不能晚于终止时间'
      }
    },
    'endDate' (val) {
      if (Number(moment(val).format('x')) < Number(moment(this.startDate).format('x'))) {
        this.error = true
        this.errorString = '终止时间不能早于起始时间'
      }
    }
  }
}
</script>
