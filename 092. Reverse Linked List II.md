---
Difficulty: Medium
Related Topics:
  "Linked List": https://leetcode.com/tag/linked-list
Similar Questions:
  "Reverse Linked List": https://leetcode.com/problems/reverse-linked-list
---

## [92. Reverse Linked List II](https://leetcode.com/problems/reverse-linked-list-ii/description/)

### Problem:

Reverse a linked list from position *m* to *n*. Do it in one-pass.

**Note:**1 ≤ *m* ≤ *n* ≤ length of list.

**Example:**

```
Input: 1->2->3->4->5->NULL, m = 2, n = 4
Output: 1->4->3->2->5->NULL
```

### Solution:

Break the list into 3 parts.

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
  if (m === n) { return head }

  const prehead = { next: head }
  n = n - m

  let l1tail = prehead
  while (--m > 0) {
    l1tail = l1tail.next
  }

  let l2prehead = l1tail
  let l2head = l2prehead.next
  let l2tail = l2head
  while (n-- > 0) {
    const next = l2head.next
    l2head.next = l2prehead
    l2prehead = l2head
    l2head = next
  }

  l2tail.next = l2head.next // l3head
  l2head.next = l2prehead
  l1tail.next = l2head

  return prehead.next
};
```


*Template generated via [Leetmark](https://github.com/crimx/crx-leetmark).*

