// my solution
class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }
}


// official solution

let g = new Graph();
g.addVertex("Tokyo")
g.addVertex("Milan")
g.addVertex("Aspen")
g.addEdge("Tokyo", "Milan")
g.addEdge("Tokyo", "Aspen")
console.log(g)