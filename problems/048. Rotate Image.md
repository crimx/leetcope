---
Difficulty: Medium
Related Topics:
  "Array": https://leetcode.com/tag/array
---

## [48. Rotate Image](https://leetcode.com/problems/rotate-image/description/)

### Problem:

You are given an *n* x *n* 2D matrix representing an image.

Rotate the image by 90 degrees (clockwise).

**Note:**

You have to rotate the image [**in-place**](https://en.wikipedia.org/wiki/In-place_algorithm), which means you have to modify the input 2D matrix directly. **DO NOT** allocate another 2D matrix and do the rotation.

**Example 1:**

```
Given input matrix = 
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
],

rotate the input matrix in-place such that it becomes:
[
  [7,4,1],
  [8,5,2],
  [9,6,3]
]
```

**Example 2:**

```
Given input matrix =
[
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
], 

rotate the input matrix in-place such that it becomes:
[
  [15,13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7,10,11]
]
```

### Solution:

Outside-in. Rotate one square at a time.

```javascript
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  if (!matrix || matrix.length <= 0) {
    return
  }
  const width = matrix.length
  const halfWidthFloor = Math.floor(width / 2)
  const halfWidthCeil = Math.ceil(width / 2)
  for (let i = 0; i < halfWidthFloor; i++) {
    const iend = width - 1 - i
    for (let j = 0; j < halfWidthCeil; j++) {
      const jend = width - 1 - j
      const tmp = matrix[i][j]
      matrix[i][j] = matrix[jend][i];
      matrix[jend][i] = matrix[iend][jend]
      matrix[iend][jend] = matrix[j][iend]
      matrix[j][iend] = tmp
    }
  }
};
```


*Template generated via [Leetmark](https://github.com/crimx/crx-leetmark).*

