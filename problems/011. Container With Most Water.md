---
Difficulty: Medium
Related Topics:
  "Array": https://leetcode.com/tag/array
  "Two Pointers": https://leetcode.com/tag/two-pointers
Similar Questions:
  "Trapping Rain Water": https://leetcode.com/problems/trapping-rain-water
---

## [11. Container With Most Water](https://leetcode.com/problems/container-with-most-water/description/)

### Problem:

Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

Note: You may not slant the container and n is at least 2.

### Solution:

Greedy Algorithm.

If we look at the simple brute force approach, where we choose one point at a time and calculate all the possible areas with other points on the right, it is easy to make a observation that we are narrowing down the horizontal distance.

Greedy Algorithm can help us skip some of the conditions. It is base on a fact that the area between two columns are determined by the shorter one.

Let's say we have pointer `l` and `r` at the begin and end of a distance, and the area is `area(l, r)`, how should we narrow down the distance?

If `height[l] < height[r]`, we know that the height of the area will never be greater than `height[l]` if we keep `l`. Now if we get rid of `r`, the area can only get smaller since the distance is shorter, and the height is at most `height[l]`.

Here we conclude rule NO.1: Get rid of the smaller one.

What if `height[l] == height[r]`? It is safe to get rid of both. We do not need any of them to constrain the max height of the rest points.

```javascript
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let max = 0
  for (let l = 0, r = height.length - 1; l < r; l++, r--) {
    max = Math.max(max, (r - l) * Math.min(height[l], height[r]))
    if (height[l] < height[r]) {
      r++
    } else {
      l--
    }
  }
  return max
};
```

*Template generated via [Leetmark](https://github.com/crimx/crx-leetmark).*

