function fibonacci(n) {
  
  let prev = 1;
  let cur = 1;
  let next;

  for (let i = 3; i <= n; i++) {
    next = prev + cur;
    prev = cur;
    cur = next;
  }

  return next;

}

console.log(fibonacci(6));