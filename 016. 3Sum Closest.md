---
Difficulty: Medium
Related Topics:
  "Array": https://leetcode.com/tag/array
  "Two Pointers": https://leetcode.com/tag/two-pointers
Similar Questions:
  "3Sum": https://leetcode.com/problems/3sum
  "3Sum Smaller": https://leetcode.com/problems/3sum-smaller
---

## [16. 3Sum Closest](https://leetcode.com/problems/3sum-closest/description/)

### Problem:

Given an array `nums` of *n* integers and an integer `target`, find three integers in `nums` such that the sum is closest to `target`. Return the sum of the three integers. You may assume that each input would have exactly one solution.

**Example:**

```
Given array nums = [-1, 2, 1, -4], and target = 1.

The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
```

### Solution:

Simplified version of [15. 3Sum](./015.%203Sum.md).

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  const len = nums.length
  const sorted = nums.sort((a, b) => a - b)

  let minDiff = Infinity

  for (let i = 0; i < len - 2; i++) {
    if (i > 0 && sorted[i] === sorted[i-1]) {
      continue
    }

    const twoSum = target - sorted[i]

    for (let l = i + 1, r = len - 1; l < r;) {
      const diff = twoSum - sorted[l] - sorted[r]
      if (diff === 0) {
        return target
      } else {
        if (diff > 0) {
          l++
        } else {
          r--
        }

        if (Math.abs(diff) < Math.abs(minDiff)) {
          minDiff = diff
        }
      }
    }
  }

  return target - minDiff
};
```

*Template generated via [Leetmark](https://github.com/crimx/crx-leetmark).*

