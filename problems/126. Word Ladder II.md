---
Difficulty: Hard
Related Topics:
  "Array": https://leetcode.com/tag/array
  "String": https://leetcode.com/tag/string
  "Backtracking": https://leetcode.com/tag/backtracking
  "Breadth-first Search": https://leetcode.com/tag/breadth-first-search
Similar Questions:
  "Word Ladder": https://leetcode.com/problems/word-ladder
---

## [126. Word Ladder II](https://leetcode.com/problems/word-ladder-ii/description/)

### Problem:

Given two words (*beginWord* and *endWord*), and a dictionary's word list, find all shortest transformation sequence(s) from *beginWord* to *endWord*, such that:

1. Only one letter can be changed at a time
2. Each transformed word must exist in the word list. Note that *beginWord* is *not* a transformed word.

**Note:**

- Return an empty list if there is no such transformation sequence.
- All words have the same length.
- All words contain only lowercase alphabetic characters.
- You may assume no duplicates in the word list.
- You may assume *beginWord* and *endWord* are non-empty and are not the same.

**Example 1:**

```
Input:
beginWord = "hit",
endWord = "cog",
wordList = ["hot","dot","dog","lot","log","cog"]

Output:
[
  ["hit","hot","dot","dog","cog"],
  ["hit","hot","lot","log","cog"]
]

```

**Example 2:**

```
Input:
beginWord = "hit"
endWord = "cog"
wordList = ["hot","dot","dog","lot","log"]

Output: []

Explanation: The endWord "cog" is not in wordList, therefore no possible transformation.

```

### Solution:

This is just like [127. Word Ladder](./127.%20Word%20Ladder).

The constrain still works, but instead of deleting the words right away, collect them and delete them all when a level ends, so that we can reuse the words (matching different parents in the same level).

The items in the queue are not just words now. Parent nodes are also kept so that we can backtrack the path from the end.

```javascript
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
function findLadders (beginWord, endWord, wordList) {
  wordList = new Set(wordList)
  if (!wordList.has(endWord)) { return [] }

  const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'

  const result = []
  let isEndWordFound = false
  const levelWords = new Set()
  const queue = [[beginWord, null], null]
  while (queue.length > 1) {
    const node = queue.shift()

    if (node === null) {
      if (isEndWordFound) {
        break
      }
      levelWords.forEach(word => wordList.delete(word))
      levelWords.clear()
      queue.push(null)
      continue
    }

    const word = node[0]

    for (let i = word.length - 1; i >= 0; i--) {
      const head = word.slice(0, i)
      const tail = word.slice(i+1)

      for (let c = 0; c < 26; c++) {
        if (ALPHABET[c] !== word[i]) {
          const w = head + ALPHABET[c] + tail
          if (w === endWord) {
            const path = [endWord]
            for (let n = node; n !== null; n = n[1]) {
              path.unshift(n[0])
            }
            result.push(path)
            isEndWordFound = true
          }
          if (wordList.has(w)) {
            levelWords.add(w)
            queue.push([w, node])
          }
        }
      }
    }
  }

  return result
};
```

*Template generated via [Leetmark](https://github.com/crimx/crx-leetmark).*

