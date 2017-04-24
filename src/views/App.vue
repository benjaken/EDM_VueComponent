<template>
  <div>
    <header class="clearfix">
      <div class="logo">
        <img src="../assets/logo.png">
        <span style="vertical-align: sub">Beta</span>
      </div>
    </header>
    <nav class="nav">
      <ul>
        <li :class="{current: isComponentsPage}">
          <a v-link="{path: '/components'}">Components</a>
        </li>
        <li>
          <a href="https://github.com/benjaken/EDM_VueComponent">Github</a>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>
<style lang="less">
@import '../../assets/style/index';

  html,
  body {
    margin: 0;
    padding: 0;
    font-family: "Helvetica Neue",Helvetica,"Hiragino Sans GB","Microsoft YaHei","微软雅黑",SimSun,sans-serif;
    color: #777;
    font-size: 14px;
    background: #fff;
    transition: background 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  header {
    width: 100%;
    background: #293642;
    border-bottom: 1px solid #eee;
    font-size: 16px;
    height: 80px;
    top: 0;
    position: fixed;
    z-index: 1000;
  }
  .logo {
    float: left;
    height: 80px;
    line-height: 80px;
    transition: margin 0.3s cubic-bezier(0.075, 0.82, 0.165, 1) 0s, width 0.3s cubic-bezier(0.075, 0.82, 0.165, 1) 0s, height 0.3s cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
    font-size: 18px;
    font-family: "Hiragino Sans GB","Microsoft YaHei","微软雅黑",sans-serif;
    color: #fff;
    font-size: 12px;
  }
  .logo img {
    float: left;
    margin: 28px 10px 28px 40px;
    animation: rotateCircleBack 0.6s 1 ease-in-out;
  }
  #root {
    >.nav {
    margin: 0;
    padding: 0;
    position: absolute;;
    right: 60px;
    top: 20px;
    height: 40px;
    line-height: 40px;
    font-size: 0.875em;
    }
    @media (max-width : 768px) {
      >.nav {
        display: none;
      }
    }
    >.nav ul li {
      display: inline-block;
      margin: 0 0.6em;
      text-align: center;
    }
    >.nav ul li a {
      color: #728AA3;
      padding-bottom: 3px;
    }
    >.nav ul li.current a {
      border-bottom: 3px solid #21A3E9;
    }
    >.nav ul li a:hover{
      border-bottom: 3px solid #21A3E9;
    }
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
