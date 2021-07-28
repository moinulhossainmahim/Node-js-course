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
  handler: function () {
    console.log('Adding a new note');
  },
});

yargs.command({
  command: 'remove',
  describe: 'Remove the note',
  handler: function () {
    console.log('removing the note');
  },
});

yargs.command({
  command: 'list',
  describe: 'List of note',
  handler: function () {
    console.log('here the list of items');
  },
});

yargs.command({
  command: 'read',
  describe: 'Read the list',
  handler: function () {
    console.log('Reading the list of notes');
  },
});

console.log(yargs.argv);

// const notefunc = notes();
// console.log(validator.isURL('https://github.com/moinulhossainmahim'));

// const add = require('./utils');
// const sum = add(4, -2);
// console.log(sum);
