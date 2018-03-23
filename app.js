console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');
var argv = yargs.argv;

var command = argv._[0];
console.log('Command: ', command);

console.log('yargs.argv:', argv);

if (command === 'add'){
  var note = notes.addNote(argv.title, argv.body);
  if (note){
    console.log('note created.');
    notes.logNote(note);
  }else{
    console.log('note title taken.');
  }
} else if (command === 'list'){
  notes.getAll();
} else if (command === 'read'){
  debugger;
  var note = notes.readNote(argv.title);
  if(note){
    console.log('note read.');
    notes.logNote(note);
  }else{
    console.log('note not found');
  }

} else if (command === 'remove'){
  var isRemoved = notes.removeNote(argv.title);
  var message = isRemoved ? 'Note removed.' : 'Note not found.';
  console.log(message);
}else{
  console.log('Command not recognized.');
}
