class LazyManClass {
  constructor(name) {

    this.tasks = [];
    console.log(`Hello I am ${name}`);
    setTimeout(() => {
      this.next();
    }, 0);
  }

  next() {
    let fn = this.tasks.shift();
    fn && fn()
  }

  eat(name) {
    this.tasks.push(() => {
      setTimeout(() => {
        console.log(`I am eating ${name}`);
        this.next();
      }, 0);
    })
    return this;
  }

  sleep(time) {
    this.tasks.push(() => {
      setTimeout(() => {
        console.log(`等待了${time}秒`)
        this.next();
      }, time * 1000)
    })
    return this;
  }

  sleepFirst(time) {
    this.tasks.unshift(() => {
      setTimeout(() => {
        console.log(`等待了${time}秒`)
        this.next();
      }, time * 1000)
    });

    return this;
  }

}

function lazyMan(name) {
  return new LazyManClass(name);
}

lazyMan('yang')
  .eat('lunch')
  .eat('dinner')
  .sleepFirst(10)
  .sleep(5)
  .eat('junk food');