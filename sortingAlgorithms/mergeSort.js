// Merge Sort Algorithm Implementation
// 1. Divide the array into two halves until each half has one element.
// 2. Merge the two halves back together in sorted order.
// 3. Repeat the process until the entire array is sorted.
// 4. The time complexity of merge sort is O(n log n) in the worst case, and the space complexity is O(n) because it creates a new array to store the merged elements.
// 5. This means that the space used by the algorithm depends on the size of the input array.
// 6. The merge sort algorithm is a stable sort, meaning that it preserves the relative order of equal elements in the sorted array.
// 7. The merge sort algorithm is adaptive, meaning that it takes advantage of existing order in the array.
// 8. The merge sort algorithm is a good choice for large arrays because of its O(n log n) time complexity.
// 9. The merge sort algorithm is a good choice for small arrays because of its simplicity and ease of implementation.  
// 10. The merge sort algorithm is a good choice for linked lists because it does not require random access to the elements in the list.
// 11. The merge sort algorithm is a good choice for external sorting because it can be implemented using a small amount of memory.
// 12. The merge sort algorithm is a good choice for sorting large data sets that do not fit into memory because it can be implemented using a small amount of memory.

/*
    A bit of confusing but standard merge sort implementation.
*/
function mergeSort(arr){
    if(arr.length <= 1){
        return arr;
    }
    
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid, arr.length));
    
    return merge(left, right);
}

// Easier merge sort implementation
// This is a more readable and easier to understand implementation of merge sort
// This implementation uses a helper function to divide the array into smaller arrays
// This implementation uses a helper function to merge the smaller arrays back together
// This implementation uses a helper function to merge the smaller arrays back together in sorted order 

function mergeSortEasier(arr){
    let arrs = divideArray(arr, []);
    let mergedArray = [];
    for(let i = 0; i < arrs.length; i++){
        mergedArray = merge(mergedArray, arrs[i]);
    }
    return mergedArray;
}

