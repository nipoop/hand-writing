

function height(node) {

  return node === null ? -1 : Math.max(height(node.left), height(node.right)) + 1;

}

function rotateR(node) {
  let tmp = node.left;
  node.left = tmp.right;
  tmp.right = node;
  return tmp;
}

function rotateLR(node) {
  node.left = rotateL(node.left);
  return rotateR(node)
}

function rotateL(node) {
  let tmp = node.right;
  node.right = tmp.left;
  tmp.left = node;
  return tmp;
}

function rotateRL(node) {
  node.right = rotateR(node.right);
  return rotateL(node);
}


function insertNode(key, curr) {

  let node = curr;

  if (curr === null) {
    node = new Node(key);
  } else if (key < curr.key) {
    node.left = insertNode(key, curr.left);

    if (height(node.left) - height(node.right) > 1) {
      if (height(node.left.left) > height(node.left.right)) {
        node = rotateR(node);
      } else {
        node = rotateLR(node);
      }
    }

  } else if (key > curr.key) {
    node.right = insertNode(key, curr.right);

    if (height(node.right) - height(node.left) > 1) {
      if (height(node.right.right) > height(node.right.left)) {
        node = rotateL(node);
      } else {
        node = rotateRL(node);
      }
    }
  }

  return node;

}

function Node(key) {

  this.key = key;
  this.left = null;
  this.right = null;
}

function AVLTree() {

  this.root = null;

  this.insert = function(key) {
    this.root = insertNode(key, this.root);
  }
}

const tree = new AVLTree();
tree.insert(50);
tree.insert(30);
tree.insert(70);
tree.insert(10);
tree.insert(40);
tree.insert(35);
console.log(tree);