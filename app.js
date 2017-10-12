console.log('working');

const fs = require('fs'); 
const os = require('os'); 

var user = os.userInfo(); 
console.log(user); 

fs.appendFileSync('greetings.txt', ' hello ${user.username}!');