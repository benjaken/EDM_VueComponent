<template lang="md">
  # Modal

  ---

  模态对话框。

  ## 何时使用

  需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作。

  ## API - Modal

  | 参数      | 说明                                     | 类型          | 默认值 |
  |-----------|-----------------------------------------|---------------|--------|
  | visible   | 对话框是否可见                            | Boolean        | false |
  | title     | 标题                                    | String         | 无     |
  | closable  | 是否显示右上角的关闭按钮                    | Boolean        | true   |
  | okText    | 确认按钮文字                              | String         | 确定   |
  | cancelText| 取消按钮文字                              | String         | 取消   |
  | confirmLoading | 确定按钮 loading                    | Boolean        | false  |
  | onOk      | 点击确定回调                              | function(e)    | 无     |
  | onCancel  | 点击遮罩层或右上角叉或取消按钮的回调          | function(e)    | 无     |
  | footer    | 底部内容，当不需要默认底部按钮时，可以设为false | Boolean        | false  |
  | maskClosable | 点击蒙层是否允许关闭                     | Boolean        | false  |
  | size      | 大小，可选lg或者sm                         | String         | 无  |

  ## API - confirmBox (仅当modal="confirmBox"生效)

  | 参数      | 说明                                     | 类型          | 默认值 |
  |-----------|-----------------------------------------|---------------|--------|
  | visible   | 确认框是否可见                            | Boolean        | false |
  | title     | 标题                                    | String         | 无     |
  | content   | 内容                                    | String         | 无     |
  | okText    | 确认按钮文字                              | String         | 确定   |
  | cancelText| 取消按钮文字                              | String         | 取消   |
  | confirmLoading | 确定按钮 loading                    | Boolean        | false  |
  | onOk      | 点击确定回调                              | function(e)    | 无     |
  | onCancel  | 点击遮罩层或右上角叉或取消按钮的回调          | function(e)    | 无     |
  | maskClosable | 点击蒙层是否允许关闭                     | Boolean        | false  |

  <demo>
    <example title="基本">
      <v-modal title="基本" :visible.sync="visible1">
        <p>这是一段modal内容</p>
      </v-modal>
      <v-button type="primary" @click="visible1 = !visible1">基本</v-button>
    </example>
    <example title="自定义文本">
      <v-modal title="自定义文本" :visible.sync="visible2" ok-text="Submit" cancel-text="Return">
        <p>这是一段modal内容</p>
      </v-modal>
      <v-button type="primary" @click="visible2 = !visible2">自定义文本</v-button>
    </example>
    <example title="异步关闭">
      <v-modal title="异步关闭" :visible.sync="visible3" :confirm-loading.sync="confirmLoading" :on-ok="_handleOk">
        <p>这是一段modal内容</p>
      </v-modal>
      <v-button type="primary" @click="visible3 = !visible3">异步关闭</v-button>
    </example>
    <example title="自定义页脚">
      <v-modal title="自定义页脚" :visible.sync="visible4" :footer="false" mask-closable :closable="false">
        <p>这是一段modal内容</p>
      </v-modal>
      <v-button type="primary" @click="visible4 = !visible4">自定义页脚</v-button>
    </example>
    <example title="大小">
      <v-modal title="大Modal" :visible.sync="visible5" size="lg">
        <p>这是一段modal内容</p>
      </v-modal>
      <v-button type="primary" @click="visible5 = !visible5">打开大Modal</v-button>
      <v-modal title="小Modal" :visible.sync="visible6" size="sm">
        <p>这是一段modal内容</p>
      </v-modal>
      <v-button type="primary" @click="visible6 = !visible6">打开小Modal</v-button>
    </example>
    <example title="确认对话框">
      <v-modal title="确认对话框" :visible.sync="visible7" modal="confirmBox" content="确认的内容"></v-modal>
      <v-button type="default" @click="visible7 = !visible7">确认对话框</v-button>
    </example>
    <example title="异步对话框">
      <v-modal title="异步对话框" :visible.sync="visible8" modal="confirmBox" content="确认的内容" :confirm-loading.sync="confirmLoading1" :on-ok="_confirm_handleOk"></v-modal>
      <v-button type="default" @click="visible8 = !visible8">异步对话框</v-button>
    </example>
    <example title="信息提示">
      <v-modal title="Info" :visible.sync="visible9" modal="confirmBox" content="some messages...some messages..." :confirm-loading.sync="confirmLoading1" :on-ok="_confirm_handleOk" type="info"></v-modal>
      <v-button type="default" @click="visible9 = !visible9">Info</v-button>
      <v-modal title="Success" :visible.sync="visible10" modal="confirmBox" content="some messages...some messages..." :confirm-loading.sync="confirmLoading1" :on-ok="_confirm_handleOk" type="check"></v-modal>
      <v-button type="default" @click="visible10 = !visible10">Success</v-button>
      <v-modal title="Error" :visible.sync="visible11" modal="confirmBox" content="some messages...some messages..." :confirm-loading.sync="confirmLoading1" :on-ok="_confirm_handleOk" type="cross"></v-modal>
      <v-button type="default" @click="visible11 = !visible11">Error</v-button>
      <v-modal title="Warning" :visible.sync="visible12" modal="confirmBox" content="some messages...some messages..." :confirm-loading.sync="confirmLoading1" :on-ok="_confirm_handleOk" type="exclamation"></v-modal>
      <v-button type="default" @click="visible12 = !visible12">Warning</v-button>
    </example>
  </demo>
</template>
<script>
    import vModal from '../../components/modal'
    import vButton from '../../components/button'
    export default {
      data () {
        return {
          visible1: false,
          visible2: false,
          visible3: false,
          visible4: false,
          visible5: false,
          visible6: false,
          visible7: false,
          visible8: false,
          visible9: false,
          visible10: false,
          visible11: false,
          visible12: false,
          confirmLoading: false,
          confirmLoading1: false
        }
      },
      components: {
        vModal,
        vButton
      },
      methods: {
        _handleOk () {
          var self = this
          self.confirmLoading = true
          setTimeout(() => {
            self.visible3 = false
            self.confirmLoading = false
          }, 2000)
        },
        _confirm_handleOk () {
          var self = this
          self.confirmLoading1 = true
          setTimeout(() => {
            self.visible8 = false
            self.confirmLoading1 = false
          }, 2000)
        }
      }
    }
</script>
