---
Difficulty: Medium
Related Topics:
  "String": https://leetcode.com/tag/string
  "Backtracking": https://leetcode.com/tag/backtracking
Similar Questions:
  "Letter Combinations of a Phone Number": https://leetcode.com/problems/letter-combinations-of-a-phone-number
  "Valid Parentheses": https://leetcode.com/problems/valid-parentheses
---

## [22. Generate Parentheses](https://leetcode.com/problems/generate-parentheses/description/)

### Problem:

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

```
[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
```

### Solution:

#### ONE

Recursive DFS backtracking.

```javascript
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const result = []
  if (n > 0) {
    dfs(n, 0, 0, '', result)
  }
  return result
};

function dfs (n, nopen, nclose, path, result) {
  if (path.length === n * 2) {
    result.push(path)
    return
  }

  if (nopen < n) {
    dfs(n, nopen + 1, nclose, path + '(', result)
  }

  if (nclose < nopen) {
    dfs(n, nopen, nclose + 1, path + ')', result)
  }
};
```

#### TWO

BFS.

```javascript
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  if (n <= 0) { return [] }

  const queue = [{
    path: '(',
    open: 1,
    close: 0,
  }]

  while (true) {
    const { path, open, close } = queue.shift()
    if (open + close === n * 2) {
      queue.unshift({ path, open, close })
      break
    }

    if (open < n) {
      queue.push({
        path: path + '(',
        open: open + 1,
        close,
      })
    }

    if (close < open) {
      queue.push({
        path: path + ')',
        open,
        close: close + 1,
      })
    }
  }

  return queue.map(x => x.path)
};
```

*Template generated via [Leetmark](https://github.com/crimx/crx-leetmark).*

