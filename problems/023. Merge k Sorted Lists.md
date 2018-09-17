---
Difficulty: Hard
Related Topics:
  "Linked List": https://leetcode.com/tag/linked-list
  "Divide and Conquer": https://leetcode.com/tag/divide-and-conquer
  "Heap": https://leetcode.com/tag/heap
Similar Questions:
  "Merge Two Sorted Lists": https://leetcode.com/problems/merge-two-sorted-lists
  "Ugly Number II": https://leetcode.com/problems/ugly-number-ii
---

## [23. Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/description/)

### Problem:

Merge *k* sorted linked lists and return it as one sorted list. Analyze and describe its complexity.

**Example:**

```
Input:
[
  1->4->5,
  1->3->4,
  2->6
]
Output: 1->1->2->3->4->4->5->6
```

### Solution:

#### ONE

Extend the idea of [21. Merge Two Sorted Lists](./021.%20Merge%20Two%20Sorted%20Lists.md) and compare N items at a time.

This is slow as it reaches O(N^2).

#### TWO

Priority Queue. O(N * log(K)).

Since JavaScript does not provide a standard built-in Priority Queue data structure, it is challenging to implement an efficient one barehanded. 

#### THREE

Divide and conquer. Also O(N * log(K)).

Divide N lists into ceil(N/2) pairs and merge your way up.

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  while (lists.length > 1) {
    lists.unshift(mergeTwoLists(lists.pop(), lists.pop()))
  }
  return lists[0] || []
};

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
function mergeTwoLists (l1, l2) {
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

