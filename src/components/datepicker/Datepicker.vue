<template>
  <div class="datePicker" v-if="!rangePicker">
    <v-calendar :value="startDate" :error="error" :show-time='showTime'></v-calendar>
  </div>
  <div class="datePicker" v-if="rangePicker === 'one'">
    <v-calendar :value="startDate" :error="error"></v-calendar>
    <span v-if="!closeGroup"> 至 </span>
    <v-calendar :value="endDate" :error="error"></v-calendar>
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
      startDate: this.defaultvalue === '' ? moment().format(this.format.toUpperCase()) : moment(this.defaultvalue).format(this.format.toUpperCase()),
      endDate: moment().format(this.format.toUpperCase()),
      error: false,
      errorString: ''
    }
  }
  // watch: {
  //   'startDate' (val) {
  //     if (Number(moment(val).format('x')) > Number(moment(this.endDate).format('x'))) {
  //       this.error = true
  //       this.errorString = '起始时间不能晚于终止时间'
  //     }
  //   },
  //   'endDate' (val) {
  //     if (Number(moment(val).format('x')) < Number(moment(this.startDate).format('x'))) {
  //       this.error = true
  //       this.errorString = '终止时间不能早于起始时间'
  //     }
  //   }
  // }
}
</script>
