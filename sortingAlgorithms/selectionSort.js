// Selection Sort Algorithm Implementation
// 1. Start with the first element of the array as the minimum value.
// 2. Iterate through the array, comparing each element with the current minimum value.
// 3. If a smaller element is found, update the minimum value to that element.
// 4. After one pass, swap the minimum value with the first element of the array.
// 5. Repeat the process for the next element until the entire array is sorted.
// 6. The time complexity of selection sort is O(n^2) in the worst case, and the space complexity is O(1) because it sorts the array in place.
// 7. This means that the space used by the algorithm does not depend on the size of the input array.
// 8. The selection sort algorithm is not a stable sort, meaning that it may change the relative order of equal elements in the sorted array.
// 9. The selection sort algorithm is not adaptive, meaning that it does not take advantage of existing order in the array.
// 10. The selection sort algorithm is not a good choice for large arrays because of its O(n^2) time complexity.    
// 11. The selection sort algorithm is a good choice for small arrays because of its simplicity and ease of implementation.

function selectionSort(arr){
    for(let i = 0; i < arr.length; i++){
        let index = i;
        for(let j = i; j < arr.length; j++){
            if(arr[j] < arr[index]){
                index = j;
            }
        }
        if(index !== i){
            // Swap the found minimum element with the first element
            // This is the swap operation
            // [arr[i], arr[index]] = [arr[index], arr[i]];
            // This is the swap operation using destructuring assignment
            [arr[i], arr[index]] = [arr[index], arr[i]];
        }
    }
    return arr;
}

// Test Cases
console.log(selectionSort([5, 3, 8, 4, 2])); // [2, 3, 4, 5, 8]
console.log(selectionSort([1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5]
console.log(selectionSort([5, 4, 3, 2, 1])); // [1, 2, 3, 4, 5]
console.log(selectionSort([1])); // [1]
console.log(selectionSort([])); // []

// selectionSort with comparator function
// This is the selection sort algorithm with a comparator function
// The comparator function is used to compare two elements in the array
// The comparator function should return a negative value if the first element is less than the second element
// The comparator function should return a positive value if the first element is greater than the second element
// The comparator function should return 0 if the first element is equal to the second element  
// The comparator function is used to sort the array in ascending or descending order
// The comparator function is used to sort the array in a custom order

function selectionSort(arr, comparatorFuntion){
    for(let i = 0; i < arr.length; i++){
        let index = i;
        for(let j = i; j < arr.length; j++){
            if( typeof comparatorFuntion !== 'function' ? arr[j] < arr[index] : comparatorFuntion(arr[j], arr[index]) < 0){
                // If the comparator function returns a negative value, it means arr[j] is less than arr[index]
                index = j;
            }
        }
        if(index !== i){
            // Swap the found minimum element with the first element
            // This is the swap operation
            // [arr[i], arr[index]] = [arr[index], arr[i]];
            // This is the swap operation using destructuring assignment
            [arr[i], arr[index]] = [arr[index], arr[i]];
        }
    }
    return arr;
}
