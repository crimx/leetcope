---
Difficulty: Hard
Related Topics:
  "Math": https://leetcode.com/tag/math
  "String": https://leetcode.com/tag/string
Similar Questions:
  "String to Integer (atoi)": https://leetcode.com/problems/string-to-integer-atoi
---

## [65. Valid Number](https://leetcode.com/problems/valid-number/description/)

### Problem:

Validate if a given string is numeric.

Some examples:  
`"0"` => `true`  
`" 0.1 "` => `true`  
`"abc"` => `false`  
`"1 a"` => `false`  
`"2e10"` => `true`  

**Note:** It is intended for the problem statement to be ambiguous. You should gather all requirements up front before implementing one.

**Update (2015-02-10):**
The signature of the `C++` function had been updated. If you still see your function signature accepts a `const char *` argument, please click the reload button to reset your code definition.

### Solution:

JavaScript specific solutions:

#### ONE

- `Math.abs` will first convert the argument to number.
- `Math.abs(' ') === 0`.

```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
  return !!s.trim() && Math.abs(s) >= 0
};
```

#### TWO

- `isNaN` will first convert the argument to number.
- `isNaN(' ') === false`.

```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
  return !!s.trim() && !isNaN(s)
};
```

#### THREE

General solution. Take a look at the [ECMA Spec](https://www.ecma-international.org/ecma-262/8.0/#sec-literals-numeric-literals).

Similary, we can define our own syntax, which requires a few changes:

```
SignedDecimalLiteral::
  DecimalLiteral
  + DecimalLiteral
  - DecimalLiteral

DecimalLiteral::
  DecimalDigits . [DecimalDigits] [ExponentPart]
  . DecimalDigits [ExponentPart]
  DecimalDigits [ExponentPart]

DecimalDigits::
  DecimalDigit
  DecimalDigits DecimalDigit

DecimalDigit:: one of
  0123456789

ExponentPart::
  ExponentIndicator SignedInteger

ExponentIndicator::one of
  eE

SignedInteger::
  DecimalDigits
  + DecimalDigits
  - DecimalDigits
```

Now implement the parser. It is much easier now because we have a clear mental map of the syntax.

```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
  let start = 0
  while (s[start] === ' ') {
    start++
  }
  if (s[start] === '+' || s[start] === '-') {
    start++
  }
  let nextIndex = parseDecimalLiteral(s, start)
  while (s[nextIndex] === ' ') {
    nextIndex++
  }
  return nextIndex === s.length
}

/**
 * @param {string} s
 * @param {number} start - start index
 * @return {number} next index, -1 means error
 */
function parseDecimalLiteral (s, start) {
  let nextIndex = -1
  if (s[start] === '.') {
    nextIndex = parseDecimalDigits(s, start + 1)
    if (nextIndex === -1) { return -1 }
  } else {
    nextIndex = parseDecimalDigits(s, start)
    if (nextIndex === -1) { return -1 }

    if (s[nextIndex] === '.') {
      const optNextIndex = parseDecimalDigits(s, ++nextIndex)
      if (optNextIndex !== -1) {
        nextIndex = optNextIndex
      }
    }
  }

  const optNextIndex = parseExponentPart(s, nextIndex)
  return optNextIndex === -1 ? nextIndex : optNextIndex
}

/**
 * @param {string} s
 * @param {number} start - start index
 * @return {number} next index, -1 means error
 */
function parseDecimalDigits (s, start) {
  if (start === s.length) { return -1 }

  for (let i = start; i < s.length; i++) {
    const digit = s.charCodeAt(i) - 48
    if (!(digit >= 0 && digit <= 9)) {
      return i === start ? -1 : i
    }
  }
  return s.length
}

/**
 * @param {string} s
 * @param {number} start - start index
 * @return {number} next index, -1 means error
 */
function parseDecimalIntegerLiteral (s, start) {
  if (start === s.length) { return -1 }

  let nextIndex = start
  if (s[start] === '0') {
    nextIndex++
  }

  const digit = s.charCodeAt(nextIndex) - 48
  if (!(digit > 0 && digit <= 9)) {
    return nextIndex === start ? -1 : nextIndex
  }
  nextIndex++

  const optNextIndex = parseDecimalDigits (s, nextIndex)
  return optNextIndex === -1 ? nextIndex : optNextIndex
}

/**
 * @param {string} s
 * @param {number} start - start index
 * @return {number} next index, -1 means error
 */
function parseExponentPart (s, start) {
  if (s[start] !== 'e' && s[start] !== 'E') {
    return -1
  }

  let nextIndex = start + 1
  if (s[nextIndex] === '+' || s[nextIndex] === '-') {
    nextIndex++
  }

  return parseDecimalDigits(s, nextIndex)
}
```

*Template generated via [Leetmark](https://github.com/crimx/crx-leetmark).*

