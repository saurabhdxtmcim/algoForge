// Description: Write a function called areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.
// You can solve this using the frequency counter pattern OR the multiple pointers pattern.
// Your solution MUST have the following complexities:
// Time: O(N)
// Space: O(N)
function areThereDuplicates(...args) {
    let frequencyCounter = {};
    for (let val of args) {
        frequencyCounter[val] = (frequencyCounter[val] || 0) + 1;
        if (frequencyCounter[val] > 1) return true;
    }
    return false;
}

// Test Cases
console.log(areThereDuplicates(1, 2, 3)); // false

console.log(areThereDuplicates(1, 2, 2)); // true

console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true
