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
