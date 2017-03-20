<template>
<div class="main-wrapper">
  <aside class="aside-container">
    <ul>
      <li>
        <a v-link="{path: '/docs/introduce'}" class="">
          EDM Vue Component
          <span class="chinese"></span>
        </a>
      </li>
      <li>
        <a v-link="{path: '/docs/getting-started'}" class="">
          快速上手
          <span class="chinese"></span>
        </a>
      </li>
      <li>
        <a v-link="{path: '/docs/download'}" class="">
          下载
          <span class="chinese"></span>
        </a>
      </li>
      <li>
        <h4>Components</h4>
        <ul>
          <li class="type-divider">基本</li>
          <li v-for="component in componentsMenu.base">
            <a v-link="{path: '/components/' + component.name}" :class="{'done': component.done}">
              {{component.name | Upper}}
              <span class="chinese">{{component.desc}}</span>
            </a>
          </li>
          <li class="type-divider">表单</li>
          <li v-for="component in componentsMenu.form">
            <a v-link="{path: '/components/' + component.name}" :class="{'done': component.done}">
              {{component.name | Upper}}
              <span class="chinese">{{component.desc}}</span>
            </a>
          </li>
          <li class="type-divider">展示</li>
          <li v-for="component in componentsMenu.show">
            <a v-link="{path: '/components/' + component.name}" :class="{'done': component.done}">
              {{component.name | Upper}}
              <span class="chinese">{{component.desc}}</span>
            </a>
          </li>
          <li class="type-divider">导航</li>
          <li v-for="component in componentsMenu.pagination">
            <a v-link="{path: '/components/' + component.name}" :class="{'done': component.done}">
              {{component.name | Upper}}
              <span class="chinese">{{component.desc}}</span>
            </a>
          </li>
          <li class="type-divider">其他</li>
          <li v-for="component in componentsMenu.other">
            <a v-link="{path: '/components/' + component.name}" :class="{'done': component.done}">
              {{component.name | Upper}}
              <span class="chinese">{{component.desc}}</span>
            </a>
          </li>
          <li class="type-divider">基础</li>
          <li v-for="component in componentsMenu.basic">
            <a v-link="{path: '/components/' + component.name}" :class="{'done': component.done}">
              {{component.name | Upper}}
              <span class="chinese">{{component.desc}}</span>
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </aside>
  <section class="main-container">
    <router-view></router-view>
  </section>
</div>
</template>
<script>
export default {
  data () {
    return {
      componentsMenu: {
        base: [
          {
            name: 'button',
            desc: '按钮',
            done: true
          },
          {
            name: 'iconfont',
            desc: '图标',
            done: true
          },
          {
            name: 'layout',
            desc: '栅格',
            done: true
          }
        ],
        form: [
          {
            name: 'checkbox',
            desc: '多选框',
            done: true
          },
          {
            name: 'datepicker',
            desc: '日期选择框',
            done: true
          },
          // {
          //   name: 'form',
          //   desc: '表单'
          // },
          {
            name: 'input-number',
            desc: '数字输入框',
            done: true
          },
          {
            name: 'radio',
            desc: '单选框'
          },
          {
            name: 'select',
            desc: '选择器'
          },
          // {
          //   name: 'slider',
          //   desc: '滑动输入条'
          // },
          {
            name: 'switch',
            desc: '开关',
            done: true
          },
          {
            name: 'upload',
            desc: '文件上传'
          }
          // {
          //   name: 'validation',
          //   desc: '表单验证'
          // }
        ],
        show: [
          {
            name: 'alert',
            desc: '警告提示',
            done: true
          },
          {
            name: 'badge',
            desc: '徽标数',
            done: true
          },
          {
            name: 'carousel',
            desc: '走马灯'
          },
          {
            name: 'collapse',
            desc: '折叠面板'
          },
          {
            name: 'dropdown',
            desc: '下拉菜单'
          },
          {
            name: 'listgroup',
            desc: '列表组',
            done: true
          },
          {
            name: 'message',
            desc: '全局提示'
          },
          {
            name: 'modal',
            desc: '对话框'
          },
          {
            name: 'notification',
            desc: '通知提醒框'
          },
          {
            name: 'popconfirm',
            desc: '气泡确认框'
          },
          {
            name: 'popover',
            desc: '气泡卡片'
          },
          {
            name: 'progress',
            desc: '进度条',
            done: true
          },
          {
            name: 'table',
            desc: '表格'
          },
          {
            name: 'tag',
            desc: '标签',
            done: true
          },
          {
            name: 'spin',
            desc: '加载动画',
            done: true
          },
          {
            name: 'timeline',
            desc: '时间轴',
            done: true
          },
          {
            name: 'tooltip',
            desc: '文字提示'
          },
          {
            name: 'tree',
            desc: '树形控件'
          }
        ],
        pagination: [
          {
            name: 'breadcrumb',
            desc: '面包屑'
          },
          {
            name: 'menu',
            desc: '导航菜单'
          },
          // {
          //   name: 'pagination',
          //   desc: '分页'
          // },
          {
            name: 'steps',
            desc: '步骤条'
          }
          // {
          //   name: 'tabs',
          //   desc: '标签页'
          // }
        ],
        other: [
          {
            name: 'affix',
            desc: '固钉'
          },
          {
            name: 'queue-anim',
            desc: '进场动画'
          }
        ],
        basic: [
          {
            name: '_animate',
            desc: '动画'
          },
          {
            name: '_align',
            desc: '对齐'
          },
          {
            name: '_trigger',
            desc: '触发'
          },
          {
            name: '_notification',
            desc: '通知'
          },
          {
            name: '_tooltip',
            desc: '提示'
          },
          {
            name: '_dialog',
            desc: '对话框'
          }
        ]
      }
    }
  },
  filters: {
    Upper (str) {
      let arr = str.split('-')

      return arr.map(item => {
        return item.substring(0, 1).toUpperCase() + item.substring(1)
      }).join('')
    }
  }
}
</script>
<style lang="less">
@import "./assets/markdown.less";
@import "./assets/prism.css";

