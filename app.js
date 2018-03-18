console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js')

console.log(_.isString(true));
console.log(_.isString('Muyang!'));
console.log(_.isString(1));

var filteredArray = _.uniq(['Hong', 1, 'Hong', 1, 2, 3, 4]);
console.log(filteredArray);
// var user = os.userInfo();
//
// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`, function(err){
//   if (err){
//     console.log('Unable to write to file.')
//   }
// });
