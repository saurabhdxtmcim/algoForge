// Priority Queue implementation using a min-heap
class Node{
	constructor(val, priority){
		this.value = val;
		this.priority = priority;
	}
}
class PriorityQueue{
	constructor(){
		this.values = [];
	}
	
	enqueue(val, priority){
		let node = new Node(val, priority);
		// add element at the end
		this.values.push(node);
		
		if(this.values.length === 1) return this;
		
		// bubble up
		let index = this.values.length - 1;
		let parentIndex;
		while(index > 0){
			parentIndex = Math.floor((index - 1) / 2);
			//if(parentIndex < 0) break;
			if(this.values[index].priority < this.values[parentIndex].priority){
				[this.values[index], this.values[parentIndex]] = [this.values[parentIndex], this.values[index]];
				index = parentIndex;
			}else break;
			
		}
		return this;
	}
	
	dequeue(){
		if(!this.values) return undefined;
		
		let index = 0;
		let nodeToRemove = this.values[0];
		
		if(this.values.length === 1){
			this.values = [];
			return nodeToRemove;
		} 
		
		this.values[0] =  this.values[this.values.length - 1];
		
		// now remove the last element from the list
		this.values.pop();
		
		// now sink down
		let length = this.values.length;
		let leftIndex = 2 * index + 1;
		let rightIndex = 2 * index + 2;
		if(leftIndex >= length && rightIndex >= length ) return;
		while(index < length){
			leftIndex = 2 * index + 1;
			rightIndex = 2 * index + 2;
			let smallerValueIndex = (leftIndex < length && rightIndex < length) ? (this.values[leftIndex].priority < this.values[rightIndex].priority ?  leftIndex : rightIndex) : (leftIndex < length ? leftIndex : rightIndex);
			if(smallerValueIndex < length && this.values[index].priority > this.values[smallerValueIndex].priority){
				[this.values[index], this.values[smallerValueIndex]] = [this.values[smallerValueIndex], this.values[index]];
				index = smallerValueIndex;
			}else{
				break;
			}
		}
		return nodeToRemove;
	}
}

// Example usage:
const pq = new PriorityQueue();

// Test cases for the PriorityQueue implementation
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
function assertObjectEqual(actual, expected, message) {
    const isEqual = JSON.stringify(actual) === JSON.stringify(expected);
    if (!isEqual) {
        console.error(`❌ ${message} | Expected: ${JSON.stringify(expected)}, Got: ${JSON.stringify(actual)}`);
    } else {
        console.log(`✅ ${message}`);
    }
}

// Enqueue elements
pq.enqueue("A", 5);
pq.enqueue("B", 2);
pq.enqueue("C", 8);
pq.enqueue("D", 1);

// Check heap order (should be min-heap by priority)
assertArrayEqual(
    pq.values.map(n => n.value),
    ["D", "B", "C", "A"],
    "Heap order after enqueues"
);

// Dequeue should return the node with lowest priority
let node = pq.dequeue();
assertObjectEqual(
    { value: node.value, priority: node.priority },
    { value: "D", priority: 1 },
    "Dequeue returns node with lowest priority"
);

// Heap order after one dequeue
assertArrayEqual(
    pq.values.map(n => n.value),
    ["B", "A", "C"],
    "Heap order after one dequeue"
);

// Dequeue all to empty
pq.dequeue();
pq.dequeue();
pq.dequeue();
assertEqual(
    pq.values.length,
    0,
    "PriorityQueue is empty after dequeuing all elements"
);

// Dequeue on empty queue returns undefined
assertEqual(
    pq.dequeue(),
    undefined,
    "Dequeue on empty queue returns undefined"
);
 