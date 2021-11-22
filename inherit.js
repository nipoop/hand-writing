
// 
// function Parent(name) {

//   this.name = name;
//   this.age = 18;
// }

// Parent.prototype.getName = function() {
//   console.log(this.name);
// }



// // 
// function Child1() {
//   this.name = 'child'
// };

// Child1.prototype = new Parent();


// //
// function Child2(name) {

//   Parent().call(this, name);

// }


// // 
// function Child3(name) {

//   Parent().call(this, name);

// }

// Child3.prototype = new Parent();
// Child3.prototype.constructor = Child3;


// // 
// function Child4(name) {
//   Parent.call(this, name)
// }

// Child4.prototype = Object.create(Parent.prototype);
// Child4.prototype.constructor = Child4;

// //
// class Parent2 {
//   constructor(name) {
//     super();
//     this.name = name
//   }

//   getName() {
//     console.log(this.name)
//   }
// }

// class Child extends Parent {
//   constructor(name) {
//     super();
//     this.name = name;
//   }
// }

