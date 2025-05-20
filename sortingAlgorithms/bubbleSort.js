// Bubble Sort Algorithm
// 1. Start from the last element of the array and compare it with the previous element.
// 2. If the previous element is greater than the current element, swap them.
// 3. Repeat this process for all elements in the array until no swaps are needed.
// 4. The array is sorted when no swaps are needed in a complete pass through the array.
// 5. Return the sorted array.

function bubbleSort(arr){
    for(let i = arr.length -1; i >= 0; i--){
        // Last i elements are already sorted
        // so we can skip them
        // and start the loop from 0 to i-1
        for(let j = 0; j < i; j++){
            // Compare adjacent elements
            // and swap them if they are in the wrong order
            // In this case, we are sorting in ascending order
            if(arr[j] > arr[j + 1]){
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// Test Cases
console.log(bubbleSort([5, 3, 8, 4, 2])); // [2, 3, 4, 5, 8]
console.log(bubbleSort([1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5]
console.log(bubbleSort([5, 4, 3, 2, 1])); // [1, 2, 3, 4, 5]
console.log(bubbleSort([1])); // [1]
console.log(bubbleSort([])); // []
console.log(bubbleSort([2, 1])); // [1, 2]
console.log(bubbleSort([1, 2])); // [1, 2]
console.log(bubbleSort([1, 2, 3])); // [1, 2, 3]
console.log(bubbleSort([3, 2, 1])); // [1, 2, 3]
console.log(bubbleSort([1, 3, 2])); // [1, 2, 3]
console.log(bubbleSort([2, 3, 1])); // [1, 2, 3]
console.log(bubbleSort([3, 1, 2])); // [1, 2, 3]

/*
    Now using ES6 destructuring assignment to swap the elements
    instead of using a temporary variable.
    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    This line essentially swaps the two elements without the need for a temporary variable, 
    which is the traditional way of swapping values. It’s concise and efficient
*/
function bubbleSortES6(arr){
    for(let i = arr.length -1; i >= 0; i--){
        for(let j = 0; j < i; j++){
            if(arr[j] > arr[j + 1]){
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

// Test Cases
console.log('bubbleSortES6:', bubbleSortES6([5, 3, 8, 4, 2])); // [2, 3, 4, 5, 8]
console.log('bubbleSortES6:', bubbleSortES6([1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5]
console.log('bubbleSortES6:', bubbleSortES6([5, 4, 3, 2, 1])); // [1, 2, 3, 4, 5]
console.log('bubbleSortES6:', bubbleSortES6([1])); // [1]
console.log('bubbleSortES6:', bubbleSortES6([])); // []
console.log('bubbleSortES6:', bubbleSortES6([2, 1])); // [1, 2]
console.log('bubbleSortES6:', bubbleSortES6([1, 2])); // [1, 2]
console.log('bubbleSortES6:', bubbleSortES6([1, 2, 3])); // [1, 2, 3]
console.log('bubbleSortES6:', bubbleSortES6([3, 2, 1])); // [1, 2, 3]
console.log('bubbleSortES6:', bubbleSortES6([1, 3, 2])); // [1, 2, 3]
console.log('bubbleSortES6:', bubbleSortES6([2, 3, 1])); // [1, 2, 3]
console.log('bubbleSortES6:', bubbleSortES6([3, 1, 2])); // [1, 2, 3]

/*
    Optmized Bubble Sort Algorithm
    1. Start from the last element of the array and compare it with the previous element.
    2. If the previous element is greater than the current element, swap them.
    3. If no swaps are made in a complete pass through the array, the array is sorted.
    4. Return the sorted array.
    5. The array is sorted when no swaps are needed in a complete pass through the array.
    6. Return the sorted array.
    7. This is the optimized version of bubble sort algorithm.
    8. The time complexity is O(n^2) in the worst case and O(n) in the best case.
    9. The space complexity is O(1) because we are not using any additional data structures that grow with the input size.
    10. This means that the space used by the algorithm does not depend on the size of the input array.
    11. The optimized bubble sort algorithm is more efficient than the traditional bubble sort algorithm.
*/

function optimizedBubbleSort(arr){
    let noSwaps; // Flag to check if any swaps were made in the current pass
    for(let i = arr.length -1; i >= 0; i--){
        noSwaps = true; // Assume no swaps will be made in this pass
        for(let j = 0; j < i; j++){
            if(arr[j] > arr[j + 1]){
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                noSwaps = false; // A swap was made, so set the flag to false
            }
        }
        if(noSwaps) break; // If no swaps were made, the array is sorted
    }
    return arr;
}

// Test Cases
console.log('optimizedBubbleSort:', optimizedBubbleSort([5, 3, 8, 4, 2])); // [2, 3, 4, 5, 8]
console.log('optimizedBubbleSort:', optimizedBubbleSort([1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5]
console.log('optimizedBubbleSort:', optimizedBubbleSort([5, 4, 3, 2, 1])); // [1, 2, 3, 4, 5]
console.log('optimizedBubbleSort:', optimizedBubbleSort([1])); // [1]
console.log('optimizedBubbleSort:', optimizedBubbleSort([])); // []
console.log('optimizedBubbleSort:', optimizedBubbleSort([2, 1])); // [1, 2]
console.log('optimizedBubbleSort:', optimizedBubbleSort([1, 2])); // [1, 2]
console.log('optimizedBubbleSort:', optimizedBubbleSort([1, 2, 3])); // [1, 2, 3]
console.log('optimizedBubbleSort:', optimizedBubbleSort([3, 2, 1])); // [1, 2, 3]

function bubbleSortWithComparator(arr, comparatorFunction){
    let swaped = false;
    for(let i = arr.length -1;  i >= 0; i--){
        swaped = false;
        for(let j = 0; j < i; j++){
            if(typeof comparatorFunction === 'function' ? comparatorFunction(arr[j], arr[j + 1]) > 0 : arr[j] > arr[j + 1]){
                // If the comparator function returns a positive value, swap the elements
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swaped = true;
            }
        }
        if(swaped == false) break; // If no swaps were made, the array is sorted
    }
    return arr;
}

// Test Cases
console.log('bubbleSortWithComparator:', bubbleSortWithComparator([5, 3, 8, 4, 2], (a, b) => a - b)); // [2, 3, 4, 5, 8]
console.log('bubbleSortWithComparator:', bubbleSortWithComparator([5, 3, 8, 4, 2], (a, b) => b - a)); // [8, 5, 4, 3, 2]
console.log('bubbleSortWithComparator:', bubbleSortWithComparator([1, 2, 3, 4, 5], (a, b) => a - b)); // [1, 2, 3, 4, 5]
console.log('bubbleSortWithComparator:', bubbleSortWithComparator([5, 4, 3, 2, 1], (a, b) => a - b)); // [1, 2, 3, 4, 5]
console.log('bubbleSortWithComparator:', bubbleSortWithComparator([1], (a, b) => a - b)); // [1]
console.log('bubbleSortWithComparator:', bubbleSortWithComparator([], (a, b) => a - b)); // []
console.log('bubbleSortWithComparator:', bubbleSortWithComparator([2, 1], (a, b) => a - b)); // [1, 2]
console.log('bubbleSortWithComparator:', bubbleSortWithComparator([1, 2], (a, b) => a - b)); // [1, 2]
console.log('bubbleSortWithComparator:', bubbleSortWithComparator([1, 2, 3], (a, b) => a - b)); // [1, 2, 3]
console.log('bubbleSortWithComparator:', bubbleSortWithComparator([3, 2, 1], (a, b) => a - b)); // [1, 2, 3]