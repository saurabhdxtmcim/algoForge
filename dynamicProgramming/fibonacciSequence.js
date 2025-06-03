// Not efficiet implementation O(2^N)
// Fibonacci Sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
// Given a number n, return the nth number in the fibonacci sequence
// The fibonacci sequence is defined as follows:
// fib(0) = 0
// fib(1) = 1
// fib(n) = fib(n - 1) + fib(n - 2) for n > 1
// Recursive solution: Time complexity: O(2^n) and space complexity: O(n)
function fibnocci(n){
	if(n <= 0) return 0;
	if(n === 2 || n === 1) return 1;
	
	return fibnocci(n - 1) + fibnocci(n - 2);
}

//Memo-ized solution: recursion + memoizaton: Time complexity: O(n)
// Space complexity: O(n) for the memo array
function fib(n, memo = []){
	if(memo[n] != undefined) return memo[n];
	
	if(n < 2) return 1;
	
	var res = fib( n - 1, memo ) + fib( n - 2, memo );
	memo[n] = res;
	return res;
}

// Tabulation: bottom up approach: not much space is used
// Time complexity: O(n) and space complexity: O(n)
// This is the most efficient solution
function fibTabulated(n){
	if(n <= 2) return 1;
	// initial fib seq
	let fibNums = [0, 1, 1];
	for(let i = 3; i <= n; i++){
		fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
	}
	
	return fibNums[n]
}



