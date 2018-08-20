---
Difficulty: Hard
Related Topics:
  "Array": https://leetcode.com/tag/array
  "Stack": https://leetcode.com/tag/stack
Similar Questions:
  "Maximal Rectangle": https://leetcode.com/problems/maximal-rectangle
---

## [84. Largest Rectangle in Histogram](https://leetcode.com/problems/largest-rectangle-in-histogram/description/)

### Problem:

Given *n* non-negative integers representing the histogram's bar height where the width of each bar is 1, find the area of largest rectangle in the histogram.

![histogram.png](https://leetcode.com/static/images/problemset/histogram.png)

Above is a histogram where width of each bar is 1, given height = `[2,1,5,6,2,3]`.

![histogram_area.png](https://leetcode.com/static/images/problemset/histogram_area.png)

The largest rectangle is shown in the shaded area, which has area = `10` unit.

**Example:**

```
Input: [2,1,5,6,2,3]
Output: 10
```

### Solution:

The height of a rectangle is determined by the lowest bar inside of it. So the core idea is, for each bar, assume it is the lowest bar and see how far it can expand. Then we have `len(heights)` rectangles. Return the max area.

For a bar `b` whose height is `h`, find the closest bar `b1` on the left that is lower than `h`, and `b2` on the right. The area of the rectangle is `h * (i2 - i1 - 1)`.

Notice that if we just loop the bars from left to right, `b1` and `b2` of each bar may overlap.

| index | height | width | area |
| :--: | :--: | :--: | :--: |
| `i` | `heights[i]` | `i2 - i1 - 1` | `height * width` |
| 0 | 2 | 1 - -1 - 1 | 2 |
| 1 | 1 | 6 - -1 - 1 | 6 |
| 2 | 5 | 4 - 1 - 1 | 10 |
| 3 | 6 | 4 - 2 - 1 | 6 |
| 4 | 2 | 6 - 1 - 1 | 8 |
| 5 | 3 | 6 - 4 - 1 | 3 |

Observe how `i1` and `i2` changes depending on the height.

To reduce O(*n^2*) to O(*n*), we use a stack to store incremental `b`s. Because `b1` and `b2` are both lower than `b`, whenever we reach a bar that is lower than the top of the stack, we know it's a `b2`. So stack top is a `b`. Second top is a `b1`. Keep popping the `b` to calculate areas until `b2` is no longer lower than stack top.

```javascript
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  const stack = [-1]
  let max = 0
  for (let i2 = 0; i2 <= heights.length; i2++) {
    while ((heights[i2] || 0) < heights[stack[stack.length-1]]) {
      const i = stack.pop()
      const i1 = stack[stack.length-1]
      max = Math.max(max, heights[i] * (i2 - i1 - 1))
    }
    stack.push(i2)
  }
  return max
};

```

*Template generated via [Leetmark](https://github.com/crimx/crx-leetmark).*

