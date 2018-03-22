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
  var noteTitle = argv.title;
  var note = notes.addNote(argv.title, argv.body);
  if (note === undefined){
    console.log(noteTitle, 'already exists in the notes. use another one instead.')
  }else{
    console.log(noteTitle, 'saved to notes successfully.')
  }
} else if (command === 'list'){
  notes.getAll();
} else if (command === 'read'){
  notes.readNote(argv.title);
} else if (command === 'remove'){
  notes.removeNote(argv.title);
}else{
  console.log('Command not recognized.');
}