.main-wrapper{
  margin-top: 81px;
  position: relative;
}
.main-container {
  margin-left: 260px;
  padding: 30px 40px 120px;
  animation: xRightMatrix .5s ease-out;
  background: #fff;
  min-height: 500px;
}

.main-container-center {
  margin: 0 auto;
  padding: 30px 80px 120px;
  border-left: 1px solid #e9e9e9;
  border-right: 1px solid #e9e9e9;
  width: 80%;
  height: 100%;
}

.aside-container {
  width: 260px;
  background: #F9F9F9;
  padding-top: 10px;
  padding-bottom: 50px;
  float: left;
  position: absolute;
}

.aside-container > ul > li {
  overflow: hidden;
}

.aside-container li h4 {
  font-size: 14px;
  font-weight: 600;
  padding: 10px 0 10px 40px;
  margin: 0;
  color: #5C6B77;
  cursor: pointer;
  transition: background .5s, border .5s;
  border-left: 3px solid transparent;
  position: relative;
  z-index: 1;
  background: #F9F9F9;
  position: relative;
}

.aside-container li h4:after {
  position: absolute;
  top: 11px;
  right: 30px;
  content: "\e603";
  font-family: "iconfont";
  transform: scale(0.6);
  font-size: 12px;
  color: #5C6B76;
  opacity: 0;
  -webkit-transform: scale(0.6) rotate(180deg);
  transform: scale(0.6) rotate(180deg);
  transition: all 0.3s ease;
}

.aside-container li[open=open] h4:after {
  -webkit-transform: scale(0.6) rotate(0deg);
  transform: scale(0.6) rotate(0deg);
}

.aside-container li:hover h4:after {
  opacity: 0.8;
}

.aside-container li > ul.aside-list-show {
  display: block;
}

.aside-container li > ul li {
  border-left: 3px solid transparent;
}

.aside-container li a {
  line-height: 40px;
  height: 40px;
  display: block;
  padding-left: 60px;
  font-size: 14px;
  color: #5C6B76;
}

.aside-container li.type-divider {
  font-size: 12px;
  -webkit-transform:  scale(0.9);
  transform: scale(0.9);
  transform-origin: 0 50%;
  color: #aaa;
  text-shadow: 0px 1px 0px #FFF;
  margin: 6px 0 6px 48px;
}

.aside-container > ul > li > a {
  padding-left: 40px;
  font-size: 14px;
  border-left: 3px solid transparent;
}

.aside-container > ul > li.current > a {
  border-left: 0;
}

.aside-container .chinese {
  font-size: 12px;
  margin-left: 6px;
  font-weight: normal;
  opacity: 0.67;
}

.aside-container li a.done:after{
  content: "\E62E";
  font-family: "iconfont";
  font-size: 12px;
  color: #5C6B76;
  float: right;
  margin-right: 20px;
}

.aside-container li a:hover {
  color: #009B72;
}

.aside-container .current {
  background: #fff;
  border-left: 3px solid #009B72;
  color: #009B72;
}

.aside-container .current a {
  color: #009B72;
}

.aside-container .v-link-active {
  border-right: 3px solid #009B72;
  color: #009B72;
}

@media (max-width : 768px) {
  .aside-container {
    display: none;
  }
  .main-container {
    margin-left: 0
  }
}
</style>
