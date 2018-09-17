---
Difficulty: Hard
Related Topics:
  "Backtracking": https://leetcode.com/tag/backtracking
Similar Questions:
  "N-Queens": https://leetcode.com/problems/n-queens
---

## [52. N-Queens II](https://leetcode.com/problems/n-queens-ii/description/)

### Problem:

The *n*-queens puzzle is the problem of placing *n* queens on an *n*×*n* chessboard such that no two queens attack each other.

![8-queens.png](https://leetcode.com/static/images/problemset/8-queens.png)

Given an integer *n*, return the number of distinct solutions to the *n*-queens puzzle.

**Example:**

```
Input: 4
Output: 2
Explanation: There are two distinct solutions to the 4-queens puzzle as shown below.
[
 [".Q..",  // Solution 1
  "...Q",
  "Q...",
  "..Q."],

 ["..Q.",  // Solution 2
  "Q...",
  "...Q",
  ".Q.."]
]
```

### Solution:

Just modify [51. N-Queens](051.%20N-Queens.md).

```javascript
/**
 * @param {number} n
 * @return {string[][]}
 */
var totalNQueens = function(n) {
  return _totalNQueens([...new Array(n)].map((_, i) => i), 0)
};

function _totalNQueens (queens, iStart, result) {
  if (iStart === queens.length) {
    return 1
  }

  let count = 0

  const start = queens[iStart]
  for (let i = iStart; i < queens.length; i++) {
    const next = queens[i]

    queens[iStart] = next
    queens[i] = start

    if (_testDiagonal(queens, iStart)) {
      count += _totalNQueens(queens, iStart + 1, result)
    }

    queens[iStart] = start
    queens[i] = next
  }

  return count
};

function _testDiagonal(queens, iStart) {
  for (let i = 0; i < iStart; i++) {
    if (Math.abs(queens[iStart] - queens[i]) === iStart - i) {
      return false
    }
  }
  return true
};
```


*Template generated via [Leetmark](https://github.com/crimx/crx-leetmark).*

