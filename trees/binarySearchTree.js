class Node{
	constructor(value){
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree{
	constructor(){
		this.root = null;
	}
	
	insert(val){
		let node = new Node(val);
		
		if(!this.root){
			this.root = node;
		}else{
			this.addNode(this.root, node);
		}
	}
	
	addNode(treeNode, node){
		if(treeNode.value > node.value){
			if(!treeNode.left){
				treeNode.left = node;
				return;
			}else{
				this.addNode(treeNode.left, node);
			}
		}else{
			if(!treeNode.right){
				treeNode.right = node;
				return;
			}else{
				this.addNode(treeNode.right, node);
			}
		}
	}
	
	find(val){
		if(!this.root) return undefined;
		return this.findNode(this.root, val);
	}
	
	findNode(treeNode, val){
		if(treeNode.value === val) return treeNode; 
		if(treeNode.value > val){
			if(!treeNode.left){
				return undefined;
			}else{
				return this.findNode(treeNode.left, val);
			}
		}else{
			if(!treeNode.right){
				return undefined;
			}else{
				return this.findNode(treeNode.right, val);
			}
		}
	}
	// with inorder predecessor
	// This method removes a node with the given value from the tree. 
	removeP(val, treeValOptional){
		let rootNode = this.root;
		if(treeValOptional){
			rootNode = treeValOptional;
		}
		if(!rootNode) return undefined;
		
		let treeNode = rootNode;
		if(treeNode.value < val){
			treeNode.right = this.remove(val, treeNode.right);
		}else if(treeNode.value > val){
			treeNode.left = this.remove(val, treeNode.left);
		}else{
			if(!treeNode.left && !treeNode.right){
				return null;
			}else if(!treeNode.left && treeNode.right){
				return treeNode.right;
			}else if(treeNode.left && !treeNode.right){
				return treeNode.left;
			}else {
				let largestNode = this.findLargestNode(treeNode.left);
				treeNode.value = largestNode.value;
				treeNode.left = this.remove(largestNode.value, treeNode.left);
			}
		
		}
		return treeNode;
	}
	
	findLargestNode(node){
		if(!node.right){
			return node;
		}else{
			return this.findLargestNode(node.right);
		}
	}
	// with inorder successor
	remove(val, treeNode = this.root) {
		if (!treeNode) return null;

		if (val < treeNode.value) {
			treeNode.left = this.remove(val, treeNode.left);
		} else if (val > treeNode.value) {
			treeNode.right = this.remove(val, treeNode.right);
		} else {
			// Case: 0 or 1 child
			if (!treeNode.left) return treeNode.right;
			if (!treeNode.right) return treeNode.left;

			// Case: 2 children - use inorder successor (min in right subtree)
			let successor = this.findMinNode(treeNode.right);
			treeNode.value = successor.value;
			treeNode.right = this.remove(successor.value, treeNode.right);
		}

		return treeNode;
	}

	findMinNode(node) {
		while (node.left) {
			node = node.left;
		}
		return node;
	}


	findSecondLargest(){
		if(!this.root) return undefined;
		
		let treeNode = this.root;
		let largestNodeNParentNode = this.findLargestNodeAndParnet(treeNode, treeNode);
		let largestNode = largestNodeNParentNode.treeNode;
		if(!largestNode.right && largestNode.left){
			return this.findLargestNodeAndParnet(largestNode.left, null).treeNode.value;
		}else if(!largestNode.right && !largestNode.left){
			return largestNodeNParentNode.parentNode.value;
		}
	}
	
	findLargestNodeAndParnet(treeNode, parentNode){
		if(treeNode.right){
			return this.findLargestNodeAndParnet(treeNode.right, treeNode);
		}else return {'treeNode': treeNode, 'parentNode': parentNode};
	}
	
	isBalanced(){
		if(!this.root) return true;
		let node = this.root;
		return Math.abs(this.maxDepth(node) - this.minDepth(node)) <= 1;
	}

	minDepth(node){
		if(!node) return 0;
		return 1 + Math.min(this.minDepth(node.left), this.minDepth(node.right));
	}
	
	maxDepth(node){
		if(!node) return 0;
		return 1 + Math.max(this.maxDepth(node.left), this.maxDepth(node.right));
	}

	// BFS traversal
	breadthFirstSearchTraversal(){
		if(!this.root) return undefined;
		let queue = [this.root];
		let visited = [];
		
		// pull item from the queue store it in the dequed variable, and also in the visited array
		// check all adjacent nodes and put them in the queue 
		// keep doing it untill nothing is left in the queue
		while(queue.length > 0 ){
			let dequed = queue.shift();;
			visited.push(dequed.value);
			if(dequed.left){
				queue.push(dequed.left);
			} 
			if(dequed.right){
				queue.push(dequed.right);
			}
		}
		return visited;
	}

	// DFS traversals
	// Pre-order: Root -> Left -> Right
	depthFirstSearchPreOrder(){
		if(!this.root) return undefined;
		
		let visited = [];
		let current = this.root;
		
		dfsTraversanHelper(visited, current);
		
		return visited;
		
		function dfsTraversanHelper(visited, current){
			if(!current) return;
			
			visited.push(current.value);
			
			if(current.left)  dfsTraversanHelper(visited, current.left);
			if(current.right) dfsTraversanHelper(visited, current.right);
		}
	}
	
	// Post-order: Left -> Right -> Root
	depthFirstSearchPostOrder(){
		if(!this.root) return undefined;
		
		let current = this.root;
		let visited = [];
		
		dfsTraversalHelper(visited, current);
		
		return visited;
		
		function dfsTraversalHelper(visited, current){
			if(!current) return null;
			
			if(current.left) dfsTraversalHelper(visited, current.left);
			if(current.right) dfsTraversalHelper(visited, current.right);
			
			visited.push(current.value);
		}
	}
	
	// In-order: Left -> Root -> Right
	depthFirstSearchInorderTraversal(){
		if(!this.root) return undefined;
		
		let current = this.root;
		let visited = [];
		
		dfsTraversalHelper(visited, current);
		
		return visited;
		function dfsTraversalHelper(visited, current){
			if(!current) return;
			
			if(current.left) dfsTraversalHelper(visited, current.left);
			visited.push(current.value);
			if(current.right) dfsTraversalHelper(visited, current.right);
		}
	}
}

// Test cases for the BinarySearchTree implementation
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
// Example usage and test cases
let bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(12);
bst.insert(18);
bst.insert(1);
bst.insert(4);
bst.insert(6);
bst.insert(8);
bst.insert(11);
bst.insert(13);
bst.insert(16);
bst.insert(20);

assertEqual(bst.root.value, 10, "Root value should be 10");
assertEqual(bst.root.left.value, 5, "Left child of root should be 5");
assertEqual(bst.root.right.value, 15, "Right child of root should be 15");
assertEqual(bst.find(7).value, 7, "Find method should return node with value 7");
assertEqual(bst.find(100), undefined, "Find method should return undefined for non-existent value");
assertEqual(bst.findSecondLargest(), 18, "Second largest value should be 16");
bst.remove(10);
assertEqual(bst.root.value, 11, "Root value should be 12 after removing 10");
bst.remove(5);
assertEqual(bst.root.left.value, 6, "Left child of root should be 6 after removing 5");
// test for isBalanced
assertEqual(bst.isBalanced(), true, "Tree should be balanced after insertions");
// now test for unbalanced tree
bst.insert(30);
assertEqual(bst.isBalanced(), false, "Tree should be unbalanced after inserting 30");
// test for remove with inorder predecessor
bst.removeP(6);
assertEqual(bst.root.left.value, 7, "Left child of root should be 7 after removing 6 with predecessor");
// test for remove with inorder successor
bst.remove(7);
assertEqual(bst.root.left.value, 8, "Left child of root should be 8 after removing 7 with successor");
// test for findSecondLargest after removing 7
assertEqual(bst.findSecondLargest(), 20, "Second largest value should be 20 after removing 7");
// test for findSecondLargest when there is no second largest

// Add test for breadthFirstSearchTraversal, depthFirstSearchPreOrder, depthFirstSearchPostOrder, and depthFirstSearchInorderTraversal
// Visualize the BST structure in the console
function printTree(node, prefix = "", isLeft = true) {
	if (!node) return;
	if (node.right) {
		printTree(node.right, prefix + (isLeft ? "│   " : "    "), false);
	}
	console.log(prefix + (isLeft ? "└── " : "┌── ") + node.value);
	if (node.left) {
		printTree(node.left, prefix + (isLeft ? "    " : "│   "), true);
	}
}

console.log("BST Structure:");
printTree(bst.root);
assertArrayEqual(bst.breadthFirstSearchTraversal(), [11,8,15,3,12,18,1,4,13,16,20,30], "BFS traversal should match expected order");
assertArrayEqual(bst.depthFirstSearchPreOrder(), [11,8,3,1,4,15,12,13,18,16,20,30], "DFS Pre-order traversal should match expected order");
assertArrayEqual(bst.depthFirstSearchPostOrder(), [1,4,3,8,13,12,16,30,20,18,15,11], "DFS Post-order traversal should match expected order");
assertArrayEqual(bst.depthFirstSearchInorderTraversal(), [1,3,4,8,11,12,13,15,16,18,20,30], "DFS In-order traversal should match expected order");
