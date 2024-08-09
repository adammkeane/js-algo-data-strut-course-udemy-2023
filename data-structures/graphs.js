// my solution
class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        this.adjacencyList[vertex] = [];
    }
    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
    removeEdge(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(val => val !== v2);
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(val => val !== v1);
    }
    removeVertex(vertex) {
        for (let edge of this.adjacencyList[vertex]) {
            this.removeEdge(vertex, edge);
        }
        delete this.adjacencyList[vertex];
    }
    DFS_Recusive(startNode) {
        let results = [];
        let visited = {};
        let adjacencyList = this.adjacencyList

        function helperFunction(vertex) {
            visited[vertex] = true;
            results.push(vertex);
            for (let edge of adjacencyList[vertex]) {
                if (!visited[edge]) { 
                    console.log(edge)
                    helperFunction(edge);
                }
            } 
        }
        helperFunction(startNode);
        return results;
    }
    DFS_Iterative(startNode) {
        let stack = [];
        let results = [];
        let visited = {};
        
        stack.push(startNode);
        while (stack.length) {
            let poppedNode = stack.pop();
            if (!visited[poppedNode]) {
                visited[poppedNode] = true;
                results.push(poppedNode);
                stack.push(...this.adjacencyList[poppedNode]);
            }   
        }
        return results;
    }
    BFS(startNode) {
        let queue = [];
        let results = [];
        let visited = {};
        
        queue.push(startNode);
        while (queue.length) {
            let shiftedNode = queue.shift();
            if (!visited[shiftedNode]) {
                visited[shiftedNode] = true;
                results.push(shiftedNode);
                queue.push(...this.adjacencyList[shiftedNode]);
            }   
        }
        return results;
    }   
}


let g = new Graph();

// g.addVertex("Tokyo")
// g.addVertex("Milan")
// g.addVertex("Aspen")
// g.addEdge("Tokyo", "Milan")
// g.addEdge("Tokyo", "Aspen")
// g.addEdge("Milan", "Aspen")
// g.removeEdge("Tokyo", "Milan")
// g.removeVertex("Tokyo")

// console.log(g)

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A","B")
g.addEdge("A","C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")

console.log(g)
// console.log(g.DFS_Recusive("A"))
// console.log(g.DFS_Iterative("A"))
console.log(g.BFS("A"))




// official solution
class GraphOfficial{
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(v1,v2){
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        );
    }
    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex]
    }
    depthFirstRecursive(start){
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;

        (function dfs(vertex){
            if(!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    return dfs(neighbor)
                }
            });
        })(start);

        return result;
    }
    depthFirstIterative(start){
        const stack = [start];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[start] = true;
        while(stack.length){
            currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
               if(!visited[neighbor]){
                   visited[neighbor] = true;
                   stack.push(neighbor)
               } 
            });
        }
        return result;
    }
    breadthFirst(start){
        const queue = [start];
        const result = [];
        const visited = {};
        let currentVertex;
        visited[start] = true;

        while(queue.length){
            currentVertex = queue.shift();
            result.push(currentVertex);
           

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }
        return result;
    }
}

// let g = new GraphOfficial();
// g.addVertex("Dallas");
// g.addVertex("Tokyo");
// g.addVertex("Aspen");
// g.addVertex("Los Angeles");
// g.addVertex("Hong Kong")
// g.addEdge("Dallas", "Tokyo");
// g.addEdge("Dallas", "Aspen");
// g.addEdge("Hong Kong", "Tokyo");
// g.addEdge("Hong Kong", "Dallas");
// g.addEdge("Los Angeles", "Hong Kong");
// g.addEdge("Los Angeles", "Aspen");

// let g = new GraphOfficial();

// g.addVertex("A")
// g.addVertex("B")
// g.addVertex("C")
// g.addVertex("D")
// g.addVertex("E")
// g.addVertex("F")


// g.addEdge("A", "B")
// g.addEdge("A", "C")
// g.addEdge("B","D")
// g.addEdge("C","E")
// g.addEdge("D","E")
// g.addEdge("D","F")
// g.addEdge("E","F")

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F

// QUEUE: []
// RESULT: [A, B, C, D, E, F]





