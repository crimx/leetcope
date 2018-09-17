---
Difficulty: Hard
Related Topics:
  "Array": https://leetcode.com/tag/array
  "Two Pointers": https://leetcode.com/tag/two-pointers
  "Stack": https://leetcode.com/tag/stack
Similar Questions:
  "Container With Most Water": https://leetcode.com/problems/container-with-most-water
  "Product of Array Except Self": https://leetcode.com/problems/product-of-array-except-self
  "Trapping Rain Water II": https://leetcode.com/problems/trapping-rain-water-ii
  "Pour Water": https://leetcode.com/problems/pour-water
---

## [42. Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/description/)

### Problem:

Given *n* non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.

![rainwatertrap.png](http://www.leetcode.com/static/images/problemset/rainwatertrap.png)
The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped. **Thanks Marcos** for contributing this image!

**Example:**

```
Input: [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
```

### Solution:

Well explained by Leetcode official: <https://leetcode.com/articles/trapping-rain-water/> .

```javascript
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let i = 0
  let j = height.length - 1
  let lMax = 0
  let rMax = 0
  let result = 0

  while (i < j) {
    const left = height[i]
    const right = height[j]
    if (left < right) {
      if (left < lMax) {
        result += lMax - left
      } else {
        lMax = left
      }
      i++
    } else {
      if (right < rMax) {
        result += rMax - right
      } else {
        rMax = right
      }
      j--
    }
  }

  return result
};
```

*Template generated via [Leetmark](https://github.com/crimx/crx-leetmark).*

