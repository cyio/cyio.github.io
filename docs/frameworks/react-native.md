# React Native

## 布局及样式
* 默认就是`flex`，所以不需要`display:flex`
* 最好不要在render里内联样式，因为会重复创建，而StyleSheet.create方法不会

* 在浏览器的开发者工具中调试只有 console 输出，以及在 source 项中断点调试js脚本。

* 在 Android 上使用 ProgressBar 替代 iOS 中的 ActivityIndicator

* 丢帧的出现
  - iOS设备提供了每秒60的帧率，这就留给了开发者和UI系统大约16.67ms来完成生成一张静态图片（帧）所需要的所有工作。如果在这分派的16.67ms之内没有能够完成这些工作，就会引发‘丢帧’的后果，使界面表现的不够流畅。
  - 由JavaScript线程所控制，线程太忙时，出现卡帧。比如页面切换动画。

* 载入中组件
    - 引入
        DrawerLayoutAndroid,
        ProgressBarAndroid,
    - 模板
      ```js
      <DrawerLayoutAndroid
        renderNavigationView={() => <Text>React Native</Text>}>
        <ProgressBarAndroid />
      </DrawerLayoutAndroid>
      ```

* 活动指示器 ActivityIndicator,

* 按钮组件

    - 引入
      TouchableHighlight
    - 模板
    - 测试时可用 Button，写起来简单
      ```js
      <TouchableHighlight onPress={this.onPress}>
        <Text style={styles.instructions}>
          Touch
        </Text>
      </TouchableHighlight>
      ```

* StyleSheet.create 方法里边属性名的引号可选，而属性值除数字外是必加的

* 查看编译后的源代码
    http://localhost:8081/index.android.bundle

* Toast 组件
    ```js
    //ios
    alert();

    //android
    var {
        ToastAndroid
    } = React;

    ToastAndroid.show('提示的信息', ToastAndroid.SHORT);    
    ```

* 如何判断设备是ios还是android，也可用第三方 device 插件
    ```js
    var {
        Platform
    } = React;

    if(Platform.OS === 'ios'){
        //ios相关操作
    }else{
        //android相关操作
    }
    ```
* ScrollView

    - 属性

    `keyboardShouldPersistTaps bool`

    `false`: 点击输入框外部，键盘收回
    `true`: 点击输入框外部，键盘不收回，只能通过点击键盘上的返回键收回。

    `keyboardDismissMode enum("none", 'interactive', 'on-drag')`

    - 滑动ScrollView时，对键盘的影响

    `none`: 滑动ScrollView对键盘没有影响
    `interactive`: 向下滑动ScrollView时，可以使ScrollView收回（很奇怪的属性）
    `on-drag`: 拖动ScrollView时，键盘收回

* 样式写多个类用数组
```js
{[styles.container, {backgroundColor:"#ccc"}]}
```

* 动态样式
```js
var myColor = randomColor()
<View style={jewelStyle(myColor)} />

jewelStyle = function(myColor) {
   return {
     borderRadius: 10,
     background: myColor,
   }
 }
```

* webstorm live模板
```js
import React from 'react';

class $className$ extends React.Component {

  render() {
    return (
        $content$
      );
  }
}

export default $className$;
```

* Image 图片组件

resizeMode 有三种样式 contain, cover, stretch

通过嵌套来实现背景图片
```jsx
<Image source={...}>
  <Text>Inside</Text>
</Image>
```

* props 和 state，一静一动
* 使用dimensions.get("window")可以获取到当前viewport的大小，这个值可能会根据屏幕横竖来动态改变。
* react native里面没有 float 的用法，是根据 flex 来布局，alignItems 和 justifyContent 分别决定子元素的布局，而 flexDirection 决定子元素的排列方式垂直还是水平，flex:number 决定子元素所占的比例，alignSelf 决定元素本事的布局，子 view 会默认根据父 view 来absolute，这里有个技巧，如果想让子 view 实现 100% 的效果可以设置 left：0 ,right :0,同理 height 可以用 top:0,bottom:0。
* 使用text的 numberOfLines 可以实现文本截取省略号，即css的 text-overflow 属性。
* 默认情况下如果元素超过了父元素，是不可以滚动的，必须在外部套一个`<ScrollView>`才可以。
* drawable目录，那个呢？
  \android\app\src\main\res\drawable-hdpi\

