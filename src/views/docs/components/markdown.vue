<template>
  <!-- markdown -->
  <div v-html="markdown" class="markdown" :class="{active: active}">
  </div>
  <!-- editor -->
  <button type="button" v-on:click="showMarkdown()" class="markdownOpenBtn">+ <span>打开MarkDown编辑器</span></button>
  <div class="markdownContent" :class="{active: active}">
    <div class="markdownCloseBtn" v-on:click="showMarkdown()">
      <span>></span>
    </div>
    <div id="editor" style="min-height:500px">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  import WangEditor from 'wangeditor'
  import { defaultProps } from '../../utils/props'
  import cx from 'classnames'
  var MarkdownIt = require('markdown-it')
  export default{
    props: defaultProps({
      codeacitve: {
        type: Boolean
      }
    }),
    ready () {
      var self = this
      // 创建编辑器
      self.editor = new WangEditor('editor')
      self.editor.config.printLog = false
      self.editor.config.menus = [
        'source',
        '|',
        'bold',
        'underline',
        'italic',
        'strikethrough',
        'eraser',
        'forecolor',
        'bgcolor'
      ]
      self.editor.create()
      self.text = self.editor.$txt.html().replace("<p><br></p>", "")
      self.editor.onchange = function () {
        self.text = self.editor.$txt.html().replace("<p><br></p>", "")
      }
    },
    data () {
      return {
        text: '',
        markdown: '',
        active: 0,
        editor: '',
        code: '',
        arr: {}
      }
    },
    methods: {
      showMarkdown: function () {
        let self = this
        self.active = self.active === 0 ? 1 : 0
      }
    },
    watch: {
      'text': function (val) {
        var md = new MarkdownIt()
        this.markdown = md.render(val)
      }
    },
    computed: {
      codeClasses () {
        return cx({
          [`show`]: this.codeacitve
        })
      }
    }
  }
</script>

<style>

.markdown.active{
  padding-right: 400px;
  transition: all ease .2s;
}
.markdownOpenBtn{
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
.markdownOpenBtn span{
  font-size: 14px;
  line-height: 18px;
  display: none;
}
.markdownOpenBtn:hover{
  width: 200px;
  border-radius: 10px;
  background: #009B72;
  color: #fff;
}
.markdownOpenBtn:hover span{
  display: inline;
}
.markdownCloseBtn{
  position: absolute;
  top: 40%;
  margin-left: -22px;
  border: 1px solid #eee;
  padding: 60px 20px;
  border-radius: 50%;
  background-color: white;
  font-size: 12px;
  text-align: left;
  cursor: pointer;
}
.markdownCloseBtn span {
  margin-left: -10px;
}
.markdownContent{
  position: fixed;
  top: 81px;
  right: 0;
  bottom: 0;
  width: 0px;
  height: 100%;
  background: #fff;
  display: none;
  border-left: 1px solid #eee;
  transition: all ease .8s;
}
.markdownContent.active{
  width: 400px;
  display: block;
}
.wangEditor-container{
  border: none;
  height: 100%;
}
.code{
  display: none;
  position: relative;
}
.code.show{
  display: block;
}
.code.active {
  padding-right: 400px;
}
</style>
