// Binary Search Algorithm
// 1. Initialize two pointers, start and end, to the beginning and end of the array, respectively.
// 2. While start is less than or equal to end:
//    a. Calculate the middle index as mid = Math.floor((start + end) / 2).
//    b. If the middle element is equal to the target value, return mid.
//    c. If the middle element is less than the target value, move the start pointer to mid + 1.
//    d. If the middle element is greater than the target value, move the end pointer to mid - 1.
// 3. If the target value is not found, return -1.

function binarySearch(arr, num){
    let start = 0, end = arr.length -1;

    while(start <= end){
        let mid = Math.floor((start + end) / 2);
        if(arr[mid] == num) return mid;
        else if(arr[mid] < num) start = mid + 1;
        else end = mid - 1;
    }
    return -1;
}

// Time Complexity: O(log n)
// Space Complexity: O(1)
// The time complexity is O(log n) because the search space is halved with each iteration.
// The space complexity is O(1) because we are not using any additional data structures that grow with the input size.
// This means that the space used by the algorithm does not depend on the size of the input array.

//Test Cases
console.log(binarySearch([1,2,3,4,5], 3)); // 2
console.log(binarySearch([1,2,3,4,5], 6)); // -1
console.log(binarySearch([1,2,3,4,5], 1)); // 0
console.log(binarySearch([1,2,3,4,5], 5)); // 4
console.log(binarySearch([1,2,3,4,5], 0)); // -1
console.log(binarySearch([1,2,3,4,5], 2)); // 1