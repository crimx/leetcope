---
Difficulty: Easy
Related Topics:
  "Linked List": https://leetcode.com/tag/linked-list
Similar Questions:
  "Merge k Sorted Lists": https://leetcode.com/problems/merge-k-sorted-lists
  "Merge Sorted Array": https://leetcode.com/problems/merge-sorted-array
  "Sort List": https://leetcode.com/problems/sort-list
  "Shortest Word Distance II": https://leetcode.com/problems/shortest-word-distance-ii
---

## [21. Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/description/)

### Problem:

Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example:

```
Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
```

### Solution:

Keep tracking the head of two lists and keep moving the pointer of smaller one to the next node.

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
var mergeTwoLists = function(l1, l2) {
  let prehead = { next: null }
  let p = prehead
  let p1 = l1
  let p2 = l2
  while (p1 && p2) {
    let pSel
    if  (p1.val < p2.val) {
      pSel = p1
      p1 = p1.next
    } else {
      pSel = p2
      p2 = p2.next
    }
    p.next = pSel
    p = pSel
  }

  p.next = p1 || p2

  return prehead.next
};

```


*Template generated via [Leetmark](https://github.com/crimx/crx-leetmark).*

