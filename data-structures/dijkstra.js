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
      let pQ = new PriorityQueue();
      let previous = {};
      
      // to have array to return shortest node path from startV to endV
      let path = [];

      for (let vertex in this.adjacencyList) {
        if (vertex === startV) {
          distances[vertex] = 0;
          pQ.enqueue(vertex, 0);
        } else {
          distances[vertex] = Infinity;
          // i don't see why you need to add each vertex to pQ, as they will be added below.
          // pQ.enqueue(vertex, Infinity);
        }
        previous[vertex] = null;
      }

      while (pQ.values.length > 0) {
        let currentV = pQ.dequeue();
        
        // if we've reached the endV, we build our path and break out of the while loop.
        if (currentV.val === endV) {
          path.unshift(endV);
          while (previous[currentV.val] !== startV) {
            path.unshift(previous[currentV.val]);
            currentV.val = previous[currentV.val];
          }
          path.unshift(startV);
          break; 
        }
        
        for (let el of this.adjacencyList[currentV.val]) {
          let length = null;
          length = el.weight + distances[currentV.val];
          if (length < distances[el.node]) {
            distances[el.node] = length;
            previous[el.node] = currentV.val;
            pQ.enqueue(el.node, length)
          } 
          // console.log(distances)
          // console.log(previous)
          // console.log(pQ)
        }
      }
      return path;
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

