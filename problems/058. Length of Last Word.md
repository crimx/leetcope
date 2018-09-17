---
Difficulty: Easy
Related Topics:
  "String": https://leetcode.com/tag/string
---

## [58. Length of Last Word](https://leetcode.com/problems/length-of-last-word/description/)

### Problem:

Given a string s consists of upper/lower-case alphabets and empty space characters `' '`, return the length of last word in the string.

If the last word does not exist, return 0.

Note: A word is defined as a character sequence consists of non-space characters only.

Example:

```
Input: "Hello World"
Output: 5
```

### Solution:

JavaScript specific solutions:

#### ONE

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  return (/\w+$/.exec(s) || [''])[0].length
};
```

#### TWO

Super fast. `split` will guarantee that there is at least one item in the resulted array.

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  return s.trim().split(' ').pop().length
};
```

#### THREE

General solution.

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let end = s.length - 1
  while (end >= 0 && s[end] === ' ') {
    end--
  }

  let start = end
  while (start >= 0 && s[start] !== ' ') {
    start--
  }

  return end - start
};
```

*Template generated via [Leetmark](https://github.com/crimx/crx-leetmark).*

