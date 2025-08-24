// Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

// A subarray is a contiguous non-empty sequence of elements within an array.

// Example 1:

// Input: nums = [1,1,1], k = 2
// Output: 2
// Example 2:

// Input: nums = [1,2,3], k = 3
// Output: 2
// Example 3:
// nums=[1,2,3,-3,1,1,1,4,2,-3] assuming k = 3

function subArraySumEqualsK (nums, k){
let prefix = 0;
let freq = new Map();
freq.set(0,1); // intresting reason 
let count = 0;

for (const x of nums){
    prefix = prefix + x;
    need = prefix - k;
    count = count +( freq.get(need) ?? 0);
    freq = freq.set(prefix, (freq.get(prefix)??0)+1)
}
return count;
}

console.log(subArraySumEqualsK([1,2,3,-3,1,1,1,4,2,-3], 3))

/*
Dry run: subarraySum(nums, k) with
nums = [1, 2, 3, -3, 1, 1, 1, 4, 2, -3]
k = 3

Legend:
  prefix  = sum(nums[0..i])
  need    = prefix - k
  freq[v] = how many times prefix sum v has appeared so far (BEFORE adding current prefix)
Start: count = 0, prefix = 0, freq = { 0:1 }

i   x    prefix   need   freq[need]   count(after)   freq after adding current prefix
--  ---  -------  -----  ----------   ------------   -----------------------------------------------
0   1       1       -2        0             0        { 0:1, 1:1 }
1   2       3        0        1             1        { 0:1, 1:1, 3:1 }
2   3       6        3        1             2        { 0:1, 1:1, 3:1, 6:1 }
3  -3       3        0        1             3        { 0:1, 1:1, 3:2, 6:1 }
4   1       4        1        1             4        { 0:1, 1:1, 3:2, 4:1, 6:1 }
5   1       5        2        0             4        { 0:1, 1:1, 3:2, 4:1, 5:1, 6:1 }
6   1       6        3        2             6        { 0:1, 1:1, 3:2, 4:1, 5:1, 6:2 }
7   4      10        7        0             6        { 0:1, 1:1, 3:2, 4:1, 5:1, 6:2, 10:1 }
8   2      12        9        0             6        { 0:1, 1:1, 3:2, 4:1, 5:1, 6:2, 10:1, 12:1 }
9  -3       9        6        2             8        { 0:1, 1:1, 3:2, 4:1, 5:1, 6:2, 9:1, 10:1, 12:1 }

Final count = 8

Subarrays found (end index → ranges that sum to k):
  i=1  : [0..1]  -> [1,2]
  i=2  : [2..2]  -> [3]
  i=3  : [0..3]  -> [1,2,3,-3]
  i=4  : [1..4]  -> [2,3,-3,1]
  i=6  : [2..6]  -> [3,-3,1,1,1]
          [4..6]  -> [1,1,1]
  i=9  : [3..9]  -> [-3,1,1,1,4,2,-3]
          [7..9]  -> [4,2,-3]
*/
