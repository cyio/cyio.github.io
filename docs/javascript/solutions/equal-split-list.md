# 平分数组

```js
  function toChineseNumber(n) {
    if (!Number.isInteger(n) && n < 0) {
      throw Error('请输入自然数');
    }

    const digits = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
    const positions = ['', '十', '百', '千', '万', '十万', '百万', '千万', '亿', '十亿', '百亿', '千亿'];
    const charArray = String(n).split('');
    let result = '';
    let prevIsZero = false;
    // 处理0  deal zero
    for (let i = 0; i < charArray.length; i++) {
      const ch = charArray[i];
      if (ch !== '0' && !prevIsZero) {
        result += digits[parseInt(ch)] + positions[charArray.length - i - 1];
      } else if (ch === '0') {
        prevIsZero = true;
      } else if (ch !== '0' && prevIsZero) {
        /* eslint prefer-template: 0 */
        result += '零' + digits[parseInt(ch)] + positions[charArray.length - i - 1];
      }
    }
    // 处理十 deal ten
    if (n < 100) {
      result = result.replace('一十', '十');
    }
    return result;
  }

  // 生成中文数字表格头
  function initHeads(nums) {
    return new Array(nums).fill(null).map((v,i)=>toChineseNumber(i + 1))
  }
  // 每条数组第一列是得分，
  // 最后一条数组有效列后是总分,需要空列填充，空列有特殊样式
  // return 二维数组
  // rowLimit 不算得分列
  function getTableData(nums, rowLimit=11) {
    // const first = '题号'
    let result = []
    const words = initHeads(nums)
    // words.push('总分')
    let tmpList = [...words, '总分']
    if (tmpList.length <= rowLimit) {
      result.push(tmpList)
    } else {
      result = equalSplitList(tmpList, rowLimit)
    }
    return result
  }
  console.log(getTableData(12, 5))
  
  // 题目：等分列表
  // 给定一个数组，切分输出二维数组，每条子数组长度为 m
  // input ["一", "二", "三", "四", "五"], m = 3
  // output [["一", "二", "三"], ["四", "五", undefined]]
  function equalSplitList(list, rowLimit) {
    let result = []
    // 1. 计算需要的行数
    let rowCount = Math.ceil(list.length / rowLimit)
    // 2. 填充 length
    list.length = rowLimit * rowCount
    // 3. 分割
    for (let i = 0; i < rowCount; i++) {
      const cur = list.slice(i * rowLimit, (i + 1) * rowLimit)
      // 填充 null，以便 map 输出
      // 优化：% 取模
      //       if (i === rowCount - 1) {
      //         let n = cur.length - 1
      //         while (n >= 0 && cur[n] === undefined) {
      //           cur[n] = null
      //           n--
      //         }
      //       }
      result.push(cur)
    }
    return result
  }
```
