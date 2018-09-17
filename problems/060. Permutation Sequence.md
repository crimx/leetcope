---
Difficulty: Medium
Related Topics:
  "Math": https://leetcode.com/tag/math
  "Backtracking": https://leetcode.com/tag/backtracking
Similar Questions:
  "Next Permutation": https://leetcode.com/problems/next-permutation
  "Permutations": https://leetcode.com/problems/permutations
---

## [60. Permutation Sequence](https://leetcode.com/problems/permutation-sequence/description/)

### Problem:

The set `[1,2,3,...,*n*]` contains a total of *n*! unique permutations.

By listing and labeling all of the permutations in order, we get the following sequence for *n* = 3:

1. `"123"`
2. `"132"`
3. `"213"`
4. `"231"`
5. `"312"`
6. `"321"`

Given *n* and *k*, return the *k*th permutation sequence.

**Note:**

- Given *n* will be between 1 and 9 inclusive.
- Given *k* will be between 1 and *n*! inclusive.

**Example 1:**

```
Input: n = 3, k = 3
Output: "213"
```

**Example 2:**

```
Input: n = 4, k = 9
Output: "2314"
```

### Solution:

The order of the sequence is fixed hence can be calculated. We can view the process as picking digits from a sorted set `[1...n]`.

Each digit appears `(n-1)!` times in `result[0]`. And for a fixed `result[0]` each digit appears `(n-2)!` times in `result[1]`. So on.

We also need `k--` to convert `k` into index so that `k <= (n-1)!` maps `0` (and get `1` from the set).

```javascript
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
  const digits = []
  let factorial = 1
  for (let i = 1; i <= n; i++) {
    digits.push(i)
    factorial *= i
  }

  k--

  let result = ''
  while (n > 0) {
    factorial /= n
    result += digits.splice(k / factorial | 0, 1)[0]
    k %= factorial
    n--
  }
  
  return result
};
```

*Template generated via [Leetmark](https://github.com/crimx/crx-leetmark).*

