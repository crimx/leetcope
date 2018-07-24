---
Difficulty: Easy
Related Topics:
  "String": https://leetcode.com/tag/string
Similar Questions:
  "Encode and Decode Strings": https://leetcode.com/problems/encode-and-decode-strings
  "String Compression": https://leetcode.com/problems/string-compression
---

## [38. Count and Say](https://leetcode.com/problems/count-and-say/description/)

### Problem:

The count-and-say sequence is the sequence of integers with the first five terms as following:

```
1.     1
2.     11
3.     21
4.     1211
5.     111221
```

`1` is read off as `"one 1"` or `11`.
`11` is read off as `"two 1s"` or `21`.
`21` is read off as `"one 2`, then `one 1"` or `1211`.

Given an integer n, generate the nth term of the count-and-say sequence.

Note: Each term of the sequence of integers will be represented as a string.

Example 1:

```
Input: 1
Output: "1"
```

Example 2:

```
Input: 4
Output: "1211"
```

### Solution:

Just loop and grow the sequence.

#### ONE

JavaScript specific.

```javascript
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  let num = '1'

  while (--n > 0) {
    num = num.match(/(\d)\1*/g).map(x => x.length + x[0]).join('')
  }

  return num
};
```

#### TWO

General solution.

```javascript
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  let num = '1'

  while (--n > 0) {
    let newNum = ''
    for (let i = 0, accu = 1; i < num.length; i++, accu++) {
      if (num[i] !== num[i+1]) {
        newNum += accu + num[i]
        accu = 0
      }
    }
    num = newNum
  }

  return num
};
```


*Template generated via [Leetmark](https://github.com/crimx/crx-leetmark).*

