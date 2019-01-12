[you-dont-need/You-Dont-Need-Momentjs: List of date-fns or native functions which you can use to replace moment.js + ESLint Plugin](https://github.com/you-dont-need/You-Dont-Need-Momentjs)

![网络对比](http://ww1.sinaimg.cn/large/4e5d3ea7ly1fxz75sebbjj20gp033t94.jpg)

## 相对 moment 差异点
* 语言按需引入
    ```js
    import dayjs from 'dayjs';
    import 'dayjs/locale/zh-cn' // 增加这一行
    dayjs.locale('zh-cn');
    ```
  没有正确引入语言文件，会报错`Cannot read property 'weekdays' of undefined due to global locale not set up`
* isSame 暂不支持传参数（下个版本会支持）
    ```js
    // moment().isSame(moment())
    dayjs().diff(dayjs(), 'day') === 0)
    ```
* 不支持 format('x') 方式转换 unix 时间戳
    ```js
    // moment('1997').format('x')
    dayjs('1997').unix()
    ```

gzipped 体积减少了 20%

```
  File                                      Size             Gzipped

  // 原来，使用 moment
  dist/js/chunk-vendors.726d211f.js         1395.90 kb       392.05 kb

  // 替换为 dayjs 后
  dist/js/chunk-vendors.6b8516e5.js         1174.47 kb       312.59 kb
```

## moment 按需加载语言文件
[How to load only locales i want? · Issue #2517 · moment/moment](https://github.com/moment/moment/issues/2517#issuecomment-393704231)

## Ref
[9 Javascript Time and Date Manipulation Libraries for 2019](https://blog.bitsrc.io/9-javascript-date-time-libraries-for-2018-12d82f37872d)
[prantlf/dayjs: Extended fork of Day.js - 2KB immutable date library alternative to Moment.js](https://github.com/prantlf/dayjs)

