---
Difficulty: Medium
Related Topics:
  "Backtracking": https://leetcode.com/tag/backtracking
Similar Questions:
  "Next Permutation": https://leetcode.com/problems/next-permutation
  "Permutations II": https://leetcode.com/problems/permutations-ii
  "Permutation Sequence": https://leetcode.com/problems/permutation-sequence
  "Combinations": https://leetcode.com/problems/combinations
---

## [46. Permutations](https://leetcode.com/problems/permutations/description/)

### Problem:

Given a collection of **distinct** integers, return all possible permutations.

**Example:**

```
Input: [1,2,3]
Output:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
```

### Solution:

One position at a time, pick a number from the unused set and put it in that position (by swapping). Then move on to the next.

```javascript
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const result = []
  _permute(nums, 0, result)
  return result
};

function _permute (nums, start, result) {
  if (start === nums.length) {
    return result.push(nums.slice())
  }

  const begin = nums[start]
  for (let i = start; i < nums.length; i++) {
    const next = nums[i]

    nums[start] = next
    nums[i] = begin

    _permute(nums, start + 1, result)

    nums[start] = begin
    nums[i] = next
  }
};
```


*Template generated via [Leetmark](https://github.com/crimx/crx-leetmark).*

