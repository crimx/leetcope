---
Difficulty: Hard
Related Topics:
  "String": https://leetcode.com/tag/string
---

## [68. Text Justification](https://leetcode.com/problems/text-justification/description/)

### Problem:

Given an array of words and a width *maxWidth*, format the text such that each line has exactly *maxWidth* characters and is fully (left and right) justified.

You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces `' '` when necessary so that each line has exactly *maxWidth* characters.

Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line do not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.

For the last line of text, it should be left justified and no **extra** space is inserted between words.

**Note:**

- A word is defined as a character sequence consisting of non-space characters only.
- Each word's length is guaranteed to be greater than 0 and not exceed *maxWidth*.
- The input array `words` contains at least one word.

**Example 1:**

```
Input:
words = ["This", "is", "an", "example", "of", "text", "justification."]
maxWidth = 16
Output:
[
   "This    is    an",
   "example  of text",
   "justification.  "
]
```

**Example 2:**

```
Input:
words = ["What","must","be","acknowledgment","shall","be"]
maxWidth = 16
Output:
[
  "What   must   be",
  "acknowledgment  ",
  "shall be        "
]
Explanation: Note that the last line is "shall be    " instead of "shall     be",
             because the last line must be left-justified instead of fully-justified.
             Note that the second line is also left-justified becase it contains only one word.
```

**Example 3:**

```
Input:
words = ["Science","is","what","we","understand","well","enough","to","explain",
         "to","a","computer.","Art","is","everything","else","we","do"]
maxWidth = 20
Output:
[
  "Science  is  what we",
  "understand      well",
  "enough to explain to",
  "a  computer.  Art is",
  "everything  else  we",
  "do                  "
]
```

### Solution:

- Count the current line width (plus 1 space between each two words).
- When a line is full:
  - If there is only one word, pad spaces at the end.
  - Otherwise calculate the gap length using `Math.ceil`.
- Handle the last line.

```javascript
/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
  let start = 0
  let end = 1
  let lineLen = words[start].length
  const result = []

  while (end < words.length) {
    const newLen = words[end].length + 1 + lineLen
    if (newLen <= maxWidth) {
      lineLen = newLen
    } else {
      let line = ''
      let nWords = end - start
      if (nWords === 1) {
        line = words[start].padEnd(maxWidth)
      } else {
        let nSpaces = maxWidth - (lineLen - (nWords - 1))
        for (let i = start; i < end; i++) {
          const gap = Math.ceil(nSpaces / (end - i - 1))
          line += words[i] + ' '.repeat(gap)
          nSpaces -= gap
        }
      }
      result.push(line)
      start = end
      lineLen = words[start].length
    }
    end++
  }

  let lastline = words[start]
  for (let i = start + 1; i < end; i++) {
    lastline += ' ' + words[i]
  }
  result.push(lastline.padEnd(maxWidth))

  return result
};
```


*Template generated via [Leetmark](https://github.com/crimx/crx-leetmark).*

