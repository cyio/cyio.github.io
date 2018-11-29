## iOS

常用命令
```shell
npm install -g cordova ios-deploy 
cordova plugin rm/add pluginName
cordova run ios
// 列出可用模拟器
cordova run ios --list
// 部署到指定设备
cordova run ios --device
cordova run ios --target="iPhone-6") //指定使用iPhone6作为模拟器
```

xcode 项目签名需要取消自动，再选上

错误提示: Cordova/CDVViewController.h File Not Found
解决:
```
Add this line to your Build Settings -> Header Search Paths:

"$(OBJROOT)/UninstalledProducts/$(PLATFORM_NAME)/include"

```

### 禁用选中

* wkwebview 需要 hack 解决

[iOS WKWebview 禁止长按弹出效果 - 简书](http://www.jianshu.com/p/ba688cc688d2)

[ios - WKWebView : How to change Long press action or disable it? - Stack Overflow](http://stackoverflow.com/questions/39320386/wkwebview-how-to-change-long-press-action-or-disable-it)

* uiwebview  cordova 已集成一插件支持，设置 css 即可
```css
* {
  /* Disable selection/Copy of UIWebView */
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
}
```

### wkwebview

[WKWebView - WebKit | Apple Developer Documentation](https://developer.apple.com/reference/webkit/wkwebview)
[apache/cordova-plugins at wkwebview-engine-localhost](https://github.com/apache/cordova-plugins/tree/wkwebview-engine-localhost)
[Ionic WKWebView.md](https://gist.github.com/mlynch/c63205f114def01ed0b9)

### android

* android sdk 选包默认会选很多不必要的子包，x86/tv/wear等最好取消选中
* clone 项目，add platform 然后 run

[Quick Tip - Using and Installing Cordova](https://www.sitepoint.com/quick-tip-installing-and-getting-started-with-cordova/)
[Mac OS下安装和配置android-sdk](https://gist.github.com/Erichain/0ac3a6aaca0c28ad6551)

### crosswalk

针对android 4.0 - 4.4，以替换webkit
4.4以后是chromium
因此使用意义不大
