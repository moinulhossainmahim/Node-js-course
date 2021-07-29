const validator = require('validator');
const notes = require('./notes');
const chalk = require('chalk');
const yargs = require('yargs');

//customize yargs version
yargs.version('1.5.0');

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: "This is add note's body",
      demandOption: true,
      type: 'string',
    },
  },
  handler: function (argv) {
    console.log('Title: ' + argv.title);
    console.log('Body: ' + argv.body);
  },
});

//Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove the note',
  handler: function () {
    console.log('removing the note');
  },
});

//Create list command
yargs.command({
  command: 'list',
  describe: 'List of note',
  handler: function () {
    console.log('here the list of items');
  },
});

//Create read command
yargs.command({
  command: 'read',
  describe: 'Read the list',
  handler: function () {
    console.log('Reading the list of notes');
  },
});

yargs.parse();
// console.log(yargs.argv);
