<template>
  <div class="modal-backdrop" v-show="visible" @click="_backCloseModal()" transition="backdropFade"></div>
  <div class="modal confirmBox" v-if="modal === 'confirmBox' && visible" transition="fadeIn">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body">
          <div class="confirm-body">
            <v-icon :type="type + '-circle'"></v-icon>
            <span class="confirm-title">{{title}}</span>
            <div class="confirm-content">
              <p>{{content}}</p>
            </div>
          </div>
          <div class="confirm-btns" v-if="type == 'question'">
            <v-button type="primary" :loading="confirmLoading" @click="onOk()">{{okText}}</v-button>
            <v-button type="default" @click="_closeModal()">{{cancelText}}</v-button>
          </div>
          <div class="confirm-btns" v-else>
            <v-button type="primary" :loading="confirmLoading" @click="_closeModal()">{{okText}}</v-button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="modal" v-if="modal === 'modal' && visible" transition="fadeIn">
    <div class="modal-dialog" :class="'modal-' + size">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" @click="_closeModal()" v-if="closable"><v-icon type="cross"></v-icon></button>
          <h4 class="modal-title">{{title}}</h4>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
        <div class="modal-footer" v-if="footer">
          <v-button type="primary" :loading="confirmLoading" @click="onOk()">{{okText}}</v-button>
          <v-button type="default" @click="_closeModal()">{{cancelText}}</v-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {defaultProps, oneOf} from '../../views/utils/props'
  import vButton from '../button'
  import vIcon from '../iconfont'
  // import cx from 'classnames'
  export default {
    props: defaultProps({
      title: '',
      visible: false,
      closable: true,
      okText: '确定',
      cancelText: '取消',
      confirmLoading: false,
      footer: true,
      maskClosable: false,
      size: '',
      modal: oneOf(['modal', 'confirmBox'], 'modal'),
      type: 'question',
      content: '',
      onOk: () => {},
      onCancel: () => {}
    }),
    methods: {
      _closeModal () {
        var self = this
        self.visible = false
        self.onCancel()
      },
      _backCloseModal () {
        var self = this
        if (self.maskClosable) {
          self.visible = false
        }
      }
    },
    components: {
      vButton,
      vIcon
    }
  }
</script>
