const fs = require('fs');
const matter = require('gray-matter');
const remark = require('remark');
// import remark from 'remark'  // 不支持 require
const html = require('remark-html');

function getFirstHeading(path) {
  const markdown = fs.readFileSync(path, 'utf8');
  const { data, content } = matter(markdown);
  
  const firstHeading = remark()
    .use(html)
    .processSync(content)
    .children
    .find(node => node.type === 'heading' && node.depth === 1);
  
  if (firstHeading) {
    console.log(firstHeading.children[0].value);
  }

  return firstHeading
}

module.exports = {
  getFirstHeading
}