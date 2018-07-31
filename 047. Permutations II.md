---
Difficulty: Medium
Related Topics:
  "Backtracking": https://leetcode.com/tag/backtracking
Similar Questions:
  "Next Permutation": https://leetcode.com/problems/next-permutation
  "Permutations": https://leetcode.com/problems/permutations
  "Palindrome Permutation II": https://leetcode.com/problems/palindrome-permutation-ii
---

## [47. Permutations II](https://leetcode.com/problems/permutations-ii/description/)

### Problem:

Given a collection of numbers that might contain duplicates, return all possible unique permutations.

**Example:**

```
Input: [1,1,2]
Output:
[
  [1,1,2],
  [1,2,1],
  [2,1,1]
]
```

### Solution:

Same as [46. Permutations](./046.%20Permutations.md). To avoid duplication, when picking a number for a position, only pick the unused. Either sort the `nums` or use a set to mark.

```javascript
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  const result = []
  _permuteUnique(nums, 0, result)
  return result
};

function _permuteUnique (nums, start, result) {
  if (start === nums.length) {
    result.push(nums.slice())
  }

  const used = new Set()
  const begin = nums[start]
  for (let i = start; i < nums.length; i++) {
    const next = nums[i]

    if (used.has(next)) {
      continue
    }

    used.add(next)

    nums[start] = next
    nums[i] = begin

    _permuteUnique(nums, start + 1, result)

    nums[start] = begin
    nums[i] = next
  }
};
```


*Template generated via [Leetmark](https://github.com/crimx/crx-leetmark).*

