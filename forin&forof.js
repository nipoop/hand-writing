function Parent() {

    this.name = 'jett';
}

Parent.prototype.getName = function() {
    console.log(this.name);
}

let parent = new Parent();
parent.getName();


parent.selfGetName = function() {
    console.log('selfGetName');
}


for (let i in parent) {
    console.log('in', i)
}

Object.keys(parent).forEach(i => {
    console.log('keys()', i)
})

Object.getOwnPropertyNames(parent).forEach(i => {
    console.log('getOwnPropertyNames', i);
})