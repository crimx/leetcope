---
Difficulty: Hard
Related Topics:
  "Array": https://leetcode.com/tag/array
  "Union Find": https://leetcode.com/tag/union-find
Similar Questions:
  "Binary Tree Longest Consecutive Sequence": https://leetcode.com/problems/binary-tree-longest-consecutive-sequence
---

## [128. Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/description/)

### Problem:

Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

Your algorithm should run in O(*n*) complexity.

**Example:**

```
Input: [100, 4, 200, 1, 3, 2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

```

### Solution:

Build a Set from the list. Pick a number, find all it's adjacent numbers that are also in the Set. Count them and remove them all from the Set. Repeat until the Set is empty. Time complexity O(n + n) = O(n).

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  const numSet = new Set(nums)
  let maxCount = 0
  while (numSet.size > 0) {
    const num = numSet.values().next().value
    numSet.delete(num)
    let count = 1
    for (let n = num + 1; numSet.delete(n); n++) {
      count++
    }
    for (let n = num - 1; numSet.delete(n); n--) {
      count++
    }
    if (count > maxCount) {
      maxCount = count
    }
  }
  return maxCount
};
```


*Template generated via [Leetmark](https://github.com/crimx/crx-leetmark).*

