


function remove(key, curr) {

  let node = curr;
  if (curr === null) {
    node = null;
  } else if (key < curr.key) {
    node.left = remove(key, node.left);
  } else if (key > curr.key) {
    node.right = remove(key, node.right);
  } else {

    if (node.left !== null && node.right !== null) {

      const tmp = findMin(node.right);
      node.key = tmp.key;
      node.right = remove(node.key, node.right);
    }
  }
}