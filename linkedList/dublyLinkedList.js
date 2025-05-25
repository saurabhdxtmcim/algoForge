// Doubly linked list implementation in JavaScript
class Node {
    constructor(data) {
        this.data = data;
        this.next = null; // Pointer to the next node
        this.prev = null; // Pointer to the previous node
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null; // Head of the list
        this.tail = null; // Tail of the list
        this.length = 0; // Length of the list
    }

    // Add a new node to the end of the list
    // Time complexity: O(1)
    // Space complexity: O(1)
    push(data){
        let newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    // pop a node from the end of the list
    // Time complexity: O(1)
    // Space complexity: O(1)
    // pop() method removes the last node from the list and returns it
    pop(){
        if(!this.head) return undefined;
        let poppedNode = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
            this.length = 0;
        }else{
            this.tail = this.tail.prev;
            this.tail.next = null;
            poppedNode.prev = null;
            this.length--;
        }
        return poppedNode;
    }

    // Shift: remove the first node from the list
    // Time complexity: O(1)
    // Space complexity: O(1)
    shift(){
        if(!this.head) return undefined;
        this.shiftedNode = this.head;
        if(this.length == 1){
            this.head = null;
            this.tail = null;
            this.length = 0;    
        }else{
            this.head = this.head.next;
            this.head.prev = null;
            this.shiftedNode.next = null;
            this.length--;
        }
        return this.shiftedNode;
    }

    // Unshift: add a new node to the beginning of the list
    // Time complexity: O(1)
    // Space complexity: O(1)
    unshift(data){
        let newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            this.length++;
        }else{
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
            this.length++;
        }
        return this;
    }

    // Get: get a node at a specific index
    // Time complexity: O(n)
    // Space complexity: O(1)
    get(index){
        if(index < 0 || index >= this.length) return undefined;
        if(!this.head) return undefined;
        if(index < this.length / 2){
            let startingNode = this.head;
            let i = 0;
            while(startingNode){
                if(i === index){
                    return startingNode;
                }
                startingNode = startingNode.next;
                i++;
            }
            
        }else{
            let startingNode = this.tail;
            let i = this.length - 1;
            while(startingNode){
                if(i === index){
                    return startingNode;
                }
                startingNode = startingNode.prev;
                i--;
            }
        }
        return undefined;
    }

    // Set: set a node at a specific index
    // Time complexity: O(n)
    // Space complexity: O(1)
    // set(index, val) method sets the value of a node at a specific index
    // and returns true if successful, false otherwise
    // If the index is out of bounds, it returns undefined
    // If the index is valid, it updates the value of the node and returns true
    // If the index is invalid, it returns false
    set(index, val){
        if(index < 0 || index >= this.length) return undefined;
        let foundNode = this.get(index);
        if(foundNode){
            foundNode.data = val;
            return true;
        }else{
            return false;
        }
    }

    // Insert: insert a new node at a specific index
    // Time complexity: O(n)
    // Space complexity: O(1)
    // insert(index, val) method inserts a new node at a specific index
    // and returns true if successful, false otherwise
    // If the index is out of bounds, it returns undefined
    // If the index is valid, it inserts the new node and returns true
    // If the index is invalid, it returns false
    insert(index, val){
        if(index < 0 || index > this.length) return false;
        let newNode = new Node(val);
        if(this.length===0){
            this.head = newNode;
            this.tail = newNode;
        }else if(index === this.length){
            // add at the end
            let beforeNode = this.tail;
            beforeNode.next = newNode;
            newNode.prev = beforeNode;
            this.tail = newNode;
        }else if(index === 0){
            // insert as first element
            let nextNode = this.head;
            nextNode.prev = newNode;
            newNode.next = nextNode;
            this.head = newNode;
        }else{
            // insert in the middle
            let nextNode = this.get(index);
            let beforeNode = nextNode.prev;
            
            nextNode.prev = newNode;
            beforeNode.next = newNode;
            newNode.next = nextNode;
            newNode.prev = beforeNode;
        }
        this.length++;
        return true;
    }

     insertUsingExistingMethods(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === 0){
            this.unshift(val);
        }else if(index === this.length){
            this.push(val);
        }else{
            // insert in the middle
            let newNode = new Node(val);
            let nextNode = this.get(index);
            let beforeNode = nextNode.prev;
            
            nextNode.prev = newNode;
            beforeNode.next = newNode;
            newNode.next = nextNode;
            newNode.prev = beforeNode;
            this.length++;
        }
        return true;
    }

    // remove: remove a node at a specific index
    // Time complexity: O(n)
    // Space complexity: O(1)
    // remove(index) method removes a node at a specific index
    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        let item;
        if(index === 0){
            if(this.length === 1){
                // only element is getting removed
                item = this.head;
                this.tail = null;
                this.head = null;
            }else{
                item = this.head;
                this.head = item.next;
                this.head.prev = null;
                item.next =  null;
            }
        }else if(index === this.length-1){
            // last element
            item = this.tail;
            this.tail = item.prev;
            this.tail.next = null;
            item.prev = null;
        }else{
            // Now removing from middle
            item = this.get(index);
            let prevItem = item.prev;
            let nextItem = item.next;
            
            prevItem.next = nextItem;
            nextItem.prev = prevItem;
            
            item.next = null;
            item.prev = null;
        }
        this.length--;
        return item;
    }

    // reverse: reverse the list
    // Time complexity: O(n)
    // Space complexity: O(1)
    reverse(){
        if(!this.head) return undefined;
        
        let node = this.tail;
        let previousNode;
        while(node){
            previousNode = node.prev;
            node.prev = node.next;
            node.next = previousNode;
            // node.prev is now the next node
            // node.next is now the previous node
            // going backwards
            node = node.next;
        }
        
        let last = this.tail;
        this.tail = this.head;
        this.head = last;
        return this;
    }
}

