// Stack implementation using a singly linked list
// This implementation allows for O(1) time complexity for push and pop operations.

class Node{
	constructor(value){
		this.value = value;
		this.next = null;
	}
}

class Stack{
	constructor(){
		this.first = null;
		this.last = null;
		this.length = 0;
	}

	push(val){
		let node = new Node(val);
		if(!this.first){
			this.first = node;
			this.last = node;
		}else{
			node.next = this.first;
			this.first = node;
		}
		this.length++;
		return this.length;
	}
	
	pop(){
		if(!this.first) return undefined;
		let valueToBeRemoved = this.first;
		if(this.length === 1){
			this.first = null;
			this.last = null;
		}else{
			this.first =  this.first.next;
		}
		this.length--;
		return valueToBeRemoved;
	}
}

/*
    * Test cases for the Stack implementation
*/
function assertEqual(actual, expected, message) {
	if (actual !== expected) {
		console.error(`❌ ${message} | Expected: ${expected}, Got: ${actual}`);
	} else {
		console.log(`✅ ${message}`);
	}
}

function assertArrayEqual(actual, expected, message) {
	const isEqual = actual.length === expected.length && actual.every((v, i) => v === expected[i]);
	if (!isEqual) {
		console.error(`❌ ${message} | Expected: [${expected}], Got: [${actual}]`);
	} else {
		console.log(`✅ ${message}`);
	}
}

function printStack(stack) {
	const result = [];
	let current = stack.first;
	while (current) {
		result.push(current.value);
		current = current.next;
	}
	return result;
}

function runStackTests() {
	const stack = new Stack();

	stack.push(1);
	stack.push(2);
	stack.push(3);

	assertEqual(stack.first.value, 3, "Top of stack (first) should be 3 after pushes");
	assertEqual(stack.last.value, 1, "Bottom of stack (last) should be 1 after pushes");
	assertEqual(stack.length, 3, "Length should be 3 after 3 pushes");
	assertArrayEqual(printStack(stack), [3, 2, 1], "Stack should be [3,2,1] from top to bottom");

	// Pop top
	let popped = stack.pop();
	assertEqual(popped.value, 3, "Popped value should be 3");
	assertEqual(stack.first.value, 2, "Top should be 2 after pop");
	assertEqual(stack.length, 2, "Length should be 2 after one pop");
	assertArrayEqual(printStack(stack), [2, 1], "Stack should be [2,1] after pop");

	// Pop again
	popped = stack.pop();
	assertEqual(popped.value, 2, "Popped value should be 2");
	assertEqual(stack.first.value, 1, "Top should be 1 after second pop");
	assertEqual(stack.length, 1, "Length should be 1 after second pop");
	assertArrayEqual(printStack(stack), [1], "Stack should be [1] after second pop");

	// Pop last element
	popped = stack.pop();
	assertEqual(popped.value, 1, "Popped value should be 1");
	assertEqual(stack.first, null, "First should be null after popping all");
	assertEqual(stack.last, null, "Last should be null after popping all");
	assertEqual(stack.length, 0, "Length should be 0 after all pops");
	assertArrayEqual(printStack(stack), [], "Stack should be empty after all pops");

	// Pop on empty
	popped = stack.pop();
	assertEqual(popped, undefined, "Popping from empty stack should return undefined");
}

runStackTests();

