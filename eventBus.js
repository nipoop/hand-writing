class EventEmitter {

  constructor() {
    this.events = new Map();
  }

  addEvents(name, handler) {

    const handlers = this.events.get(name);
    if (!handlers) {
      this.events.set(name, [handler])
    } else {
      handlers.push(handler)
    }
  }

  deleteEvents(name, handler) {

    const handlers = this.events.get(name);
    if (!handlers) {
      return;
    } else {
      this.events.set(name, handlers.filter(item => item !== handler))
    }
  }

  emitEvent(name, ...args) {

    const handlers = this.events.get(name);
    handlers && handlers.forEach(item => {
      typeof item === 'function' && item.apply(this, args)
    })
  }
}

const emitter = new EventEmitter();

emitter.addEvents('click', () => {
  console.log('clidk 1')
});

function click() {
  console.log('click 2');
}

emitter.addEvents('click', click)

emitter.emitEvent('click')

emitter.deleteEvents('click', click);

emitter.emitEvent('click')