// Refined test methods for DoublyLinkedList

function printList(list) {
    let arr = [];
    let current = list.head;
    while (current) {
        arr.push(current.data);
        current = current.next;
    }
    return arr;
}

function assertEqual(actual, expected, message) {
    if (actual !== expected) {
        console.error(`❌ ${message} | Expected: ${expected}, Got: ${actual}`);
    } else {
        console.log(`✅ ${message}`);
    }
}

function assertArrayEqual(actual, expected, message) {
    const isEqual = Array.isArray(actual) && Array.isArray(expected) &&
        actual.length === expected.length &&
        actual.every((v, i) => v === expected[i]);
    if (!isEqual) {
        console.error(`❌ ${message} | Expected: [${expected}], Got: [${actual}]`);
    } else {
        console.log(`✅ ${message}`);
    }
}

// Example usage and tests
let list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);

assertEqual(list.head.data, 1, "Head should be 1 after pushes");
assertEqual(list.tail.data, 3, "Tail should be 3 after pushes");
assertArrayEqual(printList(list), [1,2,3], "List should be [1,2,3] after pushes");

// Pop the last node
let poppedNode = list.pop();
assertEqual(poppedNode.data, 3, "Popped node should be 3");
assertEqual(list.tail.data, 2, "Tail should be 2 after pop");
assertArrayEqual(printList(list), [1,2], "List should be [1,2] after pop");

// Shift the first node
let shiftedNode = list.shift();
assertEqual(shiftedNode.data, 1, "Shifted node should be 1");
assertEqual(list.head.data, 2, "Head should be 2 after shift");
assertArrayEqual(printList(list), [2], "List should be [2] after shift");

// Unshift a new node
list.unshift(0);
assertEqual(list.head.data, 0, "Head should be 0 after unshift");
assertEqual(list.tail.data, 2, "Tail should be 2 after unshift");
assertArrayEqual(printList(list), [0,2], "List should be [0,2] after unshift");

// Get a node at index 1
let nodeAtIndex1 = list.get(1);
assertEqual(nodeAtIndex1.data, 2, "Node at index 1 should be 2");

// Get a node at index 0
let nodeAtIndex0 = list.get(0);
assertEqual(nodeAtIndex0.data, 0, "Node at index 0 should be 0");

