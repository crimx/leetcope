---
Difficulty: Medium
Related Topics:
  "Math": https://leetcode.com/tag/math
  "String": https://leetcode.com/tag/string
Similar Questions:
  "Roman to Integer": https://leetcode.com/problems/roman-to-integer
  "Integer to English Words": https://leetcode.com/problems/integer-to-english-words
---

## [12. Integer to Roman](https://leetcode.com/problems/integer-to-roman/description/)

### Problem:

Roman numerals are represented by seven different symbols: `I`, `V`, `X`, `L`, `C`, `D` and `M`.

```
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
```

For example, two is written as `II` in Roman numeral, just two one's added together. Twelve is written as, `XII`, which is simply `X` + `II`. The number twenty seven is written as `XXVII`, which is `XX` + `V` + `II`.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not `IIII`. Instead, the number four is written as `IV`. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as `IX`. There are six instances where subtraction is used:

- `I` can be placed before `V` (5) and `X` (10) to make 4 and 9. 
- `X` can be placed before `L` (50) and `C` (100) to make 40 and 90. 
- `C` can be placed before `D` (500) and `M` (1000) to make 400 and 900.

Given an integer, convert it to a roman numeral. Input is guaranteed to be within the range from 1 to 3999.

**Example 1:**

```
Input: 3
Output: "III"
```

**Example 2:**

```
Input: 4
Output: "IV"
```

**Example 3:**

```
Input: 9
Output: "IX"
```

**Example 4:**

```
Input: 58
Output: "LVIII"
Explanation: C = 100, L = 50, XXX = 30 and III = 3.
```

**Example 5:**

```
Input: 1994
Output: "MCMXCIV"
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
```

### Solution:

Treat 4, 40, 400 and 9, 90, 900 specially.

```javascript
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  const e = [1000, 900,  500, 400,  100, 90,   50,  40,   10,  9,    5,   4,    1  ]
  const s = ["M",  "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]

  let result = ''
  for (let i = 0; num; i++) {
    const d = e[i]
    const v = s[i]
    while (num >= d) {
      num -= d
      result += v
    }
  }
  return result
};
```


*Template generated via [Leetmark](https://github.com/crimx/crx-leetmark).*

