---
Difficulty: Hard
Related Topics:
  "Hash Table": https://leetcode.com/tag/hash-table
  "Backtracking": https://leetcode.com/tag/backtracking
Similar Questions:
  "Valid Sudoku": https://leetcode.com/problems/valid-sudoku
---

## [37. Sudoku Solver](https://leetcode.com/problems/sudoku-solver/description/)

### Problem:

Write a program to solve a Sudoku puzzle by filling the empty cells.

A sudoku solution must satisfy **all of the following rules**:

1. Each of the digits `1-9` must occur exactly once in each row.
2. Each of the digits `1-9` must occur exactly once in each column.
3. Each of the the digits `1-9` must occur exactly once in each of the 9 `3x3` sub-boxes of the grid.

Empty cells are indicated by the character `'.'`.

![250px-Sudoku-by-L2G-20050714.svg.png](https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Sudoku-by-L2G-20050714.svg/250px-Sudoku-by-L2G-20050714.svg.png)  
A sudoku puzzle...

![250px-Sudoku-by-L2G-20050714_solution.svg.png](https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Sudoku-by-L2G-20050714_solution.svg/250px-Sudoku-by-L2G-20050714_solution.svg.png)  
...and its solution numbers marked in red.

**Note:**

- The given board contain only digits `1-9` and the character `'.'`.
- You may assume that the given Sudoku puzzle will have a single unique solution.
- The given board size is always `9x9`.

### Solution:

DFS + backtracking.

Just like [36. Valid Sudoku](./036.%20Valid%20Sudoku.md) but instead of validating the board with three tables, we use these three tables to get all the valid numbers at a position. This is super fast as it skips a lot of redundant comparisons.

Every time we reach a position, we pick a possible solution and move on to the next position, which is an identical problem.

If the next position fails, we come back and try the next possible solution of the current position.

If all possible solutions fail, we just dump the current position and go back to the last position.

```javascript
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
  const newArray = () => []
  const col = board.map(newArray)
  const row = board.map(newArray)
  const sub = board.map(newArray)

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      const num = +board[r][c]
      if (num) {
        const subOffset = 3 * (r / 3 | 0) + (c / 3 | 0)
        row[r][num] = true
        col[c][num] = true
        sub[subOffset][num] = true
      }
    }
  }

  dfs(board, col, row, sub, 0)
};

function dfs (board, col, row, sub, pos) {
  if  (pos >= 81) { return true }

  const r = pos / 9 | 0
  const c = pos % 9

  if (board[r][c] !== '.') {
    return dfs(board, col, row, sub, pos + 1)
  }

  const subOffset = 3 * (r / 3 | 0) + (c / 3 | 0)

  for (let num = 1; num <= 9; num++) {
    if (!(row[r][num] || col[c][num] || sub[subOffset][num])) {
      row[r][num] = true
      col[c][num] = true
      sub[subOffset][num] = true

      if (dfs(board, col, row, sub, pos + 1)) {
        board[r][c] = num + ''
        return true
      } else {
        row[r][num] = false
        col[c][num] = false
        sub[subOffset][num] = false
      }
    }
  }

  return false
};
```


*Template generated via [Leetmark](https://github.com/crimx/crx-leetmark).*

