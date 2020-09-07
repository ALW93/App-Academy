# **Notes**

## **Graphs**

- **Graph** : Any collection of nodes and edges, it is much more relaxed compared to other trees.
  - May lack a root node.
  - May have cycles.
  - May have any number of edges leaving a node.

![graph](https://s3-us-west-1.amazonaws.com/appacademy-open-assets/data_structures_algorithms/graphs/images/graphs.png)

**GraphNode Class**

```js
class GraphNode {
  constructor(val) {
    this.val = val;
    this.neighbors = [];
  }
}

let a = new GraphNode("a");
let b = new GraphNode("b");
let c = new GraphNode("c");
let d = new GraphNode("d");
let e = new GraphNode("e");
let f = new GraphNode("f");
a.neighbors = [b, c, e];
c.neighbors = [b, d];
e.neighbors = [a];
f.neighbors = [e];
```

- **Adjacency Matrix** : Preferred way of representing a graph.

![adja](https://s3-us-west-1.amazonaws.com/appacademy-open-assets/data_structures_algorithms/graphs/images/adj_matrix_graph.png)

```js
let matrix = [
  /*          A       B       C       D       E       F   */
  /*A*/ [true, true, true, false, true, false],
  /*B*/ [false, true, false, false, false, false],
  /*C*/ [false, true, true, true, false, false],
  /*D*/ [false, false, false, true, false, false],
  /*E*/ [true, false, false, false, true, false],
  /*F*/ [false, false, false, false, true, true],
];
```

- **Adjacency List** : Using an object to represent node labels.

```js
let graph = {
  a: ["b", "c", "e"],
  b: [],
  c: ["b", "d"],
  d: [],
  e: ["a"],
  f: ["e"],
};
```

---

## **Graph Traversal**
