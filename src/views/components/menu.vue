<template lang="md">
  # Menu

  ---

  为页面和功能提供导航的菜单列表。

  ## 何时使用

  导航菜单是一个网站的灵魂，用户依赖导航在各个页面中进行跳转。一般分为顶部导航和侧边导航，顶部导航提供全局性的类目和功能，侧边导航提供多级结构来收纳和排列网站架构。

  ## 如何使用

  ```html
  data () {
    return {
      data: [
        {'value': '欢迎页', 'path': '/components/menu'},
        {'value': '帮助', 'path': ''},
        {'value': '校园邮服务号', 'path': '', 'disabled': true},
        {'value': 'Admin', 'path': '', 'dropdown': true, 'data': [
          {'value': '个人资料', 'path': ''},
          {'value': '退出'}
        ]}
      ],
      data1: [
        {'value': '联系人', 'path': '/components/menu', 'icon': 'team'},
        {'value': '邮件模板', 'path': '', 'icon': 'save'},
        {'value': '群发任务', 'path': '', 'icon': 'folder'},
        {'value': '平台权限管理', 'path': '', 'icon': 'exception'},
        {'value': '用户管理', 'path': '', 'icon': 'solution'}
      ]
    }
  }
  ```

  ## API

  | 参数 | 说明 | 类型 | 默认值 |
  |------|-----|------|-------|
  | type | 菜单展现方式，可选`navbar`,`sidebar` | String | undefined
  | theme | 菜单主题，可选`default`,`inverse` | String | `default`
  | data | 菜单子选项和跳转链接 | Array | undefined
  | `slot="logo"` | 顶部导航左边的logo | String | undefined
  | `slot="button"` | 内嵌菜单顶部的button | String | undefined

  ## 组件演示

  <demo>
    <example title="顶部导航">
      <v-menu type="navbar" :data="data">
        <img src="../../assets/logo1.png" slot="logo" />
      </v-menu>
    </example>
    <example title="主题">
      <v-menu type="navbar" :data="data" theme="inverse">
        <img src="../../assets/logo2.png" slot="logo" />
      </v-menu>
    </example>
    <example title="内嵌菜单">
      <p>切换主题：<v-switch :default-checked="checked" :on-change="_toggle"></v-switch></p>
      <v-menu type="sidebar" :data="data1" :theme="theme">
        <div slot="button" class="sidebar-btn">
          <v-button type="primary" block size="large"><v-icon type="edit"></v-icon>群发邮件</v-button>
        </div>
      </v-menu>
    </example>
  </demo>
</template>
<script>
  import vMenu from '../../components/menu'
  import vButton from '../../components/button'
  import vIcon from '../../components/iconfont'
  import vSwitch from '../../components/switch'

  export default {
    data () {
      return {
        data: [
          {'value': '欢迎页', 'path': '/components/menu'},
          {'value': '帮助', 'path': ''},
          {'value': '校园邮服务号', 'path': '', 'disabled': true},
          {'value': 'Admin', 'path': '', 'dropdown': true, 'data': [
            {'value': '个人资料', 'path': ''},
            {'value': '退出', 'onclick': this._logout}
          ]}
        ],
        data1: [
          {'value': '联系人', 'path': '', 'icon': 'team'},
          {'value': '邮件模板', 'path': '/components/menu', 'icon': 'save'},
          {'value': '群发任务', 'path': '', 'icon': 'folder'},
          {'value': '平台权限管理', 'path': '', 'icon': 'exception'},
          {'value': '用户管理', 'path': '', 'icon': 'solution'}
        ],
        checked: false,
        theme: 'inverse'
      }
    },
    components: {
      vMenu,
      vButton,
      vIcon,
      vSwitch
    },
    events: {
      'dropdown:action' (action) {
        if (action === '退出') {
          console.log("Log Out")
        }
      }
    },
    methods: {
      _toggle (val) {
        this.theme = val ? 'default' : 'inverse'
      }
    }
  }
</script>
