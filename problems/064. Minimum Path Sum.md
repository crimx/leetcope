---
Difficulty: Medium
Related Topics:
  "Array": https://leetcode.com/tag/array
  "Dynamic Programming": https://leetcode.com/tag/dynamic-programming
Similar Questions:
  "Unique Paths": https://leetcode.com/problems/unique-paths
  "Dungeon Game": https://leetcode.com/problems/dungeon-game
  "Cherry Pickup": https://leetcode.com/problems/cherry-pickup
---

## [64. Minimum Path Sum](https://leetcode.com/problems/minimum-path-sum/description/)

### Problem:

Given a *m* x *n* grid filled with non-negative numbers, find a path from top left to bottom right which *minimizes* the sum of all numbers along its path.

**Note:** You can only move either down or right at any point in time.

**Example:**

```
Input:
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
Output: 7
Explanation: Because the path 1→3→1→1→1 minimizes the sum.
```

### Solution:

Define `f(i, j)` to be the min sum from `(0, 0)` to `(i, j)`.

```
f(0, 0) = grid[0][0]
f(0, j) = f(0, j-1) + grid[0][j], j > 0
f(i, 0) = f(i-1, 0) + grid[i][0], i > 0
f(i, j) = min( f(i-1, j), f(i, j-1) ) + grid[i][j], j > 0 && i > 0
```

Only two previous states are dependant. Use dynamic array to reduce memory allocation.

```javascript
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  const height = grid.length
  if (height <= 0) { return 0 }
  const width = grid[0].length
  if (width <= 0) { return 0 }

  const dp = new Array(width).fill(Infinity)
  dp[0] = 0
  for (let i = 0; i < height; i++) {
    dp[0] += grid[i][0]
    for (let j = 1; j < width; j++) {
      dp[j] = Math.min(dp[j], dp[j-1]) + grid[i][j]
    }
  }

  return dp[width-1] || 0
};
```


*Template generated via [Leetmark](https://github.com/crimx/crx-leetmark).*

