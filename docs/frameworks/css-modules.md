## 实现原理

CSS Modules 实现原理主要是利用了 Webpack 的模块化机制和 CSS 预处理器的编译能力。

具体实现步骤如下：

1. Webpack 的 CSS Loader 会将 CSS 文件转换为 JavaScript 模块，并将 CSS 样式名（类名）转换为唯一的标识符。

2. CSS Modules 会将 CSS 样式名（类名）进行局部作用域隔离，避免样式冲突的问题。具体实现方式是在 CSS 样式名前面添加一个唯一的标识符，例如：

```css
.title {
  font-size: 20px;
  color: #333;
}
```

转换为：

```css
._3j3kG_title {
  font-size: 20px;
  color: #333;
}
```

其中，`_3j3kG` 就是唯一的标识符，它可以是一个哈希值或者是一个自动生成的字符串。

3. 在 JavaScript 文件中，可以通过 `import` 引入 CSS 样式文件，并使用 CSS Modules 生成的类名。

```javascript
import styles from './styles.css';

const title = document.createElement('h1');
title.className = styles.title; // 使用 CSS Modules 生成的类名
title.textContent = 'Hello, world!';

document.body.appendChild(title);
```

这样，每个元素都会有一个唯一的类名，避免了样式冲突的问题。

总结一下，CSS Modules 实现原理主要是通过将 CSS 样式名转换为唯一的标识符，并在 JavaScript 模块中使用这些标识符来引用样式，从而实现了样式的局部作用域隔离。

## 伪代码演示 CSS Modules 的处理过程

假设我们有一个 `styles.css` 文件，其中包含以下样式：

```css
.title {
  color: red;
}

.content {
  color: blue;
}
```

1. Webpack 的 CSS Loader 将 `styles.css` 文件转换为 JavaScript 模块：

```javascript
// styles.css 转换为 JavaScript 模块
module.exports = {
  title: 'title__1u5pI',
  content: 'content__3YX9g'
}
```

其中，`title__1u5pI` 和 `content__3YX9g` 就是 CSS Modules 生成的（全局）<mark style="background: #FFF3A3A6;">唯一标识符</mark>。（开发时就要做）

2. 在 JavaScript 文件中，通过 `import` 引入 `styles.css` 文件：

```javascript
import styles from './styles.css';
```

此时，`styles` 对象包含了 `title` 和 `content` 两个属性，分别对应 CSS Modules 生成的唯一标识符。

3. 在 JavaScript 文件中，使用 CSS Modules 生成的唯一标识符来引用样式：

```javascript
const title = document.createElement('h1');
title.className = styles.title; // 使用 CSS Modules 生成的唯一标识符
title.textContent = 'Hello, world!';

const content = document.createElement('p');
content.className = styles.content; // 使用 CSS Modules 生成的唯一标识符
content.textContent = 'This is a demo of CSS Modules.';

document.body.appendChild(title);
document.body.appendChild(content);
```

这样，在生成的 HTML 页面中，`title` 元素和 `content` 元素的类名分别为 `title__1u5pI` 和 `content__3YX9g`，避免了样式冲突的问题。

以上是一个简单的伪代码演示，实际的实现过程可能会更加复杂，但是核心思想是一致的。