[Android React Native加载图片资源的正确姿势 - 安卓弟的专栏 - 博客频道 - CSDN.NET](http://blog.csdn.net/sbsujjbcy/article/details/49981529)

```jsx
<View
  style={[styles.base, {
    width: this.state.width,
    height: this.state.width * this.state.aspectRatio
  }]}
/>
```
[Andriod React Native 样式表中可用样式属性 - 安卓弟的专栏 - 博客频道 - CSDN.NET](http://blog.csdn.net/sbsujjbcy/article/details/50017029)

## 学习官方 movie tutorial
- 首先确定界面元素
- 确定布局和基础样式
- 用临时数据测试界面
- 编写 fetch 函数，获取 movie 数据
- 组件渲染后，执行fetch
- fetch 成功后，用 setState 方法赋值
- 初始化 movie
- 添加判断，movie 为 null 时，先载入 loading，然后渲染数据
- 加入 ListView 组件

## 编译官方UIexplorer
https://github.com/facebook/react-native/tree/master/Examples/UIExplorer/js
- 安装Android NDK
- 在项目根目录下创建`local.properties`文件
- 运行如下命令（不需要进入UIExplorer目录）
    ```bash
    cd react-native
    ./gradlew :Examples:UIExplorer:android:app:installDebug
    ./packager/packager.sh
    ```

- tint color 给图片的不透明区域着色，支持下载的图片

- TouchableNativeFeedback
  Android下原生的点击效果，目前只支持在一个view下嵌套text

开发过程中引入外部组件，需要重启packager，报错提示就是这个意思。

[Generating Signed APK – React Native | A framework for building native apps using React](https://facebook.github.io/react-native/docs/signed-apk-android.html#content)

* 父容器要求设置尺寸，否则子内容无法显示
* flex 默认为列
* 省略写法 `onChangeText={(text) => this.setState({text})}`

### andorid ide 模拟器

* [关于在Android SDK中找不到Android Support Library的问题 - 帅得拖网速](https://my.oschina.net/u/2608182/blog/884004)
* Intel x86 Emulator Accelerator 不兼容 linux
* 模拟器使用和真机差不多，设置地址端口，`ctrl - m`打开菜单，有时不灵，在命令行中运行，`adb shell input keyevent 82`
* 命令行
  列出 emulator -list-avds
  启动 emulator @avd_name [ {-option [value]} … ]
  有bug，先进入目录 cd "$(dirname "$(which emulator)")"

* view 上不能设置 color fontSize
* 非原生组件才需要考虑固定定位问题
* positon : 'absolute'定位方式是相对于父级元素，不管父级是否具有relative
* 顶栏左中右结构，标题居中由容器设置，两边用绝对定位
* 固定定位 [React Native fixed footer - Stack Overflow](http://stackoverflow.com/questions/29447715/react-native-fixed-footer)
* 解构
```js
render() {
  let { source, storyIndex, state, onEnd } = this.props;

  return (
```
* 需要自己实现视频控制
  [Video player with controllers using React Native – cubbuk – Medium](https://medium.com/@cubbuk/video-player-with-controllers-using-react-native-72e35d7ab469)
  [inProgress-team/react-native-youtube: A <YouTube/> component for React Native.](https://github.com/inProgress-team/react-native-youtube)
* 加载视频时热更新可能会卡住，回到桌面，再打开一般就会好
* 改端口涉及到 debug，需要改AppDelegate.m，主项目最好别改，如果要修改参考
  [Intro to Debugging React Native (iOS and Android) - Differential](https://differential.com/insights/intro-to-debugging-react-native-ios-and-android/)
* 注释，一般注释, 用 {} 包围
```
{/* code */}

" not work
Plug 'scrooloose/nerdcommenter'
let g:NERDCustomDelimiters = { 'javascript.jsx': { 'left': '//', 'leftAlt': '/*', 'rightAlt': '*/' } }
let NERD_javascript_alt_style=1
```
## 全局变量
使用global，其类似web中的window
例如
```js
global.userToken = '***';

//则在其他地方可以读取
console.log(userToken);
```
如果需要持久化的存储，推荐使用 https://github.com/sunnylqm/react-native-storage

## iOS 模拟器
打开后台　Shift + Command + h * 2
返回桌面 Command + D
刷新 Command + R

确认 ss 代理不是全局

## android 下 lineHeight 贴底

## 垂直居中
给父容器`alignItems: 'center'`
android`textAlignVertical`

image 没有 onPress，text 有
数组节点必须有 key，可随意给个值

## 存储
[Storage 封装 · Issue #17 · WeHIT/wiki](https://github.com/WeHIT/wiki/issues/17)

* borderRadius 直接作用于里面有 Img 的元素不生效，需要加`overflow: 'hidden'`
* 百分比宽度`width: (Dimensions.get('window').width - 30) / 3`

## FlatList
  * 性能更好，ListView 当数据多时会慢，而 FlatList 内存控制与数据大小基本无关
  * 数据为数组即可，而 ListView 需要格式化数据
  * 处理 key 与其它不同，`keyExtractor={(item, index) => item.id}`

[cooperka/react-native-immutable-list-view: A drop-in replacement for React Native's ListView.](https://github.com/cooperka/react-native-immutable-list-view#example-usage)

## 手势
响应手势的基本单位是responder
一个React Native应用中只能存在一个responder
响应touch或者move手势 -> grant（被激活） -> move -> release(结束事件)
手势类型，距离绝对值比较，区域判断

## ISSUES
### webview 不起作用
```jsx
<WebView
  style={{
    backgroundColor: 'red',
    height: 100,
  }}
  source={{html: '<h1>Hello</h1>'}}
  scalesPageToFit={true}
/>
```
可能跟插件容器有关 ScrollableTabView,
改用普通 view 没问题了
```js
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
```
### 路由导航问题
旧代码　参见 HeaderBar.js
调用:
```jsx
<HeaderBar
  // leftIconAction={alert('debug')}
  title='课程详情'
  leftIcon={require('../images/back_dark.png')}
  rightIcon={require('../images/back_dark.png')}
/>
```
原生不需要 react-router
刚开始用官方 react-navigation
高级用 react-native-router-flux

### antdesign 
#### 部分组件不成熟，增加复杂度
依然优先用原生
比如 tabs 每个 tab 是等高，而事实上不同 tab 内容不一样
发现不是 ant 的问题，原组件有问题
```
    <Tabs defaultActiveKey="1" onChange={onChange} onTabClick={onTabClick} activeTextColor='red'>
      <TabPane tab="简介" key="1" >
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text>{data.summury}</Text>
        </View>
      </TabPane>
      <TabPane tab="概要" key="2">
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <HTMLView
            value={data.post_content}
            stylesheet={{ marginTop: 20 }}
          />
        </View>
      </TabPane>
      <TabPane tab="提问" key="3">
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text>选项卡三内容</Text>
        </View>
      </TabPane>
    </Tabs>
```
#### 定制麻烦，少用

定制主题色，需要 script，关注进展

https://github.com/ant-design/antd-mobile-samples/tree/master/rn-custom-ui

引用组件颜色定义文件，进行覆盖

react-native 结合ant-Design- mobile, 发现有些组件样式不好调,... - 简书 http://www.jianshu.com/p/70b46e305914
* ant tabs 只能等高

### html 渲染
1. webview
2. 插件
  ```js
  import HTMLView from 'react-native-htmlview';

  <HTMLView
    value={data.post_content}
    stylesheet={{ marginTop: 20 }}
  />
  ```

### tabs/webview 高度适应
[Tab view always has the height equal to height of the highest tab · Issue #415 · skv-headless/react-native-scrollable-tab-view](https://github.com/skv-headless/react-native-scrollable-tab-view/issues/415)

tabs 考虑手动实现

webview 解决 [react native里webview怎么设置高度自适应？ - 知乎](https://www.zhihu.com/question/42864534/answer/115386718)

[iou90/react-native-autoheight-webview: An auto height webview for React Native](https://github.com/iou90/react-native-autoheight-webview)

通信，更复杂 [alinz/react-native-webview-bridge: React Native Webview with Javascript Bridge](https://github.com/alinz/react-native-webview-bridge)

### map/迭代器中的 this
你在map里使用this，this会指向当前的迭代对象，你需要在map里绑定“正确”的this
注意是在 map 上绑，而不是里面，这样才能绑上外部环境也就是 class 中的 this
bind 前可能不需要括号
```js
    [].map().bind(this)
```
ES6形式不需要这么做？
```js
    [].map((s) => {})
```

详解三种方式
[reactjs - React onClick inside .map then change data in another sibling component - Stack Overflow](http://stackoverflow.com/a/34938226/5657916)

匿名函数，所以 context ?
优先用 ES6 箭头函数，ES5 则 forEach/map/filter 原生支持 context 作为可选参数，不需要 bind
```js
    var o = {
      s: 'hel',
      f: function(){console.log(this)}
    };

    o.f()
    // 上面 this 指向定义函数的对象，而下面放到 map 中，this 发生变化，成了 window/global
    ['hello', 'world'].map(o.f)
    // 传入期望的 context，把 this 改回去
    ['hello', 'world'].map(o.f, o)
```
[You Don't Need To Use .bind( this ) When Using .forEach() Or .map() In ReactJS](https://www.bennadel.com/blog/2876-you-don-t-need-to-use-bind-this-when-using-foreach-or-map-in-reactjs.htm)

### 迭代中的事件绑定
渲染时全部执行完

### npm 依赖定制
在 github 上 fork，并 clone 到本地
修改`package.json`中包的地址为自己的地址
删除`node_modules`原包文件夹，把自己的项目软链接过来

最后应该是使用`git submodule`来管理

### react-native-video
* 全屏切换只支持 iOS，解决只能是自己写，通过布局隐藏和转屏间接实现
[How to use this.player.presentFullscreenPlayer() correctly. · Issue #392 · react-native-community/react-native-video](https://github.com/react-native-community/react-native-video/issues/392#issuecomment-262275119)
* 参数传错，会导致无法播放
* 测试视频地址
    http://pub.dotabocai.com/sample.mp4
    http://vjs.zencdn.net/v/oceans.mp4

### 复制第三方库插件
1. 复制 render ，处理 props/functions
2. 复制 style 替换变量，注意在另一个文件中

### Warning: Cannot update during an existing state transition

`props`和`states`在渲染的时候更改

解决一: bind this 后放到 constuctor
解决二：改写成匿名函数
[React.Component - React](https://facebook.github.io/react/docs/react-component.html#setstate)

### 找不到 state 中的属性
如果修改路由内容，可能雪要重新打包

### global 定义的全局变量在某些 js 文件中找不到，尽管打印 global 展开能看到
可能是环境不同，推荐定义一个文件处理，限制影响范围

### 如何动态改变 tab nav 的 scene
转变思路，在页面组件中判断处理

### 在插件中打印
用 warn ，log 和 error 不行

### UnhandledPromiseRejectionWarning: Unhandled promise rejection
似乎是某些RN版本问题，无解
[UnhandledPromiseRejectionWarning: Unhandled promise rejection · Issue #640 · mzabriskie/axios](https://github.com/mzabriskie/axios/issues/640#issuecomment-271588481)

### [Raw Text must be wrapped in an explicit`<Text>`component · Issue #186 · GeekyAnts/NativeBase](https://github.com/GeekyAnts/NativeBase/issues/186#issuecomment-268979620)
```js
{
  value && <Text>haha</Text>j
}
```
这里要求布尔值，而`value`可能是字符串，会报错提示用`Text`包起来，用`!!`转换一下

### iOS

* ssh
是否在同一网段
开 共享-远程登陆，才能连接 ssh 

* 允许 http localhost
[fetch API报错，Type Error: Network request failed | 论坛 - React Native中文社区](http://bbs.reactnative.cn/topic/1668/fetch-api%25E6%258A%25A5%25E9%2594%2599-type-error-network-request-failed/5)

* 文字颜色继承
比如`image > text`，解决是给`image`背景透明

[iOS Text background color inheritance · Issue #7964 · facebook/react-native](https://github.com/facebook/react-native/issues/7964)

* 数字键盘无收起，需点空白处收起

`always`，键盘不会自动收起，ScrollView 也不会捕捉点击事件，但子组件可以捕获。

### 安卓全屏实现
https://stackoverflow.com/a/43382231/5657916
["controls" support for ios & "fullscreen" support for Android -](https://www.bountysource.com/issues/38797648-controls-support-for-ios-fullscreen-support-for-android)
[Video player with controllers using React Native – cubbuk – Medium](https://medium.com/@cubbuk/video-player-with-controllers-using-react-native-72e35d7ab469)

### 升级 react-native
[Upgrading to new React Native versions](https://facebook.github.io/react-native/docs/upgrading.html)

### codepush

不同平台命名不能一样

### expo

构建时不要选这个，因为要用原生模块

expo 的优点是不限制开发平台，可以在它的容器里跑，但只能用它提供的东西，外加纯JS模块
直接 react-native init

### ios 真机调试
需要在 xcode 中打开项目中的 ios 目录，目标机器选择真机，然后点 build

无法开启 remote debug
`"node_modules/react-native/Libraries/WebSocket/RCTWebSocketExecutor.m"`

签名失败，新项目需要刷新
[iOS 10 关于Xcode 8 无证书真机测试的问题 - 简书](https://www.jianshu.com/p/cbe59138fca6)

### CANNOT TRANSLATE guest DNS ip
app 联网有问题

React native breaks emulator networking · Issue #13340 · facebook/react-native https://github.com/facebook/react-native/issues/13340

### example 的 name 重复提示
```
npm uninstall react-native-windows
```
[Naming collisions (not urgent) · Issue #567 · react-native-community/react-native-video](https://github.com/react-native-community/react-native-video/issues/567)

* 最快的方式就是找 example，找 demo，直接看作为结果的 code，因为文档有的没有，有的滞后
* 调整依赖后单独提交`package.json`和`yarn.lock`
* `static`定义的是类的方法，只有类能调用，而普通方法是实例的方法只有类实例能调用。变量也一样。

### native 代码转换到 react

没了组件，只保留 react 的导入即可
去掉`StyleSheet.create`，内联样式就是个对象

### 模拟器没声音？
菜单找下声音输出，根据需要指定下

### 自己托管的视频文件在 iOS 下无法播放

## 安装

[搭建开发环境 - react native 中文网](http://reactnative.cn/docs/0.31/getting-started.html)
注意文档对Android IDE的部分设置，可能过时

- 安装环境依赖
    ```
    choco install jdk8
    choco install vcredist2013
    choco install android-sdk
    ```

- 安装 android-sdk 环境
    版本不够，需要手动在SDK Manager中升级

- SDK Manager
 + 加速
    [Android development tools mirror.](http://android-mirror.bugly.qq.com:8080/include/usage.html)

  + 看不到 Extras/Android Support Library
    需要更新后重新打开SDK Manager，才能看到

- 设置环境变量
    - 新增ANDROID_SDK_HOME
    ```
    C:\Users\galaxy\AppData\Local\Android\android-sdk
    ```
    - 修改path
    ```
    %ANDROID_SDK_HOME%\tools;%ANDROID_SDK_HOME%\platform-tools;
    ```

- 安装react-native命令行工具
    ```
    npm install -g react-native-cli
    ```

- 初始化项目，会自动装react-native，所以要等一会
    ```
    react-native init reactDemo
    ```

- SDK location not found
根据终端提示，在android目录下新建文件 local.properties，写入
    ```
    sdk.dir = C\:\\Users\\galaxy\\AppData\\Local\\Android\\android-sdk
    ```

    就是sdk路径，注意格式

注意linux下上述方法可能不太行，改用另一种方法，在终端中运行`export ANDROID_HOME=/home/oaker/d/cyio/Android/Sdk`

- 虚拟机设置(Genymotion)
    - 开启自动刷新，在dev菜单中找

[在设备上运行 - react native 中文网](http://reactnative.cn/docs/next/running-on-device-android.html)
注意Andorid5.0上下有所区别

build命令 `react-native run-android`
运行上述命令后，有些系统不能启动实时编译服务，手动启动 `react-native start`

### linux 下为 android 模拟器设置打开 dev menu 快捷键
设置快捷键的关键是执行命令中需要 adb 的完整路径
```sh
which adb
adb-path shell input keyevent 82
```
