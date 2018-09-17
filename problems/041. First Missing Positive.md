---
Difficulty: Hard
Related Topics:
  "Array": https://leetcode.com/tag/array
Similar Questions:
  "Missing Number": https://leetcode.com/problems/missing-number
  "Find the Duplicate Number": https://leetcode.com/problems/find-the-duplicate-number
  "Find All Numbers Disappeared in an Array": https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array
  "Couples Holding Hands": https://leetcode.com/problems/couples-holding-hands
---

## [41. First Missing Positive](https://leetcode.com/problems/first-missing-positive/description/)

### Problem:

Given an unsorted integer array, find the smallest missing positive integer.

**Example 1:**

```
Input: [1,2,0]
Output: 3
```

**Example 2:**

```
Input: [3,4,-1,1]
Output: 2
```

**Example 3:**

```
Input: [7,8,9,11,12]
Output: 1
```

**Note:**

Your algorithm should run in *O*(*n*) time and uses constant extra space.

### Solution:

The last requirement is why this problem is marked "hard". Though the solution feels like cheating: it modifies the array to mark numbers.

So the algorithm still requires *O*(*n*) space but *O*(*1*) **extra** space.

The core idea of the solution is, if the length of the array is n, then the smallest missing positive integer must be within [1, n+1].

Consider an edge-case scenario where the array is `[1,2,...,n]`. The smallest missing positive integer is `n+1`.

Now if one of these integers is missing in the array, that integer **is** the smallest missing positive integer.

If more than one are missing, pick the smallest.

So here we reuse the array and keep trying to put integer `k` into the slot indexed `k-1` (via swapping).

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  const n = nums.length

  for (let i = 1; i < n; i++) {
    while (nums[i] <= n && nums[i] !== nums[nums[i] - 1]) {
      const t = nums[i]
      nums[i] = nums[t - 1]
      nums[t - 1] = t
    }
  }

  for (let i = 0; i < n; i++) {
    if (nums[i] !== i + 1) {
      return i + 1
    }
  }

  return n + 1
};
```

*Template generated via [Leetmark](https://github.com/crimx/crx-leetmark).*

