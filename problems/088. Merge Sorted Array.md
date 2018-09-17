---
Difficulty: Easy
Related Topics:
  "Array": https://leetcode.com/tag/array
  "Two Pointers": https://leetcode.com/tag/two-pointers
Similar Questions:
  "Merge Two Sorted Lists": https://leetcode.com/problems/merge-two-sorted-lists
---

## [88. Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/description/)

### Problem:

Given two sorted integer arrays *nums1* and *nums2*, merge *nums2* into *nums1* as one sorted array.

**Note:**

- The number of elements initialized in *nums1* and *nums2* are *m* and *n* respectively.
- You may assume that *nums1* has enough space (size that is greater or equal to *m* + *n*) to hold additional elements from *nums2*.

**Example:**

```
Input:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

Output: [1,2,2,3,5,6]
```

### Solution:

Loop backward and keep picking the larger one. `nums1` is guaranteed longer than `nums2` so just use `n` as boundary.

```javascript
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let len = (m--) + (n--)
  while (n >= 0) {
    nums1[--len] = nums1[m] >= nums2[n] ? nums1[m--] : nums2[n--]
  }
};
```


*Template generated via [Leetmark](https://github.com/crimx/crx-leetmark).*

