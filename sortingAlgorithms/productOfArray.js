// This function takes an array of numbers as input and returns the product of all the numbers in the array using recursion.
function productOfArray(arr){
    if(arr.length ==1) return arr[0];
    return arr[0] * productOfArray(arr.slice(1));
}

console.log(productOfArray([1,2,3,10])); // 60
console.log(productOfArray([1,2,3])); // 6
console.log(productOfArray([1,2])); // 2
console.log(productOfArray([1])); // 1
console.log(productOfArray([2])); // 2
console.log(productOfArray([3])); // 3
console.log(productOfArray([4])); // 4
