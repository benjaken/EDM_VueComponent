<template>
  <div class="thumbnail" :style="'width:' + width + 'px'">
    <slot name="image"></slot>
    <div class="caption">
      <h3>{{title}}</h3>
      <slot></slot>
    </div>
  </div>
</template>
<script>
    import {defaultProps} from '../../views/utils/props'

    export default {
      props: defaultProps({
        width: 300,
        title: ''
      })
    }
</script>
