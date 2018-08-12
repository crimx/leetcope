---
Difficulty: Easy
Related Topics:
  "Math": https://leetcode.com/tag/math
  "Binary Search": https://leetcode.com/tag/binary-search
Similar Questions:
  "Pow(x, n)": https://leetcode.com/problems/powx-n
  "Valid Perfect Square": https://leetcode.com/problems/valid-perfect-square
---

## [69. Sqrt(x)](https://leetcode.com/problems/sqrtx/description/)

### Problem:

Implement `int sqrt(int x)`.

Compute and return the square root of *x*, where *x* is guaranteed to be a non-negative integer.

Since the return type is an integer, the decimal digits are truncated and only the integer part of the result is returned.

**Example 1:**

```
Input: 4
Output: 2
```

**Example 2:**

```
Input: 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since 
             the decimal part is truncated, 2 is returned.
```

### Solution:

Binary Search. The square root of x is within [0...(x+1)/2].

```javascript
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let max = Math.round(x / 2)
  let min = 0
  while (min <= max) {
    const mid = Math.floor((min + max) / 2)
    const diff = mid * mid - x
    if (diff > 0) {
      max = mid - 1
    } else if (diff < 0) {
      min = mid + 1
    } else {
      return mid
    }
  }
  return max
};
```


*Template generated via [Leetmark](https://github.com/crimx/crx-leetmark).*

