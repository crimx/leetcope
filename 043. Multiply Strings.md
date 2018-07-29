---
Difficulty: Medium
Related Topics:
  "Math": https://leetcode.com/tag/math
  "String": https://leetcode.com/tag/string
Similar Questions:
  "Add Two Numbers": https://leetcode.com/problems/add-two-numbers
  "Plus One": https://leetcode.com/problems/plus-one
  "Add Binary": https://leetcode.com/problems/add-binary
  "Add Strings": https://leetcode.com/problems/add-strings
---

## [43. Multiply Strings](https://leetcode.com/problems/multiply-strings/description/)

### Problem:

Given two non-negative integers `num1` and `num2` represented as strings, return the product of `num1` and `num2`, also represented as a string.

**Example 1:**

```
Input: num1 = "2", num2 = "3"
Output: "6"
```

**Example 2:**

```
Input: num1 = "123", num2 = "456"
Output: "56088"
```

**Note:**

1. The length of both `num1` and `num2` is < 110.
2. Both `num1` and `num2` contain only digits `0-9`.
3. Both `num1` and `num2` do not contain any leading zero, except the number 0 itself.
4. You **must not use any built-in BigInteger library** or **convert the inputs to integer** directly.

### Solution:

Same as we do multiplication on a paper.

```javascript
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  const result = []

  for (i = num1.length - 1; i >= 0; i--) {
    for (j = num2.length - 1; j >= 0; j--) {
      const sum = num1[i] * num2[j] + (result[i+j+1] || 0)
      result[i+j] = (sum / 10 | 0) + (result[i+j] || 0)
      result[i+j+1] = sum % 10
    }
  }

  return result.join('').replace(/^0+(?=[0-9])/, '')
};
```


*Template generated via [Leetmark](https://github.com/crimx/crx-leetmark).*

