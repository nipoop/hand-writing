// const add = function(...args) {

//   return args.reduce((prev, next) => {
//     return prev + next
//   })
// }


// const curry = function(fn) {

//   let args = [];

//   return function temp() {
//     if (arguments.length === 0) {

//       return fn.apply(this, args)
//     } else {
//       args = [...args, ...arguments]
      
//       return temp;
//     }
//   }
// }

// const curryAdd = curry(add);

// console.log(curryAdd(2)(2,3)(2,3,4)())

// const curry = function(fn) {

//   let args;

//   const fn = 

// }

function add() {

  let args = Array.prototype.slice.call(arguments);

  const inner = function(...restArgs) {
    args = args.concat(restArgs);
    return inner;
  }

  inner.toString = function() {
    return args.reduce((acc, cur) => acc + cur, 0);
  }

  return inner;
}

console.log(add(1)(2)(3));
