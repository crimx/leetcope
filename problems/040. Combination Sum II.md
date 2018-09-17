---
Difficulty: Medium
Related Topics:
  "Array": https://leetcode.com/tag/array
  "Backtracking": https://leetcode.com/tag/backtracking
Similar Questions:
  "Combination Sum": https://leetcode.com/problems/combination-sum
---

## [40. Combination Sum II](https://leetcode.com/problems/combination-sum-ii/description/)

### Problem:

Given a collection of candidate numbers (`candidates`) and a target number (`target`), find all unique combinations in `candidates` where the candidate numbers sums to `target`.

Each number in `candidates` may only be used **once** in the combination.

**Note:**

- All numbers (including `target`) will be positive integers.
- The solution set must not contain duplicate combinations.

**Example 1:**

```
Input: candidates = [10,1,2,7,6,1,5], target = 8,
A solution set is:
[
  [1, 7],
  [1, 2, 5],
  [2, 6],
  [1, 1, 6]
]
```

**Example 2:**

```
Input: candidates = [2,5,2,1,2], target = 5,
A solution set is:
[
  [1,2,2],
  [5]
]
```

### Solution:

Mostly the same as [39. Combination Sum](./039.%20Combination%20Sum.md).

Now the candidates might have duplicate numbers, so we need to sort it.

We can also safely return when number is larger than the target.

To prvent duplicate results, stop searching if the current number is same as the last.

Notice the number at `start` is immune by the rule because we assume that the current group of candidates begins at `start`.

```javascript
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  return dfs(candidates.sort((a, b) => a - b), target, [], [], 0)
};

function dfs (candidates, target, result, path, start) {
  for (let i = start; i < candidates.length; i++) {
    const cand = candidates[i]

    if (cand > target) {
      return result
    }

    if (i > start && cand === candidates[i-1]) {
      continue
    }

    path.push(cand)
    if (cand === target) {
      result.push(path.slice())
    } else {
      dfs(candidates, target - cand, result, path, i + 1)
    }
    path.pop()
  }

  return result
};
```


*Template generated via [Leetmark](https://github.com/crimx/crx-leetmark).*

