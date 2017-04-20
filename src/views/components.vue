<template>
<div class="main-wrapper">
  <aside class="aside-container">
    <ul>
      <li>
        <a v-link="{path: '/docs/introduce'}" class="">
          EDM Component
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
          <li class="type-divider">General</li>
          <li v-for="component in componentsMenu.general">
            <a v-link="{path: '/components/' + component.name}" :class="{'done': component.done}">
              {{component.name | Upper}}
              <span class="chinese">{{component.desc}}</span>
            </a>
          </li>
          <li class="type-divider">Layout</li>
          <li v-for="component in componentsMenu.layout">
            <a v-link="{path: '/components/' + component.name}" :class="{'done': component.done}">
              {{component.name | Upper}}
              <span class="chinese">{{component.desc}}</span>
            </a>
          </li>
          <li class="type-divider">Navigation</li>
          <li v-for="component in componentsMenu.navigation">
            <a v-link="{path: '/components/' + component.name}" :class="{'done': component.done}">
              {{component.name | Upper}}
              <span class="chinese">{{component.desc}}</span>
            </a>
          </li>
          <li class="type-divider">DataEntry</li>
          <li v-for="component in componentsMenu.dataEntry">
            <a v-link="{path: '/components/' + component.name}" :class="{'done': component.done}">
              {{component.name | Upper}}
              <span class="chinese">{{component.desc}}</span>
            </a>
          </li>
          <li class="type-divider">DataDisplay</li>
          <li v-for="component in componentsMenu.dataDisplay">
            <a v-link="{path: '/components/' + component.name}" :class="{'done': component.done}">
              {{component.name | Upper}}
              <span class="chinese">{{component.desc}}</span>
            </a>
          </li>
          <li class="type-divider">Feedback</li>
          <li v-for="component in componentsMenu.feedback">
            <a v-link="{path: '/components/' + component.name}" :class="{'done': component.done}">
              {{component.name | Upper}}
              <span class="chinese">{{component.desc}}</span>
            </a>
          </li>
          <li class="type-divider">Other</li>
          <li v-for="component in componentsMenu.other">
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
        general: [
          {
            name: 'button',
            desc: '按钮',
            done: true
          },
          {
            name: 'iconfont',
            desc: '图标',
            done: true
          }
        ],
        layout: [
          {
            name: 'grid',
            desc: '栅格',
            done: true
          }
        ],
        navigation: [
          {
            name: 'affix',
            desc: '固钉'
          },
          {
            name: 'breadcrumb',
            desc: '面包屑',
            done: true
          },
          {
            name: 'backtop',
            desc: '回到顶部',
            done: true
          },
          {
            name: 'dropdown',
            desc: '下拉菜单',
            done: true
          },
          {
            name: 'menu',
            desc: '导航菜单'
          },
          {
            name: 'pagination',
            desc: '分页'
          },
          {
            name: 'steps',
            desc: '步骤条'
          },
          {
            name: 'tabs',
            desc: '标签页',
            done: true
          }
        ],
        dataEntry: [
          {
            name: 'auto-complete',
            desc: '自动完成'
          },
          {
            name: 'cascader',
            desc: '级联选择'
          },
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
          {
            name: 'form',
            desc: '表单'
          },
          {
            name: 'input-number',
            desc: '数字输入框',
            done: true
          },
          {
            name: 'input',
            desc: '输入框',
            done: true
          },
          {
            name: 'mention',
            desc: '提及'
          },
          {
            name: 'rate',
            desc: '评分'
          },
          {
            name: 'radio',
            desc: '单选框',
            done: true
          },
          {
            name: 'select',
            desc: '选择器'
          },
          {
            name: 'slider',
            desc: '滑动输入条'
          },
          {
            name: 'switch',
            desc: '开关',
            done: true
          },
          {
            name: 'tree-select',
            desc: '树选择'
          },
          {
            name: 'transfer',
            desc: '穿梭框'
          },
          {
            name: 'upload',
            desc: '文件上传'
          }
        ],
        dataDisplay: [
          {
            name: 'badge',
            desc: '徽标数',
            done: true
          },
          {
            name: 'calendar',
            desc: '日历'
          },
          {
            name: 'card',
            desc: '卡片',
            done: true
          },
          {
            name: 'carousel',
            desc: '走马灯'
          },
          {
            name: 'collapse',
            desc: '折叠面板',
            done: true
          },
          {
            name: 'popover',
            desc: '气泡卡片'
          },
          {
            name: 'tooltip',
            desc: '文字提示'
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
            name: 'timeline',
            desc: '时间轴',
            done: true
          },
          {
            name: 'tree',
            desc: '树形控件'
          }
        ],
        feedback: [
          {
            name: 'alert',
            desc: '警告提示',
            done: true
          },
          {
            name: 'modal',
            desc: '对话框',
            done: true
          },
          {
            name: 'message',
            desc: '全局提示'
          },
          {
            name: 'notification',
            desc: '通知提醒框'
          },
          {
            name: 'progress',
            desc: '进度条',
            done: true
          },
          {
            name: 'popconfirm',
            desc: '气泡确认框'
          },
          {
            name: 'spin',
            desc: '加载动画',
            done: true
          }
        ],
        other: [
          {
            name: 'anchor',
            desc: '锚点'
          },
          {
            name: 'locale-provider',
            desc: '国际化'
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
  text-decoration: none;
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
  color: #21A3E9;
}

.aside-container .current {
  background: #fff;
  border-left: 3px solid #21A3E9;
  color: #21A3E9;
}

.aside-container .current a {
  color: #21A3E9;
}

.aside-container .v-link-active {
  border-right: 3px solid #21A3E9;
  color: #21A3E9;
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
