// Linear Search Algorithm
// 1. Iterate through each element in the array.
// 2. Compare the current element with the target number.
// 3. If a match is found, return the index of the current element.
// 4. If no match is found after checking all elements, return -1.

function linearSearch(arr, num){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === num) return i;
    }
    return -1;
}

// Time Complexity: O(n)
// Space Complexity: O(1)
// The time complexity is O(n) because in the worst case, we may have to check every element in the array once. 
// The space complexity is O(1) because we are not using any additional data structures that grow with the input size.
// This means that the space used by the algorithm does not depend on the size of the input array.


// Test Cases
console.log(linearSearch([1,2,3,4,5], 3)); // 2
console.log(linearSearch([1,2,3,4,5], 6)); // -1
console.log(linearSearch([1,2,3,4,5], 1)); // 0
console.log(linearSearch([1,2,3,4,5], 5)); // 4
console.log(linearSearch([1,2,3,4,5], 0)); // -1