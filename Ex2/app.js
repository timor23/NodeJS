const fs = require('fs');

fs.writeFileSync('file1.txt', 'Hello....');

fs.copyFileSync('file1.txt', 'file2.txt');

fs.renameSync('file2.txt', 'secondFile.txt');

let filesNames = fs.readdirSync('./');
let destFile = 'secondFile.txt';
fs.appendFileSync(destFile, '\nFiles in the current folder:');

for (let i = 0; i < filesNames.length; i++) {
    fs.appendFileSync(destFile, `\n${i+1}. ${filesNames[i]}`);
}

fs.rmSync('file1.txt');