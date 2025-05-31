class MaxBinaryHeap{
	constructor(){
		this.values = [];
	}
	
	insert(val){
		this.values.push(val);
		if(this.values.length > 1) this.bubbleUp();
		return this.values;
	}
	
	bubbleUp(){
		// find the index element and then swap it with the value if that is greater than
		// basically larger value will move to the front of the array, as much as possible
		let curentElementIndex  = this.values.length - 1;
		while(curentElementIndex > 0){
			let parentElementIndex = Math.floor((curentElementIndex - 1) / 2);
			
			if(this.values[parentElementIndex] < this.values[curentElementIndex]){
				[this.values[parentElementIndex], this.values[curentElementIndex]] = [this.values[curentElementIndex], this.values[parentElementIndex]];
			}else break;
			curentElementIndex  = parentElementIndex;
		}
	}

	// extract max value from the heap
	extractMax(){
		if(this.values.length <= 0) return undefined;
		
		let index = 0;
		let valueToExtract = this.values[index];
		if(this.values.length === 1) return this.values.pop();
		
		this.values[0] = this.values[this.values.length - 1];
		// removing last element from the array
		this.values.pop();
			
		// sink down
		let indexToSinkDown = index;
		let length = this.values.length;
		while(index < length ){
			let leftIndex = index * 2 + 1;
			let rightIndex = index * 2 + 2;
			
			let largestIndex = (leftIndex < length && rightIndex < length) ? (this.values[leftIndex] > this.values[rightIndex] ? leftIndex : rightIndex) : (leftIndex < length ? leftIndex : rightIndex);
				
			if(largestIndex < length && this.values[index]  < this.values[largestIndex]){
				[this.values[index], this.values[largestIndex]] = [this.values[largestIndex], this.values[index]];
				index = largestIndex;
			}else break;
		}
		return valueToExtract;
	}
}

// Assertion helpers
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

// Tests for MaxBinaryHeap
const heap = new MaxBinaryHeap();

// Test: insert into empty heap
heap.insert(41);
assertArrayEqual(heap.values, [41], "Insert into empty heap");

// Test: insert more elements and check heap order
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
assertArrayEqual(
	heap.values,
	[55, 39, 41, 18, 27, 12, 33],
	"Heap order after multiple inserts"
);

// Test: extractMax returns the largest value
const max1 = heap.extractMax();
assertEqual(max1, 55, "extractMax returns the largest value");

// Test: heap order after extractMax
assertArrayEqual(
	heap.values,
	[41, 39, 33, 18, 27, 12],
	"Heap order after extractMax"
);

// Test: extractMax repeatedly until empty
assertEqual(heap.extractMax(), 41, "extractMax returns next largest");
assertEqual(heap.extractMax(), 39, "extractMax returns next largest");
assertEqual(heap.extractMax(), 33, "extractMax returns next largest");
assertEqual(heap.extractMax(), 27, "extractMax returns next largest");
assertEqual(heap.extractMax(), 18, "extractMax returns next largest");
assertEqual(heap.extractMax(), 12, "extractMax returns next largest");

// Test: extractMax on empty heap returns undefined
assertEqual(heap.extractMax(), undefined, "extractMax on empty heap returns undefined");

// Test: insert after emptying heap
heap.insert(100);
assertArrayEqual(heap.values, [100], "Insert after emptying heap");