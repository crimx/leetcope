---
Difficulty: Medium
Related Topics:
  "Backtracking": https://leetcode.com/tag/backtracking
Similar Questions:
  "Combination Sum": https://leetcode.com/problems/combination-sum
  "Permutations": https://leetcode.com/problems/permutations
---

## [77. Combinations](https://leetcode.com/problems/combinations/description/)

### Problem:

Given two integers *n* and *k*, return all possible combinations of *k* numbers out of 1 ... *n*.

**Example:**

```
Input: n = 4, k = 2
Output:
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
```

### Solution:

Basic DFS + Backtracking.

```javascript
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  const result = []
  _combine(1, [], n, k, result)
  return result
};

function _combine (cur, path, n, k, result) {
  if (path.length === k) {
    return result.push(path.slice())
  }

  while (cur <= n) {
    path.push(cur)
    _combine(++cur, path, n, k, result)
    path.pop()
  }
}
```


*Template generated via [Leetmark](https://github.com/crimx/crx-leetmark).*

