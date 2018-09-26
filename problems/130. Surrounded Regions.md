---
Difficulty: Medium
Related Topics:
  "Depth-first Search": https://leetcode.com/tag/depth-first-search
  "Breadth-first Search": https://leetcode.com/tag/breadth-first-search
  "Union Find": https://leetcode.com/tag/union-find
Similar Questions:
  "Number of Islands": https://leetcode.com/problems/number-of-islands
  "Walls and Gates": https://leetcode.com/problems/walls-and-gates
---

## [130. Surrounded Regions](https://leetcode.com/problems/surrounded-regions/description/)

### Problem:

Given a 2D board containing `'X'` and `'O'` (**the letter O**), capture all regions surrounded by `'X'`.

A region is captured by flipping all `'O'`s into `'X'`s in that surrounded region.

**Example:**

```
X X X X
X O O X
X X O X
X O X X

```

After running your function, the board should be:

```
X X X X
X X X X
X X X X
X O X X

```

**Explanation:**

Surrounded regions shouldn’t be on the border, which means that any `'O'` on the border of the board are not flipped to `'X'`. Any `'O'` that is not on the border and it is not connected to an `'O'` on the border will be flipped to `'X'`. Two cells are connected if they are adjacent cells connected horizontally or vertically.

### Solution:

Find all the `O`s that are connected to the `O`s on the border, change them to `#`. Then scan the board, change `O` to `X` and `#` back to `O`.

The process of finding the connected `O`s is just like tree traversal. `O`s on the border are the same level. Their children are the second level. And so on.

So both BFS and DFS are good. I prefer BFS when pruning is not needed in favor of its readability.

```javascript
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
  const height = board.length
  if (height <= 1) { return }
  const width = board[0].length
  if (width <= 1) { return }

  const rowend = height - 1
  const colend = width - 1

  const queue = []

  for (let row = 0; row < height; row++) {
    if (board[row][0] === 'O') {
      board[row][0] = '#'
      queue.push(row, 0)
    }
    if (board[row][colend] === 'O') {
      board[row][colend] = '#'
      queue.push(row, colend)
    }
  }

  for (let col = 0; col < width; col++) {
    if (board[0][col] === 'O') {
      board[0][col] = '#'
      queue.push(0, col)
    }
    if (board[rowend][col] === 'O') {
      board[rowend][col] = '#'
      queue.push(rowend, col)
    }
  }

  while (queue.length > 0) {
    const row = queue.shift()
    const col = queue.shift()
    if (row < rowend && board[row + 1][col] === 'O') {
      board[row + 1][col] = '#'
      queue.push(row + 1, col)
    }
    if (row > 0 && board[row - 1][col] === 'O') {
      board[row - 1][col] = '#'
      queue.push(row - 1, col)
    }
    if (board[row][col + 1] === 'O') {
      board[row][col + 1] = '#'
      queue.push(row, col + 1)
    }
    if (board[row][col - 1] === 'O') {
      board[row][col - 1] = '#'
      queue.push(row, col - 1)
    }
  }

  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      if (board[row][col] === '#') {
        board[row][col] = 'O'
      } else if (board[row][col] === 'O') {
        board[row][col] = 'X'
      }
    }
  }
};
```


*Template generated via [Leetmark](https://github.com/crimx/crx-leetmark).*

