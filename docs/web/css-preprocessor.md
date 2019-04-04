# CSS 预处理器

### 内置函数

## 工具比较
[浅谈css预处理器，Sass、Less和Stylus - 知乎专栏](https://zhuanlan.zhihu.com/p/23382462)

## BEM
* `.block`代表了更高级别的抽象或组件。
* `.block__element`代表.block的后代，用于形成一个完整的.block的整体。
* `.block--modifier`代表.block的不同状态或不同版本。
* `page-header` — block.
* `button_theme_islands` — modifier.
* 不适合照搬，如果用的话，注意两点，选择器扁平化和抽象类。

```scss
$namespace: 'el'; // 命名空间
$element-separator: '__'; // 元素之间的分隔符
$modifier-separator: '--'; // 修饰符分隔符
$state-prefix: 'is-'; // 状态前缀
```
[如何看待 CSS 中 BEM 的命名方式？ - 知乎](https://www.zhihu.com/question/21935157/answer/19836373)
[Battling BEM CSS: 10 Common Problems And How To Avoid Them — Smashing Magazine](https://www.smashingmagazine.com/2016/06/battling-bem-extended-edition-common-problems-and-how-to-avoid-them/)

```pug
ul.l-grid
  li.l-grid__item
    .c-card
      .c-card__header
        | […]
      .c-card__body
        | […]

// 组件化，避免依赖当前父级，不可复用
button.c-button.c-button--rounded.c-button--small Click me!

.c-card
  .c-card__header
    h2.c-card__title Title text here
  .c-card__body
    .c-card__body
      p I would like to buy:
      // Much nicer - a layout module
      ul.l-list
        li.l-list__item
          // A reusable nested component
          .c-checkbox
            input#option_1.c-checkbox__input(type='checkbox', name='checkbox')
            label.c-checkbox__label(for='option_1') Apples
        li.l-list__item
          .c-checkbox
            input#option_2.c-checkbox__input(type='checkbox', name='checkbox')
            label.c-checkbox__label(for='option_2') Pears
```
