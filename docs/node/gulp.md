* 有待提升
  - 图片压缩
  - 网站测速
  - 命名 serve:dist
  - 改用 es6 语法
  - 新的插件引用方式
  ```
	import gulpLoadPlugins from 'gulp-load-plugins';
	const $ = gulpLoadPlugins();

  .pipe($.size({title: 'images'}))
  ```
  - 引用 package.json 中的信息
  ```
	import pkg from './package.json';
  ```

```js
uncss = require('gulp-uncss');

gulp.task('unuse', function () {
return gulp.src('build/css/*.css')
    .pipe(uncss({
        html: ['build/*.html']
    }))
    .pipe(gulp.dest('build/unuse/'));
});
```

这样引用资源不行，browser-sync 处理不了，只能自己维护了
```
//- script(src="js/vue.min.js")
script(src="../node_modules/vue/dist/vue.min.js")
```

* 目录复制结构，比较特殊，需要加个 base 参数
  [javascript - Copy multiple specific files and folders to another directory using gulp - Stack Overflow](https://stackoverflow.com/questions/43867053/copy-multiple-specific-files-and-folders-to-another-directory-using-gulp)

* 参考配置
[web-starter-kit/gulpfile.babel.js at master · google/web-starter-kit](https://github.com/google/web-starter-kit/blob/master/gulpfile.babel.js)
