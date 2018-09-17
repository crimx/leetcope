---
Difficulty: Medium
Related Topics:
  "String": https://leetcode.com/tag/string
  "Stack": https://leetcode.com/tag/stack
---

## [71. Simplify Path](https://leetcode.com/problems/simplify-path/description/)

### Problem:

Given an absolute path for a file (Unix-style), simplify it.

For example,
**path** = `"/home/"`, => `"/home"`
**path** = `"/a/./b/../../c/"`, => `"/c"`

**Corner Cases:**

- Did you consider the case where **path** = `"/../"`?
  In this case, you should return `"/"`.
- Another corner case is the path might contain multiple slashes `'/'` together, such as `"/home//foo/"`.
  In this case, you should ignore redundant slashes and return `"/home/foo"`.

### Solution:

Use stack to handle `/../`.

#### ONE

RegExp matching.

```javascript
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  return '/' + (path.match(/[^\/]+/g) || [])
    .reduce((stack, p) => {
      if (p === '..') {
        stack.pop()
      } else if (p !== '.') {
        stack.push(p)
      }
      return stack
    }, [])
    .join('/')
};
```

#### TWO

Direct search.

```javascript
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  const len = path.length
  const stack = []
  let e = 0
  while (e < len) {
    while (e < len && path[e] === '/') {
      e++
    }
    const s = e
    while (e < len && path[e] !== '/') {
      e++
    }
    if (s < e) {
      const p = path.slice(s, e)
      if (p === '..') {
        stack.pop()
      } else if (p !== '.') {
        stack.push(p)
      }
    }
  }
  return '/' + stack.join('/')
};
```

*Template generated via [Leetmark](https://github.com/crimx/crx-leetmark).*

