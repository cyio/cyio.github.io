头像和昵称横排保持居中
```pug
.career-name.row.no-gutter
  .wrap
    .inner
      li.img-wrapper
        img(src="{{info.profile.avatar}}").avatar
      li.nickname {{info.profile.nickname}}
```

地图页
```pug
form.searchbar.searchbar-init.searchbar-active.searchbar-not-empty(data-search-list='.list-block-search', data-search-in='.item-title')
  .searchbar-input
    input(type='search', id="keyword" placeholder='搜索地点')
    a.searchbar-clear(href='#')
  a.searchbar-cancel(href='#') 取消
#result1.list-block.media-list
// Search bar overlay
.searchbar-overlay
.map#mapContainer
  .marker-wrap(style='display: none;')
    i(style='display: inline;')
    img(width='26px', height='36px', src='./img/marker.png')
.initPosition
.poi-list.list-block.media-list
  ul
  .no-data
    p 附近没有球场哎
div.loading
  span.preloader
  div 正努力定位中
```
定制F7组件按钮宽度

![](https://img.oaker.bid/?url=http://ww2.sinaimg.cn/large/4e5d3ea7jw1eyq637pr8sj209x0bgmyj.jpg)

屏蔽原生键盘弹出，比如使用了日历组件
```css
.game .list-block input#calendar-default,
.game .danshuang input {
  pointer-events: none;
}
```

隐藏滚动条
```css
::-webkit-scrollbar {
  display: none;
}
```

定制组件颜色，把颜色值替换掉即可
```css
label.label-radio input[type="checkbox"]:checked ~ .item-inner,
label.label-radio input[type="radio"]:checked ~ .item-inner {
  background-position: 2px center;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2013%2010'%3E%3Cpolygon%20fill%3D'%233FC9BC'%20points%3D'11.6%2C0%204.4%2C7.2%201.4%2C4.2%200%2C5.6%204.4%2C10%204.4%2C10%204.4%2C10%2013%2C1.4%20'%2F%3E%3C%2Fsvg%3E");
  padding-right: 15px;
  width: 60px;
}
```

有待改进的地方，是不是直接写 col-45 就可以了？
```js
.career-card .bd .col-40{
  width: 45%;
}
.career-card .bd .col-20{
  width: 10%;
}
```

名字居中，为了兼容，写了很多
```css
.career-card .bd .name-wrapper {
  display: -webkit-box;
  display: box;
  -webkit-box-pack: center;
  box-pack: center;
  -webkit-box-align: center;
  box-align: center;
  display: flex;
  display: -webkit-flex;
  align-items: center;
  -webkit-align-items: center;
  justify-content: center;
  -webkit-justify-content: center;
  flex-direction: column;
  -webkit-flex-direction: column;
  height: 40px;
  overflow: hidden;
  text-align: center;
}
```

角标最后还是用了图片，CSS也可以做，但不完美

地图marker用到的跳蛋动画
```css
.marker-bounce {
  -webkit-animation-name: bounce;
  animation-name: bounce;
  -webkit-animation-duration: 0.6s;
  animation-duration: 0.6s;
}
@-webkit-keyframes bounce {
  0% {
    -webkit-transform: translateY(-5px);
    transform: translateY(-5px);
  }
  25% {
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
  }
  50% {
    -webkit-transform: translateY(-12px);
    transform: translateY(-12px);
  }
  75% {
    -webkit-transform: translateY(-5px);
    transform: translateY(-5px);
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
```

F7初始化
```js
var myApp = new Framework7({
  onAjaxStart: function (xhr) {
    myApp.showIndicator();
  },
  onAjaxComplete: function (xhr) {
    myApp.hideIndicator();
  },
  template7Pages: true,
  precompileTemplates: true,
  smartSelectBackOnSelect: true,
  smartSelectInPopup:true,
  modalButtonOk: '确定',
  modalButtonCancel: "取消",
  modalTitle:'',
  preroute: function (view, options) {
      // if (options.url === 'career.html') {
      // }
  }
});
```

首页微信验证，页面跳转
```js
if(router()){
    mainView.router.load({
        url: 'career.html',
        animatePages: false,
    });
}
// gotop
$$('body').on('touchstart click','.gotop',function () {
    $$(mainView.activePage.container).find('.page-content').scrollTop(0,800);
});
$$(document).on('pageInit', function (e) {
    var page = e.detail.page;
    goTop(page);
});
var user_show_grade;
var id_show_grade;
function router(){
  // oauth认证地址
  var redirectUrl = config.api_url+"/site/auth?authclient=weixin&return="+encodeURIComponent(window.location.href);
  if(config.oauth_redict)
    redirectUrl = "http://golf.lovesports.mobi/site/wx?domain="+window.location.host;
  var query = $$.parseUrlQuery(window.location.href);
  // 设置query
  if(query.token){
    SetCookie('token',query.token);
    // history.replaceState({}, "", window.location.origin + window.location.pathname);
    myApp.alert('登录成功');
  }
  // 处理query
  if(query.first){
      myApp.addNotification({
          title: '您是第'+query.index+'位好动网球的关注者',
          message: '',
          hold: 5000,
      });
  }
  if(query.post){
    var id = query.post;
    load_match(id,query.user_id);
    return false;
  }
  // token
  var token = getCookie('token');
  if(!token)
    window.location.href=redirectUrl;
  // isguest
  $$.ajax({
      url: config.api_url+'/site/isguest',
      method: 'GET',
      async: false,
      dataType: 'json',
      xhrFields: {
        withCredentials: true,
      },
      success: function(data){
          if(data.isguest)
              window.location.href=redirectUrl;
      }
  });
  return true;
}
function wx_init() {
  $$.getJSON(config.api_url+'/v1/default/weixinjs',{url:window.location.href}, function(data) {
    weixin(data);
  });
}
```

几个有用的函数，cookie处理，时间格式化，滚动到顶部，无限滚动
```js
function SetCookie(name,value) {
  var Days = 30; 
  var exp = new Date();
  exp.setTime(exp.getTime() + Days*24*60*60*1000);
  document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}
function getCookie(name) {
  var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
  if(arr != null) return unescape(arr[2]); return null;
}
function timeFormat(timestamp) {
    var date = new Date(parseInt(timestamp)*1000);
    var year = date.getFullYear();
    var month = date.getMonth()+1;
    var day = date.getDate();
    var hour = date.getHours();
    var minite= date.getMinutes();
    var second = date.getSeconds();
    return year+"年"+month+"月"+day+"日";
    //return year+"."+month+"."+day;
}
function goTop(page) {
    var container = $$(page.container);
    if (container.find('.gotop').length === 0) {
        container.append('<i class="fa fa-arrow-circle-up gotop"></i>');
        container.find('.page-content').on('scroll',function () {
            $$(this).scrollTop() >= 200 ? container.find('.gotop').show() : container.find('.gotop').hide();
        });
    };
}
function infiniteScroll(container,list,compiledTemplate,contextList){
    //无限下拉分页
    var loading = false;
    var lastIndex = $$(list).length;
    var maxItems = contextList._meta.totalCount;
    var itemsPerLoad = contextList._meta.perPage;
    var url = contextList._links.next?contextList._links.next.href:"";
    $$('.infinite-scroll').on('infinite', function () {
        if (loading) return;
        loading = true;
        console.log(url);
        if (lastIndex >= maxItems) {
          myApp.detachInfiniteScroll($$('.infinite-scroll'));
          $$('.infinite-scroll-preloader').remove();
          return;
        }
        $$.getJSON(url, function(data) {
            loading = false;
            data.api_url = config.api_url;
            var html = compiledTemplate(data);
            $$(container).append(html);
            lastIndex = $$(list).length;
            url = data._links.next.href;
        });
    }); 
}
```

自己给 string 添加的原型方法 subX，用来截取字符串，支持中文和表情
```js
Function.prototype.method = function (name, func) {
    "use strict";
    if (!this.prototype[name]) {
        this.prototype[name] = func;
    }
    return this;
}
// 示例： 'testtesttest'.subX(4, true)
// 返回： 'test...'
// 第二个参数可选，为true时，为截断的字符串添加英文省略号
String.method ('subX', function (len, hasDot) {
    "use strict";
    var newLength = 0;
    var newStr = "";
    var chineseRegex = /[^\x00-\xff]/g;
    var singleChar = "";
    var strLength = this.replace(chineseRegex,"**").length;
    for(var i = 0;i < strLength;i++){
        singleChar = this.charAt(i).toString();
        if(singleChar.match(chineseRegex) != null){
            newLength += 2;
        } else if(singleChar.match(/\ud83c[\udf00-\udfff]|\ud83d[\udc00-\ude4f]|\ud83d[\ude80-\udeff]/g)!=null) {
            newLength += 4;
        } else{
            newLength++;
        }
        if(newLength > len){
            break;
        }
        newStr += singleChar;
    }
    if(hasDot && strLength > len){
        newStr += "...";
    }
    return newStr;
})
```

这个是获取字符长度
```js
function getByteLen(val) {
    var len = 0;
    for (var i = 0; i < val.length; i++) {
        if (val[i].match(/[^x00-xff]/ig) != null) {
            len += 2;
        } else if(val[i].match(/\ud83c[\udf00-\udfff]|\ud83d[\udc00-\ude4f]|\ud83d[\ude80-\udeff]/g)!=null) {
            len += 3;       // 表情这里仅按3个字节算（微信是4个）
        } else {
            len += 1;
        }
    }
    return len;
}
```

用JS动态调整字号
```js
// 名字超过8个字时调整字号
var handleFonts = function handleFonts(page) {
    "use strict";
    $$(page.container).find('.score ul').each(function() {
        var target = $$(this).find('ul li.space');
        $$(this).find('.name .space div').each(function(){
            var text = $$(this).text();
            var length = getByteLen(text);
            if (!page.context.data.type) {  // 双打时
                if ( length > 16) {  // 超过8个字
                    target.css({
                        'font-size': '10px',
                        'max-width': '44%',
                        'text-align': 'left'
                    });
                    $$(this).css({
                        'line-height': 'normal'
                    })
                } else if(length > 12){  // 超过6个字时
                    target.css({
                        'font-size': '10px'
                    });
                }
            } else {   // 单打时
                if (length > 24) {
                    target.css({
                        'font-size': '10px'
                    });
                }
            }
        })
    })
}
```
