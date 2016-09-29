<template class="mark">
  <markdown :codeacitve="">
    <div slot="title"></div>
    <div slot="demo"></div>
    <div slot="code"><xmp></xmp></div>
  </markdown>
</template>
<script>
import markdown from '../docs/components/markdown'
export default {
  components: {
    markdown
  }
}
</script>
