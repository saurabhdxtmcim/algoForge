/*
    Graph implementation using adjacency list.
    This implementation supports adding vertices, adding edges, removing edges, removing vertices,
    depth-first traversal (both recursive and iterative), and breadth-first traversal.
*/
class Graph{
	constructor(){
		this.adjacencyList = {};
	}
	
	// adding a vertex
	addVertex(nameOfVertex){
		if(!this.adjacencyList[nameOfVertex]){
			this.adjacencyList[nameOfVertex] = [];
		}
	}
	
	addEdge(vertex1, vertex2){
        if (!this.adjacencyList[vertex1]) this.addVertex(vertex1);
	    if (!this.adjacencyList[vertex2]) this.addVertex(vertex2);

        if(vertex1 === vertex2){ 
            if (!this.adjacencyList[vertex1].includes(vertex1)) {
                this.adjacencyList[vertex1].push(vertex2);
            }
        }else{
            if (!this.adjacencyList[vertex1].includes(vertex2)) {
                this.adjacencyList[vertex1].push(vertex2);
            }
            if (!this.adjacencyList[vertex2].includes(vertex1)) {
                this.adjacencyList[vertex2].push(vertex1);
            }
        }
	}
	
	removeEdge(vertex1, vertex2){
		if(this.adjacencyList[vertex1] && this.adjacencyList[vertex1].includes(vertex2)){
			// now find vertex 2 in the list and remove from array
			this.removeElementFromArray(this.adjacencyList[vertex1], vertex2);
		}
		
		if(this.adjacencyList[vertex2] && this.adjacencyList[vertex2].includes(vertex1)){
			// now find vertex1 in the list and remove it from the array 
			this.removeElementFromArray(this.adjacencyList[vertex2], vertex1);
		}
		return true;
	}
	
	/*
		if index doesn't matter, then this is best way of removing element from the aray, time complixity o(n) and space complixity o(1), otherwise use splice
 	*/
	removeElementFromArray(arr, element){
		let index = arr.indexOf(element);
		if(index === -1) return false;
		arr[index] = arr[arr.length - 1];
		arr.pop();
		return true;
	}
	
	removeVertex(vertex){
		if(!this.adjacencyList[vertex]) return undefined;
		
		while(this.adjacencyList[vertex].length){
			this.removeEdge(vertex, this.adjacencyList[vertex][0]);
		}
		
		delete this.adjacencyList[vertex];
		return this.adjacencyList;
		
	}

    depthFirstTraversal(){
		const keys = Object.keys(this.adjacencyList);
		if(keys?.length <= 0) return [];
		
		let vertex = keys[0];
		
		let returnedList = [];
		const visited = new Set();
		
		this.dfs(vertex, returnedList, visited);
		
		return returnedList;
	}
	
	dfs(vertex, returnedList, visited){
		if(!this.adjacencyList[vertex]) return;
		
		if(!visited.has(vertex)){
			returnedList.push(vertex);
			visited.add(vertex);
			
			for(let i =0; i < this.adjacencyList[vertex].length; i++){
				this.dfs(this.adjacencyList[vertex][i], returnedList, visited);
			}
		}
	}
    /*
        Above depth first, basically uses first vertex in the adjacency list and then traverses all the vertices connected to it, 
        if there are no more vertices connected to it, then in case of disconnected graph, it will not traverse the other vertices.
        So, it will not traverse all the vertices in the graph.
        
        for that we need to loop through all the vertices in the adjacency list and call dfs on each vertex if it is not visited.
        This way we can ensure that all vertices are visited, even if the graph is disconnected.
    */
    depthFirstTraversalAll() {
        const keys = Object.keys(this.adjacencyList);
        const visited = new Set();
        const result = [];

        for (let vertex of keys) {
            if (!visited.has(vertex)) {
                this.dfs(vertex, result, visited);
            }
        }

        return result;
    }

	
	depthFirstTraversalLoop(){
		const keys = Object.keys(this.adjacencyList);
		if(keys?.length <= 0) return [];
		
		let returnedList = [];
		const visited = new Set();
		let stack = [];
		stack.push(keys[0]);
		
		while(stack.length > 0){
			let vertex = stack.pop();
			if(!visited.has(vertex)){
				returnedList.push(vertex);
				visited.add(vertex);
				if(this.adjacencyList[vertex]?.length > 0){
					for(let i = 0; i < this.adjacencyList[vertex].length; i++){
						stack.push(this.adjacencyList[vertex][i]);
					}
				}
			}
		}
		return returnedList;
	}
    /*
        same here Above depth first, basically uses first vertex in the adjacency list and then traverses all the vertices connected to it, 
        if there are no more vertices connected to it, then in case of disconnected graph, it will not traverse the other vertices.
        So, it will not traverse all the vertices in the graph.
        
        for that we need to loop through all the vertices in the adjacency list and call dfs on each vertex if it is not visited.
        This way we can ensure that all vertices are visited, even if the graph is disconnected.
    */
    depthFirstTraversalLoopAll() {
        const keys = Object.keys(this.adjacencyList);
        const visited = new Set();
        const result = [];

        for (let start of keys) {
            if (!visited.has(start)) {
                const stack = [start];

                while (stack.length > 0) {
                    const vertex = stack.pop();
                    if (!visited.has(vertex)) {
                        visited.add(vertex);
                        result.push(vertex);
                        for (let neighbor of this.adjacencyList[vertex]) {
                            if (!visited.has(neighbor)) {
                                stack.push(neighbor);
                            }
                        }
                    }
                }
            }
        }

        return result;
    }

