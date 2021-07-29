const fs = require('fs');
// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
// };

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJSON);

// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.author);

// Challenge solution
const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const parseData = JSON.parse(dataJSON);
parseData.name = 'Moinul';
parseData.age = '20';
const data = JSON.stringify(parseData);
fs.writeFileSync('1-json.json', data);
console.log(data);
