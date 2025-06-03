/*
	Weighted Graph implementation with Dijkstra's algorithm for finding the shortest path.
	Supports adding vertices and edges with weights, and finding the shortest path between two vertices.
*/
class WeightedGraphVAl{
	constructor(){
		this.adjacencyList = {};
	}
	
	addVertex(vertex){
		if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
	}
	
	addEdge(vertex1, vertex2, weight){
		this.addVertex(vertex1);
		this.addVertex(vertex2);
		
		if(!this.adjacencyList[vertex1].some(edge => edge.node === vertex2)){
			this.adjacencyList[vertex1].push({node: vertex2, weight: weight});
		}
		
		if(vertex1 != vertex2 && !this.adjacencyList[vertex2].some(edge => edge.node === vertex1)){
			this.adjacencyList[vertex2].push({node: vertex1, weight: weight});
		}
	}
	
	/*
		Finds the shortest path between two vertices using Dijkstra's algorithm.
		@param {string} startVertex - The starting vertex.
		@param {string} endVertex - The ending vertex.
		@return {Array} - An array representing the shortest path from startVertex to endVertex.
	*/
	dijkshtraShortestDistance(startVertex, endVertex){
		// If either start or end vertex is not provided, return an empty array.
		if (!startVertex || !endVertex) return [];
		// If the start or end vertex is not a string, return an empty array.
		if (typeof startVertex !== 'string' || typeof endVertex !== 'string') return [];
		// If the start or end vertex is an empty string, return an empty array.
		if (startVertex.trim() === '' || endVertex.trim() === '') return [];
		// If the start or end vertex does not exist in the graph, return an empty array.
		if (!this.adjacencyList[startVertex] || !this.adjacencyList[endVertex]) return [];
		// If the adjacency list is empty, return an empty array.
		if (Object.keys(this.adjacencyList).length === 0) return [];
		// If the start and end vertices are the same, return an array with just that vertex.
		if (startVertex === endVertex) return [startVertex];

		// Initialize distances, previous nodes, and the path array.
		// distances will hold the shortest distance from startVertex to each vertex.
		const distances = {};
		// previous will hold the previous vertex for each vertex in the path.
		// path will hold the final shortest path from startVertex to endVertex.
		const previous = {};
		// Initialize the path array to store the shortest path.
		// Using a priority queue to efficiently get the vertex with the smallest distance.
		let path = [];
		// Create a priority queue to hold the vertices and their distances.
		// The priority queue will help us efficiently get the vertex with the smallest distance.
		// This is a custom implementation of a priority queue.
		const pq = new PriorityQueue();
		// Initialize distances and previous for each vertex in the adjacency list.
		// distances will hold the shortest distance from startVertex to each vertex.
		// previous will hold the previous vertex for each vertex in the path.
		// We will use the adjacency list keys to initialize distances and previous.
		let keys = Object.keys(this.adjacencyList); 
		for(let i = 0; i < keys.length; i++){
			distances[keys[i]] = keys[i] == startVertex ? 0 : Infinity;
			previous[keys[i]] = null;
			pq.enqueue(keys[i], keys[i] == startVertex ? 0 : Infinity);
		}
		// Start the Dijkstra's algorithm loop.
		// We will keep track of the smallest vertex and its distance.
		let smallestVal;
		// We will use a set to keep track of visited vertices to avoid processing them again.
		// This will help us avoid cycles and unnecessary processing.
		const visited = new Set();
		while(pq.values?.length > 0){
			// Get the vertex with the smallest distance from the priority queue.
			// This will give us the next vertex to process.
			smallestVal = pq.dequeue().val;
			
			if (visited.has(smallestVal)) continue;
			visited.add(smallestVal);

			// If the smallest vertex is the endVertex, we have found the shortest path.
			// We will backtrack from the endVertex to the startVertex using the previous array.
			if(smallestVal === endVertex){
				while(previous[smallestVal]){
					path.push(smallestVal);
					smallestVal = previous[smallestVal];
				}
				break;
			} 
			// If the smallest vertex is not the endVertex, we will process its neighbors.
			// We will iterate through the neighbors of the smallest vertex and update their distances.
			// We will use the adjacency list to get the neighbors of the smallest vertex.
			// For each neighbor, we will calculate the current distance from the startVertex to the neighbor.
			for(let i = 0; i < this.adjacencyList[smallestVal].length; i++){
				
				// Calculate the current distance from the startVertex to the neighbor.
				// This will be the distance of the smallest vertex plus the weight of the edge to the neighbor.
				// We will use the adjacency list to get the weight of the edge to the neighbor.
				// The current distance is the distance of the smallest vertex plus the weight of the edge to the neighbor.
				/*
					distances[smallestVal]: distance of the smallest node + current distance: basically what is distance of the parent then add weight of the neighbouring node
				*/
				let currentDistance = distances[smallestVal] + this.adjacencyList[smallestVal][i].weight;
				// Get the neighbor node from the adjacency list.
				// If the current distance is less than the previously recorded distance for the neighbor, update it.
				// We will also update the previous array to keep track of the path.
				// This will help us find the shortest path later.
				// We will enqueue the neighbor with the updated distance in the priority queue.
				// This will ensure that the priority queue always has the vertex with the smallest distance at the front.
				let neighbor = this.adjacencyList[smallestVal][i].node;
				if(currentDistance < distances[neighbor]){
					// Update the distance and previous for the neighbor.
					// This will help us find the shortest path later.
					distances[neighbor] = currentDistance;
					previous[neighbor] = smallestVal;
					pq.enqueue(neighbor, distances[neighbor]);
				}
			}
		}
		// If we have found the shortest path, we will return it.
		// We will reverse the path array to get the path from startVertex to endVertex.
		if(path.length === 0) return [];
		return path.concat(smallestVal).reverse();
	}
}

