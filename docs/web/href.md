# Anchor


## download
```
a(href="xx.jpg" download="filename.jpg")
```
url 指向同源资源，可以用

跨源时，chrome 65 以上，会忽略 cross origin；不同浏览器实现有差异；不能通过配置 CORS 避免

建议使用 header 从后端控制
```
Content-Disposition: attachment; filename="cool.html"
```

[javascript - Chrome 65 blocks cross-origin \<a download>\. Client-side workaround to force download? - Stack Overflow](https://stackoverflow.com/q/49474775/5657916)

> 在跨域的情况下，必须将download属性与Content-Disposition HTTP头（特别是与附件处置类型）组合，以避免警告用户可能有害的活动。 （这是为了防止用户在未完全了解的情况下下载敏感的个人或机密信息。）
[HTML Standard](https://html.spec.whatwg.org/multipage/links.html#downloading-resources)

[a href download](https://codepen.io/cyio/pen/wvBYZYO)


预览需要配合`target blank`实现在新标签页打开

