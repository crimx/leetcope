---
Difficulty: Medium
Related Topics:
  "String": https://leetcode.com/tag/string
  "Backtracking": https://leetcode.com/tag/backtracking
Similar Questions:
  "IP to CIDR": https://leetcode.com/problems/ip-to-cidr
---

## [93. Restore IP Addresses](https://leetcode.com/problems/restore-ip-addresses/description/)

### Problem:

Given a string containing only digits, restore it by returning all possible valid IP address combinations.

**Example:**

```
Input: "25525511135"
Output: ["255.255.11.135", "255.255.111.35"]
```

### Solution:

Backtracking. Note that leading `'0'` is not allowed except just `'0'`.

```javascript
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s, i = 0, path = [], result = []) {
  if (i === s.length) {
    if (path.length === 4) {
      result.push(path.join('.'))
    }
    return result
  }

  const digit = s.charCodeAt(i) - 48

  if (i === 0) {
    path[0] = digit
    restoreIpAddresses(s, i + 1, path, result)
    path[0] = 0
    return result
  }

  const sum = path[path.length - 1] * 10 + digit

  if (digit < sum && sum <= 255) {
    path[path.length - 1] = sum
    restoreIpAddresses(s, i + 1, path, result)
    path[path.length - 1] = (sum - digit) / 10
  }

  if (path.length < 4) {
    path.push(digit)
    restoreIpAddresses(s, i + 1, path, result)
    path.pop()
  }

  return result
};
```


*Template generated via [Leetmark](https://github.com/crimx/crx-leetmark).*

