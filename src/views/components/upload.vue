<template lang="md">
  # Upload

  ---

  文件选择上传和拖拽上传控件。

  ## 何时使用

  上传是将信息（网页、文字、图片、视频等）通过网页或者上传工具发布到远程服务器上的过程。

  - 当需要上传一个或一些文件时。
  - 当需要展现上传的进度时。
  - 当需要使用拖拽交互时。

  ## API

  | 参数 | 说明 | 类型 | 默认值 |
  |------------|--------------------------------------------------------------| ----------- |-------|
  | operation | 必填参数, 上传的地址 | String | '' |
  | headers | 设置上传的请求头部 | Object | {} |
  | multiple | 是否支持多选文件 | Boolean | false |
  | data | 上传时附带的额外参数 | Object | {} |
  | name | 上传的文件字段名 | String | `file` |
  | withCredentials | 支持发送`cookie`凭证信息 | Boolean | false |
  | showUploadList | 是否显示已上传文件列表 | Boolean | true |
  | type | 上传控件的类型，可选值为`select`（点击选择），`drag`（支持拖拽） | String | `select` |
  | accept | 接受上传的文件类型 | String | undefined |
  | format | 支持的文件类型，与 accept 不同的是，format 是识别文件的后缀名，accept 为 input 标签原生的 accept 属性，会在选择文件时过滤，可以两者结合使用 | Array | [] |
  | maxSize | 文件大小限制，单位`kb` | Number | 2048 |
  | beforeUpload | 上传文件之前的钩子，参数为上传的文件，若返回 false 或者 Promise 则停止上传 | function |  |
  | onProgress | 文件上传时的钩子，返回字段为 `event`, `file`, `fileList` | function |  |
  | onSuccess | 文件上传成功时的钩子，返回字段为 `response`, `file`, `fileList` | function |  |
  | onError | 文件上传失败时的钩子，返回字段为 `error`, `file`, `fileList` | function |  |
  | onPreview | 点击已上传的文件链接时的钩子，返回字段为`file`， 可以通过 file.response 拿到服务端返回数据 | function |  |
  | onRemove | 文件列表移除文件时的钩子，返回字段为 `file`, `fileList` | function |  |
  | onFormatError | 文件格式验证失败时的钩子，返回字段为 `file`, `fileList` | function |  |
  | onExceededSize | 文件超出指定大小限制时的钩子，返回字段为 `file`, `fileList` | function |  |
  | defaultFileList | 默认已上传的文件列表 | Array | [] |

  ### defaultFileList

  ```js
  [{
    name: 'image1.jpg',
    url: 'http://www.xxx.com/image1.jpg'
  }, {
    name: 'image2.jpg',
    url: 'http://www.xxx.com/image2.jpg'
  }]
  ```

  ## 组件演示

  <demo>
    <example title="基本">
      <v-upload :on-exceeded-size="onExceededSize">
        <v-button type="default"><v-icon type="upload"></v-icon>上传文件</v-button>
      </v-upload>
    </example>
    <example title="多选">
      <v-upload :on-exceeded-size="onExceededSize" multiple>
        <v-button type="default"><v-icon type="upload"></v-icon>上传文件</v-button>
      </v-upload>
    </example>
    <example title="拖拽上传">
      <v-upload :on-exceeded-size="onExceededSize" multiple type="drag">
        <div class="drag">
          <v-icon type="upload"></v-icon>
          <p>点击或将文件拖拽到这里上传</p>
        </div>
      </v-upload>
    </example>
  </demo>
</template>
<style scoped lang="less">
  .drag {
    padding: 20px 0;

    .icon {
      font-size: 24px;
      color: #21A3E9;
    }
  }
</style>
<script>
export default {
  methods: {
    onExceededSize (file, fileList) {
      console.log(file.name, fileList)
    }
  }
}
</script>
