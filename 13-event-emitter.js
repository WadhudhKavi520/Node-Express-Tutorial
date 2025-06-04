const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', (name, id)=>{
    console.log(`data received user from ${name} , id number: ${id}`)
})
customEmitter.on('response', ()=>{
    console.log(`some other logic herex `)
})
customEmitter.emit('response', 'john', 34)