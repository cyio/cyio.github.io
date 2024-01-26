判断两个字符串是否是乱序字符串（同字母异序词）

```js
// 乱序字符串

function isAnagram1(str1, str2) {
    if (str1.length !== str2.length) return false;
    for (let l of str1) {
        if (!str2.includes(l)) {
            return false
        }
    }
    return true
}

// 排序 O(n log n)
function isAnagram2(str1, str2) {
    if (str1.length !== str2.length) return false;
    return str1.split('').sort().join('') === str2.split('').sort().join('')
}

// 字母频次
function isAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;
    let dict1 = new Map(), dict2 = new Map()
    for (let l of str1) {
        dict1.set(l, (dict1.get(l) || 0) + 1)
    }
    for (let l of str2) {
        dict2.set(l, (dict2.get(l) || 0) + 1)
    }

    // 最多 26 个，不会跟随输入数据增长
    for (const key of dict1.keys()) {
        if (dict1.get(key) !== dict2.get(key)) {
          return false
        }
      }
    return true
    // console.log(dict1, dict2)
}

console.log(isAnagram('listen', 'silent')); // true
console.log(isAnagram('hello', 'world')); // false

```