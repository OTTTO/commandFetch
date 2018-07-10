const fs = require('fs');

const commandsFile = fs.readFileSync('./commandlinefu.txt', 'utf8');
const lines = commandsFile.split('\n');

var commands = [];

for(let j=2; j<lines.length; j+=3) {
    commands.push({ 'description':lines[j], 'command':lines[j+1] });
}

var json = JSON.stringify(commands, null, 2);

fs.writeFile('commands.json', json, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});