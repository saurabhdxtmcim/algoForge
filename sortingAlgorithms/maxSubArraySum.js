// Description: Write a function called maxSubArraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.
// The function should return null if the array has fewer than n elements.
// The function should have a time complexity of O(n).

// O(n2) solution
function maxSubArraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }

  let max = -Infinity;

  for (let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0;

    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }

    if (temp > max) {
      max = temp;
    }
  }

  return max;
}

// Test Cases
console.log('maxSubArraySum', maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10

console.log('maxSubArraySum', maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
//**************************************************************************************************** */
//**************************************************************************************************** */

// O(n) solution
/*
    Sliding window pattern solution: O(n) time complexity
    The idea is to keep a window of n elements and slide it to the right by one element at a time.
*/
function maxSubArraySumSlidingWindow(arr, num) {
  if(num > arr.length) {
    return null;
  }

  let maxSum = 0;
  let tempSum = 0;
  for(let i = 0; i < num; i++){
    maxSum = maxSum + arr[i]; 
  }

    tempSum = maxSum;

  for(let i = num; i < arr.length; i++){
    tempSum = tempSum - arr[i-num] + arr[i];
    if(tempSum > maxSum){
      maxSum = tempSum;
    }
  }
  return maxSum;
}

// Test Cases
console.log('maxSubArraySumSlidingWindow', maxSubArraySumSlidingWindow([1, 2, 5, 2, 8, 1, 5], 2)); // 10

console.log('maxSubArraySumSlidingWindow', maxSubArraySumSlidingWindow([1, 2, 5, 2, 8, 1, 5], 4)); // 17

console.log('maxSubArraySumSlidingWindow', maxSubArraySumSlidingWindow([4, 2, 1, 6], 1)); // 6

console.log('maxSubArraySumSlidingWindow', maxSubArraySumSlidingWindow([4, 2, 1, 6, 2], 4)); // 13

console.log('maxSubArraySumSlidingWindow', maxSubArraySumSlidingWindow([], 4)); // null