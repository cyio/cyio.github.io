const path = require('path');
const glob = require('glob');
function getChildren(dirName) {
  let names = []
  let globPath = path.resolve(`./${dirName}/*.md`)
  glob.sync(globPath).forEach(file => {
    names.push(path.parse(file).name)
  })
  return names
}
console.log(getChildren('javascript'))
