---
Difficulty: Medium
Related Topics:
  "Array": https://leetcode.com/tag/array
  "Binary Search": https://leetcode.com/tag/binary-search
Similar Questions:
  "Search a 2D Matrix II": https://leetcode.com/problems/search-a-2d-matrix-ii
---

## [74. Search a 2D Matrix](https://leetcode.com/problems/search-a-2d-matrix/description/)

### Problem:

Write an efficient algorithm that searches for a value in an *m* x *n* matrix. This matrix has the following properties:

- Integers in each row are sorted from left to right.
- The first integer of each row is greater than the last integer of the previous row.

**Example 1:**

```
Input:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 3
Output: true
```

**Example 2:**

```
Input:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 13
Output: false
```

### Solution:

#### ONE

Search from top-left to bottom-right. O(*n*).

```javascript
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  const height = matrix.length
  if (height <= 0) { return false }
  const width = matrix[0].length
  if (width <= 0) { return false }

  let i = 0
  let j = width - 1
  while (i < height && j >= 0) {
    const diff = matrix[i][j] - target
    if (diff > 0) {
      j--
    } else if (diff < 0) {
      i++
    } else {
      return true
    }
  }

  return false
};
```

#### TWO

Binary search. O(log*n*).

View the matrix as an sorted array that is cut into `n` slices.

Take the algorithm from [35. Search Insert Position](./035.%20Search%20Insert%20Position.md).

```javascript
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  const height = matrix.length
  if (height <= 0) { return false }
  const width = matrix[0].length
  if (width <= 0) { return false }

  let s = 0
  let e = width * height - 1
  while (s <= e) {
    const mid = Math.floor((s + e) / 2)
    const diff = matrix[Math.floor(mid / width)][mid % width] - target
    if (diff < 0) {
      s = mid + 1
    } else if (diff > 0) {
      e = mid - 1
    } else {
      return true
    }
  }

  return false
};
```


*Template generated via [Leetmark](https://github.com/crimx/crx-leetmark).*

