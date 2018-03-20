console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

var command = process.argv[2];
console.log('Command: ', command);
var argv = yargs.argv;

console.log('process.argv:', process.argv);
console.log('yargs.argv:', argv);

if (command === 'add'){
  notes.addNote(argv.title, argv.body);
} else if (command === 'list'){
  notes.getAll();
} else if (command === 'read'){
  console.log('data fetched from the server');
} else if (command === 'remove'){
  console.log('note removed.');
}else{
  console.log('Command not recognized.');
}
