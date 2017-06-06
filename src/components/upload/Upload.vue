<template>
  <div :class="prefixCls">
    <div :class="uploadClasses" @click="_handleClick" @drop.prevent="onDrop" @dragover.prevent="dragOver = true" @dragleave.prevent="dragOver = false">
      <input type="file" :class="prefixCls + '-input'" v-el:input @change="_handleChange" :multiple="multiple" :accept="accept" />
      <slot></slot>
    </div>
    <slot name="tip"></slot>
    <v-upload-list v-if="showUploadList" :files="fileList" @on-file-remove="_handleRemove" @on-file-preview="_handlePreview"></v-upload-list>
  </div>
</template>
<script>
  import {defaultProps} from '../../views/utils/props'
  import cx from 'classnames'
  import vUploadList from './UploadList'

  export default {
    props: defaultProps({
      prefixCls: 'upload',
      operation: '',
      multiple: false,
      headers: {},
      data: {},
      name: 'file',
      withCredentials: false, // 支持发送 cookie 凭证信息
      showUploadList: true,
      type: 'select',
      accept: '',
      format: [],
      maxSize: 2048,
      beforeUpload: () => {},
      onProgress: () => {},
      onSuccess: () => {},
      onError: () => {},
      onPreview: () => {},
      onRemove: () => {},
      onFormatError: () => {},
      onExceededSize: () => {},
      defaultFileList: []
    }),
    data () {
      return {
        dragOver: false,
        fileList: [],
        tempIndex: 1
      }
    },
    computed: {
      uploadClasses () {
        return cx({
          [this.prefixCls]: 1,
          [`${this.prefixCls}-select`]: this.type === 'select',
          [`${this.prefixCls}-drag`]: this.type === 'drag',
          [`${this.prefixCls}-dragOver`]: this.type === 'drag' && this.dragOver
        })
      }
    },
    methods: {
      _handleClick () {
        this.$els.input.click()
      },
      _handleChange (e) {
        const files = e.target.files
        if (!files) return
        this._uploadFiles(files)
        this.$els.input.value = null
      },
      onDrop (e) {
        this.dragOver = false
        this._uploadFiles(e.dataTransfer.files)
      },
      _uploadFiles (files) {
        let postFiles = Array.prototype.slice.call(files)
        if (!this.multiple) postFiles = postFiles.slice(0, 1)
        if (postFiles.length === 0) return
        postFiles.forEach(file => {
          this._upload(file)
        })
      },
      _upload (file) {
        if (!this.beforeUpload) {
          this._post(file)
        }

        const before = this.beforeUpload(file)
        if (before && before.then) {
          before.then(processedFile => {
            if (Object.prototype.toString.call(processedFile) === '[object File]') {
              this._post(processedFile)
            } else {
              this.post(file)
            }
          })
        } else if (before !== false) {
          this._post(file)
        }
      },
      _post (file) {
        if (this.maxSize) {
          if (file.size > this.maxSize * 1024) {
            this.onExceededSize(file, this.fileList)
            return false
          }
        }
        this._handleStart(file)
        // ajax({
        //   headers: this.headers,
        //   withCredentials: this.withCredentials,
        //   file: file,
        //   data: this.data,
        //   filename: this.name,
        //   operation: this.operation,
        //   onProgress: e => {
        //     this._handleProgress(e, file)
        //   },
        //   onSuccess: e => {
        //     this._handleSuccess(res, file)
        //   },
        //   onError: e => {
        //     this._handleError(err, response, file)
        //   }
        // })
      },
      _handleStart (file) {
        file.uid = Date.now() + this.tempIndex++
        const _file = {
          status: 'uploading',
          name: file.name,
          size: file.size,
          percentage: 0,
          uid: file.uid,
          showProgress: true
        }
        this.fileList.push(_file)
      },
      _getFile (file) {
        const fileList = this.fileList
        let target
        fileList.every(item => {
          target = file.uid === item.uid ? item : null
          return !target
        })
        return target
      },
      _handleProgress (e, file) {
        const _file = this._getFile(file)
        this.onProgress(e, _file, this.fileList)
        _file.percentage = e.percent || 0
      },
      _handleSuccess (res, file) {
        const _file = this._getFile(file)
        if (_file) {
          _file.status = 'finished'
          _file.response = res
          this.dispath('FormItem', 'on-form-change', _file)
          this.onSuccess(res, _file, this.fileList)
          setTimeout(() => {
            _file.showProgress = false
          }, 1000)
        }
      },
      _handleError (error, response, file) {
        const _file = this._getFile(file)
        const fileList = this.fileList
        _file.status = 'failed'
        fileList.splice(fileList.indexOf(file), 1)
        this.onError(error, file, fileList)
      },
      _handleRemove (file) {
        const fileList = this.fileList
        fileList.splice(fileList.indexOf(file), 1)
        this.onRemove(file, fileList)
      },
      _handlePreview (file) {
        if (file.status === 'finished') {
          this.onPreview(file)
        }
      },
      _clearFiles () {
        this.fileList = []
      }
    },
    components: {
      vUploadList
    },
    watch: {
      'defaultFileList': {
        immediate: false,
        handler (fileList) {
          this.fileList = fileList.map(item => {
            item.status = 'finished'
            item.percentage = 100
            item.uid = Date.now() + this.tempIndex++
            return item
          })
        }
      }
    }
  }
</script>
