

const obj1 = {
  name: 'jett'
};

function getName(n1, n2) {
  console.log(this.name);
  console.log(n1, n2);
};

// call

Function.prototype.myCall = function(context, ...args) {

  if (typeof this !== 'function') {
    throw new Error('error');
  }

  const fn = Symbol();
  context[fn] = this;
  context[fn](...args);
  delete context[fn];

}

// apply
Function.prototype.myApply = function(context, [...args]) {

  if (typeof this !== 'function') {
    throw new Error('error');
  }

  const fn = Symbol();
  context[fn] = this;
  context[fn](...args);
  delete context[fn];
}


// bind

Function.prototype.myBind = function() {

  const args1 = Array.prototype.slice.call(arguments);
  const context = args1.slice(0, 1)[0];
  const self = this;

  if (typeof self !== 'function') {
    throw new Error('error');
  };
  
  const res = function() {

    const args2 = Array.prototype.slice.call(arguments);
    self.apply(context, [...args1, ...args2]);

  }

  return res;

}

// new

const myNew = function(fn, ...args) {

  const temp = Object.create(fn.prototype);

  let res = fn.call(temp, ...args);
  
  return 
}



getName.myCall(obj1, 'n1', 'n2')

getName.myApply(obj1, ['n1', 'n2'])

const newGetName = getName.bind(obj1, 'n1');
newGetName('n2');