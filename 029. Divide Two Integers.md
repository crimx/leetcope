---
Difficulty: Medium
Related Topics:
  "Math": https://leetcode.com/tag/math
  "Binary Search": https://leetcode.com/tag/binary-search
---

## [29. Divide Two Integers](https://leetcode.com/problems/divide-two-integers/description/)

### Problem:

Given two integers `dividend` and `divisor`, divide two integers without using multiplication, division and mod operator.

Return the quotient after dividing `dividend` by `divisor`.

The integer division should truncate toward zero.

**Example 1:**

```
Input: dividend = 10, divisor = 3
Output: 3
```

**Example 2:**

```
Input: dividend = 7, divisor = -3
Output: -2
```

**Note:**

- Both dividend and divisor will be 32-bit signed integers.
- The divisor will never be 0.
- Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 231 − 1 when the division result overflows.

### Solution:

Every decimal number can be represented as `a0*2^0 + a1*2^1 + a2*2^2 + ... + an*2^n`.

Replace multiplication and division with binary shifting.

```javascript
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  if (divisor === 0 ||
      divisor === -1 && dividend < -2147483647 ||
      dividend > 2147483647 ||
      dividend < -2147483648
  ) {
    return 2147483647
  }

  const isNegative = dividend < 0 && divisor >= 0 || dividend >= 0 && divisor < 0
  const pDividend = Math.abs(dividend)
  const pDivisor = Math.abs(divisor)

  if (dividend === 0 || pDividend < pDivisor) { return 0 }

  let doubling = pDivisor
  let count = 1
  while (doubling < pDividend && !(doubling & (1 << 30))) {
    doubling <<= 1
    count <<= 1
  }
  if (doubling > pDividend) {
    doubling >>>= 1
    count >>>= 1
  }

  const result = count + divide(pDividend - doubling, pDivisor)
  return isNegative ? -result : result
};
```


*Template generated via [Leetmark](https://github.com/crimx/crx-leetmark).*

