---
Difficulty: Medium
Related Topics:
  "Array": https://leetcode.com/tag/array
Similar Questions:
  "Spiral Matrix II": https://leetcode.com/problems/spiral-matrix-ii
---

## [54. Spiral Matrix](https://leetcode.com/problems/spiral-matrix/description/)

### Problem:

Given a matrix of *m* x *n* elements (*m* rows, *n* columns), return all elements of the matrix in spiral order.

**Example 1:**

```
Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
Output: [1,2,3,6,9,8,7,4,5]
```

**Example 2:**

```
Input:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
```

### Solution:

Loop outside-in. Break each cycle into four stages. Note that the last two stages need at least two rows/columns.

```javascript
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  const result = []
  const height = matrix.length
  if (height <= 1) { return matrix[0] || result }
  const width = matrix[0].length
  if (width <= 0) { return result }

  const end = (Math.min(width, height) + 1) / 2 | 0
  for (let start = 0; start < end; start++) {
    const rowEnd = height - start - 1
    const colEnd = width - start - 1
    for (let col = start; col <= colEnd; col++) {
      result.push(matrix[start][col])
    }
    for (let row = start + 1; row <= rowEnd; row++) {
      result.push(matrix[row][colEnd])
    }
    if (rowEnd > start) {
      for (let col = colEnd - 1; col >= start ; col--) {
        result.push(matrix[rowEnd][col])
      }
    }
    if (colEnd > start) {
      for (let row = rowEnd - 1; row > start ; row--) {
        result.push(matrix[row][start])
      }
    }
  }
  return result
};
```


*Template generated via [Leetmark](https://github.com/crimx/crx-leetmark).*

