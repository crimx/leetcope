---
Difficulty: Medium
Related Topics:
  "Array": https://leetcode.com/tag/array
  "Backtracking": https://leetcode.com/tag/backtracking
Similar Questions:
  "Subsets": https://leetcode.com/problems/subsets
---

## [90. Subsets II](https://leetcode.com/problems/subsets-ii/description/)

### Problem:

Given a collection of integers that might contain duplicates, **nums**, return all possible subsets (the power set).

**Note:** The solution set must not contain duplicate subsets.

**Example:**

```
Input: [1,2,2]
Output:
[
  [2],
  [1],
  [1,2,2],
  [2,2],
  [1,2],
  []
]
```

### Solution:

See [78. Subsets](./078.%20Subsets.md). Except:

1. Sort input to group duplicates.
2. Only consider each duplicate once, that is, when it is at the first slot.

```javascript
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  const result = []
  _subsetsWithDup(nums.sort(), 0, [], result)
  return result
};

function _subsetsWithDup(nums, start, path, result) {
  result.push(path.slice())
  for (let i = start; i < nums.length; i++) {
    if(i > start && nums[i] === nums[i-1]) {
      continue
    }
    path.push(nums[i])
    _subsetsWithDup(nums, i + 1, path, result)
    path.pop()
  }
}
```

*Template generated via [Leetmark](https://github.com/crimx/crx-leetmark).*

