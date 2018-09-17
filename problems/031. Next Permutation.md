---
Difficulty: Medium
Related Topics:
  "Array": https://leetcode.com/tag/array
Similar Questions:
  "Permutations": https://leetcode.com/problems/permutations
  "Permutations II": https://leetcode.com/problems/permutations-ii
  "Permutation Sequence": https://leetcode.com/problems/permutation-sequence
  "Palindrome Permutation II": https://leetcode.com/problems/palindrome-permutation-ii
---

## [31. Next Permutation](https://leetcode.com/problems/next-permutation/description/)

### Problem:

Implement **next permutation**, which rearranges numbers into the lexicographically next greater permutation of numbers.

If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).

The replacement must be **in-place** and use only constant extra memory.

Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.

`1,2,3` → `1,3,2`  
`3,2,1` → `1,2,3`  
`1,1,5` → `1,5,1`  

### Solution:

Observe a few longer examples and the pattern is self-evident.

Divide the list into two parts. The first half must be incremental and the second half must be decremental.

Reverse the second half and find the smallest number in it that is greater the last number of the first half.

Swap the two.

```javascript
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  const len = nums.length
  if (len <= 1) { return }

  for (var i = len - 1; i > 0; i--) {
    if (nums[i] > nums[i-1]) {
      let t
      for (let s = i, e = len-1; s < e; s++, e--) {
        t = nums[s]
        nums[s] = nums[e]
        nums[e]  = t
      }

      let j = len - 1
      while (nums[j] <= nums[i-1]) {
        j--
      }

      t = nums[j]
      nums[j] = nums[i-1]
      nums[i-1] = t
      
      break
    }
  }

  if (i === 0) {
    nums.reverse()
  }
};
```


*Template generated via [Leetmark](https://github.com/crimx/crx-leetmark).*

