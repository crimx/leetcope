---
Difficulty: Hard
Related Topics:
  "String": https://leetcode.com/tag/string
  "Dynamic Programming": https://leetcode.com/tag/dynamic-programming
---

## [97. Interleaving String](https://leetcode.com/problems/interleaving-string/description/)

### Problem:

Given *s1*, *s2*, *s3*, find whether *s3* is formed by the interleaving of *s1* and *s2*.

**Example 1:**

```
Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
Output: true
```

**Example 2:**

```
Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
Output: false
```

### Solution:

Define `f(i, j)` to be whether `s3[0...i+j-1)` can be formed by the interleaving of `s1[0...i)` and `s2[0...j)`.

```javascript
f(i, j) = true, i <= 0 || j <= 0 // meaningless, skipped
f(i, j) = f(i-1, j) && s1[i-1] == s3[i+j-1] || f(i, j-1) && s2[j-1] == s3[i+j-1], 0 < i <= len(s1), 0 < j <= len(s2)
```

Dynamic array can be used.

```javascript
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
  const len1 = s1.length
  const len2 = s2.length
  const len3 = s3.length
  if (len1 + len2 !== len3) { return false }
  if (len1 <= 0) { return s2 === s3 }
  if (len2 <= 0) { return s1 === s3 }

  const dp = []
  for (let i = 0; i <= len1; i++) {
    for (let j = 0; j <= len2; j++) {
      dp[j] = (i <= 0 || dp[j]) && s1[i-1] === s3[i+j-1] ||
              (j <= 0 || dp[j-1]) && s2[j-1] === s3[i+j-1]
    }
  }
  return dp[len2]
};
```

*Template generated via [Leetmark](https://github.com/crimx/crx-leetmark).*