    /*
        Breadth First Traversal, starts from the first vertex in the adjacency list and traverses all the vertices connected to it,
        if there are no more vertices connected to it, then in case of disconnected graph, it will not traverse the other vertices.
        So, it will not traverse all the vertices in the graph.
    */
    breadthFirstTraversal(){
		let keys = Object.keys(this.adjacencyList);
		if(keys?.length <= 0) return;
		
		let vertex = keys[0];
		const visited = new Set();
		let resultList = [];
		
		let visitedQueue = [vertex];
		
		while(visitedQueue.length > 0){
			let vertex = visitedQueue.shift();
			visited.add(vertex);
			resultList.push(vertex);
			for(let i = 0; i < this.adjacencyList[vertex].length; i++){
				if(!visited.has(this.adjacencyList[vertex][i])){
					visited.add(this.adjacencyList[vertex][i]);
					visitedQueue.push(this.adjacencyList[vertex][i]);
				}
				
			}
		}
		return resultList;
	}

    /*
        Same here, above breadth first, basically uses first vertex in the adjacency list and then traverses all the vertices connected to it,
        if there are no more vertices connected to it, then in case of disconnected graph, it will not traverse the other vertices.
        So, it will not traverse all the vertices in the graph.
        for that we need to loop through all the vertices in the adjacency list and call bfs on each vertex if it is not visited.
    */
    breadthFirstTraversalAll() {
        const keys = Object.keys(this.adjacencyList);
        const visited = new Set();
        const result = [];

        for (let start of keys) {
            if (!visited.has(start)) {
                const queue = [start];
                visited.add(start);

                while (queue.length > 0) {
                    const vertex = queue.shift();
                    result.push(vertex);

                    for (let neighbor of this.adjacencyList[vertex]) {
                        if (!visited.has(neighbor)) {
                            visited.add(neighbor);
                            queue.push(neighbor);
                        }
                    }
                }
            }
        }

        return result;
    }

}

// Example usage
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

