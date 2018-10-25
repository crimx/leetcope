---
Difficulty: Medium
Related Topics:
  "Array": https://leetcode.com/tag/array
  "Binary Search": https://leetcode.com/tag/binary-search
Similar Questions:
  "Search in Rotated Sorted Array II": https://leetcode.com/problems/search-in-rotated-sorted-array-ii
  "Find Minimum in Rotated Sorted Array": https://leetcode.com/problems/find-minimum-in-rotated-sorted-array
---

## [33. Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/description/)

### Problem:

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., `[0,1,2,4,5,6,7]` might become `[4,5,6,7,0,1,2]`).

You are given a target value to search. If found in the array return its index, otherwise return `-1`.

You may assume no duplicate exists in the array.

Your algorithm's runtime complexity must be in the order of *O*(log *n*).

**Example 1:**

```
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
```

**Example 2:**

```
Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
```

### Solution:

Obviously the problem requires binary search.

The core idea of binary search is to pick the middle item and then decide to keep which half.

The precondition of it is the array must be sorted.

But take a closer look and we realize that only one of the two halves needs to be sorted. This is sufficient for us to know if the target is in that half. If not, then it must be in the other.

Whenever we choose a pivot, it must be in one of the two sorted parts of the rotated array.

- If the pivot is in the left part. We know that the begin of the left part to the pivot are sorted.
- Otherwise the pivot is in the right part. We know that the end of the right part to the pivot are sorted.

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let s = 0
  let e = nums.length - 1

  while (s <= e) {
    const p = (e + s) / 2 | 0
    const pivot = nums[p]

    if (pivot === target) {
      return p
    }

    if (pivot < nums[e]) {
      // right half is sorted
      if (target > pivot  && target <= nums[e]) {
        // target is inside the right half
        s = p + 1
      } else {
        e = p - 1
      }
    } else {
      // left half is sorted
      if (target < pivot && target >= nums[s]) {
        // target is inside the left half
        e = p - 1
      } else {
        s = p + 1
      }
    }
  }

  return -1
};
```

*Template generated via [Leetmark](https://github.com/crimx/crx-leetmark).*

