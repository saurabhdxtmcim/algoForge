// This function takes a number as an argument and returns the sum of all numbers from 0 to that number using recursion.
function recursiveRange(num){
    if(num == 0) return 0;
    return num + recursiveRange(num - 1);
}


//Test cases for the recursiveRange function
console.log(recursiveRange(6)); // 21 (6 + 5 + 4 + 3 + 2 + 1 + 0)
console.log(recursiveRange(10)); // 55 (10 + 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1 + 0)
console.log(recursiveRange(0)); // 0 (base case)
console.log(recursiveRange(1)); // 1 (0 + 1)
console.log(recursiveRange(2)); // 3 (0 + 1 + 2)