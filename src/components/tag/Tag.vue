<template>
  <span :class="'label label-' + type" v-if="show">
    <a :href='href'><slot></slot></a>
    <v-icon v-if="closable" type="cross" @click="_close()"></v-icon>
  </span>
</template>
<script>
import {defaultProps, oneOf} from '../../views/utils/props'
import vIcon from '../iconfont'
export default {
  props: defaultProps({
    href: String,
    closable: false,
    onClose: () => {},
    type: oneOf(['primary', 'info', 'warning', 'danger'], 'default')
  }),
  components: { vIcon },
  data () {
    return {
      show: true
    }
  },
  methods: {
    _close (e) {
      this.show = false
    }
  }
}
</script>
