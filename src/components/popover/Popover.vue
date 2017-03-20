<template>
  <div class="popover fade top in" role="tooltip">
    <div class="arrow" style="left: 50%;"></div>
    <h3 class="popover-title" style="display: none;"></h3>
    <div class="popover-content">Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</div>
  </div>
  <slot></slot>
</template>
<script>
  import {defaultProps} from '../../views/utils/props'
  export default {
    props: defaultProps({
      title: String,
      content: String
    })
  }
</script>
