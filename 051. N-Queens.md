---
Difficulty: Hard
Related Topics:
  "Backtracking": https://leetcode.com/tag/backtracking
Similar Questions:
  "N-Queens II": https://leetcode.com/problems/n-queens-ii
---

## [51. N-Queens](https://leetcode.com/problems/n-queens/description/)

### Problem:

The *n*-queens puzzle is the problem of placing *n* queens on an *n*×*n* chessboard such that no two queens attack each other.

![8-queens.png](https://leetcode.com/static/images/problemset/8-queens.png)

Given an integer *n*, return all distinct solutions to the *n*-queens puzzle.

Each solution contains a distinct board configuration of the *n*-queens' placement, where `'Q'` and `'.'` both indicate a queen and an empty space respectively.

**Example:**

```
Input: 4
Output: [
 [".Q..",  // Solution 1
  "...Q",
  "Q...",
  "..Q."],

 ["..Q.",  // Solution 2
  "Q...",
  "...Q",
  ".Q.."]
]
Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above.
```

### Solution:

Allocate a `n`-length array `queens`. Each item represents a queen coordinate on the borad. Let index `i` be the row index, and `queens[i]` be the column index (or vice versa).

Now use the permutation algorithm from [46. Permutations](./046.%20Permutations.md) to generate all possible queen positions, then test for diagonal.

#### ONE

```javascript
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  const result = []
  const queens = [...new Array(n)].map((_, i) => i)
  _solveNQueens(queens, 0, result)
  return result
};

function _solveNQueens (queens, iStart, result) {
  if (iStart === queens.length) {
    for (let i = 0; i < queens.length; i += 1) {
      for (let j = i + 1; j < queens.length; j += 1) {
        if (Math.abs(i - j) === Math.abs(queens[i] - queens[j])) {
          return
        }
      }
    }
    return result.push(_genBoard(queens))
  }

  const start = queens[iStart]
  for (let i = iStart; i < queens.length; i++) {
    const next = queens[i]

    queens[iStart] = next
    queens[i] = start

    _solveNQueens(queens, iStart + 1, result)

    queens[iStart] = start
    queens[i] = next
  }
};

function _genBoard (queens) {
  const board = []
  for (let i = 0; i < queens.length; i++) {
    let row = ''
    for (let j = 0; j < queens.length; j++) {
      row += queens[i] === j ? 'Q' : '.'
    }
    board.push(row)
  }
  return board
};
```

This is slow because we test diagonal in the end. We can do a tree pruning by moving it right before diving into the next recursion.

#### TWO

```javascript
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  const result = []
  const queens = [...new Array(n)].map((_, i) => i)
  _solveNQueens(queens, 0, result)
  return result
};

function _solveNQueens (queens, iStart, result) {
  if (iStart === queens.length) {
    return result.push(_genBoard(queens))
  }

  const start = queens[iStart]
  for (let i = iStart; i < queens.length; i++) {
    const next = queens[i]

    queens[iStart] = next
    queens[i] = start

    if (_testDiagonal(queens, iStart)) {
      _solveNQueens(queens, iStart + 1, result)
    }

    queens[iStart] = start
    queens[i] = next
  }
};

function _testDiagonal(queens, iStart) {
  for (let i = 0; i < iStart; i++) {
    if (Math.abs(queens[iStart] - queens[i]) === iStart - i) {
      return false
    }
  }
  return true
};

function _genBoard (queens) {
  const board = []
  for (let i = 0; i < queens.length; i++) {
    let row = ''
    for (let j = 0; j < queens.length; j++) {
      row += queens[i] === j ? 'Q' : '.'
    }
    board.push(row)
  }
  return board
};
```

*Template generated via [Leetmark](https://github.com/crimx/crx-leetmark).*

