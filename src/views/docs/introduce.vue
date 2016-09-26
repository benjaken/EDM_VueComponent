<template class="mark">
<div v-html="markdown">
</div>
<button type="button" onclick="showMarkdown" class="markdownBtn">+ <span>打开MarkDown编辑器</span></button>
<div class="markdownContent" :class="acitve"></div>
<textarea v-model="text" style="width:100%;border: 1px solid #eee;height: 100px;line-height:1.2">
# EDM Design of Vue

---

这里是用Vue 实现EDM组件库，开发和服务于企业级后台产品。

## 特性

+ Designed as EDM.
+ 基于 Vue 的组件化开发模式。
+ 背靠 npm 生态圈。
+ 基于 webpack 的调试构建方案，支持 ES6。

## 示例


## 版本


## 谁在使用

- 本人

## 如何贡献

我们欢迎任何形式的贡献，有任何建议或意见您可以进行 [Pull Request]，或者给我们[提问]。

```
Sample text here...
```
</textarea>
</template>
<style>
.markdownBtn{
  position: fixed;
  bottom: 30px;
  right: 30px;
  width:50px;
  height: 50px;
  background: #fff;
  color: #728AA3;
  border: 1px solid #eee;
  border-radius: 50%;
  cursor: pointer;
  font-size: 18px;
  transition: width ease .2s;
}
.markdownBtn span{
  font-size: 14px;
  line-height: 18px;
  display: none;
}
.markdownBtn:hover{
  width: 200px;
  border-radius: 10px;
  background: #009B72;
  color: #fff;
}
.markdownBtn:hover span{
  display: inline;
}
.markdownContent{
  position: fixed;
  top:100%;
  width: 100%;
  height: 100%;
  background: #ccc;
  display: none;
  transition: top ease .2s;
}
.markdownContent.active{
  top: 81px;
}
</style>
<script>
  var MarkdownIt = require('markdown-it')
  export default{
    data () {
      return {
        text: '',
        markdown: '',
        acitve: false
      }
    },
    watch: {
      'text': function (val) {
        var md = new MarkdownIt()
        this.markdown = md.render(val)
      }
    },
    method: {
      showMarkdown: function () {
        this.active = true
      }
    }
  }
</script>
