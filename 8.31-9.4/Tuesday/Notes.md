# **Notes**

## **Binary Trees**

![graphs](https://s3-us-west-1.amazonaws.com/appacademy-open-assets/data_structures_algorithms/trees/images/graphs.png)

- **`Graph`** : A collection of nodes and any edges between those nodes. (Linked Lists and Trees are both considered subclasses of graphs)
- **`Tree`** : Graph that does not contain any cycles.
  - In CS we only refer to trees that are "`rooted`", or a tree where there exists a node that is accessible from every other node.
- **`Binary Tree`** : Tree where nodes have at most 2 children.

![tree](https://assets.aaonline.io/data_structures_algorithms/trees/images/graph_a.png)

```js
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
```

- Common way to implement a binary tree is by using a node class with OOP.

**Basic Tree Terminology**

- **`Tree`** : Graph with no cycles.
- **`Binary Tree`** : Tree where nodes have at most 2 nodes.
- **`Root`** : The ultimate parent, the single node s tree that can access every other node through edges; root does not have a parent.
- **`Internal Node`** : Node that has children.
- **`Leaf`** : Node that does not have any children.
- **`Path`** : A series of nodes that can be traveled through edges.

**Traversing Trees**

- Trees can be traveresed in multiple ways: Depth-First or Breadth-First.
- Three common ways to go depth-first:
  - In-Order
  - Pre-Order
  - Post-Order
- **`Breadth First`** : Traversing level by level, visiting every node at each stage.

```js
        A
       / \
      B   C
     /   / \
    D   E   F
 A, B, C, D, E, F
```

- **`Depth-First`** :

```js
        A
       / \
      B   C
     /   / \
    D   E   F
 A, B, D, C, E, F
```

![pic](https://upload.wikimedia.org/wikipedia/commons/d/dc/Sorted_binary_tree_ALL.svg)

- **Pre-Order Traversal** : Red Dots
- **In-Order Traversal** : Yellow Dots
- **Post-Order Traversal** : Green Dots

**Binary Search Trees**

- A Binary Tree is a **Binary Search Tree** if:
  - The left subtree contains values less than the root.
  - AND the right subtree contains values greater than or equal to the root
  - AND the left subtree is a Binary Search Tree
  - AND the right subtree is a Binary Search Tree
