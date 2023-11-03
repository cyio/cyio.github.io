## 正确创建指定文件夹

由于是用户指定的位置，需要判断下可访问权限，然后判断是否存在

`ENOENT` 是一个错误代码，它代表 "Error NO ENTity"，即找不到实体（文件或目录）的错误。

```js
const fs = require('fs');
const folderName = 'aa';

// 检查文件夹是否存在
fs.access(folderName, fs.constants.F_OK | fs.constants.W_OK, (err) => {
  if (err) {
    // 如果出现错误，文件夹不存在或没有写入权限
    if (err.code === 'ENOENT') {
      // 文件夹不存在，创建它
      fs.mkdir(folderName, (err) => {
        if (err) {
          console.error(`无法创建文件夹: ${err}`);
        } else {
          console.log(`文件夹 '${folderName}' 已创建。`);
        }
      });
    } else {
      console.error(`无法访问文件夹: ${err}`);
    }
  } else {
    console.log(`文件夹 '${folderName}' 已经存在并且具有写入权限。`);
  }
});

```