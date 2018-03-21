
// Coding plan

// get a third party fs
const fs = require('fs');

// create a note object
// convert the object to string
var note = {
  title: 'some title',
  body: 'some body'
};
var originalNoteString = JSON.stringify(note);

// save the string to a file
// fetch the string from the file
fs.writeFileSync('notes.json', originalNoteString);
var fetchedNoteString = fs.readFileSync('notes.json');

// convert the string to an object
// print the type and content
var convertedNoteObj = JSON.parse(fetchedNoteString);
console.log(typeof convertedNoteObj);
console.log(convertedNoteObj.title);
