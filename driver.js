const BinaryTree = require("./binary-tree");

const randomArray = (size) => {
  return Array.from({ length: size }, () => Math.floor(Math.random() * 100));
};

const tree = new BinaryTree(randomArray(20));

