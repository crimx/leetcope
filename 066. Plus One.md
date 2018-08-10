---
Difficulty: Easy
Related Topics:
  "Array": https://leetcode.com/tag/array
  "Math": https://leetcode.com/tag/math
Similar Questions:
  "Multiply Strings": https://leetcode.com/problems/multiply-strings
  "Add Binary": https://leetcode.com/problems/add-binary
  "Plus One Linked List": https://leetcode.com/problems/plus-one-linked-list
---

## [66. Plus One](https://leetcode.com/problems/plus-one/description/)

### Problem:

Given a **non-empty** array of digits representing a non-negative integer, plus one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.

**Example 1:**

```
Input: [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
```

**Example 2:**

```
Input: [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
```

### Solution:

#### ONE

JavaScript specific solution. Note that `unshift` is much slower that expanding.

```javascript
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++
      return digits
    }
    digits[i] = 0
  }
  return [1, ...digits]
};
```

#### TWO

General solution.

```javascript
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++
      return digits
    }
    digits[i] = 0
  }

  for (let i = digits.length; i > 0; i--) {
    digits[i] = digits[i-1]
  }
  digits[0] = 1
  
  return digits
};
```


*Template generated via [Leetmark](https://github.com/crimx/crx-leetmark).*

