<template>
  <div>
    <header class="clearfix">
      <a class="logo">
        <img width="50" src="../assets/logo.png">
        <span>EDM组件库 v1.0.0<span>
      </a>
    </header>
    <nav class="nav">
      <ul>
        <li :class="{current: isComponentsPage}">
          <a v-link="{path: '/components'}">Components</a>
        </li>
        <li>
          <a >Github</a>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>
<style lang="less">
  html,
  body {
    margin: 0;
    padding: 0;
    font-family: "Helvetica Neue",Helvetica,"Hiragino Sans GB","Microsoft YaHei","微软雅黑",SimSun,sans-serif;
    line-height: 1.5;
    color: #777;
    font-size: 14px;
    background: #fff;
    transition: background 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  header {
    width: 100%;
    background: #fff;
    border-bottom: 1px solid #eee;
    font-size: 16px;
    position: relative;
    height: 80px;
  }
  a.logo {
    float: left;
    height: 46px;
    line-height: 46px;
    margin: 17px 48px 17px 40px;
    transition: margin 0.3s cubic-bezier(0.075, 0.82, 0.165, 1) 0s, width 0.3s cubic-bezier(0.075, 0.82, 0.165, 1) 0s, height 0.3s cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
    font-size: 18px;
    font-family: "Hiragino Sans GB","Microsoft YaHei","微软雅黑",sans-serif;
    color: #009B72;
  }
  .logo img {
    float: left;
    margin-right: 15px;
    animation: rotateCircleBack 0.6s 1 ease-in-out;
  }
  .nav {
  margin: 0;
  padding: 0;
  position: absolute;
  right: 60px;
  top: 10px;
  height: 40px;
  line-height: 40px;
  font-size: 0.875em;
  }
  .nav ul li {
    display: inline-block;
    margin: 0 0.6em;
    text-align: center;
  }
  .nav ul li a {
    color: #728AA3;
    padding-bottom: 3px;
  }
  .nav ul li.current a {
    border-bottom: 3px solid #009B72;
  }
  .nav ul li a:hover{
    border-bottom: 3px solid #009B72;
  }
</style>
<script>
export default{
  computed: {
    isComponentsPage () {
      if (this.$route.path.indexOf('/components') === 0) return true
      return false
    }
  }
}
</script>
