---
Difficulty: Easy
Related Topics:
  "Two Pointers": https://leetcode.com/tag/two-pointers
  "String": https://leetcode.com/tag/string
Similar Questions:
  "Palindrome Linked List": https://leetcode.com/problems/palindrome-linked-list
  "Valid Palindrome II": https://leetcode.com/problems/valid-palindrome-ii
---

## [125. Valid Palindrome](https://leetcode.com/problems/valid-palindrome/description/)

### Problem:

Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

**Note:** For the purpose of this problem, we define empty string as valid palindrome.

**Example 1:**

```
Input: "A man, a plan, a canal: Panama"
Output: true

```

**Example 2:**

```
Input: "race a car"
Output: false

```

### Solution:

#### ONE

```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const clean = s.toLowerCase().split(/[^a-z0-9]*/)
  return clean.join('') === clean.reverse().join('')
};
```

#### TWO

Remove non-alphanumeric characters then compare.

```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const clean = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
  for (let i = 0, j = clean.length - 1; i < j; i++, j--) {
    if (clean[i] !== clean[j]) { return false }
  }
  return true
};
```

#### THREE

Compare the char codes.

```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  for (let i = 0, j = s.length - 1; i < j; i++, j--) {
    let left = s.charCodeAt(i)
    while (i < j && (left < 48 || left > 57 && left < 65 || left > 90 && left < 97 || left > 122)) {
      left = s.charCodeAt(++i)
    }
    if (i >= j) { return true }
    if (left >= 65 && left <= 90) {
      left += 32
    }
    
    let right = s.charCodeAt(j)
    while (i < j && (right < 48 || right > 57 && right < 65 || right > 90 && right < 97 || right > 122)) {
      right = s.charCodeAt(--j)
    }
    if (i >= j) { return true }
    if (right >= 65 && right <= 90) {
      right += 32
    }
    
    if (left !== right) { return false }
  }
  
  return true
};
```


*Template generated via [Leetmark](https://github.com/crimx/crx-leetmark).*

