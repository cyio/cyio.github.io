# 判断回文字符串

思路： 逆转字符串，如果字符串特别长，需要额外内存，可能有性能问题

进阶思路：双指针

实现上，用 while 写简单，for 需要折算

```js
function isPalindrome(s: string): boolean {
    let l = 0;
    let r = s.length - 1;
    while (l < r) {
        if (s[l] !== s[r]) {
            return false
        }
        l++;
        r--;
    }
    return true
}
```