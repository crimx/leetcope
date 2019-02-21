---
Difficulty: Hard
Related Topics:
  "Array": https://leetcode.com/tag/array
  "Binary Search": https://leetcode.com/tag/binary-search
  "Divide and Conquer": https://leetcode.com/tag/divide-and-conquer
---

## [4. Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays/description/)

### Problem:

There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

Example 1:

```
nums1 = [1, 3]
nums2 = [2]

The median is 2.0
```

Example 2:

```
nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5
```

### Solution:

O(log (m+n)) means half of the sequence is ruled out on each loop. So obviously we need binary search.

To do it on two sorted arrays, we need a formula to guide division.

Let `nums3` be the sorted array combining all the items in `nums1` and `nums2`.

If `nums2[j-1] <= nums1[i] <= nums2[j]`, then we know `nums1[i]` is at `num3[i+j]`. Same goes `nums1[i-1] <= nums2[j] <= nums1[i]`.

Let `k` be `⌊(m+n-1)/2⌋`. We need to find `nums3[k]` (and also `nums3[k+1]` if m+n is even).

Let `i + j = k`, if we find `nums2[j-1] <= nums1[i] <= nums2[j]` or `nums1[i-1] <= nums2[j] <= nums1[i]`, then we got `k`.

Otherwise, if `nums1[i] <= nums2[j]` then we know `nums1[i] < nums2[j-1]` (because we did not find `k`).

- There are `i` items before `nums1[i]`, and `j-1` items brefor `nums2[j-1]`, which means `nums1[0...i]` are before `nums3[i+j-1]`. So we now know `nums1[0...i] < nums3[k]`. They can be safely discarded.

- We Also have `nums1[i] < nums2[j]`, which means `nums2[j...n)` are after `nums3[i+j]`. So `nums2[j...n) > nums3[k]`.

Same goes `nums1[i-1] <= nums2[j] <= nums1[i]`.

```javascript
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const mid = (nums1.length + nums2.length - 1) / 2 | 0

  if ((nums1.length + nums2.length) % 2 === 0) {
    return (_find(nums1, nums2, mid) + _find(nums1, nums2, mid + 1)) / 2
  }

  return _find(nums1, nums2, mid)
}


function _find (nums1, nums2, k) {
  if (nums1.length > nums2.length) {
    // So that the `i` below is always smalller than k,
    // which makes `j` always non-negative
    [nums1, nums2] = [nums2, nums1]
  }
  let s1 = 0
  let s2 = 0
  let e1 = nums1.length
  let e2 = nums2.length

  while (s1 < e1 || s2 < e2) {
    const i = s1 + ((e1 - s1) / 2 | 0)
    const j = k - i
    const ni = i >= e1 ? Infinity : nums1[i]
    const nj = j >= e2 ? Infinity : nums2[j]
    const ni_1 = i <= 0 ? -Infinity : nums1[i-1]
    const nj_1 = j <= 0 ? -Infinity : nums2[j-1]

    if (nj_1 <= ni && ni <= nj) {
      return ni
    }

    if (ni_1 <= nj && nj <= ni) {
      return nj
    }

    if (ni <= nj) {
      s1 = i + 1
      e2 = j
    } else {
      s2 = j + 1
      e1 = i
    }
  }
};
```

*Template generated via [Leetmark](https://github.com/crimx/crx-leetmark).*

