<template>
  <div :class="['alert alert-dismissable alert-description alert-' + type]" v-if="!closed">
    <i :class="'icon ' + iconClass"></i>
    <span>{{message}}</span>
    <span class="description">
      <slot></slot>
    </span>
    <span v-if="closable">
      <a @click="close" class="close" v-if='closeText'>{{closeText}}</a>
      <a @click="close" class="close" v-else><i class="icon icon-cross"></i></a>
    </span>
  </div>
</template>
<script>
import {defaultProps, oneOf} from '../../views/utils/props'
export default {
  props: defaultProps({
    type: oneOf(['success', 'info', 'warning', 'danger', undefined]),
    message: {
      type: String,
      require: true
    },
    closable: Boolean,
    closeText: String,
    onClose: () => {},
    description: String
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
