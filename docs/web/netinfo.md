# netinfo

```js
navigator.onLine //是否在线
navigator.offLine

window.addEventListener('online',  updateOnlineStatus);
window.addEventListener('offline', updateOnlineStatus);
```

`navigator.connection` 是实验性技术，只有 chrome 61 以上和移动版支持，其它浏览器如 safari 不支持
`downlink` 有效带宽估算，根据最近观察网络活动测量，如果最近没有活跃，则使用网络类型的理论值。10Mb 普通有线。如果用代理的话，估算准确性较低。
`downlinkMax` 第一网络跳带宽上限

[Network Information API](https://wicg.github.io/netinfo/#downlink-attribute)
[What Web Can Do Today](https://whatwebcando.today/network-type-speed.html)
[Network Information API Sample](https://googlechrome.github.io/samples/network-information/)
[AddyOsmani.com - Adaptive Serving using JavaScript and the Network Information API](https://addyosmani.com/blog/adaptive-serving/)

## 网络质量
`navigator.connection.effectiveType`

`slow - 4G`，根据 rtt 和 downlink 的值实际范围，反映网络实际质量，而不是 chrome62 前理论网络类型
[Network Information API](https://wicg.github.io/netinfo/#dfn-effective-connection-type)
