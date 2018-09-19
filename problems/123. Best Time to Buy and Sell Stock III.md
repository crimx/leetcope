---
Difficulty: Hard
Related Topics:
  "Array": https://leetcode.com/tag/array
  "Dynamic Programming": https://leetcode.com/tag/dynamic-programming
Similar Questions:
  "Best Time to Buy and Sell Stock": https://leetcode.com/problems/best-time-to-buy-and-sell-stock
  "Best Time to Buy and Sell Stock II": https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii
  "Best Time to Buy and Sell Stock IV": https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv
  "Maximum Sum of 3 Non-Overlapping Subarrays": https://leetcode.com/problems/maximum-sum-of-3-non-overlapping-subarrays
---

## [123. Best Time to Buy and Sell Stock III](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/description/)

### Problem:

Say you have an array for which the *i*th element is the price of a given stock on day *i*.

Design an algorithm to find the maximum profit. You may complete at most *two* transactions.

**Note:**You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

**Example 1:**

```
Input: [3,3,5,0,0,3,1,4]
Output: 6
Explanation: Buy on day 4 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
             Then buy on day 7 (price = 1) and sell on day 8 (price = 4), profit = 4-1 = 3.
```

**Example 2:**

```
Input: [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
             Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
             engaging multiple transactions at the same time. You must sell before buying again.

```

**Example 3:**

```
Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
```

### Solution:

Multiple transactions may not be engaged in at the same time. That means if we view the days that involed in the same transaction as a group, there won't be any intersection. We may complete at most *two* transactions, so divide the days into two groups, `[0...k]` and `[k...n-1]`. Notice `k` exists in both groups because technically we can sell out then immediately buy in at the same day.

Define `p1(i)` to be the max profit of day `[0...i]`. This is just like the problem of [121. Best Time to Buy and Sell Stock](./121.%20Best%20Time%20to%20Buy%20and%20Sell%20Stock.md).

```
p1(0) = 0
p1(i) = max( p1(i-1), prices[i] - min(prices[0], ..., prices[i-1]) ), 0 < i <= n-1
```

Define `p2(i)` to be the max profit of day `[i...n-1]`. This is the mirror of `p1`.

```
p2(n-1) = 0
p2(i) = max( p2(i+1), max(prices[i], ..., prices[n-1]) - prices[i] ), n-1 > i >= 0
```

Define `f(k)` to be `p1(k) + p2(k)`. We need to get `max( f(0), ..., f(n-1) )`.

```javascript
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  const len = prices.length
  if (len <= 1) { return 0 }

  const dp = [0]

  let min = prices[0]
  for (let i = 1; i < len; i++) {
    dp[i] = Math.max(dp[i-1], prices[i] - min)
    min = Math.min(prices[i], min)
  }

  let p2 = 0
  let max = prices[len-1]
  for (let i = len-2; i >= 0; i--) {
    max = Math.max(prices[i], max)
    p2 = Math.max(p2, max - prices[i])
    dp[i] += p2
  }

  return Math.max(...dp)
};
```


*Template generated via [Leetmark](https://github.com/crimx/crx-leetmark).*

