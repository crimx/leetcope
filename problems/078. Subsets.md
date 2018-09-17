---
Difficulty: Medium
Related Topics:
  "Array": https://leetcode.com/tag/array
  "Backtracking": https://leetcode.com/tag/backtracking
  "Bit Manipulation": https://leetcode.com/tag/bit-manipulation
Similar Questions:
  "Subsets II": https://leetcode.com/problems/subsets-ii
  "Generalized Abbreviation": https://leetcode.com/problems/generalized-abbreviation
  "Letter Case Permutation": https://leetcode.com/problems/letter-case-permutation
---

## [78. Subsets](https://leetcode.com/problems/subsets/description/)

### Problem:

Given a set of **distinct** integers, *nums*, return all possible subsets (the power set).

**Note:** The solution set must not contain duplicate subsets.

**Example:**

```
Input: nums = [1,2,3]
Output:
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]
```

### Solution:

#### ONE

BFS.

```javascript
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  return nums.reduce((result, num) => result.concat(result.map(r => [...r, num])), [[]])
};
```

Or more imperative. Loop backward to avoid crossing the boundary.

```javascript
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const result = [[]]
  for (let i = nums.length - 1; i >= 0; i--) {
    for (let j = result.length - 1; j >= 0; j--) {
      result.push([nums[i], ...result[j]])
    }
  }
  return result
};
```

#### TWO

DFS + Backtracking.

```javascript
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const result = []
  _subsets(nums, 0, [], result)
  return result
};

function _subsets(nums, start, path, result) {
  result.push(path.slice())
  while (start < nums.length) {
    path.push(nums[start])
    _subsets(nums, ++start, path, result)
    path.pop()
  }
}
```

*Template generated via [Leetmark](https://github.com/crimx/crx-leetmark).*

