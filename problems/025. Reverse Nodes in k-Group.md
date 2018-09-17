---
Difficulty: Hard
Related Topics:
  "Linked List": https://leetcode.com/tag/linked-list
Similar Questions:
  "Swap Nodes in Pairs": https://leetcode.com/problems/swap-nodes-in-pairs
---

## [25. Reverse Nodes in k-Group](https://leetcode.com/problems/reverse-nodes-in-k-group/description/)

### Problem:

Given a linked list, reverse the nodes of a linked list *k* at a time and return its modified list.

*k* is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of *k* then left-out nodes in the end should remain as it is.

**Example:**

Given this linked list: `1->2->3->4->5`

For *k* = 2, you should return: `2->1->4->3->5`

For *k* = 3, you should return: `3->2->1->4->5`

**Note:**

- Only constant extra memory is allowed.
- You may not alter the values in the list's nodes, only nodes itself may be changed.

### Solution:

1. Find the end node of a portion that needs to be reversed.
2. Get the next node of the end node.
3. Reverse the portion using the next node as edge(null) pointer.
4. Connect it back to the main linked list.

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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  const prehead = { next: head }
  let p = prehead
  while (true) {
    let n = k
    let pEndNext = p.next
    while (pEndNext && n) {
      pEndNext = pEndNext.next
      n--
    }

    if (n !== 0) {
      break
    }

    const nextp = p.next // The first node will be the last after reverse
    p.next = reverseLinkList(p.next, pEndNext)
    p = nextp
  }

  return prehead.next
};

function reverseLinkList (head, nullNode = null) {
  let prev = nullNode
  let curr = head
  while (curr !== nullNode) {
    const next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }
  return prev
};
```


*Template generated via [Leetmark](https://github.com/crimx/crx-leetmark).*

