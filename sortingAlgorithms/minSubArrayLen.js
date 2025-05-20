/*Sliding Window - minSubArrayLen
Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.
Examples:

minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0
Time Complexity - O(n)

Space Complexity - O(1)
*/
function minSubArrayLen(nums, sum) {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLength = 0; // To track the minimum length of subarray found

    while( end < nums.length){
        total = total + nums[end];
        
        while(total >= sum){
            total = total - nums[start];
            // When total is greater than or equal to sum, we can calculate the length of the current subarray
            let currentLength = end - start +1; // Calculate the length of the current subarray
            if(minLength === 0 || currentLength < minLength){
                // If this is the first valid length or it's smaller than the previous minimum, update it
                minLength = currentLength;
            }
            
            start ++;
        }
        end ++; // Move the end pointer to expand the window
    }

   return minLength;
}

// Test cases
console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0
console.log(minSubArrayLen([1, 2, 3, 4, 5], 11)); // 3
console.log(minSubArrayLen([1, 2, 3, 4, 5], 15)); // 5
console.log(minSubArrayLen([1, 2, 3, 4, 5], 16)); // 0
console.log(minSubArrayLen([1, 2, 3, 4, 5], 17)); // 0


