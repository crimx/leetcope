---
Difficulty: Medium
Related Topics:
  "Array": https://leetcode.com/tag/array
  "Two Pointers": https://leetcode.com/tag/two-pointers
  "Sort": https://leetcode.com/tag/sort
Similar Questions:
  "Sort List": https://leetcode.com/problems/sort-list
  "Wiggle Sort": https://leetcode.com/problems/wiggle-sort
  "Wiggle Sort II": https://leetcode.com/problems/wiggle-sort-ii
---

## [75. Sort Colors](https://leetcode.com/problems/sort-colors/description/)

### Problem:

Given an array with *n* objects colored red, white or blue, sort them **in-place**so that objects of the same color are adjacent, with the colors in the order red, white and blue.

Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

**Note:** You are not suppose to use the library's sort function for this problem.

**Example:**

```
Input: [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
```

**Follow up:**

- A rather straight forward solution is a two-pass algorithm using counting sort.
  First, iterate the array counting number of 0's, 1's, and 2's, then overwrite array with total number of 0's, then 1's and followed by 2's.
- Could you come up with a one-pass algorithm using only constant space?

### Solution:

One-pass algorithm.

Take the idea of the partition algorithm from quick sort. Use `1` as pivot.

Count the number of sorted `0`s and `2`s so that we know where to swap.

```javascript
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  const len = nums.length
  let zeroEnd = 0
  let twoStart = len - 1
  let i = 0
  while (i <= twoStart) {
    if (nums[i] === 0 && i !== zeroEnd) {
      const t = nums[i]
      nums[i] = nums[zeroEnd]
      nums[zeroEnd] = t
      zeroEnd++
    } else if (nums[i] === 2 && i !== twoStart) {
      const t = nums[i]
      nums[i] = nums[twoStart]
      nums[twoStart] = t
      twoStart--
    } else {
      i++
    }
  }
};
```


*Template generated via [Leetmark](https://github.com/crimx/crx-leetmark).*

