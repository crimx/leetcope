---
Difficulty: Medium
Related Topics:
  "Linked List": https://leetcode.com/tag/linked-list
  "Math": https://leetcode.com/tag/math
Similar Questions:
  "Multiply Strings": https://leetcode.com/problems/multiply-strings
  "Add Binary": https://leetcode.com/problems/add-binary
  "Sum of Two Integers": https://leetcode.com/problems/sum-of-two-integers
  "Add Strings": https://leetcode.com/problems/add-strings
  "Add Two Numbers II": https://leetcode.com/problems/add-two-numbers-ii
---

## [2. Add Two Numbers](https://leetcode.com/problems/add-two-numbers/description/)

### Problem:

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example

```
Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
```

### Solution:

Mind the last carry.

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  const prehead = new ListNode()
  let p = prehead
  let carry = 0
  
  for (let p1 = l1, p2 = l2: p1 || p2 || carry > 0; p = p.next) {
    let sum = carry
    if (p1) {
      sum += p1.val
      p1 = p1.next
    }
    if (p2) {
      sum += p2.val
      p2 = p2.next
    }
    carry = sum / 10 | 0
    p.next = new ListNode(sum % 10)
  }
  
  return prehead.next
};
```

*Template generated via [Leetmark](https://github.com/crimx/crx-leetmark).*

