function insertNode(cur, newNode) {
  if (newNode.key < cur.key) {
    if (cur.left === null) {
      cur.left = newNode;
    } else {
      insertNode(cur.left, newNode);
    }
  } else {
    if (cur.right === null) {
      cur.right = newNode;
    } else {
      insertNode(cur.right, newNode);
    }
  }
}

function inOrderTraverseNode(curr, callback) {
  if (curr === null) {
    return null;
  }
  inOrderTraverseNode(curr.left, callback);
  callback(curr.key);
  inOrderTraverseNode(curr.right, callback)
}

function preOrderTraverseNode(curr, callback) {
  if (curr === null) {
    return null;
  }
  callback(curr.key);
  preOrderTraverseNode(curr.left, callback);
  preOrderTraverseNode(curr.right, callback);
}

function postOrderTraverse(curr, callback) {
  if (curr === null) {
    return null;
  };
  postOrderTraverse(curr.left, callback);
  postOrderTraverse(curr.right, callback);
  callback(curr.key);
}

function minNode(curr) {
  if (curr === null) {
    return null;
  };
  while (curr.left) {
    curr = curr.left;
  };
  return curr.key;
}

function maxNode(curr) {
  if (curr === null) {
    return null;
  };
  while (curr.right) {
    curr = curr.right;
  };
  return curr.key;
}

function removeNode(curr, key) {
  if (curr.key > key) {
    curr.left = removeNode(curr.left, key);
    return curr;
  } else if (curr.key < key) {
    curr.right = removeNode(curr.right, key);
    return curr;
  } else {
    if (curr.right === null && curr.left === null) {
      curr = null;
      return curr;
    }
    if (curr.right === null) {
      curr = curr.left;
      return curr;
    }
    if (curr.left === null) {
      curr = curr.right;
      return curr;
    }
    const minKey = minNode(curr.right);
    curr.right = removeNode(curr.right, minNode);
    curr.key = minKey;
    return curr;
  }

}

function Node(key) {
  this.key = key;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {

  this.root = null;

}

BinarySearchTree.prototype.insert = function(key) {

  const newNode = new Node(key);
  if (this.root === null) {
    this.root = newNode;
  } else {
    insertNode(this.root, newNode);
  }
}

BinarySearchTree.prototype.search = function(key) {

}

BinarySearchTree.prototype.inOrderTraverse = function(callback) {
  inOrderTraverseNode(this.root, (key) => { console.log(key); })
}

BinarySearchTree.prototype.preOrderTraverse = function(callback) {
  preOrderTraverseNode(this.root, (key) => { console.log(key); })
}

BinarySearchTree.prototype.postOrderTraverse = function(callback) {
  postOrderTraverse(this.root, (key) => { console.log(key); })
}

BinarySearchTree.prototype.min = function() {
  return minNode(this.root);
}

BinarySearchTree.prototype.max = function() {
  return maxNode(this.root);
}

BinarySearchTree.prototype.remove = function(value) {
  this.root = removeNode(this.root, value);
}

