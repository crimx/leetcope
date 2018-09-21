---
Difficulty: Medium
Related Topics:
  "Breadth-first Search": https://leetcode.com/tag/breadth-first-search
Similar Questions:
  "Word Ladder II": https://leetcode.com/problems/word-ladder-ii
  "Minimum Genetic Mutation": https://leetcode.com/problems/minimum-genetic-mutation
---

## [127. Word Ladder](https://leetcode.com/problems/word-ladder/description/)

### Problem:

Given two words (*beginWord* and *endWord*), and a dictionary's word list, find the length of shortest transformation sequence from *beginWord* to *endWord*, such that:

1. Only one letter can be changed at a time.
2. Each transformed word must exist in the word list. Note that *beginWord* is *not* a transformed word.

**Note:**

- Return 0 if there is no such transformation sequence.
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

Output: 5

Explanation: As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog",
return its length 5.

```

**Example 2:**

```
Input:
beginWord = "hit"
endWord = "cog"
wordList = ["hot","dot","dog","lot","log"]

Output: 0

Explanation: The endWord "cog" is not in wordList, therefore no possible transformation.

```

### Solution:

Think of it as building a tree, with `begineWord` as root and `endWord` as leaves.

The best way control the depth (length of the shortest transformations) while building the tree is level-order traversal (BFS).

We do not actually build the tree because it is expensive (astronomical if the list is huge). In fact, we only need one shortest path. So just like Dijkstra's algorithm, we say that the first time (level `i`) we encounter a word that turns out to be in a shortest path, then level `i` is the lowest level this word could ever get. We can safely remove it from the `wordList`.

To find all the next words, instead of filtering the `wordList`, enumerate all 25 possible words and check if in `wordList`.

```javascript
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
  wordList = new Set(wordList)
  if (!wordList.has(endWord)) { return 0 }

  const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'

  let level = 1
  const queue = [beginWord, null]
  while (queue.length > 1) {
    const word = queue.shift()

    if (word === null) {
      level++
      queue.push(null)
      continue
    }

    for (let i = word.length - 1; i >= 0; i--) {
      const head = word.slice(0, i)
      const tail = word.slice(i+1)

      for (let c = 0; c < 26; c++) {
        if (ALPHABET[c] !== word[i]) {
          const word = head + ALPHABET[c] + tail
          if (word === endWord) {
            return level + 1
          }
          if (wordList.delete(word)) {
            queue.push(word)
          }
        }
      }
    }
  }

  return 0
};
```

*Template generated via [Leetmark](https://github.com/crimx/crx-leetmark).*

