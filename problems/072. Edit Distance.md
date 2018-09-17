---
Difficulty: Hard
Related Topics:
  "String": https://leetcode.com/tag/string
  "Dynamic Programming": https://leetcode.com/tag/dynamic-programming
Similar Questions:
  "One Edit Distance": https://leetcode.com/problems/one-edit-distance
  "Delete Operation for Two Strings": https://leetcode.com/problems/delete-operation-for-two-strings
  "Minimum ASCII Delete Sum for Two Strings": https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings
---

## [72. Edit Distance](https://leetcode.com/problems/edit-distance/description/)

### Problem:

Given two words *word1* and *word2*, find the minimum number of operations required to convert *word1* to *word2*.

You have the following 3 operations permitted on a word:

1. Insert a character
2. Delete a character
3. Replace a character

**Example 1:**

```
Input: word1 = "horse", word2 = "ros"
Output: 3
Explanation: 
horse -> rorse (replace 'h' with 'r')
rorse -> rose (remove 'r')
rose -> ros (remove 'e')
```

**Example 2:**

```
Input: word1 = "intention", word2 = "execution"
Output: 5
Explanation: 
intention -> inention (remove 't')
inention -> enention (replace 'i' with 'e')
enention -> exention (replace 'n' with 'x')
exention -> exection (replace 'n' with 'c')
exection -> execution (insert 'u')
```

### Solution:

DP.

Define `f(i, j)` to be the min edit distance from `word1[0...i)` to `word2[0...j)`.

```javascript
f(0, 0) = 0
f(0, j) = f(0, j-1) + 1 // can only insert
f(i, 0) = f(i-1, 0) + 1 // can only delete
f(i, j) = min(
  f(i, j-1) + 1 // insert
  f(i-1, j) + 1 // delete
  f(i-1, j-1) + (word1[i-1] !== word2[j-1] ? 1 : 0) // replace or do nothing
)
```

```javascript
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  const len1 = word1.length
  const len2 = word2.length

  if(len1 <= 0 || len2 <= 0) {
    return len1 + len2
  }

  const dp = []

  for (let i = 0; i <= len1; i++) {
    dp[i] = [i]
  }

  for (let j = 0; j <= len2; j++) {
    dp[0][j] = j
  }

  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      dp[i][j] = Math.min(
        dp[i][j-1] + 1,
        dp[i-1][j] + 1,
        dp[i-1][j-1] + (word1[i-1] === word2[j-1] ? 0 : 1)
      )
    }
  }

  return dp[len1][len2]
};
```


*Template generated via [Leetmark](https://github.com/crimx/crx-leetmark).*

