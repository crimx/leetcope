---
Difficulty: Medium
Related Topics:
  "Array": https://leetcode.com/tag/array
Similar Questions:
  "Spiral Matrix": https://leetcode.com/problems/spiral-matrix
---

## [59. Spiral Matrix II](https://leetcode.com/problems/spiral-matrix-ii/description/)

### Problem:

Given a positive integer *n*, generate a square matrix filled with elements from 1 to *n*2 in spiral order.

**Example:**

```
Input: 3
Output:
[
 [ 1, 2, 3 ],
 [ 8, 9, 4 ],
 [ 7, 6, 5 ]
]
```

### Solution:

Straight-forward.

```javascript
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  const matrix = [...new Array(n)].map(() => [])
  const halfN = (n + 1) / 2 | 0
  let count = 1
  for (let start = 0; start < halfN; start++) {
    const end = n - start - 1
    for (let col = start; col <= end; col++) {
      matrix[start][col] = count++
    }
    for (let row = start + 1; row <= end; row++) {
      matrix[row][end] = count++
    }
    for (let col = end - 1; col >= start; col--) {
      matrix[end][col] = count++
    }
    for (let row = end - 1; row > start; row--) {
      matrix[row][start] = count++
    }
  }
  return matrix
};
```


*Template generated via [Leetmark](https://github.com/crimx/crx-leetmark).*

