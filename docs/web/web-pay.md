[解决浏览器拦截弹出窗口问题-帽客-morecoder](http://www.morecoder.com/article/1084428.html)

* 新页面处理
    ```js
    const newWin = window.open();

    newWin.document.body.innerHTML = data
    // 如果是当前页，vue 里可能要用 nextTick
    newWin.document.forms[0].submit()
    ```
* 当前页处理
    ```js
    res => {
      const div = document.createElement('div');
      div.innerHTML = res.html;
      document.body.appendChild(div);
      document.forms[0].setAttribute('target', '_blank')
      document.forms[0].submit();
    }
    ```
