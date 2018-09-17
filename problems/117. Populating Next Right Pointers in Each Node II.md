---
Difficulty: Medium
Related Topics:
  "Tree": https://leetcode.com/tag/tree
  "Depth-first Search": https://leetcode.com/tag/depth-first-search
Similar Questions:
  "Populating Next Right Pointers in Each Node": https://leetcode.com/problems/populating-next-right-pointers-in-each-node
---

## [117. Populating Next Right Pointers in Each Node II](https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/description/)

### Problem:

Given a binary tree

```
struct TreeLinkNode {
  TreeLinkNode *left;
  TreeLinkNode *right;
  TreeLinkNode *next;
}

```

Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to `NULL`.

Initially, all next pointers are set to `NULL`.

**Note:**

- You may only use constant extra space.
- Recursive approach is fine, implicit stack space does not count as extra space for this problem.

**Example:**

Given the following binary tree,

```
     1
   /  \
  2    3
 / \    \
4   5    7

```

After calling your function, the tree should look like:

```
     1 -> NULL
   /  \
  2 -> 3 -> NULL
 / \    \
4-> 5 -> 7 -> NULL

```

### Solution:

#### ONE

Recursive. See [116. Populating Next Right Pointers in Each Node](./116.%20Populating%20Next%20Right%20Pointers%20in%20Each%20Node.md).

The tree may not be perfect now. So keep finding `next` until there is a node with children, or `null`.

This also means post-order traversal is required.

```javascript
/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {
  if (!root) { return }
  let next = null
  for (let node = root.next; node !== null; node = node.next) {
    if (node.left !== null) {
      next = node.left
      break
    }
    if (node.right !== null) {
      next = node.right
      break
    }
  }
  if (root.right !== null) {
    root.right.next = next
  }
  if (root.left !== null) {
    root.left.next = root.right || next
  }
  connect(root.right)
  connect(root.left)
};
```

#### TWO

Level order traversal. Exact same as [116. Populating Next Right Pointers in Each Node](./116.%20Populating%20Next%20Right%20Pointers%20in%20Each%20Node.md).

```javascript
/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {
  if (!root) { return }

  const queue = [NaN, root]
  while (queue.length > 1) {
    const node = queue.shift()
    if (node !== node) {
      for (let i = 0; i < queue.length; i++) {
        queue[i].next = queue[i+1] || null
      }
      queue.push(NaN)
    } else {
      if (node.left !== null) { queue.push(node.left) }
      if (node.right !== null) { queue.push(node.right) }
    }
  }
};
```

*Template generated via [Leetmark](https://github.com/crimx/crx-leetmark).*

