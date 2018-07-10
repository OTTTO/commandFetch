const fs = require('fs');

const commandsFile = fs.readFileSync('./commandlinefu.txt', 'utf8');
const lines = commandsFile.split('\n');

var commands = [];

for(let j = 0; j < lines.length; j++) {
	if (lines[j].startsWith('# commandlinefu.com') || lines[j] === '') {		
		continue;
	} else {
		commands.push({ 'description':lines[j], 'command':lines[j+1] });
		j++;
	}
}

var json = JSON.stringify(commands, null, 2);

fs.writeFile('commands.json', json, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});