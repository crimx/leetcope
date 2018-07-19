---
Difficulty: Medium
Related Topics:
  "Linked List": https://leetcode.com/tag/linked-list
Similar Questions:
  "Reverse Nodes in k-Group": https://leetcode.com/problems/reverse-nodes-in-k-group
---

## [24. Swap Nodes in Pairs](https://leetcode.com/problems/swap-nodes-in-pairs/description/)

### Problem:

Given a linked list, swap every two adjacent nodes and return its head.

**Example:**

```
Given 1->2->3->4, you should return the list as 2->1->4->3.
```

**Note:**

- Your algorithm should use only constant extra space.
- You may **not** modify the values in the list's nodes, only nodes itself may be changed.

### Solution:

1. Draw the nodes down on paper to reason about the relationships.
2. Pointing to every active node is an easy way to keep on track.

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
 * @return {ListNode}
 */
var swapPairs = function(head) {
  const prehead = { next: head }

  for (let p = prehead; p.next !== null && p.next.next !== null;) {
    const p1 = p.next
    const p2 = p1.next
    p1.next = p2.next
    p2.next = p1
    p.next = p2
    p = p1
  }

  return prehead.next
};
```


*Template generated via [Leetmark](https://github.com/crimx/crx-leetmark).*

