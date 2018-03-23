console.log('Starting notes.js')

const fs = require('fs');

var fetchNotes = () => {
  /* Prevent crash when the file 'notes-data.json' does not exist */
  try {
    var stringNotes = fs.readFileSync('notes-data.json');
    return JSON.parse(stringNotes);
  }catch (e) {
    return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };

  /* filter is an array method that takes a callback function */
  var duplicateNotes = notes.filter((note) => note.title === title);

  /* Rule out the duplicate notes. */
  if (duplicateNotes.length === 0){
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};


var getAll = () => {
  console.log('Getting all notes.');
};

var readNote = (title) => {
  console.log('Reading ', title);
};

var removeNote = (title) => {
  // fetch notes
  var notes = fetchNotes();
  // filter notes, removing the one with title of argument
  var filteredNotes = notes.filter((note) => note.title !== title);
  // sve new notes array
  saveNotes(filteredNotes);
};

module.exports = {
  addNote,
  getAll,
  readNote,
  removeNote
};
