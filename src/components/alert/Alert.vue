<template>
  <div :class="['alert alert-dismissable alert-description alert-' + type]" v-if="visible" transition="zoom">
    <v-icon :type="iconClass"></v-icon>
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
import vIcon from '../iconfont'
import cx from 'classnames'
export default {
  props: defaultProps({
    type: oneOf(['success', 'info', 'warning', 'danger', undefined], 'success'),
    message: '',
    closable: false,
    closeText: '',
    onClose: () => {},
    description: ''
  }),
  components: {
    vIcon
  },
  data () {
    return {
      iconClass: '',
      visible: true
    }
  },
  computed: {
    iconClass() {
      const stateCls = ({
        'success': 'check',
        'info': 'info',
        'warning': 'exclamation',
        'danger': 'question'
      })[this.type] || ''
      return cx({
        [`${stateCls}-circle`]: !!this.type
      })
    }
  },
  methods: {
    close () {
      this.visible = false
      this.onClose
    }
  }
}
</script>
