---
Difficulty: Medium
Related Topics:
  "Tree": https://leetcode.com/tag/tree
  "Depth-first Search": https://leetcode.com/tag/depth-first-search
Similar Questions:
  "Populating Next Right Pointers in Each Node II": https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii
  "Binary Tree Right Side View": https://leetcode.com/problems/binary-tree-right-side-view
---

## [116. Populating Next Right Pointers in Each Node](https://leetcode.com/problems/populating-next-right-pointers-in-each-node/description/)

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
- You may assume that it is a perfect binary tree (ie, all leaves are at the same level, and every parent has two children).

**Example:**

Given the following perfect binary tree,

```
     1
   /  \
  2    3
 / \  / \
4  5  6  7

```

After calling your function, the tree should look like:

```
     1 -> NULL
   /  \
  2 -> 3 -> NULL
 / \  / \
4->5->6->7 -> NULL

```

### Solution:

#### ONE

Recursive.

For every `node`:

- Left child: points to `node.right`.
- Right child: points to `node.next.left` if `node.next` exists.

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
  if (root.left !== null) {
    root.left.next = root.right
    connect(root.left)
  }
  if (root.right !== null) {
    if (root.next !== null) {
      root.right.next = root.next.left
    }
    connect(root.right)
  }
};
```

#### TWO

Level order traversal.

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

