# markdown

## Standard

- 代码直接缩进，不用标记包围也行，如果需要发表，再作处理，如需要高亮
- 引用是内联式标记，要有换行
- 使用 4 个空格缩进，尤其是在用嵌套列表时

[Write better Markdown - BrettTerpstra.com](https://brettterpstra.com/2015/08/24/write-better-markdown/)

## GFM


- [ ] @mentions, #refs, [links](), **formatting**, and <del>tags</del> supported

First Header | Second Header
------------ | -------------
Content from cell 1 | Content from cell 2
Content in the first column | Content in the second column


```diff
- dontDoThisThing()
+ doThisInstead()
```

## 辅助工具

表格生成，支持粘贴 xls/csv 内容（菜单 File-Paste） [Markdown Tables generator - TablesGenerator.com](https://www.tablesgenerator.com/markdown_tables)

markdown 与其他格式互转 [Markdown 表格 编辑和生成器 - 在线表格转换工具](https://tableconvert.com/zh-cn/markdown-generator)


## Vim 配合

| 特性     | markdown-preview | Typora       |
|----------|------------------|--------------|
| 触发     | :MarkdownPreview | `<leader>tp` |
| 实时反馈 | 1                |              |
| 侧栏 Toc |                  | 1            |

## Gitbook

与 GFM 不一致的一些地方

.号作前导缩进

换行要用双空格

## 语法参考

```js
function syntaxHighlighting() {
  var n = 33
  var s = 'hello, こんにちは'
  console.log(s)
}
```

- plain
- ~~strikethrough~~
- `inline code`

1.  Numbered list
    1.  Numbered sub-list
        1.  Numbered sub-sub-list
2.  [Link](https://www.google.com)

An image: ![Markdown Here logo](http://adam-p.github.io/markdown-here/img/icon24.png)

> Block quote.
> _With_ **some** `markdown`.

If **TeX Math** support is enabled, this is the quadratic equation:
$-b \pm \sqrt{b^2 - 4ac} \over 2a$

# Header 1

## Header 2

### Header 3

#### Header 4

##### Header 5

###### Header 6

| Tables        |      Are      |   Cool |
| ------------- | :-----------: | -----: |
| column 3 is   | right-aligned | \$1600 |
| column 2 is   |   centered    |   \$12 |
| zebra stripes |   are neat    |    \$1 |

Here's a horizontal rule:

---

```
code block
with no highlighting
```

```js
const a = 1
```
[Using Markdown in Vim](https://vim.works/2019/03/16/using-markdown-in-vim/)

