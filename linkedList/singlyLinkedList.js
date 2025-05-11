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

}

// Example usage PUSH:
let list = new SinglyLinkedList();  
list.push(1);
list.push(2);
list.push(3);

console.log(list); // Output: SinglyLinkedList { head: Node { val: 1, next: Node { val: 2, next: [Node] } }, tail: Node { val: 3, next: null }, length: 3 }

// Example usage TRAVERSE:
list.traverse(); // Output: 1 2 3
// Example usage POP:
let poppedNode = list.pop();
console.log(poppedNode); // Output: Node { val: 3, next: null }
console.log(list); // Output: SinglyLinkedList { head: Node { val: 1, next: Node { val: 2, next: null } }, tail: Node { val: 2, next: null }, length: 2 }
// Example usage TRAVERSE:
list.traverse(); // Output: 1 2
// Example usage POP:
poppedNode = list.pop();
console.log(poppedNode); // Output: Node { val: 2, next: null }
console.log(list); // Output: SinglyLinkedList { head: Node { val: 1, next: null }, tail: Node { val: 1, next: null }, length: 1 }
// Example usage TRAVERSE:
list.traverse(); // Output: 1
// Example usage POP:
poppedNode = list.pop();
console.log(poppedNode); // Output: Node { val: 1, next: null }
console.log(list); // Output: SinglyLinkedList { head: null, tail: null, length: 0 }

