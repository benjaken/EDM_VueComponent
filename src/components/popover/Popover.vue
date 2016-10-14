<template>
  <div>
    <div class="tooltip top" role="tooltip">
      <div class="tooltip-inner">
        <div class="tooltip-inner-title">{{title}}</div>
        <div class="tooltip-inner-content"><span>{{content}}</span></div>
        <div class="tooltip-arrow"></div>
      </div>
    </div>
    <slot></slot>
  </div>
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
