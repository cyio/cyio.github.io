# cropperjs

## vue-cropperjs
```js
import VueCropper from 'vue-cropperjs'

  components: {
    VueCropper,
  },
  data() {
    return {
      cropper: {
        img: null,
        aspectRatio: 1,
        preview: '.preview-item',
        guides: false,
      },
    }
  },
  // 设置图片源
  setSourceImg(file) {
    const fr = new FileReader();
    fr.onload = () => {
      this.cropper.img = fr.result;
      this.showSelectCover = false
    }
    fr.readAsDataURL(file);
  },
  // 检测选择的文件是否合适
  checkFile(file) {
    // 仅限图片
    if (file.type.indexOf('image') === -1) {
      this.errorMsg = '只能是图片'
      return false;
    }
    // 超出大小
    if (file.size > this.maxImgSize * 1024 * 1024) {
      this.errorMsg = `超出最大尺寸 ${this.maxImgSize} Mb`
      return false;
    }
    return true;
  },
  blobToFile (theBlob, fileName) {
    theBlob.lastModifiedDate = new Date()
    theBlob.name = fileName
    return theBlob
  },
  onSave() {
    this.$refs.cropper.getCroppedCanvas({ width: 180 }).toBlob(blobData => {
      const blob = blobData
      const newFile = this.blobToFile(blob, 'upload.png')
      const formData = new FormData()
      formData.append('file', newFile, newFile.name)
      api.uploadImage(formData).then(res => {
        const { code, data } = res.data
        if (code === 0) {
          api.updateAvatar(data, this.userType).then(resp => {
            if (resp.data.code === 0) {
              this.$message.success('保存成功')
              this.reset()
              return
            }
            this.$message.error('保存错误，请稍后再试')
          })
          this.$emit('onDone', data)
          return
        }
        console.warn(data)
      })
    })
  },
  rotate(degree) {
    this.$refs.cropper.rotate(degree)
  }
```

```pug
    .crop-wrap(:class="{ 'when-crop': !showSelectCover }")
        .select-cover(
            v-if="showSelectCover"
            @dragleave="preventDefault"
            @dragover="preventDefault"
            @dragenter="preventDefault"
            @click="handleClick"
            @drop="handleChange"
        )
            .select-inner
                // img(src="@/assets/select-cover.jpg")
                .icon.icon-upload
                .text 拖动图片到虚框内上传
                .sub-text 仅支持 JPG、PNG 图片，文件小于4M
                label.ajz-btn(for="file-upload") 选择图片
                input(type='file', id="file-upload" v-show='false', @change='handleChange', accept="image/png, image/jpeg")
        .crop-wrap-inner(v-else)
            vue-cropper(
                ref="cropper"
                :src="cropper.img"
                :aspectRatio="cropper.aspectRatio"
                :preview="cropper.preview"
                :guides="cropper.guides"
                :img-style="{ 'width': '290px', 'height': '290px' }"
            )
```
