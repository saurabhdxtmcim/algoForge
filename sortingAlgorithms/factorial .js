// This code defines a recursive function to calculate the factorial of a number.

function factorial(num){
    if(num == 0) return 1;
    return num * factorial(num - 1);
}

console.log(factorial(5)); // 120
console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(3)); // 6