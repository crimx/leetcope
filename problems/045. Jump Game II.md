---
Difficulty: Hard
Related Topics:
  "Array": https://leetcode.com/tag/array
  "Greedy": https://leetcode.com/tag/greedy
Similar Questions:
  "Jump Game": https://leetcode.com/problems/jump-game
---

## [45. Jump Game II](https://leetcode.com/problems/jump-game-ii/description/)

### Problem:

Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Your goal is to reach the last index in the minimum number of jumps.

**Example:**

```
Input: [2,3,1,1,4]
Output: 2
Explanation: The minimum number of jumps to reach the last index is 2.
    Jump 1 step from index 0 to 1, then 3 steps to the last index.
```

**Note:**

You can assume that you can always reach the last index.

### Solution:

Greedy. Always pick the one that would allow to jump to the rightest.

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  const len = nums.length
  let jump = 0
  for (let l = 0, r = 1; r < len; jump++) {
    let rNext = r
    for (let i = l; i < r; i++) {
      const rNextAtmp = i + nums[i] + 1
      if (rNextAtmp > rNext) {
        rNext = rNextAtmp
      }
    }
    l = r
    r = rNext
  }
  return jump
};
```


*Template generated via [Leetmark](https://github.com/crimx/crx-leetmark).*

