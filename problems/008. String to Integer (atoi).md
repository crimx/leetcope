---
Difficulty: Medium
Related Topics:
  "Math": https://leetcode.com/tag/math
  "String": https://leetcode.com/tag/string
Similar Questions:
  "Reverse Integer": https://leetcode.com/problems/reverse-integer
  "Valid Number": https://leetcode.com/problems/valid-number
---

## [8. String to Integer (atoi)](https://leetcode.com/problems/string-to-integer-atoi/description/)

### Problem:

Implement `atoi` which converts a string to an integer.

The function first discards as many whitespace characters as necessary until the first non-whitespace character is found. Then, starting from this character, takes an optional initial plus or minus sign followed by as many numerical digits as possible, and interprets them as a numerical value.

The string can contain additional characters after those that form the integral number, which are ignored and have no effect on the behavior of this function.

If the first sequence of non-whitespace characters in str is not a valid integral number, or if no such sequence exists because either str is empty or it contains only whitespace characters, no conversion is performed.

If no valid conversion could be performed, a zero value is returned.

**Note:**

  Only the space character `' '` is considered as whitespace character.
  Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. If the numerical value is out of the range of representable values, INT_MAX (231 − 1) or INT_MIN (−231) is returned.

**Example 1:**

```
Input: "42"
Output: 42
```

**Example 2:**

```
Input: "   -42"
Output: -42
Explanation: The first non-whitespace character is '-', which is the minus sign.
             Then take as many numerical digits as possible, which gets 42.
```

**Example 3:**

```
Input: "4193 with words"
Output: 4193
Explanation: Conversion stops at digit '3' as the next character is not a numerical digit.
```

**Example 4:**

```
Input: "words and 987"
Output: 0
Explanation: The first non-whitespace character is 'w', which is not a numerical 
             digit or a +/- sign. Therefore no valid conversion could be performed.
```

**Example 5:**

```
Input: "-91283472332"
Output: -2147483648
Explanation: The number "-91283472332" is out of the range of a 32-bit signed integer.
             Thefore INT_MIN (−231) is returned.
```

### Solution:

#### ONE

```javascript
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
  return Math.min(2147483647, Math.max(-2147483648, parseInt(str))) || 0
};
```

#### TWO

Looks like `Number()` is faster than `parseInt()`.

```javascript
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
  return Math.min(2147483647, Math.max(-2147483648, (/^ *[-+]?\d+/.exec(str) || [0])[0]))
};
```

#### THREE

General solution.

```javascript
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
  let sign = 1
  let i = 0

  while (i < str.length) {
    const cc = str.charCodeAt(i++)
    if (cc === 45) { // -
      sign = -1
      break
    } else if (cc === 43) { // +
      break
    } else if (cc >= 48 && cc <= 57) { // 0-9
      i--
      break
    } else if (cc !== 32) { // space
      return 0
    }
  }

  let result = 0
  while (i < str.length) {
    const digit = str.charCodeAt(i++) - 48
    if (digit < 0 || digit > 9) {
      break
    }
    result = result * 10 + digit
  }

  return Math.min(2147483647, Math.max(-2147483648, result * sign))
};
```

*Template generated via [Leetmark](https://github.com/crimx/crx-leetmark).*

