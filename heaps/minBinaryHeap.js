 class MinBinaryHeap{
	constructor(){
		this.values = [];
	}
	
	insert(val){
		this.values.push(val);
		if(this.values.length > 1) this.bubbleUp();
		return this.values;
	}
	
	bubbleUp(){
		// find the index element and then swap it with the value if that is less than
		// basically smaller value will move to the front of the array, as much as possible
		let curentElementIndex  = this.values.length - 1;
		while(curentElementIndex > 0){
			let parentElementIndex = Math.floor((curentElementIndex - 1) / 2);
			
			if(this.values[parentElementIndex] > this.values[curentElementIndex]){
				[this.values[parentElementIndex], this.values[curentElementIndex]] = [this.values[curentElementIndex], this.values[parentElementIndex]];
				curentElementIndex  = parentElementIndex;
			}else break;
		}
	}

	visualizeHeap() {
		const heap = this.values;

		const visualize = (index = 0, level = 0) => {
		if (index >= heap.length) return "";

			let result = "";

			let right = visualize(2 * index + 2, level + 1);
			result += right;

			result += "\n" + "   ".repeat(level) + heap[index];

			let left = visualize(2 * index + 1, level + 1);
			result += left;

			return result;
		};

		console.log(visualize());
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

function assertArrayNotEqual(actual, expected, message) {
	const isEqual = actual.length === expected.length && actual.every((v, i) => v === expected[i]);
	if (isEqual) {
		console.error(`❌ ${message} | Arrays should not be equal: [${actual}]`);
	} else {
		console.log(`✅ ${message}`);
	}
}

// Tests for MinBinaryHeap
const heap = new MinBinaryHeap();

// Test: insert into empty heap
heap.insert(41);
assertArrayEqual(heap.values, [41], "Insert into empty heap");

// Test: insert more elements and check heap order
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(5);

assertArrayNotEqual(
	heap.values,
	[5, 18, 12, 41, 27, 33, 39],
	"Heap order after multiple inserts not guaranteed"
);

heap.visualizeHeap();

function isMinHeap(heapArr, index = 0) {
  let left = 2 * index + 1;
  let right = 2 * index + 2;

  if (left < heapArr.length && heapArr[left] < heapArr[index]) return false;
  if (right < heapArr.length && heapArr[right] < heapArr[index]) return false;

  let leftValid = left >= heapArr.length || isMinHeap(heapArr, left);
  let rightValid = right >= heapArr.length || isMinHeap(heapArr, right);

  return leftValid && rightValid;
}

// Replace your previous test:
assertEqual(
  isMinHeap(heap.values),
  true,
  "Heap maintains valid min-heap property"
);
