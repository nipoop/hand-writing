const obj1 = {}
Object.defineProperty(obj1, 'a', {
  set: (...args) => {
    console.log('args', args);
    console.log('set')
  },
  get: () => {
    console.log('get')
  }
})

const obj2 = {};
Object.setPrototypeOf(obj2, obj1);

console.log(obj2.a)
console.log(obj1);
obj2.a = 22;
console.log(obj1, obj2);