function detectEdge() {
  var ua = window.navigator.userAgent;
  if (ua.indexOf('Edge/') > -1) {
    if (window.confirm("抱歉，本站暂不支持Edge浏览器，请使用IE9及其以上或其它浏览器访问。不过，你可以直接访问博客的Github issues，点击确定后跳转，谢谢。")) {
      window.location = "https://github.com/cyio/cyio.github.io/issues";
    }
  }   
}

detectEdge();