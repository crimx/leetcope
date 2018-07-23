---
Difficulty: Medium
Related Topics:
  "Array": https://leetcode.com/tag/array
  "Binary Search": https://leetcode.com/tag/binary-search
Similar Questions:
  "First Bad Version": https://leetcode.com/problems/first-bad-version
---

## [34. Find First and Last Position of Element in Sorted Array](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/)

### Problem:

Given an array of integers `nums` sorted in ascending order, find the starting and ending position of a given `target` value.

Your algorithm's runtime complexity must be in the order of *O*(log *n*).

If the target is not found in the array, return `[-1, -1]`.

**Example 1:**

```
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
```

**Example 2:**

```
Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
```

### Solution:

Implement two variations of binary search to get the first and last matching positions.

They are basically the same as simple binary search except when we got the match, we mark the index and keep moving forward.

If we want to get the first, we dump the right half. Vice versa.

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let s = 0
  let e = nums.length - 1

  const first = searchFirst(nums, target, 0, nums.length - 1)

  if (first === -1) {
    return [-1, -1]
  }

  return [first, searchLast(nums, target, first, nums.length - 1)]
};

function searchFirst (nums, target, s, e) {
  let result = -1

  while (s <= e) {
    const p = (s + e) / 2 | 0
    const diff = nums[p] - target
    if (diff === 0) {
      result = p
      e = p - 1
    } else if (diff > 0) {
      e = p - 1
    } else {
      s = s + 1
    }
  }

  return result
};

function searchLast (nums, target, s, e) {
  let result = -1

  while (s <= e) {
    const p = (s + e) / 2 | 0
    const diff = nums[p] - target
    if (diff === 0) {
      result = p
      s = p + 1
    } else if (diff > 0) {
      e = p - 1
    } else {
      s = s + 1
    }
  }

  return result
};
```


*Template generated via [Leetmark](https://github.com/crimx/crx-leetmark).*

