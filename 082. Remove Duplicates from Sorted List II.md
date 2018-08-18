---
Difficulty: Medium
Related Topics:
  "Linked List": https://leetcode.com/tag/linked-list
Similar Questions:
  "Remove Duplicates from Sorted List": https://leetcode.com/problems/remove-duplicates-from-sorted-list
---

## [82. Remove Duplicates from Sorted List II](https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/description/)

### Problem:

Given a sorted linked list, delete all nodes that have duplicate numbers, leaving only *distinct* numbers from the original list.

**Example 1:**

```
Input: 1->2->3->3->4->4->5
Output: 1->2->5
```

**Example 2:**

```
Input: 1->1->1->2->3
Output: 2->3
```

### Solution:

`p1` points to the current node. `p` points to the node before `p1` so that we can ditch `p1` if needed.

The list is sorted so we only need `dupVal` to keep the latest duplicate value.

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
var deleteDuplicates = function(head) {
  if (!head) { return null }
  const prehead = { next: head }

  let p = prehead
  let dupVal = NaN

  for (let p1 = head; p1; p1 = p1.next) {
    if (p1.val === dupVal) {
      p.next = p1.next
    } else if (p1.next && p1.val === p1.next.val) {
      p.next = p1.next
      dupVal = p1.val
    } else {
      p = p1
    }
  }

  return prehead.next
};
```


*Template generated via [Leetmark](https://github.com/crimx/crx-leetmark).*

