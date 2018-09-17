---
Difficulty: Medium
Related Topics:
  "Linked List": https://leetcode.com/tag/linked-list
  "Two Pointers": https://leetcode.com/tag/two-pointers
Similar Questions:
  "Rotate Array": https://leetcode.com/problems/rotate-array
  "Split Linked List in Parts": https://leetcode.com/problems/split-linked-list-in-parts
---

## [61. Rotate List](https://leetcode.com/problems/rotate-list/description/)

### Problem:

Given a linked list, rotate the list to the right by *k* places, where *k* is non-negative.

**Example 1:**

```
Input: 1->2->3->4->5->NULL, k = 2
Output: 4->5->1->2->3->NULL
Explanation:
rotate 1 steps to the right: 5->1->2->3->4->NULL
rotate 2 steps to the right: 4->5->1->2->3->NULL
```

**Example 2:**

```
Input: 0->1->2->NULL, k = 4
Output: 2->0->1->NULL
Explanation:
rotate 1 steps to the right: 2->0->1->NULL
rotate 2 steps to the right: 1->2->0->NULL
rotate 3 steps to the right: 0->1->2->NULL
rotate 4 steps to the right: 2->0->1->NULL
```

### Solution:

Classic two-pointers chasing except the `k` could be larger than the length of this list.

We first attempt to locate the right pointer while also recording the length of the list.

If we hit the end of list and still do not have the right pointer, we know `k` is larger than the length.

Locate the right pointer again with `k % len`.

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
var rotateRight = function(head, k) {
  if (head === null || k <= 0) { return head }

  let right = head
  let len = 0
  let kk = k
  while (right !== null && kk > 0) {
    right = right.next
    kk--
    len++
  }

  if (kk > 0) {
    right = head
    kk = k % len
    while (kk--) {
      right = right.next
    }
  }

  if (right !== null) {
    let left = head
    while (right.next !== null) {
      left = left.next
      right = right.next
    }
    right.next = head
    head = left.next
    left.next = null
  }

  return head
};
```

*Template generated via [Leetmark](https://github.com/crimx/crx-leetmark).*

