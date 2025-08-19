// Given an integer array nums, find a subarray that has the largest product, and return the product.

// The test cases are generated so that the answer will fit in a 32-bit integer.

 

// Example 1:

// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.
// Example 2:

// Input: nums = [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
 function MaximumSubArrayProduct(nums){
   let max = nums[0];
   let min = nums[0];
   let result = nums[0];
   for(let i = 1; i < nums.length; i++){
    let tempMax = Math.max(nums[i], max * nums[i], min * nums[i]);
    min = Math.min(nums[i], max * nums[i], min * nums[i])
     max = tempMax;

    result = Math.max(result, max);
   }
   return result
 }
 console.log(MaximumSubArrayProduct([3,-1,4]));
//  console.log(MaximumSubArrayProduct([-2,0,-1]));