// A queue is a data structure that follows the First In First Out (FIFO) principle.
// Elements are added to the end and removed from the front.
// It is often used in scenarios like task scheduling, print queues, etc.
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    
    enqueue(val){
        let node = new Node(val);
        if(!this.first){
            this.first = node;
            this.last = node;
        }else{
            this.last.next = node;
            this.last = node;
        }
        this.length++;
    }
    
    dequeue(){
        if(!this.first) return undefined;
        let nodeToRemove = this.first;
        if(this.length === 1){
            this.first = null;
            this.last = null;
        }else{
            this.first = this.first.next;
        }
        nodeToRemove.next = null;
        this.length--;
        return nodeToRemove;
    }
}

/*
    * Test cases for the Queue implementation
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

function printQueue(queue) {
    const result = [];
    let current = queue.first;
    while (current) {
        result.push(current.value);
        current = current.next;
    }
    return result;
}

function runQueueTests() {
    const queue = new Queue();

    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    assertEqual(queue.first.value, 1, "Front of queue (first) should be 1 after enqueues");
    assertEqual(queue.last.value, 3, "Rear of queue (last) should be 3 after enqueues");
    assertEqual(queue.length, 3, "Length should be 3 after 3 enqueues");
    assertArrayEqual(printQueue(queue), [1, 2, 3], "Queue should be [1,2,3] from front to back");

    // Dequeue front
    let dequeued = queue.dequeue();
    assertEqual(dequeued.value, 1, "Dequeued value should be 1");
    assertEqual(queue.first.value, 2, "Front should be 2 after dequeue");
    assertEqual(queue.length, 2, "Length should be 2 after one dequeue");
    assertArrayEqual(printQueue(queue), [2, 3], "Queue should be [2,3] after one dequeue");

    // Dequeue again
    dequeued = queue.dequeue();
    assertEqual(dequeued.value, 2, "Dequeued value should be 2");
    assertEqual(queue.first.value, 3, "Front should be 3 after second dequeue");
    assertEqual(queue.length, 1, "Length should be 1 after second dequeue");
    assertArrayEqual(printQueue(queue), [3], "Queue should be [3] after second dequeue");

    // Dequeue last element
    dequeued = queue.dequeue();
    assertEqual(dequeued.value, 3, "Dequeued value should be 3");
    assertEqual(queue.first, null, "First should be null after dequeuing all");
    assertEqual(queue.last, null, "Last should be null after dequeuing all");
    assertEqual(queue.length, 0, "Length should be 0 after all dequeues");
    assertArrayEqual(printQueue(queue), [], "Queue should be empty after all dequeues");

    // Dequeue on empty
    dequeued = queue.dequeue();
    assertEqual(dequeued, undefined, "Dequeuing from empty queue should return undefined");
}

runQueueTests();