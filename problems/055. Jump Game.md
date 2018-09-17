---
Difficulty: Medium
Related Topics:
  "Array": https://leetcode.com/tag/array
  "Greedy": https://leetcode.com/tag/greedy
Similar Questions:
  "Jump Game II": https://leetcode.com/problems/jump-game-ii
---

## [55. Jump Game](https://leetcode.com/problems/jump-game/description/)

### Problem:

Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Determine if you are able to reach the last index.

**Example 1:**

```
Input: [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
```

**Example 2:**

```
Input: [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum
             jump length is 0, which makes it impossible to reach the last index.
```

### Solution:

#### ONE

See [45. Jump Game II](./045.%20Jump%20Game%20II.md). If the range does not expand at some point, we know it is stuck.

```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  for (let l = 0, r = 1; r < nums.length;) {
    let rNext = r
    for (let i = l; i < r; i++) {
      const rNextAtmp = i + nums[i] + 1
      if (rNextAtmp > rNext) {
        rNext = rNextAtmp
      }
    }
    if (rNext <= r) { return false }
    l = r
    r = rNext
  }
  return true
};
```

#### TWO

If we view it backward, and if the range of `nums[n-2]` covers `nums[n-1]`, then we can safely make `n-2` the new destination point, and so on.

If `nums[0]` can cover the last destination point, it is good.

```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let des = nums.length - 1
  for (let i = des - 1; i > 0; i--) {
    if (nums[i] + i >= des) {
      des = i
    }
  }
  return nums[0] >= des
};
```

*Template generated via [Leetmark](https://github.com/crimx/crx-leetmark).*

