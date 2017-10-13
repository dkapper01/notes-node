console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash'); 
const notes = require('./notes.js');

console.log(_.isString(true)); 
console.log(_.isString('daniel')); 

var filteredArray = _.uniq(['daniel', 1, 'daniel', 1, 2, 3, 4]); 

console.log(filteredArray); 
// var res = notes.addNote(); 
// console.log(res); 

// var test = notes.add(4, 6); 
// console.log(test); 

// var user = os.userInfo();

// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`);
