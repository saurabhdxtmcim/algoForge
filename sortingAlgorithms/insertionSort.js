// This function sorts an array using the insertion sort algorithm.
// The insertion sort algorithm works by dividing the array into a sorted and an unsorted part.
// The sorted part is built up from the left side of the array, and the unsorted part is built up from the right side of the array.
// The algorithm works by taking one element from the unsorted part and inserting it into the correct position in the sorted part.
// The algorithm is not adaptive, meaning that it does not take advantage of existing order in the array.
// The algorithm is not stable, meaning that it may change the relative order of equal elements in the sorted array.
// The algorithm is not a good choice for large arrays because of its O(n^2) time complexity.
// The algorithm is a good choice for small arrays because of its simplicity and ease of implementation.

function insertionSort(arr){
    let index = 1;
    while(index < arr.length){
        for(let i = index; i > 0; i--){
            if(arr[i] < arr[i-1]){
                [arr[i], arr[i-1]] = [arr[i-1], arr[i]];
            }
        }
        index++;
    }
   
    return arr;
}

// Test Cases
console.log(insertionSort([5, 3, 8, 4, 2])); // [2, 3, 4, 5, 8]
console.log(insertionSort([1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5]
console.log(insertionSort([5, 4, 3, 2, 1])); // [1, 2, 3, 4, 5]
console.log(insertionSort([1])); // [1]
console.log(insertionSort([])); // []
console.log(insertionSort([2, 1])); // [1, 2]
console.log(insertionSort([1, 2])); // [1, 2]


function insertionSortComparator(arr, comparatorFunction){
    let index = 1;
    while(index < arr.length){
        for(let i = index; i > 0; i--){
            if(typeof comparatorFunction !== 'function' ? arr[i] < arr[i-1] : comparatorFunction(arr[i-1], arr[i]) > 0){
                // If the comparator function returns a negative value, it means arr[i] is less than arr[i-1]
                [arr[i], arr[i-1]] = [arr[i-1], arr[i]];
            }
        }
        index++;
    }
    return arr;
}

// Test Cases
console.log(insertionSortComparator([5, 3, 8, 4, 2], (a, b) => a - b)); // [2, 3, 4, 5, 8]
console.log(insertionSortComparator([5, 3, 8, 4, 2], (a, b) => b - a)); // [8, 5, 4, 3, 2]
console.log(insertionSortComparator([1, 2, 3, 4, 5], (a, b) => a - b)); // [1, 2, 3, 4, 5]
console.log(insertionSortComparator([5, 4, 3, 2, 1], (a, b) => a - b)); // [1, 2, 3, 4, 5]
console.log(insertionSortComparator([1], (a, b) => a - b)); // [1]
console.log(insertionSortComparator([], (a, b) => a - b)); // []
console.log(insertionSortComparator([2, 1], (a, b) => a - b)); // [1, 2]

var moarKittyData = [{
        name: "LilBub",
        age: 7
    }, {
        name: "Garfield",
        age: 40
    }, {
        name: "Heathcliff",
        age: 45
    }, {
        name: "Blue",
        age: 1
    }, {
        name: "Grumpy",
        age: 6
    }
];

function oldestToYoungest(a, b) {
    return b.age - a.age;
}

console.log('insertionSort moarKittyData:', insertionSortComparator(moarKittyData, oldestToYoungest)); // [ { name: 'Garfield', age: 40 }, { name: 'Heathcliff', age: 45 }, { name: 'LilBub', age: 7 }, { name: 'Grumpy', age: 6 }, { name: 'Blue', age: 1 } ]
   
  