// Test Cases
console.log("mergeSortEasier:", mergeSortEasier([5, 3, 8, 4, 2])); // [2, 3, 4, 5, 8]
console.log("mergeSortEasier:", mergeSortEasier([1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5]
console.log("mergeSortEasier:", mergeSortEasier([5, 4, 3, 2, 1])); // [1, 2, 3, 4, 5]
console.log("mergeSortEasier:", mergeSortEasier([1])); // [1]
console.log("mergeSortEasier:", mergeSortEasier([])); // []
console.log("mergeSortEasier:", mergeSortEasier([2, 1])); // [1, 2]
console.log("mergeSortEasier:", mergeSortEasier([1, 2])); // [1, 2]
console.log("mergeSortEasier:", mergeSortEasier([5, 3, 8, 4, 2])); // [2, 3, 4, 5, 8]
console.log("mergeSortEasier:", mergeSortEasier([1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5]



function divideArray(arr, arrs){
    if(arr.length <= 1) {
        arrs.push(arr);
        return arrs;
    }
    
    let mid = Math.floor(arr.length / 2);
    divideArray(arr.slice(0, mid), arrs);
    divideArray(arr.slice(mid, arr.length), arrs);
    return arrs;
}

// Test Cases
console.log("divideArray:", divideArray([1, 2, 3, 4, 5], [])); // [[1, 2], [3, 4, 5]]

//******************************* */
function merge(arr1, arr2, comparatorFunction) { 
    let mergedArray = [];
    let i = 0, j = 0;

    // Merge elements from both arrays until one is exhausted
    while (i < arr1.length && j < arr2.length) {
        let comparisonResult = typeof comparatorFunction === 'function' 
            ? comparatorFunction(arr1[i], arr2[j]) 
            : arr1[i] - arr2[j]; // Default numeric comparison
        
        if (comparisonResult < 0) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }

    // Add remaining elements from arr1 (if any)
    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }

    // Add remaining elements from arr2 (if any)
    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }

    return mergedArray;
}



// Test Cases
console.log("merge:", merge([3, 5], [8])); // [3, 5, 8]
console.log(merge([1, 3, 5], [2, 4, 6])); // [1, 2, 3, 4, 5, 6]
console.log(merge([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
console.log(merge([1, 2, 3], [0])); // [0, 1, 2, 3]
console.log(merge([0], [1, 2, 3])); // [0, 1, 2, 3]
console.log(merge([], [])); // []
console.log(merge([1, 3, 5, 7, 9], [2, 4, 6, 8, 10])); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(merge([1, 3, 5], [2, 4, 6, 7, 8, 9])); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(merge([1, 3, 5, 7, 9], [])); // [1, 3, 5, 7, 9]
console.log(merge([], [2, 4, 6, 8, 10])); // [2, 4, 6, 8, 10]
console.log(merge([1, 2, 3], [1, 2, 3])); // [1, 1, 2, 2, 3, 3]
console.log(merge([1, 4, 7], [2, 3, 5, 6, 8])); // [1, 2, 3, 4, 5, 6, 7, 8]
console.log(merge([10, 20, 30], [5, 15, 25, 35, 40])); // [5, 10, 15, 20, 25, 30, 35, 40]
console.log(merge([-5, -3, -1], [-4, -2, 0, 1])); // [-5, -4, -3, -2, -1, 0, 1]
console.log(merge([100, 200, 300], [50, 150, 250, 350])); // [50, 100, 150, 200, 250, 300, 350]
console.log(merge([1, 3, 5, 7], [2, 4, 6, 8, 9, 10, 11, 12])); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
console.log(merge([1, 3, 5, 7, 9, 11, 13], [2, 4, 6, 8, 10, 12, 14])); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
console.log(merge([1, 2, 3, 4, 5], [6, 7, 8, 9, 10])); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(merge([1, 2, 3, 4, 5], [0, 6, 7, 8, 9, 10])); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(merge([1, 2, 3, 4, 5], [-1, 0, 6, 7, 8, 9, 10])); // [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(merge([1, 2, 3, 4, 5], [-5, -4, -3, -2, -1, 0])); // [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]


function mergeArraysAnotherWay(arr1, arr2){
    let mergedArray = [];
    let i = 0, j = 0;

    // Continue until both arrays are fully processed
    while (i < arr1.length || j < arr2.length) {
        if (i >= arr1.length) {
            // arr1 is exhausted, push remaining elements of arr2
            mergedArray.push(arr2[j]);
            j++;
        } else if (j >= arr2.length) {
            // arr2 is exhausted, push remaining elements of arr1
            mergedArray.push(arr1[i]);
            i++;
        } else {

            if (arr1[i] < arr2[j]) {
                mergedArray.push(arr1[i]);
                i++;
            } else {
                mergedArray.push(arr2[j]);
                j++;
            }
        }
    }

    return mergedArray;
}

// Test Cases
console.log("mergeArraysAnotherWay:", mergeArraysAnotherWay([1, 3, 5], [2, 4, 6])); // [1, 2, 3, 4, 5, 6]
console.log("mergeArraysAnotherWay:", mergeArraysAnotherWay([1, 10, 50], [2, 14, 99, 100])); // [1, 2, 10, 14, 50, 99, 100]

// mergeArraysAnotherWay with comparator function
// This is the mergeArraysAnotherWay function with a comparator function
function mergeArraysAnotherWayComparatorFu(arr1, arr2, comparatorFunction){
    let mergedArray = [];
    let i = 0, j = 0;

    // Continue until both arrays are fully processed
    while (i < arr1.length || j < arr2.length) {
        if (i >= arr1.length) {
            // arr1 is exhausted, push remaining elements of arr2
            mergedArray.push(arr2[j]);
            j++;
        } else if (j >= arr2.length) {
            // arr2 is exhausted, push remaining elements of arr1
            mergedArray.push(arr1[i]);
            i++;
        } else {
            // Compare elements using comparator or default comparison
            let comparison = comparatorFunction
                ? comparatorFunction(arr1[i], arr2[j]) < 0
                : arr1[i] < arr2[j];

            if (comparison) {
                mergedArray.push(arr1[i]);
                i++;
            } else {
                mergedArray.push(arr2[j]);
                j++;
            }
        }
    }

    return mergedArray;
}

// Test Cases
console.log("mergeArraysAnotherWayComparatorFu:", mergeArraysAnotherWayComparatorFu([1, 3, 5], [2, 4, 6], (a, b) => a - b)); // [1, 2, 3, 4, 5, 6]
console.log("mergeArraysAnotherWayComparatorFu:", mergeArraysAnotherWayComparatorFu([-2,-1,0,4,5,6],  [-3,-2,-1,2,3,5,7,8])); 