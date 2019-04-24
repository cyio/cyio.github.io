# framework7

- 如何共用工具栏？
    这个叫穿透布局，把toolbar放到index页面的view下
- tab的几种用法
    + 页内使用，注意在tab链接下加tab-link
    + 用`subnavbar`类，放到navbar下
    + 有支持左右滑动的用法
- div -> span
在div上设置 text-align: center 没能居中，把span改成p就可以

- calendar 在android下手动控制日历的弹出
    1. 为input标签设定 pointer-events: none;
    2. 将事件委托到input标签的父级，注意要阻止冒泡，否则会触发组件半闭

- 解决Android下在From中输入，键盘弹出页面不能适应滚动的问题
```js
    // 解决Android下在From中输入，键盘弹出页面不能适应滚动的问题
    if(myApp.device.android){
      var domFocus;
      $$(".item-input > *").each(function(index,dom){
          $$(dom).on('focus', function(e) {
              if($$(this).offset().top > document.body.offsetHeight/2){
                domFocus = this;
              }
          });
      });
      $$(window).on('resize', function(e) {
          domFocus.scrollIntoView();
      });
    }
    
    // 下面是淘汰的代码
    // 解决Android下在From中输入，键盘弹出页面不能适应滚动的问题
    var curPage = $$(".page-content.game");
    var pageHeightFull = curPage.height();

    $$(".item-input > *").each(function(index,dom){
        $$(dom).on('focus', function(e) {
            domTop = $$(dom).offset().top + $$(dom).height(); // 获取当前输入控件与页面顶部的距离
        });
    });

    $$(window).on('resize', function(e) {
        if (myApp.device.ios) return;

        var pageHeightNew = curPage.height(); // 键盘弹出时的页面高度
        var kbdHeight = pageHeightFull - pageHeightNew; // 键盘高度
        var kbdTop = pageHeightFull - kbdHeight; // 键盘与页面顶部之差
        var scrollHeight = domTop - kbdTop + 45; // 需要滚动的距离，要加上工具栏高度

        if (pageHeightNew < pageHeightFull) { // 检测页面高度发生变化（键盘弹出）
            if (domTop >= pageHeightNew) { // 输入控件被遮挡时才需要处理
                var tmpDiv = "<div id='tmp' style='height:" + kbdHeight + "px'>&nbsp;</div>"; // 在页面底部临时插入键盘高度的div
                $$(page.container).find('.page-content').append(tmpDiv).scrollTop(scrollHeight);
            }
        } else {
            $$(page.container).find('#tmp').remove();
        }
    });
```

- 共用了工具栏，但想在不同页面下有不同的按钮，怎么插入判断？
    解决方法： 在该页面context中添加变量
```js
    $$(page.container).on('click','.career-card a',function(){
        mainView.router.load({
          url: 'detail.html',
          context: {
            preview: config.api_url+'/upload/match/'+$$(this).data('id')+".png",
            avatar: getCookie('avatar'),
            hasDel: true,
          },
        });
    });
    ```

- 图片上传显示
```js
    $$('a.link.upload').click(function(){
        $$('#file').trigger('click');
    });

    $$('#file').on('change',function(e){
        var f = e.target.files[0];
        if (!f.type.match('image.*'))
            return;

        var reader = new FileReader();
        reader.onload = (function(theFile) {
            return function(e) {
                var img = new Image();
                img.src = e.target.result;
                img.onload = function() {
                    var canvas = document.createElement('canvas');
                    var height = 320*img.height/img.width;
                    canvas.with = 320;
                    canvas.height = height;
                    canvas.getContext('2d').drawImage(img,0,0,320,height);
                    $$('.photo-wrapper').css('background-image','url('+canvas.toDataURL()+')');
                    $$('.photo-wrapper .col-100').remove();
                }
            };
        })(f);
        reader.readAsDataURL(f);
    });
```
    
### 第三方脚本异步加载

问题：浏览器不支持在ajax内容里面插入script标签，所以必须在应用初始化时加载所有脚本。简单地说，F7不支持第三方脚本异步加载。

群里朋友的思路
> 我需要做web app  我ajax一个新页面时，内容虽然在页面加载了 但新页面里所包含的js没有加载过来，请问有什么解决方案呢
> 我想过 直接pageInit的时候 过滤Js css标签 重新加到页面上来， 但是这种容易导致事件监听重复绑定
> 这虽然是歪路子  但是确实是解决问题的一种手段
> s全部第一次加载不可行的
> 我们要保证的是不修改原有的代码 接入
> 还是把html变为dom 通过选择器选择 js css标签  重新载入dom中 把dom已有的元素的事件全部解除
> 反正如果之前加载的js 和css 已经在浏览器中有缓存的

```js
myApp.onPageAfterAnimation('*', function (page) {
    //页面加载动画完成后加载js
    if(pageResponse || (pageResponse=pageResponseCache[page.name])) {
        var pageDom = $(pageResponse);
        var iframe = document.createElement('iframe');
        $(iframe).append(pageDom);
        var jsElement = $(iframe).find('script');
        jsElement.each(function(){
            var script = document.createElement('script');
            script.src = this.getAttribute('src');
            if(script.src && script.src.indexOf('js') >-1) {
                document.body.appendChild(script);
            } else {
                document.body.appendChild(this);
            }
        });
    }

    pageResponse = null;
});
```

+ 分析“网球生涯”首次加载慢的成因 
    - index的所有内容加载解析完，跳转到指定页
    - 框架库文件较大是头等问题，目前来说colortheme没必要加载，应当注释掉
    - jquery、fontawesome等
    - 程序文件没有压缩

### input相关问题

1. input type 为number和tel的区别，是tel不能处理小数点
2. 设置type和pattern，才能确保在android和ios下调起数字键盘
```html
input(name='' type='number' placeholder='1000' step="100" min="0" max="99999" pattern="[0-9]*")
```
3. 去掉使用html5 step时右边的按钮
```css
input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  appearance: none;
  margin: 0;
}
```

- 当tab页内容主要靠动态生成时，使用 subnavbar - tabber 而非 subnavbar - tablink。    

- 添加下拉刷新

```pug
.page-content.pull-to-refresh-content(data-ptr-distance="55")
  .pull-to-refresh-layer
    .preloader
    .pull-to-refresh-arrow
```
```js
// pull to show searchbar
var ptrContent = $$('.pull-to-refresh-content');
 
// 添加'refresh'监听器
ptrContent.on('refresh', function (e) {
    $$('form').css('display', '-webkit-flex');
    myApp.pullToRefreshDone();
});
```

- swiper
    三层结构，注意一定要加下swiper-init。swiper-container是固定且必须的，进行JS控制也必须访问这个类。
```pug
.swiper-container.swiper-init
  .swiper-wrapper
    .swiper-slide
```
    如果是纯文字播放，是不需要写
    
- custom build
    + 直接在src/js目录下删除不需要的组件，或者在gulp中排除
    + 使用 gulp custom 命令

- 怎么测试无限滚动、下拉刷新？
    
    chrome->网络->2G

- 字符串截取
// js "this.team10.nickname.subX(10)"

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
    
+ 定制smart-select进去后radio的checked圆圈样式

    思路是去看F7的checked组件的样式如何实现，把item-inner的background屏蔽掉，添加item-media和icon，icon作为圆圆，然后在item-media上加background作为对勾。
    用这个类`.smart-select-page`
    第一条定制成提示文字，不需要显示 `display: none`
        
