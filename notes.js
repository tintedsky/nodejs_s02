console.log('Starting notes.js')

const fs = require('fs');

var addNote = (title, body) => {
  var notes = [];
  var note = {
    title,
    body
  };

  /* Prevent crash when the file 'notes-data.json' does not exist */
  try {
    var stringNotes = fs.readFileSync('notes-data.json');
    notes = JSON.parse(stringNotes);
  }catch (e) {}

  /* filter is an array method that takes a callback function */
  var duplicateNotes = notes.filter((note) => note.title === title);

  /* Rule out the duplicate notes. */
  if (duplicateNotes.length===0){
    notes.push(note);
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
  }

};

var getAll = () => {
  console.log('Getting all notes.');
};

var readNote = (title) => {
  console.log('Reading ', title);
};

var removeNote = (title) => {
  console.log('Removing ', title);
};

module.exports = {
  addNote,
  getAll,
  readNote,
  removeNote
};
