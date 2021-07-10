
// function sayHello(name){
//     console.log('hello'+name);
// }

// sayHello('Aru')
// global
// console.log()
// setTimeout()
// clearTimeout()
// setInterval()
// clearInterval()

// window.console.log
// or
// window.setInterval
// or
// global.setInterval
// var sayHi=function(){

// }
// to load a module
// const logger=require('./logger');
// // console.log(logger);
// logger.log('message')
// const os=require('os');
// var totalmem=os.totalmem()
// var freem=os.freemem()
// console.log('totalmem :'+totalmem);
// console.log(`free memory: ${freem}`)  

// const fs=require('fs');
// var filecurrfold=fs.readdirSync('./');
// console.log(filecurrfold)
// down is asynchronous method of using file sys
// fs.readdir('./', function(err,files){
//     if (err) console.log('error', err);
//     else console.log('result',files)
// })

const EventEmitter=require('events');
const emitter=new EventEmitter();
// register a listener
emitter.on('messagelogged', (arg) => {
    console.log('listener called', arg)
})
emitter.emit('messagelogged',{id:1 ,url: 'https://'})
// making a noice produce signalling