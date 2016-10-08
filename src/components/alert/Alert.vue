<template>
  <div :class="'alert alert-dismissable alert-' + type" v-if="!closed">
    <i :class="'icon ' + iconClass"></i>
    <span>{{message}}</span>
    <a @click="close" class="close" v-if='closable'><i class="icon icon-cross"></i></a>
  </div>
</template>
<script>
import {defaultProps, oneOf} from '../../views/utils/props'
export default {
  props: defaultProps({
    prefixCls: 'alert',
    type: oneOf(['success', 'info', 'warning', 'danger', undefined]),
    message: {
      type: String,
      require: true
    },
    closable: Boolean
  }),
  data () {
    return {
      iconClass: '',
      closed: false
    }
  },
  computed: {
    iconClass() {
      let iconClass = 'icon-'
      switch (this.type) {
        case 'success':
          iconClass += 'check-circle'
          break

        case 'info':
          iconClass += 'info-circle'
          break

        case 'warning':
          iconClass += 'exclamation-circle'
          break

        case 'danger':
          iconClass += 'question-circle'
          break

        default:
          iconClass += 'default'
      }
      return iconClass
    }
  },
  methods: {
    close () {
      this.closed = true
      return this.closed
    }
  }
}
</script>
