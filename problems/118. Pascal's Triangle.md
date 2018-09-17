---
Difficulty: Easy
Related Topics:
  "Array": https://leetcode.com/tag/array
Similar Questions:
  "Pascal's Triangle II": https://leetcode.com/problems/pascals-triangle-ii
---

## [118. Pascal's Triangle](https://leetcode.com/problems/pascals-triangle/description/)

### Problem:

Given a non-negative integer *numRows*, generate the first *numRows* of Pascal's triangle.

![PascalTriangleAnimated2.gif](https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif)

In Pascal's triangle, each number is the sum of the two numbers directly above it.

**Example:**

```
Input: 5
Output:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]

```

### Solution:

Dynamic Programming 101.

```javascript
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if (numRows <= 0) { return [] }

  const result = [[1]]
  for (let i = 1; i < numRows; i++) {
    const lastRow = result[i-1]
    const row = [1]
    for (let j = 1; j < i; j++) {
      row[j] = lastRow[j] + lastRow[j-1]
    }
    row.push(1)
    result.push(row)
  }
  
  return result
};
```


*Template generated via [Leetmark](https://github.com/crimx/crx-leetmark).*

