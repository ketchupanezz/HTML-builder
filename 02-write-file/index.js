const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'text.txt');
const writeStream = fs.createWriteStream(filePath);

console.log(
  'Hello! Please, enter your text. When you finish typing, write the word "exit": \n',
);

process.stdin.on('data', (data) => {
  writeStream.write(data.toString().trim() + '\n');

  if (data.toString().trim() === 'exit') {
    console.log('Text successfully recorded!');
    process.exit();
  }
});
