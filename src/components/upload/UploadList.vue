<template>
  <ul :class="prefixCls">
    <li v-for="file in files" :class="fileClasses(file)" @click="handleClick(file)" :id="file.uid">
      <span @click="_handlePreview(file)">
        <v-icon type="file"></v-icon> {{file.name}}
      </span>
      <v-icon type="remove" :class="prefixCls + '-remove'" v-show="file.status === 'finished'" @click="_handleRemove(file)"></v-icon>
      <v-progress v-if="file.showProgress" :percentage="_parsePercentage(file.percentage)" :type="_parseType(file)" show-min active></v-progress>
    </li>
  </ul>
</template>
<script>
  import {defaultProps} from '../../views/utils/props'
  import cx from 'classnames'
  import vIcon from '../iconfont'
  import vProgress from '../progress'

  export default {
    props: defaultProps({
      prefixCls: 'upload-list',
      files: []
    }),
    components: {
      vIcon,
      vProgress
    },
    methods: {
      fileClasses (file) {
        return cx({
          [`${this.prefixCls}-file`]: 1,
          [`${this.prefixCls}-file-finish`]: file.status === 'finished'
        })
      },
      _handleClick (file) {
        this.$emit('on-file-click', file)
      },
      _handlePreview (file) {
        this.$emit('on-file-preview', file)
      },
      _handleRemove (file) {
        this.$emit('on-file-remove', file)
      },
      _parsePercentage (val) {
        return parseInt(val, 10)
      },
      _parseType (file) {
        if (file.showProgress) {
          switch (file.status) {
            case 'finished':
              return 'success'
            case 'failed':
              return 'danger'
          }
        }
      }
    }
  }
</script>
