---
Difficulty: Medium
Related Topics:
  "Hash Table": https://leetcode.com/tag/hash-table
  "String": https://leetcode.com/tag/string
Similar Questions:
  "Valid Anagram": https://leetcode.com/problems/valid-anagram
  "Group Shifted Strings": https://leetcode.com/problems/group-shifted-strings
---

## [49. Group Anagrams](https://leetcode.com/problems/group-anagrams/description/)

### Problem:

Given an array of strings, group anagrams together.

**Example:**

```
Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
```

**Note:**

- All inputs will be in lowercase.
- The order of your output does not matter.

### Solution:

It's all about hashing the words.

#### ONE

Sort each word to get the key.

```javascript
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let result = {};
  for (let i = 0; i < strs.length; i++) {
    const hash = strs[i].split('').sort().join('');
    result[hash] = result[hash] || []
    result[hash].push(strs[i])
  }
  return Object.values(result)
};
```

#### TWO

Use the product of prime numbers to generate unique keys.

```javascript
const prime = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101]

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const result = {};
  for (let i = 0; i < strs.length; i++) {
    const word = strs[i]
    let hash = 1
    for (let k = 0; k < word.length; k++) {
      hash *= prime[word.charCodeAt(k) - 97]
    }
    result[hash] = result[hash] || []
    result[hash].push(word)
  }
  return Object.values(result)
};
```


*Template generated via [Leetmark](https://github.com/crimx/crx-leetmark).*