// Get a node at index 2 (out of bounds)
let nodeAtIndex2 = list.get(2);
assertEqual(nodeAtIndex2, undefined, "Node at index 2 should be undefined");

// Get a node at index -1 (invalid)
let nodeAtIndexMinus1 = list.get(-1);
assertEqual(nodeAtIndexMinus1, undefined, "Node at index -1 should be undefined");

// Get a node at index 3 (out of bounds)
let nodeAtIndex3 = list.get(3);
assertEqual(nodeAtIndex3, undefined, "Node at index 3 should be undefined");

// Set a node at index 1
let setNodeAtIndex1 = list.set(1, 5);
assertEqual(setNodeAtIndex1, true, "Set at index 1 should return true");
assertEqual(list.get(1).data, 5, "Node at index 1 should be 5 after set");

// Test insert method
let insertNodeAtIndex1 = list.insert(1, 4);
assertEqual(insertNodeAtIndex1, true, "Insert at index 1 should return true");
assertEqual(list.get(1).data, 4, "Node at index 1 should be 4 after insert");
assertArrayEqual(printList(list), [0,4,5], "List should be [0,4,5] after insert");

// Test insertUsingExistingMethods method
let insertUsingExistingMethodsNodeAtIndex1 = list.insertUsingExistingMethods(1, 6);
assertEqual(insertUsingExistingMethodsNodeAtIndex1, true, "InsertUsingExistingMethods at index 1 should return true");
assertEqual(list.get(1).data, 6, "Node at index 1 should be 6 after insertUsingExistingMethods");
assertArrayEqual(printList(list), [0,6,4,5], "List should be [0,6,4,5] after insertUsingExistingMethods");

// Test remove method
let removedNode = list.remove(1);
assertEqual(removedNode.data, 6, "Removed node should be 6");
assertEqual(list.get(1).data, 4, "Node at index 1 should be 4 after remove");
assertArrayEqual(printList(list), [0,4,5], "List should be [0,4,5] after remove");
// Test remove the last node
let removedLastNode = list.remove(2);
assertEqual(removedLastNode.data, 5, "Removed last node should be 5");
assertEqual(list.tail.data, 4, "Tail should be 4 after removing last node");
assertArrayEqual(printList(list), [0,4], "List should be [0,4] after removing last node");
// Test remove the first node
let removedFirstNode = list.remove(0);
assertEqual(removedFirstNode.data, 0, "Removed first node should be 0");
assertEqual(list.head.data, 4, "Head should be 4 after removing first node");
assertArrayEqual(printList(list), [4], "List should be [4] after removing first node");
// Test remove the last node again
let removedLastNodeAgain = list.remove(0);
assertEqual(removedLastNodeAgain.data, 4, "Removed last node should be 4");
assertEqual(list.head, null, "Head should be null after removing last node");
assertEqual(list.tail, null, "Tail should be null after removing last node");
assertArrayEqual(printList(list), [], "List should be [] after removing last node");
// Test remove from an empty list
let removedFromEmptyList = list.remove(0);
assertEqual(removedFromEmptyList, undefined, "Removing from an empty list should return undefined");
// Test reverse method
list.push(1);
list.push(2);
list.push(3);
list.reverse();
assertEqual(list.head.data, 3, "Head should be 3 after reverse");
assertEqual(list.tail.data, 1, "Tail should be 1 after reverse");
assertArrayEqual(printList(list), [3,2,1], "List should be [3,2,1] after reverse");
// Test reverse on an empty list
let emptyList = new DoublyLinkedList();
emptyList.reverse();
assertEqual(emptyList.head, null, "Head should be null after reverse on empty list");
assertEqual(emptyList.tail, null, "Tail should be null after reverse on empty list");
// Test reverse on a single node list
let singleNodeList = new DoublyLinkedList();
singleNodeList.push(1);
singleNodeList.reverse();
assertEqual(singleNodeList.head.data, 1, "Head should be 1 after reverse on single node list");
assertEqual(singleNodeList.tail.data, 1, "Tail should be 1 after reverse on single node list");
assertArrayEqual(printList(singleNodeList), [1], "List should be [1] after reverse on single node list");







