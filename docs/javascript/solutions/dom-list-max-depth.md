# DOM 列表最大深度

给一个 HTML 页面，里面可能有嵌套列表，如 ul 包含 ul/ol，或 ol 包含 ul/ol。题目就是给定一个 HTML 页面，计算出最大的嵌套深度

```js
function calculateMaxDepth(html) {
  const doc = document.implementation.createHTMLDocument('');
  doc.documentElement.innerHTML = html;
  let maxDepth = 0;

  function calculateDepth(element, depth) {
    maxDepth = Math.max(maxDepth, depth);
    const children = element.children;
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (child.nodeName === 'UL' || child.nodeName === 'OL') {
        calculateDepth(child, depth + 1);
      }
    }
  }

  calculateDepth(doc.body, 0);
  return maxDepth;
}

// 示例用法
const html = `
<html>
  <body>
    <ul>
      <li>Item 1</li>
      <li>Item 2
        <ol>
          <li>Subitem 2.1</li>
          <li>Subitem 2.2
            <ul>
              <li>Subsubitem 2.2.1</li>
              <li>Subsubitem 2.2.2</li>
            </ul>
          </li>
        </ol>
      </li>
      <li>Item 3</li>
    </ul>
  </body>
</html>
`;

const maxDepth = calculateMaxDepth(html);
console.log("最大嵌套深度:", maxDepth);

```