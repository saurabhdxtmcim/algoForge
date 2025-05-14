// Singly Linked List Implementation
// Node: A node is a basic unit of a data structure, such as a linked list or tree data structure. Each node contains data and a reference (or link) to the next node in the sequence.
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
// SinglyLinkedList: A singly linked list is a data structure that consists of a sequence of nodes, where each node contains a value and a reference to the next node in the sequence. 
// The first node is called the head, and the last node points to null.
// The singly linked list allows for efficient insertion and deletion of nodes, as well as traversal of the list.
class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        const newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode
        }else{
            // If the list is not empty, set the next of the current tail to the new node
            // and update the tail to the new node
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    /*
        Traversing the list
    */
    traverse(){
        let current = this.head;
        while(current){
            console.log(current.val);
            current = current.next;
        }
    }

    /*
        Popping the last element
    */
    // The pop method removes the last node from the list and returns it.
    // It traverses the list to find the second-to-last node, sets its next property to null, and updates the tail property of the list.
    pop(){
        if(!this.head) return undefined;
        
        let current = this.head;
        let newTail = current;
        
        while(current.next){
            newTail = current; // second to last is the new tail
            current = current.next;
        }
            
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        
        if(this.length == 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    // Shift method
    // The shift method removes the first node from the list and returns it.
    shift(){
        if(!this.head) return undefined;
        
        let headVal = this.head;
        this.head = headVal.next;
        this.length--;
        if(this.length == 0){
            this.tail = null;
        }
        return headVal;
    }

    // Unshift method
    // The unshift method adds a new node to the beginning of the list.
    unshift(val){
        let node = new Node(val);
        if(!this.head){
            this.head = node;
            this.tail = node;
            this.length = 1;
            return this;
        }
        
        node.next = this.head;
        this.head = node;
        this.length++;
        return this;
    }

    // Get method
    // The get method retrieves a node at a specific index in the list.
    get(index){
        if(index < 0 || index >= this.length || !this.head) return null;
        let indexedNode = this.head;
        let i = 0
        while(i<=index){
            indexedNode = indexedNode.next;
            i++;
        }
        return indexedNode;
    }

    // Set method
    // The set method updates the value of a node at a specific index in the list.
    set(index, value){
        if(index < 0 || index >= this.length || !this.head) return false;

        let node = this.get(index);
        if(node){
            node.val = value;
            return true;
        } 
        return false;

    }

    // Insert method
    // The insert method adds a new node at a specific index in the list.
    // It handles three cases: inserting at the end, inserting at the beginning, and inserting in the middle.
    // The method first checks if the index is valid (within bounds).
    // If the index is valid, it creates a new node and updates the next pointers of the surrounding nodes accordingly.
    // If the index is 0, it calls the unshift method to add the new node at the beginning.
    // If the index is equal to the length of the list, it calls the push method to add the new node at the end.
    // If the index is in the middle, it finds the previous node and updates its next pointer to point to the new node.
    // The new node's next pointer is set to the next node of the previous node.
    // Finally, it increments the length of the list and returns true.
    // The insert method is useful for adding nodes at specific positions in the list, allowing for more flexibility in managing the data structure.
    insert(index, val){
        if(index < 0 || index > this.length) return false;
        
        if(index==this.length){
            this.push(val);
        }else if(index==0){
            this.unshift(val);
        }else{
            let previoudNode = this.get(index-1);
            let newNode = new Node(val);
            let nextNode = previoudNode.next;
            previoudNode.next = newNode;
            newNode.next = nextNode;
        }
        this.length++;
        return true;
        
    }

    // Remove method
    // The remove method deletes a node at a specific index in the list.
    // It first checks if the index is valid (within bounds).
    // If the index is valid, it handles three cases: removing the last node, removing the first node, and removing a node in the middle.
    // If the index is 0, it calls the shift method to remove the first node.
    // If the index is equal to the length - 1, it calls the pop method to remove the last node.
    // If the index is in the middle, it finds the previous node and updates its next pointer to skip the node to be removed.
    remove(index){
        if(index < 0 || index > this.length) return false;
        if(index == 0){
            this.length--;
           return this.shift();
        }if(index == (this.length-1)){
            this.length--;
            return this.pop();
        }else{
            let previousNode = this.get(index-1);
            let nodeToRemove = previousNode.next;
            previousNode.next = nodeToRemove.next;
            this.length--;
            return nodeToRemove;
        }
    }

    // Reverse method
    // The reverse method reverses the order of the nodes in the list.
    // It handles the case where the list is empty by returning null.
    // It initializes two pointers: previous and current.
    // The previous pointer starts as null, and the current pointer starts at the head of the list.
    // The method then updates the head to point to the tail and the tail to point to the current node.
    // It iterates through the list, updating the next pointers of each node to point to the previous node.
    // The current pointer moves to the next node, and the previous pointer is updated to the current node.
    reverse(){
        if(!this.head) return null;
        
        let previous = null;
        let current = this.head;
        
        this.head = this.tail;
        this.tail = current;
        
        while(current){
            let next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }
        return this;
        
    }
}

// Example usage PUSH:
let list = new SinglyLinkedList();  
list.push(1);
list.push(2);
list.push(3);

console.log("Initial list after pushing 1, 2, 3:", list); 
// Output: SinglyLinkedList { head: Node { val: 1, next: Node { val: 2, next: [Node] } }, tail: Node { val: 3, next: null }, length: 3 }

// Example usage TRAVERSE:
console.log("Traversing the list:");
list.traverse(); // Output: 1 2 3

// Example usage POP:
let poppedNode = list.pop();
console.log("Popped node:", poppedNode); 
// Output: Node { val: 3, next: null }
console.log("List after popping the last node:", list); 
// Output: SinglyLinkedList { head: Node { val: 1, next: Node { val: 2, next: null } }, tail: Node { val: 2, next: null }, length: 2 }

// Example usage TRAVERSE:
console.log("Traversing the list after popping:");
list.traverse(); // Output: 1 2

// Example usage POP:
poppedNode = list.pop();
console.log("Popped node:", poppedNode); 
// Output: Node { val: 2, next: null }
console.log("List after popping the last node:", list); 
// Output: SinglyLinkedList { head: Node { val: 1, next: null }, tail: Node { val: 1, next: null }, length: 1 }

// Example usage TRAVERSE:
console.log("Traversing the list after popping:");
list.traverse(); // Output: 1

// Example usage POP:
poppedNode = list.pop();
console.log("Popped node:", poppedNode); 
// Output: Node { val: 1, next: null }
console.log("List after popping the last node:", list); 
// Output: SinglyLinkedList { head: null, tail: null, length: 0 }

// Example Shift:
list.push(1);
list.push(2);
list.push(3);
console.log("List after pushing 1, 2, 3 again:", list); 
// Output: SinglyLinkedList { head: Node { val: 1, next: Node { val: 2, next: [Node] } }, tail: Node { val: 3, next: null }, length: 3 }

// Example usage SHIFT:
let shiftedNode = list.shift();
console.log("Shifted node:", shiftedNode); 
// Output: Node { val: 1, next: Node { val: 2, next: [Node] } }
console.log("List after shifting the first node:", list); 
// Output: SinglyLinkedList { head: Node { val: 2, next: Node { val: 3, next: null } }, tail: Node { val: 3, next: null }, length: 2 }

// Example unshift:
let unshiftedNode = list.unshift(18);
console.log("Unshifted node:", unshiftedNode);
// Output: SinglyLinkedList { head: Node { val: 18, next: Node { val: 2, next: [Node] } }, tail: Node { val: 3, next: null }, length: 3 }
console.log("List after unshifting 18:", list);
// Output: SinglyLinkedList { head: Node { val: 18, next: Node { val: 2, next: [Node] } }, tail: Node { val: 3, next: null }, length: 3 }

// Example Set:
let setNode = list.set(1, 25);
console.log("Set node:", setNode);
// Output: true
console.log("List after setting index 1 to 25:", list);

// Example Insert:
console.log("List before inserting:", list);
let insertNode = list.insert(1, 30);    
console.log("Inserted node:", insertNode);
// Output: true
console.log("List after inserting 30 at index 1:", list);

// Example Remove:
console.log("List before removing:", list);
let removeNode = list.remove(1);
console.log("Removed node:", removeNode);
// Output: true

// Example Reverse:
console.log("List before reversing:", list);
let reversedList = list.reverse();
console.log("Reversed list:", reversedList);
// Output: SinglyLinkedListReversed list: SinglyLinkedList {
// console.log({
//   head: { val: 25, next: { val: 2, next: { val: 18, next: null } } },
//   tail: { val: 18, next: null },
//   length: 3
// });*
