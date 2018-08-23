---
Difficulty: Medium
Related Topics:
  "Backtracking": https://leetcode.com/tag/backtracking
Similar Questions:
  "1-bit and 2-bit Characters": https://leetcode.com/problems/1-bit-and-2-bit-characters
---

## [89. Gray Code](https://leetcode.com/problems/gray-code/description/)

### Problem:

The gray code is a binary numeral system where two successive values differ in only one bit.

Given a non-negative integer *n* representing the total number of bits in the code, print the sequence of gray code. A gray code sequence must begin with 0.

**Example 1:**

```
Input: 2
Output: [0,1,3,2]
Explanation:
00 - 0
01 - 1
11 - 3
10 - 2

For a given n, a gray code sequence may not be uniquely defined.
For example, [0,2,3,1] is also a valid gray code sequence.

00 - 0
10 - 2
11 - 3
01 - 1
```

**Example 2:**

```
Input: 0
Output: [0]
Explanation: We define the gray code sequence to begin with 0.
             A gray code sequence of n has size = 2n, which for n = 0 the size is 20 = 1.
             Therefore, for n = 0 the gray code sequence is [0].
```

### Solution:


```
0: [  0                                   ]
1: [  0,   1                              ]
2: [ 00,  01,  11,  10                    ]
3: [000, 001, 011, 010, 110, 111, 101, 100]
```

The pattern is self-evident. Reverse the result set and prepend '1' to each item.

Use bitwise shift to speed up the calculation. It is unlikely to overflow since the result set is exponential.

```javascript
/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
  const result = [0]
  for (let level = 0; level < n; level++) {
    const prefix = 1 << level
    for (let i = result.length - 1; i >= 0; i--) {
      result.push(result[i] + prefix)
    }
  }
  return result
};
```

*Template generated via [Leetmark](https://github.com/crimx/crx-leetmark).*

