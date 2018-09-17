---
Difficulty: Medium
Related Topics:
  "Linked List": https://leetcode.com/tag/linked-list
  "Two Pointers": https://leetcode.com/tag/two-pointers
---

## [86. Partition List](https://leetcode.com/problems/partition-list/description/)

### Problem:

Given a linked list and a value *x*, partition it such that all nodes less than *x* come before nodes greater than or equal to *x*.

You should preserve the original relative order of the nodes in each of the two partitions.

**Example:**

```
Input: head = 1->4->3->2->5->2, x = 3
Output: 1->2->2->4->3->5
```

### Solution:

Take the second part out as a new list and connect it back.

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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  const prehead1 = { next: head }
  let p1 = prehead1
  let ptail1 = prehead1

  const prehead2 = { next: null }
  let p2 = prehead2

  while (p1) {
    const next = p1.next
    if (next && next.val >= x) {
      p1.next = next.next
      p2.next = next
      p2 = next
    } else {
      ptail1 = p1
      p1 = p1.next
    }
  }

  p2.next = null
  ptail1.next = prehead2.next

  return prehead1.next
};
```


*Template generated via [Leetmark](https://github.com/crimx/crx-leetmark).*

