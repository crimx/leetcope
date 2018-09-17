---
Difficulty: Medium
Related Topics:
  "Hash Table": https://leetcode.com/tag/hash-table
Similar Questions:
  "Sudoku Solver": https://leetcode.com/problems/sudoku-solver
---

## [36. Valid Sudoku](https://leetcode.com/problems/valid-sudoku/description/)

### Problem:

Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated **according to the following rules**:

1. Each row must contain the digits `1-9` without repetition.
2. Each column must contain the digits `1-9` without repetition.
3. Each of the 9 `3x3` sub-boxes of the grid must contain the digits `1-9` without repetition.

![250px-Sudoku-by-L2G-20050714.svg.png](https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Sudoku-by-L2G-20050714.svg/250px-Sudoku-by-L2G-20050714.svg.png)

A partially filled sudoku which is valid.

The Sudoku board could be partially filled, where empty cells are filled with the character `'.'`.

**Example 1:**

```
Input:
[
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
Output: true
```

**Example 2:**

```
Input:
[
  ["8","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being 
    modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
```

**Note:**

- A Sudoku board (partially filled) could be valid but is not necessarily solvable.
- Only the filled cells need to be validated according to the mentioned rules.
- The given board contain only digits `1-9` and the character `'.'`.
- The given board size is always `9x9`.

### Solution:

Scan the board once.

```javascript
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  if (!board || board.length !== 9) { return false }

  const newArray = () => []
  const col = board.map(newArray)
  const row = board.map(newArray)
  const sub = board.map(newArray)

  for (let r = 0; r < 9; r++) {
    if (board[r].length !== 9) { return false }

    for (let c = 0; c < 9; c++) {
      const num = board[r][c]
      const subOffset = 3 * (r / 3 | 0) + (c / 3 | 0)
      if (num !== '.') {
        if (!(num >= 1 && num <= 9) ||
            row[r][num] ||
            col[c][num] ||
            sub[subOffset][num]
        ) {
          return false
        }
        row[r][num] = true
        col[c][num] = true
        sub[subOffset][num] = true
      }
    }
  }

  return true
};
```


*Template generated via [Leetmark](https://github.com/crimx/crx-leetmark).*

