---
Difficulty: Medium
Related Topics:
  "Array": https://leetcode.com/tag/array
  "Hash Table": https://leetcode.com/tag/hash-table
  "Two Pointers": https://leetcode.com/tag/two-pointers
Similar Questions:
  "Two Sum": https://leetcode.com/problems/two-sum
  "3Sum": https://leetcode.com/problems/3sum
  "4Sum II": https://leetcode.com/problems/4sum-ii
---

## [18. 4Sum](https://leetcode.com/problems/4sum/description/)

### Problem:

Given an array `nums` of *n* integers and an integer `target`, are there elements *a*, *b*, *c*, and *d* in `nums` such that *a* + *b* + *c* + *d* = `target`? Find all unique quadruplets in the array which gives the sum of `target`.

**Note:**

The solution set must not contain duplicate quadruplets.

**Example:**

```
Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.

A solution set is:
[
  [-1,  0, 0, 1],
  [-2, -1, 1, 2],
  [-2,  0, 0, 2]
]
```

### Solution:

Like [15. 3Sum](./015.%203Sum.md) and [16. 3Sum Closest](./016.%203Sum%20Closest.md). Wrap one more loop.

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  const len = nums.length
  const sorted = nums.sort((a, b) => a - b)
  const result = []

  for (let k = 0; k < len - 3; k++) {
    if (k > 0 && sorted[k] === sorted[k-1]) {
      continue
    }

    const threeSum = target - sorted[k]

    for (let i = k+1; i < len - 2; i++) {
      if (i > k+1 && sorted[i] === sorted[i-1]) {
        continue
      }

      const twoSum = threeSum - sorted[i]

      for (let l = i + 1, r = len - 1; l < r;) {
        const diff = twoSum - sorted[l] - sorted[r]
        if (diff > 0) {
          l++
        } else if (diff < 0) {
          r--
        } else {
          result.push([sorted[k], sorted[i], sorted[l], sorted[r]])
          while (++l < r && sorted[l] === sorted[l - 1]);
          while (--r > l && sorted[r] === sorted[r + 1]);
        }
      }
    }
  }

  return result
};
```


*Template generated via [Leetmark](https://github.com/crimx/crx-leetmark).*

