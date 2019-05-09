---
Difficulty: Hard
Related Topics:
  "Array": https://leetcode.com/tag/array
  "Hash Table": https://leetcode.com/tag/hash-table
  "Dynamic Programming": https://leetcode.com/tag/dynamic-programming
  "Stack": https://leetcode.com/tag/stack
Similar Questions:
  "Largest Rectangle in Histogram": https://leetcode.com/problems/largest-rectangle-in-histogram
  "Maximal Square": https://leetcode.com/problems/maximal-square
---

## [85. Maximal Rectangle](https://leetcode.com/problems/maximal-rectangle/description/)

### Problem:

Given a 2D binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.

**Example:**

```
Input:
[
  ["1","0","1","0","0"],
  ["1","0","1","1","1"],
  ["1","1","1","1","1"],
  ["1","0","0","1","0"]
]
Output: 6
```

### Solution:

#### ONE

View every row as a base line then we just have to solve `height(matrix)` times the problem of [84. Largest Rectangle in Histogram](084.%20Largest%20Rectangle%20in%20Histogram.md).

```javascript
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
  const height = matrix.length
  if (height <= 0) { return 0 }
  const width = matrix[0].length
  if (width <= 0) { return 0 }

  const heights = []
  let max = 0
  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      heights[col] = ((heights[col] || 0) + 1) * matrix[row][col]
    }
    max = Math.max(max, largestRectangleArea(heights))
  }

  return max
};

/**
 * @param {number[]} heights
 * @return {number}
 */
function largestRectangleArea (heights) {
  const stack = [-1]
  let max = 0
  for (let i2 = 0; i2 <= heights.length; i2++) {
    while ((heights[i2] || 0) < heights[stack[stack.length-1]]) {
      const i = stack.pop()
      const i1 = stack[stack.length-1]
      max = Math.max(max, heights[i] * (i2 - i1 - 1))
    }
    stack.push(i2)
  }
  return max
};
```

#### TWO

Same idea as above. Use DP to cache accumulated states.

Pick a pivot point `(row, col)` and assume it is on the base line. The adjoining `1`s above `(row, col)` makes up the height of the rectangle. The width of the rectangle is determined by how many ajoining bars are taller than the pivot bar.

So for the rectangle whose bottom pivot is `(row, col)`:

- Define `area(row, col)` to be the area.
- Define `height(row, col)` to be the height.
- Define `left(row, col)` to be the `col` value of the bottom-left corner.
- Define `right(row, col)` to be the `col` value of the bottom-right corner.

Also:

- Define `conLeft(row, col)` to be the `col` value of the leftmost cell of the consecutive `1`s on the left of `(row, col)`.
- Define `conRight(row, col)` to be the `col` value of the rightmost cell of the consecutive `1`s on the right of `(row, col)`.

With `conLeft` and `conRight` we can know if the rectangle on `(row, col)` shrinks comparing to `(row-1, col)`.

```javascript
if matrix[row][col] == 1
  height(row, col) = height(row-1, col) + 1
  
  // see how long this horizontal line can get
  conLeft(row, col) = conLeft(row, col-1)
  conRight(row, col) = conRight(row, col+1)
  
  // width can only be shorter
  left(row, col) = max( left(row-1, col), conLeft(row, col) )
  right(row, col) = min( right(row-1, col), conRight(row, col) )

if matrix[row][col] == 0
  height(row, col) = 0
  conLeft(row, col) = col + 1
  conRight(row, col) = col - 1
  left(row, col) = 0 // back to leftmost position
  right(row, col) = matrix.width // back to rightmost position

area(row, col) = (right(row, col) - left(row, col) + 1) * height(row, col)
```

We only need to keep the last state. Use dynamic arrays to reduce space complexity.

```javascript
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
  const height = matrix.length
  if (height <= 0) { return 0 }
  const width = matrix[0].length
  if (width <= 0) { return 0 }

  const heights = new Array(width).fill(0)
  const lefts = new Array(width).fill(0)
  const rights = new Array(width).fill(width)

  let max = 0

  for (let row = 0; row < height; row++) {
    let conLeft = 0
    let conRight = width - 1
    for (let col = 0; col < width; col++) {
      if (matrix[row][col] === '1') {
        heights[col] = heights[col] + 1
        lefts[col] = Math.max(lefts[col], conLeft)
      } else {
        heights[col] = 0
        lefts[col] = 0
        conLeft = col + 1
      }
    }

    for (let col = width - 1; col >= 0; col--) {
      if (matrix[row][col] === '1') {
        rights[col] = Math.min(rights[col], conRight)
      } else {
        rights[col] = width
        conRight = col - 1
      }
    }

    for (let col = 0; col < width; col++) {
      max = Math.max(max, (rights[col] - lefts[col] + 1) * heights[col])
    }
  }

  return max
};
```

*Template generated via [Leetmark](https://github.com/crimx/crx-leetmark).*

