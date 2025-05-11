// Quick Sort Algorithm Implementation in JavaScript
// Quick Sort is a divide-and-conquer algorithm that sorts an array by selecting a 'pivot' element and partitioning the other elements into two sub-arrays,
// according to whether they are less than or greater than the pivot. The sub-arrays are then sorted recursively.
// The base case of the recursion is when the array has one or zero elements, in which case it is already sorted.
/*
    Resource: https://www.youtube.com/watch?v=7h1s2SojIRw&t=549s
*/
function partition(arr, low, high) {
    let pivot = arr[low];
    let i = low;
    let j = high;

    while(i < j){
        do{
            i++;
        }while(arr[i] <= pivot)

        do{
            j--;
        }while(arr[j] > pivot)

        if(i < j){
            [ arr[i], arr[j] ] = [ arr[j], arr[i] ];
        }
    }
    [ arr[low], arr[j] ] = [ arr[j], arr[low] ];
    return j;
}

function quickSort(arr, low, high) {
    if(low < high){
        let pivotIndex = partition(arr, low, high);
        quickSort(arr, low, pivotIndex );
        quickSort(arr, pivotIndex + 1, high);
    }
}

// Example usage:
let arr = [10, 7, 8, 9, 1, 5];  
let n = arr.length;
quickSort(arr, 0, n);
console.log("Sorted array:", arr); // Output: Sorted array: [1, 5, 7, 8, 9, 10]


// Time complexity: O(n log n) on average, O(n^2) in the worst case
// Space complexity: O(log n) due to recursion stack


// Quick Sort with Custom Comparator
// This implementation allows the user to provide a custom comparator function to sort the array in different orders (e.g., ascending, descending, etc.)
// The comparator function should take two arguments and return a negative number if the first argument is less than the second, zero if they are equal, and a positive number if the first argument is greater than the second.
// This allows for more flexibility in sorting, such as sorting objects based on a specific property or sorting strings in a case-insensitive manner.
// The partition function is modified to use the provided comparator function instead of the default comparison.
// The quickSort function is also modified to accept the comparator function as an argument and pass it to the partition function.
function partitionWithComparator(arr, low, high, comparator) {
    let pivot = arr[low];
    let i = low;
    let j = high;
    let comparatorProvided = comparator || ((a, b) => a - b); // Default comparator
    while(i < j){
        do{
            i++;
        }while(comparatorProvided(arr[i], pivot) <= 0)

        do{
            j--;
        }while(comparatorProvided(arr[j], pivot) > 0)

        if(i < j){
            [ arr[i], arr[j] ] = [ arr[j], arr[i] ];
        }
    }
    [ arr[low], arr[j] ] = [ arr[j], arr[low] ];
    return j;
}

function quickSortWithComparator(arr, low, high, comparator) {
    if(low < high){
        let pivotIndex = partitionWithComparator(arr, low, high, comparator);
        quickSortWithComparator(arr, low, pivotIndex, comparator );
        quickSortWithComparator(arr, pivotIndex + 1, high, comparator);
    }
}

// Example usage with custom comparator:
let arr1 = [10, 7, 8, 9, 1, 5];
let n1 = arr1.length;
let comparatorFn = (a, b) => b - a; // Ascending order
quickSortWithComparator(arr1, 0, n1, comparatorFn);
console.log("Sorted array:", arr1); // Output: Sorted array: [1, 5, 7, 8, 9, 10]