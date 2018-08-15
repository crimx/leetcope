---
Difficulty: Medium
Related Topics:
  "Array": https://leetcode.com/tag/array
  "Backtracking": https://leetcode.com/tag/backtracking
Similar Questions:
  "Word Search II": https://leetcode.com/problems/word-search-ii
---

## [79. Word Search](https://leetcode.com/problems/word-search/description/)

### Problem:

Given a 2D board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

**Example:**

```
board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

Given word = "ABCCED", return true.
Given word = "SEE", return true.
Given word = "ABCB", return false.
```

### Solution:

DFS + Backtracking. Replace the cell with `NaN` before proceeding to the next level and restore when backtracking.

```javascript
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  const height = board.length
  if (height <= 0) { return false }
  const width = board[0].length
  if (width <= 0) { return false }

  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      if (board[row][col] === word[0] &&
          _exist(board, word, 0, [[-1, 0], [1, 0], [0, -1], [0, 1]], row, col)
      ) {
        return true
      }
    }
  }

  return false
};

function _exist (board, word, iWord, directions, row, col) {
  if (iWord === word.length) {
    return true
  }

  if (!board[row] || word[iWord] !== board[row][col]) {
    return false
  }

  const cell = board[row][col]
  board[row][col] = NaN

  for (let i = directions.length - 1; i >= 0; i--) {
    if (_exist(board, word, iWord+1, directions, row+directions[i][0], col+directions[i][1])) {
      return true
    }
  }

  board[row][col] = cell

  return false
}
```


*Template generated via [Leetmark](https://github.com/crimx/crx-leetmark).*

