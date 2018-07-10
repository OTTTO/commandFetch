const Curl = require( 'curl-request' );
const fs = require('fs');

fs.writeFileSync('commandlinefu.txt', "COMMANDLINE FU DESCRIPTIONS AND COMMANDS\n\n");

async function curling() {
    for(i=0; i<2500; i++) {

        let curl = new Curl();

        await curl.get(`https://www.commandlinefu.com/commands/browse/sort-by-votes/plaintext/0`)
        .then(({statusCode, body, headers}) => {
            fs.appendFileSync('commandlinefu.txt', body);
        })
        .catch((e) => {
            console.log(e);
        });
    }
    console.log("The file has been saved!");    
};

curling();