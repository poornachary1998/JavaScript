// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

 

// Example 1:

// Input: nums = [3,0,1]

// Output: 2

// Explanation:

// n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

// Example 2:

// Input: nums = [0,1]

// Output: 2

// Explanation:

// n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.

// Example 3:

// Input: nums = [9,6,4,2,3,5,7,0,1]

// Output: 8

// Explanation:

// n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.

function missingNumber(arr){
let n = arr.length;
let sum = 0;
let sumOfN = (n*(n+1) )/2;
for(let i = 0; i< n; i++){
    sum = sum + arr[i];
}
let missing =  sumOfN - sum;
return missing;
}

let k = missingNumber([1,3,4,5])
console.log(k);

// we need to use  (n*(n+1) )/2; if the array starts from 0 else ((n+1)*(n+2) )/2 if it doesnot contain 0
// Ex: [1,3,4,5]
