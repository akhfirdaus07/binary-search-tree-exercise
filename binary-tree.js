const Node = require("./node");

class BinaryTree {
  constructor(array) {
    this.root = this.buildTree(array);
  };

  buildTree(array) {
    const sortedArray = [...new Set(array)].sort((a, b) => a - b);
    if (sortedArray.length === 0) return null;

    const midpoint = Math.floor(sortedArray.length / 2);
    const newNode = Node(sortedArray[midpoint]);
    newNode.leftChild = this.buildTree(sortedArray.slice(0, midpoint));
    newNode.rightChild = this.buildTree(sortedArray.slice(midpoint + 1));
    return newNode;
  };

  prettyPrint(node = this.root, prefix = "", isLeft = true) {
    if (node === null) return;
    if (node.rightChild) {
      this.prettyPrint(node.rightChild, `${prefix}${isLeft ? '|   ' : '    '}`, false)
    };
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.value}`);
    if (node.leftChild) {
      this.prettyPrint(node.leftChild, `${prefix}${isLeft ? '    ' : '|   '}`, true)
    };
  };
}

module.exports = BinaryTree;
