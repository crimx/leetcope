---
Difficulty: Easy
Related Topics:
  "Array": https://leetcode.com/tag/array
  "Binary Search": https://leetcode.com/tag/binary-search
Similar Questions:
  "First Bad Version": https://leetcode.com/problems/first-bad-version
---

## [35. Search Insert Position](https://leetcode.com/problems/search-insert-position/description/)

### Problem:

Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You may assume no duplicates in the array.

**Example 1:**

```
Input: [1,3,5,6], 5
Output: 2
```

**Example 2:**

```
Input: [1,3,5,6], 2
Output: 1
```

**Example 3:**

```
Input: [1,3,5,6], 7
Output: 4
```

**Example 4:**

```
Input: [1,3,5,6], 0
Output: 0
```

### Solution:

Same as simple binary search except it returns the start index when does not find a match.

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let s = 0
  let e = nums.length - 1

  while (s <= e) {
    const p = (s + e) / 2 | 0
    const diff = nums[p] - target
    if (diff === 0) {
      return p
    } else if (diff < 0) {
      s = p + 1
    } else {
      e = p - 1
    }
  }

  return s
};
```


*Template generated via [Leetmark](https://github.com/crimx/crx-leetmark).*

