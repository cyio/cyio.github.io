# 微信分享

在当前页点右上角分享，别人点这个链接跳到指定的页面

关键参数，涉及分享图片，分享标题描述，当前页URL

```js
setWeixinShareGlobal (shareParas) {
  const url = encodeURIComponent(window.location.href)
  this.$http.get(`${window.config.api_url}/v1/default/weixinjs?url=${url}`).then(function (response) {
    window.weixin(response.data, '', shareParas.title, shareParas.content, null, shareParas.pic)
  })
},

// 必须在具体页面执行
setShare () {
  this.$http.get(`${window.config.api_url}/v1/share/1?access-token=${window.localStorage.getItem('token')}`).then((response) => {
    this.setWeixinShareGlobal(response.data)
  })
}

function weixin (weixinSign, nickname, customTitle, customDesc, customPath, customImgPath) {
  wx.config({
    debug: true,
    appId: weixinSign.appId,
    timestamp: weixinSign.timestamp,
    nonceStr: weixinSign.nonceStr,
    signature: weixinSign.signature,
    jsApiList: ['chooseImage', 'previewImage', 'onMenuShareTimeline', 'onMenuShareAppMessage', 'chooseWXPay']
  })
  wx.ready(function () {
    wx.checkJsApi({
      jsApiList: [
        'chooseImage',
        'previewImage',
        'onMenuShareTimeline',
        'onMenuShareAppMessage',
        'chooseWXPay'
      ],
      success: function (res) {
        // alert(JSON.stringify(res))
      }
    })
    var title = customTitle || '一言不合就放出了万元澳网壕猜！抢份儿年终奖吧！'
    var desc = customDesc || '1.16-1.29，边看澳网边壕猜，超级红包蓄势待发！'
    var link = customPath || window.location.origin + window.location.pathname + 'share'
    var imgUrl = window.config.api_url + '/haodong-logo.jpg'
    if (customImgPath) {
      if (customImgPath.indexOf('http') > -1) {
        imgUrl = customImgPath
      } else {
        imgUrl = window.config.api_url + customImgPath
      }
    }
    wx.onMenuShareAppMessage({
      title: title,
      desc: desc,
      link: link,
      imgUrl: imgUrl
    })
    wx.onMenuShareTimeline({
      title: title,
      link: link,
      imgUrl: imgUrl
    })
  })
  wx.error(function (res) {
    console.log(res)
  })
}

window.weixin = weixin
```
