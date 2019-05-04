---
Difficulty: Hard
Related Topics:
  "String": https://leetcode.com/tag/string
  "Dynamic Programming": https://leetcode.com/tag/dynamic-programming
  "Backtracking": https://leetcode.com/tag/backtracking
Similar Questions:
  "Wildcard Matching": https://leetcode.com/problems/wildcard-matching
---

## [10. Regular Expression Matching](https://leetcode.com/problems/regular-expression-matching/description/)

### Problem:

Given an input string (`s`) and a pattern (`p`), implement regular expression matching with support for `'.'` and `'*'`.

```
'.' Matches any single character.
'*' Matches zero or more of the preceding element.
```

The matching should cover the **entire** input string (not partial).

**Note:**

  `s` could be empty and contains only lowercase letters `a-z`.
  `p` could be empty and contains only lowercase letters `a-z`, and characters like `.` or `*`.

**Example 1:**

```
Input:
s = "aa"
p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".
```

**Example 2:**

```
Input:
s = "aa"
p = "a*"
Output: true
Explanation: '*' means zero or more of the precedeng element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".
```

**Example 3:**

```
Input:
s = "ab"
p = ".*"
Output: true
Explanation: ".*" means "zero or more (*) of any character (.)".
```

**Example 4:**

```
Input:
s = "aab"
p = "c*a*b"
Output: true
Explanation: c can be repeated 0 times, a can be repeated 1 time. Therefore it matches "aab".
```

**Example 5:**

```
Input:
s = "mississippi"
p = "mis*is*p*."
Output: false
```

### Solution:

#### ONE

Cheating with real RegExp matching.

```javascript
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  if (p[0] === '*') { return false }
  return new RegExp(`^${p}$`).test(s)
};
```

#### TWO

Let f(i, j) be the matching result of s[0...i) and p[0...j).

```javascript
f(0, j) =
    j == 0 || // empty
    p[j-1] == '*' && f(i, j-2) // matches 0 time, which matches empty string
    
f(i, 0) = false // pattern must cover the entire input string

f(i, j) = 
    if p[j-1] == '.'
        f(i-1, j-1)
    else if p[j-1] == '*'
        f(i, j-2) || // matches 0 time
        f(i-1, j) && (s[i-1] == p[j-2] || p[j-2] == '.') // matches 1 or multiple times
    else
        f(i-1, j-1) && s[i-1] == p[j-1]
```

```javascript
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  if (p[0] === '*') {
    return false
  }

  const dp = [[true]]

  for (let j = 2; j <= p.length; j++) {
    dp[0][j] = p[j-1] === '*' && dp[0][j-2]
  }
    
  for (let i = 1; i <= s.length; i++) {
    dp[i] = []
    for (let j = 1; j <= p.length; j++) {
      switch (p[j-1]) {
        case '.':
          dp[i][j] = dp[i-1][j-1]
          break
        case '*':
          dp[i][j] = dp[i][j-2] ||
            dp[i-1][j] && (p[j-2] === '.' || s[i-1] === p[j-2])
          break
        default:
          dp[i][j] = dp[i-1][j-1] && s[i-1] === p[j-1]
      }
    }
  }

  return !!dp[s.length][p.length]
}
```


*Template generated via [Leetmark](https://github.com/crimx/crx-leetmark).*

