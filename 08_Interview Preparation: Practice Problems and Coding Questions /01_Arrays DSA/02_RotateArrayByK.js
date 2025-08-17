function revFunc(nums, start, end){
    while(start<end){
    [nums[start], nums[end]]= [nums[end], nums[start]]
    start++;
    end--;
    }
    
}

function reverseArraytoRight(nums, k){
    let kRem = k % nums.length;
nums.reverse();
revFunc(nums, 0, kRem-1);
revFunc(nums, kRem, nums.length-1)

return console.log(nums)
}
reverseArraytoRight([1,2,3,4,5,6,7,8],3)