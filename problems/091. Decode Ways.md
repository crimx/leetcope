---
Difficulty: Medium
Related Topics:
  "String": https://leetcode.com/tag/string
  "Dynamic Programming": https://leetcode.com/tag/dynamic-programming
Similar Questions:
  "Decode Ways II": https://leetcode.com/problems/decode-ways-ii
---

## [91. Decode Ways](https://leetcode.com/problems/decode-ways/description/)

### Problem:

A message containing letters from `A-Z` is being encoded to numbers using the following mapping:

```
'A' -> 1
'B' -> 2
...
'Z' -> 26
```

Given a **non-empty** string containing only digits, determine the total number of ways to decode it.

**Example 1:**

```
Input: "12"
Output: 2
Explanation: It could be decoded as "AB" (1 2) or "L" (12).
```

**Example 2:**

```
Input: "226"
Output: 3
Explanation: It could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).
```

### Solution:

Define `f(i)` to be the number of ways to decode `s[0...i]`.

Note that there could be `'0'`.

```
f(0) = 1, if s[i] !== '0'
f(i) = 0, if s.length <= 0 || s[i] === '0'
f(i) = f(i-1), if i > 0 && s[i] !== '0'
       +
       f(i-2), if i > 0 && s[i-1] !== '0' && s[i-1] * 10 + s[i] <= 26
```

Only need to store the last two states. Init `f(-1) = 1` for easy calculation.

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  let dp = s[0] > 0 ? 1 : 0
  let dp_1 = dp
  let dp_2 = 1
  
  for (let i = 1; i < s.length; i++) {
    dp = 0
    if (s[i] !== '0') {
      dp += dp_1
    }
    if (s[i-1] !== '0' && s[i-1] + s[i] <= 26) {
      dp += dp_2
    }
    dp_2 = dp_1
    dp_1 = dp
  }
  
  return dp
};
```

*Template generated via [Leetmark](https://github.com/crimx/crx-leetmark).*

