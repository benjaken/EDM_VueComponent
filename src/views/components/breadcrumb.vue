<template lang="md">
  # Breadcrumb

  ---

  显示当前页面在系统层级结构中的位置，并能向上返回。

  ## 何时使用

  - 当系统拥有超过两级以上的层级结构时；
  - 当需要告知用户『你在哪里』时；
  - 当需要向上导航的功能时。

  ## 如何使用

  ```html
  data () {
    return {
      data: [{
        name: 'first',
        link: '/index'
      }, {
        name: 'second',
        link: '/index'
      }, {
        name: 'third',
        link: '',
        active: true
      }],
      data1: [{
        link: '/index',
        icon: 'home'
      }, {
        name: 'second',
        link: '/index',
        icon: 'user'
      }, {
        name: 'third',
        link: '',
        active: true
      }]
    }
  ```

  ## API

  | 参数           | 说明                             | 类型       | 默认值 |
  |----------------|----------------------------------|------------|--------|
  | data           | 传到控件的数据集合，包括icon，name，link，active | Array | 无 |

  ## 组件演示
  <demo>
    <example title="基本">
      <v-breadcrumb :data="data"></v-breadcrumb>
    </example>
    <example title="带有图标的">
      <v-breadcrumb :data="data1"></v-breadcrumb>
    </example>
  </demo>
</template>
<script>
  import vBreadcrumb from '../../components/breadcrumb'

  export default {
    data () {
      return {
        data: [{
          name: 'first',
          link: '/index'
        }, {
          name: 'second',
          link: '/index'
        }, {
          name: 'third',
          link: '',
          active: true
        }],
        data1: [{
          link: '/index',
          icon: 'home'
        }, {
          name: 'second',
          link: '/index',
          icon: 'user'
        }, {
          name: 'third',
          link: '',
          active: true
        }]
      }
    },
    components: {
      vBreadcrumb
    }
  }
</script>
