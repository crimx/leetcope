---
Difficulty: Medium
Related Topics:
  "String": https://leetcode.com/tag/string
---

## [6. ZigZag Conversion](https://leetcode.com/problems/zigzag-conversion/description/)

### Problem:

The string `"PAYPALISHIRING"` is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

```
P   A   H   N
A P L S I I G
Y   I   R
```

And then read line by line: `"PAHNAPLSIIGYIR"`

Write the code that will take a string and make this conversion given a number of rows:

```
string convert(string s, int numRows);
```

**Example 1:**

```
Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
```

**Example 2:**

```
Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:

P     I    N
A   L S  I G
Y A   H R
P     I
```

### Solution:

Squeeze the zigzag pattern horizontally to form a matrix. Now deal with the odd and even columns respectively.

For example let numRows be 5, if we list out the indecies:

```
row
 1    00    08    16
 2    01 07 09 15 17
 3    02 06 10 14 18
 4    03 05 11 13 19
 5    04    12    20
```

First calculate the matrix width:

```
pairs = floor( len(s) / (numRows + numRows - 2) )
width = pairs * 2 + ceil( (len(s) - pairs * (numRows + numRows - 2)) / numRows )
```

We can easily make a observation that the direction of odd and even columns and different.

Let the first column be index 0 and let i be the current position at column col.

We need to count the items between matrix[row][col] and matrix[row][col+1], exclusive.

```
next_i = i + (numRows - row) + (numRows - row), if col is even && 1 < row < numRows
next_i = i + row - 2 + row, if col is odd && 1 < row < numRows
```

If row == 1 or row == numRows, skip the odd columns.

```
next_i = i + numRows + (numRows - 2), if col is even && (row == 1 || row == numRows)
```

```javascript
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows <= 1) { return s }

  const pairs = Math.floor(s.length / (numRows + numRows - 2))
  const width = pairs * 2 + Math.ceil((s.length - pairs * (numRows + numRows - 2)) / numRows)

  let result = ''

  for (let row = 1; row <= numRows; row++) {
    let i = row - 1
    result += s[i] || ''
    for (let col = 0; col < width; col++) {
      if (row === 1 || row === numRows) {
        if (col % 2 === 0) {
          i += numRows + (numRows - 2)
        } else {
          continue
        }
      } else {
        if (col % 2 === 0) {
          i += (numRows - row) + (numRows - row)
        } else {
          i += row - 2 + row
        }
      }
      result += s[i] || ''
    }
  }

  return result
};
```

*Template generated via [Leetmark](https://github.com/crimx/crx-leetmark).*

