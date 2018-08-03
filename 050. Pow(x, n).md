---
Difficulty: Medium
Related Topics:
  "Math": https://leetcode.com/tag/math
  "Binary Search": https://leetcode.com/tag/binary-search
Similar Questions:
  "Sqrt(x)": https://leetcode.com/problems/sqrtx
  "Super Pow": https://leetcode.com/problems/super-pow
---

## [50. Pow(x, n)](https://leetcode.com/problems/powx-n/description/)

### Problem:

Implement [pow(*x*, *n*)](http://www.cplusplus.com/reference/valarray/pow/), which calculates *x* raised to the power *n* (xn).

**Example 1:**

```
Input: 2.00000, 10
Output: 1024.00000
```

**Example 2:**

```
Input: 2.10000, 3
Output: 9.26100
```

**Example 3:**

```
Input: 2.00000, -2
Output: 0.25000
Explanation: 2-2 = 1/22 = 1/4 = 0.25
```

**Note:**

- -100.0 < *x* < 100.0
- *n* is a 32-bit signed integer, within the range [−231, 231 − 1]

### Solution:

```
x^n = x^(n/2) * x^(n/2), if n is even
x^n = x^((n-1)/2) * x^((n-1)/2) * x, if n is odd
```

Corner cases:

- n == 0
- n < 0

Note here we can not use any bitwise operator, `n = -2^31` might overflow.

```javascript
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  if (n === 0) { return 1 }
  if (n === 1) { return x }
  if (n === -1) { return 1 / x }
  if (n % 2 === 0) {
    const res = myPow(x, n / 2)
    return res * res
  }
  const res = myPow(x, (n - 1) / 2)
  return x * res * res
};
```


*Template generated via [Leetmark](https://github.com/crimx/crx-leetmark).*

