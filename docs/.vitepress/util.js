import fs from 'node:fs';
import matter from 'gray-matter';
import { remark } from 'remark';
import parse from 'remark-parse'; // 引入 'remark-parse'

export async function getFirstHeading(path) {
  try {
    const fileContent = await fs.promises.readFile(path, 'utf8');
    const { content } = matter(fileContent);

    const ast = remark().use(parse).parse(content); // 使用 'remark-parse' 进行解析

    // 用以遍历 AST 并查找第一个一级标题
    function findFirstHeading(node) {
      if (node.type === 'heading' && node.depth === 1) {
        return node;
      }
      for (let childNode of node.children || []) {
        let result = findFirstHeading(childNode);
        if (result) {
          return result;
        }
      }
      return null;
    }

    const firstHeading = findFirstHeading(ast);

    if(firstHeading) {
      // 返回标题文本
      return firstHeading.children.reduce((text, n) => n.type === 'text' ? text + n.value : text, ''); 
    }
  } catch (err) {
    console.error('Error reading or processing markdown:', err);
    // Handle errors appropriately (e.g., throw, return a default value)
  }
}

