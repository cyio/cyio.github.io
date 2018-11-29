var myApp = new Framework7({
  onAjaxStart: function (xhr) {
    myApp.showIndicator();
    // tongji
    var tongji_url = '/'+xhr.requestUrl;
    _hmt.push(['_trackPageview', tongji_url]);
    console.log('ajax tongji url:'+tongji_url);
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

var $$ = Dom7;

var mainView = myApp.addView('.view-main', {
    dynamicNavbar: true
});
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
    /*
    // 处理头像
    var avatar = getCookie('avatar');
    if(avatar)
        $$('.toolbar img.avatar').attr('src',decodeURIComponent(avatar));
    */
    // gotop
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

var inWeixin = false;
function weixin(weixin_sign) {
  // weixin js
  wx.config({
      // debug: true,
      appId: weixin_sign.appId,
      timestamp: weixin_sign.timestamp,
      nonceStr: weixin_sign.nonceStr,
      signature: weixin_sign.signature,
      jsApiList: ['chooseImage','previewImage','onMenuShareTimeline','onMenuShareAppMessage']
  });

  wx.ready(function(){
      wx.checkJsApi({
          jsApiList: [
              'chooseImage',
              'previewImage',
              'onMenuShareTimeline',
              'onMenuShareAppMessage'
          ],
          success: function (res) {
              // alert(JSON.stringify(res));
              inWeixin = true;
          }
      });
  });
}

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
