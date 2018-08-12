---
Difficulty: Medium
Related Topics:
  "Array": https://leetcode.com/tag/array
Similar Questions:
  "Game of Life": https://leetcode.com/problems/game-of-life
---

## [73. Set Matrix Zeroes](https://leetcode.com/problems/set-matrix-zeroes/description/)

### Problem:

Given a *m* x *n* matrix, if an element is 0, set its entire row and column to 0. Do it [**in-place**](https://en.wikipedia.org/wiki/In-place_algorithm).

**Example 1:**

```
Input: 
[
  [1,1,1],
  [1,0,1],
  [1,1,1]
]
Output: 
[
  [1,0,1],
  [0,0,0],
  [1,0,1]
]
```

**Example 2:**

```
Input: 
[
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
]
Output: 
[
  [0,0,0,0],
  [0,4,5,0],
  [0,3,1,0]
]
```

**Follow up:**

- A straight forward solution using O(*m**n*) space is probably a bad idea.
- A simple improvement uses O(*m* + *n*) space, but still not the best solution.
- Could you devise a constant space solution?

### Solution:

- O(*m**n*) space solution: Copy a new matrix.
- O(*m* + *n*) space solution: Use extra arrays to store rows and columns that need to be set 0.
- Constant space solutions:

#### ONE

Instead of allocating extra arrays. Just use the first row and column.

First scan through the first row and column to see if they need be set 0. If so, mark and do it in the end.

Now scan the matrix and set 0 to the first row and column whenever a 0 is met.

Walk the matrix again and set 0 according to the first row and column.

Finally set the first row and column to 0 if needed.

```javascript
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  const height = matrix.length
  if (height <= 0) { return }
  const width = matrix[0].length
  if (width <= 0) { return }

  const shouldClearFirstRow = matrix[0].some(x => x === 0)
  const shouldClearFirstCol = matrix.some(row => row[0] === 0)

  for (let i = 1; i < height; i++) {
    for (let j = 1; j < width; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0
        matrix[0][j] = 0
      }
    }
  }

  for (let i = 1; i < height; i++) {
    if (matrix[i][0] === 0) {
      matrix[i].fill(0)
    }
  }

  for (let j = 1; j < width; j++) {
    if (matrix[0][j] === 0) {
      for (let i = 1; i < height; i++) {
        matrix[i][j] = 0
      }
    }
  }

  if (shouldClearFirstRow) {
    matrix[0].fill(0)
  }

  if (shouldClearFirstCol) {
    for (let i = 0; i < height; i++) {
      matrix[i][0] = 0
    }
  }
};
```

#### TWO

Use `NaN` to mark cells that need to be set 0.

Still constant space just a bit slower due to repeatedly setting overlapping `NaN`s.

```
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  const height = matrix.length
  if (height <= 0) { return }
  const width = matrix[0].length
  if (width <= 0) { return }

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (matrix[i][j] !== 0) { continue }

      for (let jj = 0; jj < width; jj++) {
        if (matrix[i][jj] !== 0) {
          matrix[i][jj] = NaN
        }
      }

      for (let ii = 0; ii < height; ii++) {
        if (matrix[ii][j] !== 0) {
          matrix[ii][j] = NaN
        }
      }
    }
  }

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (isNaN(matrix[i][j])) {
        matrix[i][j] = 0
      }
    }
  }
};
```


*Template generated via [Leetmark](https://github.com/crimx/crx-leetmark).*

