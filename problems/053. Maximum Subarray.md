---
Difficulty: Easy
Related Topics:
  "Array": https://leetcode.com/tag/array
  "Divide and Conquer": https://leetcode.com/tag/divide-and-conquer
  "Dynamic Programming": https://leetcode.com/tag/dynamic-programming
Similar Questions:
  "Best Time to Buy and Sell Stock": https://leetcode.com/problems/best-time-to-buy-and-sell-stock
  "Maximum Product Subarray": https://leetcode.com/problems/maximum-product-subarray
  "Degree of an Array": https://leetcode.com/problems/degree-of-an-array
---

## [53. Maximum Subarray](https://leetcode.com/problems/maximum-subarray/description/)

### Problem:

Given an integer array `nums`, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

**Example:**

```
Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
```

**Follow up:**

If you have figured out the O(*n*) solution, try coding another solution using the divide and conquer approach, which is more subtle.

### Solution:

DP.

Define `f(i)` to be the largest sum of a contiguous subarray that ends with `nums[i]`.

If `f(i-1)` is negative, then `nums[i]` must be greater than `f(i-1) + nums[i]`.

```
f(0) = nums[0]
f(i) = max( f(i-1), 0 ) + nums[i]
```

Then return the largest one.

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  const len = nums.length
  if (len <= 0) { return 0 }
  const dp = [nums[0]]
  for (let i = 1; i < len; i++) {
    dp[i] = Math.max(dp[i-1], 0) + nums[i]
  }
  return Math.max(...dp)
};
```

We can also compress the dp array:

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let dp = nums[0]
  let max = dp || 0
  for (let i = 1; i < nums.length; i++) {
    max = Math.max(max, dp = Math.max(dp, 0) + nums[i])
  }
  return max
};
```


*Template generated via [Leetmark](https://github.com/crimx/crx-leetmark).*

