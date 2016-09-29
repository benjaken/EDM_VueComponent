<template>
  <div class="404" style="text-align: center;margin:200px">
    <img src="../assets/404.png" width="300px">
    <div><vbutton type="default" v-link="{path: '/components/'}">返回首页</v-button></div>
  </div>
</template>
<script>
  import vbutton from '../components/button'
  export default {
    components: {
      vbutton
    }
  }
</script>
