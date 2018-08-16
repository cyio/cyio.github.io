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

    {[styles.container, {backgroundColor:"#ccc"}]}

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
```
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

```js
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
    {/* code */}

    " not work
    Plug 'scrooloose/nerdcommenter'
    let g:NERDCustomDelimiters = { 'javascript.jsx': { 'left': '//', 'leftAlt': '/*', 'rightAlt': '*/' } }
    let NERD_javascript_alt_style=1

## 全局变量
使用global，其类似web中的window
例如

    global.userToken = '***';

    //则在其他地方可以读取
    console.log(userToken);

如果需要持久化的存储，推荐使用 https://github.com/sunnylqm/react-native-storage

## iOS 模拟器
打开后台　Shift + Command + h * 2
返回桌面 Command + D
刷新 Command + R

确认 ss 代理不是全局

## android 下 lineHeight 贴底

## 垂直居中
给父容器　alignItems: 'center'
android textAlignVertical

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

