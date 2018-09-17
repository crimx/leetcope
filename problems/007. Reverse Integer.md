---
Difficulty: Easy
Related Topics:
  "Math": https://leetcode.com/tag/math
Similar Questions:
  "String to Integer (atoi)": https://leetcode.com/problems/string-to-integer-atoi
---

## [7. Reverse Integer](https://leetcode.com/problems/reverse-integer/description/)

### Problem:

Given a 32-bit signed integer, reverse digits of an integer.

**Example 1:**

```
Input: 123
Output: 321
```

**Example 2:**

```
Input: -123
Output: -321
```

**Example 3:**

```
Input: 120
Output: 21
```

**Note:**
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

### Solution:

#### ONE

This is a JavaScript specific solution. It is esay to write but slow to run because it generates O(n) space. This could end up a huge array.

```javascript
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let n = Math.abs(x).toString().split('').reverse().join('')
  if (n > 2147483647) { return 0 }
  return (x < 0? -1: 1) * n
};
```

#### TWO

Pure mathamatical solution.

```javascript
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let result = 0
  while (x) {
    result = result * 10 + x % 10
    x = x / 10 | 0
  }
  return Math.abs(result) > 2147483647 ? 0 : result
};
```


*Template generated via [Leetmark](https://github.com/crimx/crx-leetmark).*

