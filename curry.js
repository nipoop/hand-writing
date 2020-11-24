const add = function(...args) {

  return args.reduce((prev, next) => {
    return prev + next
  })
}


const curry = function(fn) {

  let args = [];

  return function temp() {
    if (arguments.length === 0) {

      return fn.apply(this, args)
    } else {
      args = [...args, ...arguments]
      
      return temp;
    }
  }
}

const curryAdd = curry(add);

console.log(curryAdd(2)(2,3)(2,3,4)())