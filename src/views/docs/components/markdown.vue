<template>
  <div v-html="markdown" class="markdown" :class="{active: active}">
  </div>
  <button type="button" v-on:click="showMarkdown()" class="markdownOpenBtn">+ <span>打开MarkDown编辑器</span></button>
  <div class="markdownContent" :class="{active: active}">
    <div class="markdownCloseBtn" v-on:click="showMarkdown()">
      <span>></span>
    </div>
    <div id="editor" style="min-height:500px">
      <slot></slot>
    </div>
  </div>
  <div v-cloak id="code">
    <slot name="title"></slot>
    <slot name="demo"></slot>
    <slot name="code"></slot>
  </div>
  <div class="code" :class="{active: active}, codeClasses">
  </div>
</template>
<script>
  import WangEditor from 'wangeditor'
  import './assets/wangEditor.css'
  import $ from 'jquery'
  import { defaultProps } from '../../utils/props'
  import cx from 'classnames'

  var MarkdownIt = require('markdown-it')
  export default{
    props: defaultProps({
      codeacitve: {
        type: Boolean
      }
    }),
    compile () {
      console.log($('body').html())
    },
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
        // onchange 事件中更新数据
        self.text = self.editor.$txt.html().replace("<p><br></p>", "")
      }
      self.code = $('.code-box-demo > div').html()
      $.each($('#code > div[slot^=title]'), function (i) {
        $(this).attr('id', i + 1)
      })
      $.each($('#code > div[slot^=demo]'), function (i) {
        $(this).attr('id', i + 1)
      })
      $.each($('#code > div[slot^=code]'), function (i) {
        $(this).attr('id', i + 1)
      })
      var line = $('#code > div').length / 3
      for (var i = 1; i <= line; i++) {
        $('.code').append("<div class='code-box' id='" + i + "'><h3 class='title'></h3><div class='code-boxes-col-2-1 code-box-demo'></div><div class='code-boxes-col-2-1 code-box-code markdown'></div>")
        $('#code > div[id^=' + i + ']').each(function () {
          if ($(this).attr('slot') === "title") {
            $('.code .code-box[id^=' + i + '] .title').append($(this).text())
          }
          if ($(this).attr('slot') === "demo") {
            $('.code .code-box[id^=' + i + '] .code-box-demo').append($(this).html())
          }
          if ($(this).attr('slot') === "code") {
            $('.code .code-box[id^=' + i + '] .code-box-code').append($(this).html())
          }
        })
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
    watch: {
      'text': function (val) {
        var md = new MarkdownIt()
        this.markdown = md.render(val)
      }
    },
    methods: {
      showMarkdown: function () {
        let self = this
        self.active = self.active === 0 ? 1 : 0
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
@import "./assets/markdown.css";

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
.code-box {
  border: 1px solid #E9E9E9;
  border-radius: 6px;
  margin-bottom:15px;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
  position: relative;
}
.code-box h3 {
  margin: 1em 1em 0;
  font-size: 14px;
}
.code-boxes-col-2-1 {
  width:49%;
  padding: 1.2em 1em;
  display: inline-block;
  vertical-align: top;
  position: relative;
}
.code-box-code pre {
  max-height: 300px;
  margin: 1em;
  border: none;
  overflow: auto;
  white-space: normal;
}
.code-box-code xmp{
  max-height: 300px;
  border: none;
  overflow: auto;
  white-space: pre;
}
@media (max-width : 768px) {
  .code-boxes-col-2-1 {
    width: 100%
  }
  .markdown xmp{
    margin: 0
  }
}
</style>
