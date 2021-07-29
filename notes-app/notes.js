const chalk = require('chalk');
const fs = require('fs');
const getNotes = function () {
  console.log('This is getNotes function');
};

const addNote = function (title, body) {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(function (note) {
    if (note.title === title) {
      return note;
    }
  });

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });

    saveNotes(notes);
    console.log(chalk.green.inverse('note added'));
  } else {
    console.log(chalk.red.inverse('This Note already taken'));
  }
};

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    const data = JSON.parse(dataJSON);
    return data;
  } catch (error) {
    return [];
  }
};

const removeNote = function (title) {
  const notes = loadNotes();
  const newNotes = notes.filter(function (note) {
    return note.title !== title;
  });
  if (notes.length === newNotes.length) {
    console.log(chalk.red.inverse('No note found!'));
  } else {
    console.log(chalk.green.inverse('Note removed!'));
    saveNotes(newNotes);
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
};