/*
	Everytime we insert something it will keep a shortest priority first, that will help with picking up shorted node for Dijkshtra's algo
	O(n * logn) not a good implementation, but just for the sake of simplicity, otherwise we can use a min-heap
	We can use a min-heap to implement the priority queue more efficiently.
*/
class PriorityQueue{
	constructor(){
		this.values = [];
	}
	
	enqueue(val, priority){
		this.values.push({val, priority});
		this.sort();
	}
	
	dequeue(){
		return this.values.shift();
	}
	
	sort(){
		this.values.sort((a, b) => a.priority - b.priority);
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
function assertObjectEqual(actual, expected, message) {
	const isEqual = JSON.stringify(actual) === JSON.stringify(expected);
	if (!isEqual) {
		console.error(`❌ ${message} | Expected: ${JSON.stringify(expected)}, Got: ${JSON.stringify(actual)}`);
	} else {
		console.log(`✅ ${message}`);
	}
}
function assertArrayUnorderedEqual(actual, expected, message) {
	const actualSorted = [...actual].sort();
	const expectedSorted = [...expected].sort();
	const isEqual = actualSorted.length === expectedSorted.length &&
					actualSorted.every((val, idx) => val === expectedSorted[idx]);
	if (!isEqual) {
		console.error(`❌ ${message} | Expected: [${expectedSorted}], Got: [${actualSorted}]`);
	} else {
		console.log(`✅ ${message}`);
	}
}

// Tests for WeightedGraphVAl and Dijkstra's algorithm
(function testWeightedGraphVAl() {
	// Helper to build a sample graph
	function buildSampleGraph() {
		const g = new WeightedGraphVAl();
		g.addEdge('A', 'B', 1);
		g.addEdge('A', 'C', 4);
		g.addEdge('B', 'C', 2);
		g.addEdge('B', 'D', 5);
		g.addEdge('C', 'D', 1);
		g.addEdge('D', 'E', 3);
		return g;
	}

	// Test: addVertex and addEdge
	const g = new WeightedGraphVAl();
	g.addVertex('X');
	assertObjectEqual(g.adjacencyList, { X: [] }, "addVertex adds a vertex");

	g.addEdge('X', 'Y', 7);
	assertObjectEqual(
		g.adjacencyList,
		{ X: [{node: 'Y', weight: 7}], Y: [{node: 'X', weight: 7}] },
		"addEdge adds edge and auto-adds missing vertex"
	);

	// Test: addEdge does not duplicate edges
	g.addEdge('X', 'Y', 7);
	assertEqual(g.adjacencyList['X'].length, 1, "addEdge does not duplicate edges");

	// Test: addEdge self-loop
	g.addEdge('X', 'X', 2);
	assertEqual(g.adjacencyList['X'].filter(e => e.node === 'X').length, 1, "addEdge allows self-loop only once");

	// Test: Dijkstra's algorithm - normal case
	const graph = buildSampleGraph();
	const shortestPath = graph.dijkshtraShortestDistance('A', 'E');
	assertArrayEqual(shortestPath, ['A', 'B', 'C', 'D', 'E'], "dijkshtraShortestDistance finds correct shortest path");

	// Test: Dijkstra's algorithm - direct edge
	const directGraph = new WeightedGraphVAl();
	directGraph.addEdge('A', 'B', 1);
	assertArrayEqual(directGraph.dijkshtraShortestDistance('A', 'B'), ['A', 'B'], "dijkshtraShortestDistance finds direct edge");

	// Test: Dijkstra's algorithm - same start and end
	assertArrayEqual(graph.dijkshtraShortestDistance('A', 'A'), ['A'], "dijkshtraShortestDistance returns [start] if start==end");

	// Test: Dijkstra's algorithm - no path
	const disconnectedGraph = new WeightedGraphVAl();
	disconnectedGraph.addEdge('A', 'B', 1);
	disconnectedGraph.addEdge('C', 'D', 1);
	assertArrayEqual(disconnectedGraph.dijkshtraShortestDistance('A', 'D'), [], "dijkshtraShortestDistance returns [] if no path");

	// Test: Dijkstra's algorithm - invalid input
	assertArrayEqual(graph.dijkshtraShortestDistance('', 'E'), [], "dijkshtraShortestDistance returns [] for empty start");
	assertArrayEqual(graph.dijkshtraShortestDistance('A', ''), [], "dijkshtraShortestDistance returns [] for empty end");
	assertArrayEqual(graph.dijkshtraShortestDistance(null, 'E'), [], "dijkshtraShortestDistance returns [] for null start");
	assertArrayEqual(graph.dijkshtraShortestDistance('A', null), [], "dijkshtraShortestDistance returns [] for null end");
	assertArrayEqual(graph.dijkshtraShortestDistance('A', 'Z'), [], "dijkshtraShortestDistance returns [] for non-existent end");
	assertArrayEqual(graph.dijkshtraShortestDistance('Z', 'A'), [], "dijkshtraShortestDistance returns [] for non-existent start");

	// Test: Dijkstra's algorithm - empty graph
	const emptyGraph = new WeightedGraphVAl();
	assertArrayEqual(emptyGraph.dijkshtraShortestDistance('A', 'B'), [], "dijkshtraShortestDistance returns [] for empty graph");

	// Test: Dijkstra's algorithm - self-loop
	const selfLoopGraph = new WeightedGraphVAl();
	selfLoopGraph.addEdge('A', 'A', 0);
	assertArrayEqual(selfLoopGraph.dijkshtraShortestDistance('A', 'A'), ['A'], "dijkshtraShortestDistance handles self-loop");

	// Test: Dijkstra's algorithm - multiple shortest paths (should return one valid path)
	const multiPathGraph = new WeightedGraphVAl();
	multiPathGraph.addEdge('A', 'B', 1);
	multiPathGraph.addEdge('B', 'C', 1);
	multiPathGraph.addEdge('A', 'C', 2);
	const multiPathResult = multiPathGraph.dijkshtraShortestDistance('A', 'C');
	const validPaths = [['A','B','C'], ['A','C']];
	const isValid = validPaths.some(path => JSON.stringify(multiPathResult) === JSON.stringify(path));
	if (isValid) {
		console.log("✅ dijkshtraShortestDistance returns one shortest path when multiple exist");
	} else {
		console.error(`❌ dijkshtraShortestDistance returns one shortest path when multiple exist | Expected one of: ${validPaths.map(p => `[${p}]`).join(' or ')}, Got: [${multiPathResult}]`);
	}

	// Test: Dijkstra's algorithm - weighted cycles
	const cycleGraph = new WeightedGraphVAl();
	cycleGraph.addEdge('A', 'B', 1);
	cycleGraph.addEdge('B', 'C', 1);
	cycleGraph.addEdge('C', 'A', 10);
	assertArrayEqual(cycleGraph.dijkshtraShortestDistance('A', 'C'), ['A', 'B', 'C'], "dijkshtraShortestDistance avoids longer cycles");

	// Test: Dijkstra's algorithm - unreachable node
	const unreachableGraph = new WeightedGraphVAl();
	unreachableGraph.addEdge('A', 'B', 1);
	unreachableGraph.addVertex('C');
	assertArrayEqual(unreachableGraph.dijkshtraShortestDistance('A', 'C'), [], "dijkshtraShortestDistance returns [] for unreachable node");

})();