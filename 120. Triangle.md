---
Difficulty: Medium
Related Topics:
  "Array": https://leetcode.com/tag/array
  "Dynamic Programming": https://leetcode.com/tag/dynamic-programming
---

## [120. Triangle](https://leetcode.com/problems/triangle/description/)

### Problem:

Given a triangle, find the minimum path sum from top to bottom. Each step you may move to adjacent numbers on the row below.

For example, given the following triangle

```
[
     [2],
    [3,4],
   [6,5,7],
  [4,1,8,3]
]

```

The minimum path sum from top to bottom is `11` (i.e., **2** + **3** + **5** + **1** = 11).

**Note:**

Bonus point if you are able to do this using only *O*(*n*) extra space, where *n* is the total number of rows in the triangle.

### Solution:

Define `f(i, j)` to be the minimum path sum from `triangle[0][0]` to `triangle[i][j]`.

```
f(i, 0) = f(i-1, j) + triangle[i][0]
f(i, j) = min( f(i-1, j-1), f(i-1, j) ) + triangle[i][j], 0 < j < i
f(i, i) = f(i-1, i-1) + triangle[i][i], i > 0
```

Dynamic array can be used.

```javascript
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  if (triangle.length <= 0) { return 0 }

  const dp = [triangle[0][0]]
  for (let i = 1; i < triangle.length; i++) {
    dp[i] = dp[i-1] + triangle[i][i]
    for (let j = i - 1; j >= 1; j--) {
      dp[j] = Math.min(dp[j], dp[j-1]) + triangle[i][j]
    }
    dp[0] += triangle[i][0]
  }
  return Math.min(...dp)
};
```

*Template generated via [Leetmark](https://github.com/crimx/crx-leetmark).*

