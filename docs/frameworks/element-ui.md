# element-ui

```js
      const loadingInstance = this.$loading({
        target: window.document.querySelector('.courseListContainer'),
        fullscreen: false,
        background: 'transparent',
      })

      }).then(() => {
        this.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
          loadingInstance.close();
          this.loading = false
        });
      })
```

## 简单扩展
示例：input 之 html/css 定制
* 使用 type 和 template
* 调整 html 结构，写 css
```html
    <template v-if="type === 'custom'">
      <!-- 前置元素 -->
      <div class="el-input__inner">
        <div class="el-input-group__prepend" v-if="$slots.prepend">
          <slot name="prepend"></slot>
        </div>
        <input
          :tabindex="tabindex"
          v-if="type !== 'textarea'"
          v-bind="$attrs"
          :type="type"
          :disabled="inputDisabled"
          :readonly="readonly"
          :autocomplete="autoComplete || autocomplete"
          :value="currentValue"
          ref="input"
          @compositionstart="handleComposition"
          @compositionupdate="handleComposition"
          @compositionend="handleComposition"
          @input="handleInput"
          @focus="handleFocus"
          @blur="handleBlur"
          @change="handleChange"
          :aria-label="label"
        >
```

## 表单组件

- 级联下拉校验如何做？目前是 change
- 后项依赖前项校验
    ```pug
    el-select(@focus="$refs.ruleForm.validateField('front') ")
    ```
