// Given an unsorted array and a number n, find if there exists a pair of elements in the array whose difference is n. This function should return true if the pair exists or false if it does not.
// // Your solution MUST have the following complexities:
// // Time: O(N log N)
// // Space: O(1)
// // Sample Input:
// findPair([6,1,4,10,2,4], 2); // true

function findPair(arr, num){
    if(arr.length < 2) return false;
    arr.sort((a, b) => a - b);

    let left = 0; let right = 1;

    while(right < arr.length){
        let diff = arr[right] - arr[left];
        if(diff === Math.abs(num)){
            return true;
        }else if(diff < Math.abs(num)){
            right++;
        }else{
            left++;
            if(left === right) right++;
        }
    }
    return false;
}

// Test Cases
console.log(findPair([6,1,4,10,2,4], 2)); // true
console.log(findPair([8,6,2,4,1,0,2,5,13], 1)); // true
console.log(findPair([4,-2,3,10], -6)); // true
console.log(findPair([6,1,4,10,2,4], 22)); // false
console.log(findPair([], 0)); // false
console.log(findPair([5,5], 0)); // true
console.log(findPair([-4,1, 4], 8)); // true
console.log(findPair([-4,4], -8)); // true
console.log(findPair([1,3,4,6], -2)); // true
console.log(findPair([0,1,3,4,6], -2)); // true
console.log(findPair([1,2,3,4,5], 0)); // false