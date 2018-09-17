---
Difficulty: Medium
Related Topics:
  "Array": https://leetcode.com/tag/array
  "Binary Search": https://leetcode.com/tag/binary-search
Similar Questions:
  "Search in Rotated Sorted Array": https://leetcode.com/problems/search-in-rotated-sorted-array
---

## [81. Search in Rotated Sorted Array II](https://leetcode.com/problems/search-in-rotated-sorted-array-ii/description/)

### Problem:

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., `[0,0,1,2,2,5,6]` might become `[2,5,6,0,0,1,2]`).

You are given a target value to search. If found in the array return `true`, otherwise return `false`.

**Example 1:**

```
Input: nums = [2,5,6,0,0,1,2], target = 0
Output: true
```

**Example 2:**

```
Input: nums = [2,5,6,0,0,1,2], target = 3
Output: false
```

**Follow up:**

- This is a follow up problem to [Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/description/), where `nums` may contain duplicates.
- Would this affect the run-time complexity? How and why?

### Solution:

See [33. Search in Rotated Sorted Array](./033.%20Search%20in%20Rotated%20Sorted%20Array.md). The code is basically the same. Except with duplicates we can not tell which way to jump when `pivot == nums[e]`. The only thing we can do is to ditch `nums[e]`. SO worst case `O(*n*)`.

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
  let s = 0
  let e = nums.length - 1

  while (s <= e) {
    const p = (e + s) / 2 | 0
    const pivot = nums[p]

    if (target === pivot) {
      return true
    }

    if (pivot < nums[e]) {
      if (target > nums[p] && target <= nums[e]) {
        s = p + 1
      } else {
        e = p - 1
      }
    } else if (pivot > nums[e]) {
      if (target < nums[p] && target >= nums[s]) {
        e = p - 1
      } else {
        s = p + 1
      }
    } else {
      e--
    }
  }

  return false
};
```


*Template generated via [Leetmark](https://github.com/crimx/crx-leetmark).*

