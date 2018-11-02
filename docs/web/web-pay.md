[解决浏览器拦截弹出窗口问题-帽客-morecoder](http://www.morecoder.com/article/1084428.html)

* 新页面处理
    ```js
    const newWin = window.open();

    newWin.document.body.innerHTML = data
    this.$nextTick(() => {
      newWin.document.forms.punchout_form.submit()
    })
    ```
* 当前页处理
    ```js
    newWin.document.forms.punchout_form.setAttribute('target', '_blank')
    ```
