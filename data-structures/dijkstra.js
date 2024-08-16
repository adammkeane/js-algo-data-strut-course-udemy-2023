class PriorityQueue {
  constructor(){
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({val, priority});
    this.sort();
  };
  dequeue() {
    return this.values.shift();
  };
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  };
}

class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        this.adjacencyList[vertex] = [];
    }
    addEdge(v1, v2, weight) {
        this.adjacencyList[v1].push({node: v2, weight});
        this.adjacencyList[v2].push({node: v1, weight});
    }
    dijk(startV, endV) {
      let distances = {};
      for (let key of Object.keys(this.adjacencyList)) {
        if (key === startV) {
          distances[key] = 0;
        } else {
          distances[key] = Infinity;
        }
      }
      
      let pQ = new PriorityQueue();
      for (let [key, weight] of Object.entries(distances)) {
        pQ.enqueue(key, weight);
      }
      pQ.sort();

      let previous = {};
      for (let key of Object.keys(this.adjacencyList)) {
          previous[key] = null;
      }

      while (pQ.values.length > 0) {
        let currentV = pQ.dequeue();
        if (currentV === endV) break; 

        for (let [vertex, weight] of Object.entries(this.adjacencyList[currentV.val])) {
          
        }
      }

      return distances;
    }
}



let wg = new WeightedGraph();
wg.addVertex("A");
wg.addVertex("B");
wg.addVertex("C");
wg.addVertex("D");
wg.addVertex("E");
wg.addVertex("F");

wg.addEdge("A", "B", 4);
wg.addEdge("A", "C", 2);
wg.addEdge("B", "E", 3);
wg.addEdge("C", "D", 2);
wg.addEdge("C", "F", 4);
wg.addEdge("D", "E", 3);
wg.addEdge("D", "F", 1);
wg.addEdge("F", "E", 1);

// console.log(wg.adjacencyList)


console.log(wg.dijk("A", "E"))

