const chalk = require('chalk');
const fs = require('fs');
const getNotes = () => {
  console.log('This is getNotes function');
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter((note) => {
    if (note.title === title) {
      return note;
    }
  });

  if (duplicateNotes.length === 0) {
    notes.push({
      title,
      body,
    });

    saveNotes(notes);
    console.log(chalk.green.inverse('note added'));
  } else {
    console.log(chalk.red.inverse('This Note already taken'));
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    const data = JSON.parse(dataJSON);
    return data;
  } catch (error) {
    return [];
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const newNotes = notes.filter((note) => note.title !== title);
  if (notes.length === newNotes.length) {
    console.log(chalk.red.inverse('No note found!'));
  } else {
    console.log(chalk.green.inverse('Note removed!'));
    saveNotes(newNotes);
  }
};

module.exports = {
  getNotes,
  addNote,
  removeNote,
};
