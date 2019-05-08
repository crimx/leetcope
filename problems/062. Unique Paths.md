---
Difficulty: Medium
Related Topics:
  "Array": https://leetcode.com/tag/array
  "Dynamic Programming": https://leetcode.com/tag/dynamic-programming
Similar Questions:
  "Unique Paths II": https://leetcode.com/problems/unique-paths-ii
  "Minimum Path Sum": https://leetcode.com/problems/minimum-path-sum
  "Dungeon Game": https://leetcode.com/problems/dungeon-game
---

## [62. Unique Paths](https://leetcode.com/problems/unique-paths/description/)

### Problem:

A robot is located at the top-left corner of a *m* x *n* grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?

![robot_maze.png](https://leetcode.com/static/images/problemset/robot_maze.png)

Above is a 7 x 3 grid. How many possible unique paths are there?

**Note:** *m* and *n* will be at most 100.

**Example 1:**

```
Input: m = 3, n = 2
Output: 3
Explanation:
From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Right -> Down
2. Right -> Down -> Right
3. Down -> Right -> Right
```

**Example 2:**

```
Input: m = 7, n = 3
Output: 28
```

### Solution:

DP.

Define `f(i, j)` to be the number of total unique paths from `(0, 0)` to `(i, j)`.

```
f(i, 0) = 1
f(0, j) = 1
f(i, j) = f(i-1, j) + f(i, j-1)
```

Only two previous states are dependant. Use dynamic array to reduce memory allocation.

```javascript
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  const dp = new Array(m).fill(1)
  while (--n > 0) {
    for (let i = 1; i < m; i++) {
      dp[i] += dp[i-1]
    }
  }
  return dp[m-1] || 1
};
```

*Template generated via [Leetmark](https://github.com/crimx/crx-leetmark).*

