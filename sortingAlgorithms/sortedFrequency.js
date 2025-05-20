// Given a sorted array and a number, write a function called sortedFrequency that counts the occurrences of the number in the array
// Simple solution, can be inproved with binary search to find the first and last occurrence of the number in the sorted array.
// This function counts the occurrences of a number in a sorted array by iterating through the array and counting how many times the number appears.
function sortedFrequency(sortedArr, num){
    if(sortedArr.length === 0) {
        return -1; // Return -1 if the array is empty
    }
    let start = null;
    let end = 0;
   
    for(let i = 0; i < sortedArr.length; i++) {
        if(sortedArr[i] > num){
            end = i - 1;
            break;
        }else if(start == null && sortedArr[i] == num) { 
            start = i;
            end = i;
        }
    }
    
    return start == null ? -1 : end - start + 1; // If counter reaches the end without finding num, return -1
}

console.log(sortedFrequency([1,1,2,2,2,2,3],3)); // 3 -> Explanation: The number 2 appears 3 times in the array.

