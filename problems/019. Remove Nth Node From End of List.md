---
Difficulty: Medium
Related Topics:
  "Linked List": https://leetcode.com/tag/linked-list
  "Two Pointers": https://leetcode.com/tag/two-pointers
---

## [19. Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/)

### Problem:

Given a linked list, remove the *n*-th node from the end of list and return its head.

**Example:**

```
Given linked list: 1->2->3->4->5, and n = 2.

After removing the second node from the end, the linked list becomes 1->2->3->5.
```

**Note:**

Given *n* will always be valid.

**Follow up:**

Could you do this in one pass?

### Solution:

Set a pointer `p1` for iterating, and `p2` which is `n` nodes behind, pointing at the (n+1)-th node from the end of list.

Boundaries that should be awared of:

- `p2` could be one node before `head`, which means the `head` should be removed.
- `p2` could be larger than the length of the list (Though the description says `n` will always be valid, we take care of it anyway).
- It should be `p1.next` touches the end rather than `p1` because we want `p1` pointing at the last node.

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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let p1 = head
  while (p1 && n--) {
    p1 = p1.next
  }

  if (!p1) { return n ? head : head.next }

  let p2 = head
  while (p1.next) {
    p1 = p1.next
    p2 = p2.next
  }

  p2.next = p2.next.next

  return head
};
```


*Template generated via [Leetmark](https://github.com/crimx/crx-leetmark).*

