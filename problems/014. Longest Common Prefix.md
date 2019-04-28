---
Difficulty: Easy
Related Topics:
  "String": https://leetcode.com/tag/string
---

## [14. Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix/description/)

### Problem:

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string `""`.

**Example 1:**

```
Input: ["flower","flow","flight"]
Output: "fl"
```

**Example 2:**

```
Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
```

**Note:**

All given inputs are in lowercase letters `a-z`.

### Solution:

#### ONE

JavaScript specific solution. Get the min len then narrow down the prefix.

```javascript
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length > 0) {
    let minLen = Math.min(...strs.map(s => s.length))
    const anyStr = strs[0]
    while (minLen) {
      const prefix = anyStr.slice(0, minLen--)
      if (strs.every(s => s.startsWith(prefix))) {
        return prefix
      }
    }
  }
  return ''
};
```

#### TWO

```javascript
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length <= 0) { return '' }
  
  let i = 0
  while (strs.every(s => s[i] && s[i] === strs[0][i])) {
    i++
  }
  return strs[0].slice(0, i)
};
```

#### THREE

General solution. Build up the prefix.

```javascript
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let prefix = ''
  if (strs.length > 0) {
    for (let i = 0; ; i++) {
      const c = strs[0][i]
      if (!c) { return prefix }
      for (let j = 0; j < strs.length; j++) {
        if (strs[j][i] !== c) {
          return prefix
        }
      }
      prefix += c
    }
  }
  return prefix
};
```

*Template generated via [Leetmark](https://github.com/crimx/crx-leetmark).*

