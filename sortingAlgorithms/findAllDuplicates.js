// Description: Write a function called findAllDuplicates which accepts an array and returns a new array with all of the values that appear more than once in the array. The new array should retain the order of the original array.
// Time: O(N)
// Space: O(N)  // This is the space complexity of the object created to store the frequency of the elements in the array.
// ****************************************************************************************************
function findAllDuplicates(arr){
    let arrFrequencyCounter = {};
    
    for(let val of arr){
        arrFrequencyCounter[val] = (arrFrequencyCounter[val] || 0) + 1;
    }

    for(let key in arrFrequencyCounter){
        if(arrFrequencyCounter[key] <= 1){
            delete arrFrequencyCounter[key];
        }
    }
    return Object.keys(arrFrequencyCounter).map(Number);
}

// Test Cases
console.log(findAllDuplicates([4,3,2,7,8,2,3,1])); // [ '2', '3' ]
console.log(findAllDuplicates([4,3,2,7,8,2,3,1,1])); // [ '2', '3', '1' ]
console.log(findAllDuplicates([4,3,2,7,8,2,3,1,1,8])); // [ '2', '3', '1', '8' ]
console.log(findAllDuplicates([4,3,2,7,8,2,3,1,1,8,4])); // [ '2', '3', '1', '8', '4' ]
console.log(findAllDuplicates([4,3,2,7,8,2,3,1,1,8,4,4])); // [ '2', '3', '1', '8', '4' ]
console.log(findAllDuplicates([4,3,2,7,8,2,3,1,1,8,4,4,4])); // [ '2', '3', '1', '8', '4' ]
console.log(findAllDuplicates([4,3,2,7,8,2,3,1,1,8,4,4,4,4])); // [ '2', '3', '1', '8', '4' ]
console.log(findAllDuplicates([4,3,2,7,8,2,3,1,1,8,4,4,4,4,4])); // [ '2', '3', '1', '8', '4' ]
console.log(findAllDuplicates([4,3,2,7,8,2,3,1,1,8,4,4,4,4,4,4])); // [ '2', '3', '1', '8', '4' ]
console.log(findAllDuplicates([4,3,2,7,8,2,3,1,1,8,4,4,4,4,4,4,4])); // [ '2', '3', '1', '8', '4' ]