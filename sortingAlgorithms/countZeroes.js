// This function counts the number of zeroes in a sorted binary array
// It assumes the input array is sorted and consists of only 0s and 1s.
// This function uses a simple while loop to count the number of leading 1s and then calculates the number of zeroes by subtracting the count of leading 1s from the total length of the array.
// also array has all 1 first then 0
function countZeroes(arr){
    let countOne = 0;

    while(arr[countOne] === 1){
        countOne++; // Count the number of leading ones
    }
    return arr.length - countOne; // The number of zeroes is total length minus the count of leading ones
}

//Test cases
console.log(countZeroes([1, 1, 1, 0, 0])); // 2 // Explanation: There are 2 zeroes after 3 ones.