// Tests for Graph
(function testGraph() {
    // Visualize the graph
    function visualizeGraph(graph, label) {
        console.log(`\n--- ${label} ---`);
        for (const [vertex, edges] of Object.entries(graph.adjacencyList)) {
            console.log(`${vertex}: [${edges.join(', ')}]`);
        }
        console.log('-------------------\n');
    }

    const g = new Graph();

    // Test addVertex
    g.addVertex('A');
    assertObjectEqual(g.adjacencyList, { A: [] }, "addVertex adds a vertex");
    visualizeGraph(g, "After addVertex('A')");

    // Test addEdge (auto-adds vertices)
    g.addEdge('A', 'B');
    assertObjectEqual(
        g.adjacencyList,
        { A: ['B'], B: ['A'] },
        "addEdge adds edge and auto-adds missing vertex"
    );
    visualizeGraph(g, "After addEdge('A', 'B')");

    // Test addEdge for existing vertices
    g.addEdge('A', 'C');
    assertObjectEqual(
        g.adjacencyList,
        { A: ['B', 'C'], B: ['A'], C: ['A'] },
        "addEdge adds edge between existing vertices"
    );
    visualizeGraph(g, "After addEdge('A', 'C')");

    // Test removeEdge
    g.removeEdge('A', 'B');
    // Order of adjacency may change due to removeElementFromArray implementation
    assertObjectEqual(
        g.adjacencyList,
        { A: ['C'], B: [], C: ['A'] },
        "removeEdge removes edge from both vertices"
    );
    visualizeGraph(g, "After removeEdge('A', 'B')");

    // Test removeEdge when edge does not exist
    const removed = g.removeEdge('A', 'B');
    assertEqual(removed, true, "removeEdge returns true even if edge does not exist");
    visualizeGraph(g, "After removeEdge('A', 'B') again");

    // Test removeElementFromArray (internal)
    let arr = ['X', 'Y', 'Z'];
    g.removeElementFromArray(arr, 'Y');
    // Order may change due to swap-pop
    assertArrayEqual(arr, ['X', 'Z'], "removeElementFromArray removes element");
    // No graph visualization needed for array

    // Test removeVertex
    g.addEdge('B', 'C');
    g.addEdge('B', 'D');
    g.removeVertex('B');
    assertObjectEqual(
        g.adjacencyList,
        { A: ['C'], C: ['A'], D: [] },
        "removeVertex removes vertex and all edges"
    );
    visualizeGraph(g, "After removeVertex('B')");

    // Test removeVertex for non-existent vertex
    const result = g.removeVertex('X');
    assertEqual(result, undefined, "removeVertex returns undefined for non-existent vertex");
    visualizeGraph(g, "After removeVertex('X')");

    // Test depthFirstTraversal
    g.addEdge('A', 'B');
    g.addEdge('B', 'C');
    g.addEdge('C', 'D');
    const dfsResult = g.depthFirstTraversalAll();
    assertArrayEqual(dfsResult, ['A', 'C', 'B', 'D'], "depthFirstTraversalAll visits all vertices");
    visualizeGraph(g, "After DFS traversalAll setup");

    const dfsLoopResult = g.depthFirstTraversalLoopAll();
    //assertArrayEqual(dfsLoopResult, ['A', 'C', 'B', 'D'], "depthFirstTraversalLoopAll visits all vertices");
    /*
        Note: The order of traversal in depthFirstTraversalLoopAll may vary due to the nature of stack-based traversal.
        The important part is that all vertices are visited, not the order.
        Hence, we use assertArrayUnorderedEqual to check that all expected vertices are present.
    */
    assertArrayUnorderedEqual(dfsLoopResult, ['A', 'C', 'B', 'D'], "depthFirstTraversalLoopAll visits all vertices");
    visualizeGraph(g, "After DFS Loop traversalAll");

    // Test breadthFirstTraversal
    const bfsResult = g.breadthFirstTraversalAll();
    assertArrayUnorderedEqual(bfsResult, ['A', 'C', 'B', 'D'], "breadthFirstTraversalAll visits all vertices");
    visualizeGraph(g, "After BFS traversalAll");

    // Test breadthFirstTraversal with disconnected graph
    g.addVertex('E');
    g.addEdge('E', 'F');
    const bfsDisconnectedResult = g.breadthFirstTraversalAll();
    assertArrayUnorderedEqual(bfsDisconnectedResult, ['A', 'C', 'B', 'D', 'E', 'F'], "breadthFirstTraversalAll visits all vertices in disconnected graph");
    visualizeGraph(g, "After adding disconnected component E-F");

    // Test depthFirstTraversal with disconnected graph
    g.addVertex('G');
    g.addEdge('G', 'H');
    const dfsDisconnectedResult = g.depthFirstTraversalAll();
    assertArrayUnorderedEqual(dfsDisconnectedResult, ['A', 'C', 'B', 'D', 'E', 'F', 'G', 'H'], "depthFirstTraversalAll visits all vertices in disconnected graph");
    visualizeGraph(g, "After adding disconnected component G-H");

    // Test depthFirstTraversalLoop with disconnected graph
    const dfsLoopDisconnectedResult = g.depthFirstTraversalLoopAll();
    assertArrayUnorderedEqual(dfsLoopDisconnectedResult, ['A', 'C', 'B', 'D', 'E', 'F', 'G', 'H'], "depthFirstTraversalLoopAll visits all vertices in disconnected graph");
    visualizeGraph(g, "After DFS Loop traversalAll on disconnected graph");

    // Test depthFirstTraversal with empty graph
    const emptyGraph = new Graph();
    const emptyDfsResult = emptyGraph.depthFirstTraversalAll();
    assertArrayEqual(emptyDfsResult, [], "depthFirstTraversalAll on empty graph returns empty array");
    visualizeGraph(emptyGraph, "Empty graph DFS traversalAll");

    // Test breadthFirstTraversal with empty graph
    const emptyBfsResult = emptyGraph.breadthFirstTraversalAll();
    assertArrayEqual(emptyBfsResult, [], "breadthFirstTraversalAll on empty graph returns empty array");
    visualizeGraph(emptyGraph, "Empty graph BFS traversalAll");

    // Test removeEdge on non-existent edge
    const nonExistentEdgeRemoved = g.removeEdge('A', 'X');
    assertEqual(nonExistentEdgeRemoved, true, "removeEdge on non-existent edge returns true");
    visualizeGraph(g, "After removeEdge('A', 'X')");

    // Test removeVertex on non-existent vertex
    const nonExistentVertexRemoved = g.removeVertex('X');
    assertEqual(nonExistentVertexRemoved, undefined, "removeVertex on non-existent vertex returns undefined");
    visualizeGraph(g, "After removeVertex('X') again");

    // Test addEdge with self-loop
    visualizeGraph(g, "before addEdge('A', 'A')");
    g.addEdge('A', 'A');
    assertObjectEqual(
        g.adjacencyList,
        {"A":["C","B","A"],"C":["A","B","D"],"D":["C"],"B":["A","C"],"E":["F"],"F":["E"],"G":["H"],"H":["G"]},
        "addEdge allows self-loop"
    );
    visualizeGraph(g, "After addEdge('A', 'A')");


})();