// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

 

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]
 
function productExceptSelf(nums) {
  let n = nums.length;
  let result = new Array(n).fill(1);

  // Step 1: Prefix product
  let prefix = 1;
  for (let i = 0; i < n; i++) {
    result[i] = prefix;   // store product of all elements before i
    prefix *= nums[i];
  }
  console.log(result);
  // Step 2: Suffix product
  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= suffix;  // multiply with product of all elements after i
    suffix *= nums[i];
    console.log("At", i, "result is", result);
  }

  return result;
}

productExceptSelf([1, 2, 3, 4]); // Output: [24, 12, 8, 6]