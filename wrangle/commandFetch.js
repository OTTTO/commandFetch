const Curl = require( 'curl-request' );
const fs = require('fs');

async function curling() {
    for(i=0; i<2500; i++) {

        let curl = new Curl();

        await curl.get(`https://www.commandlinefu.com/commands/browse/sort-by-votes/plaintext/${i}`)
        .then(({statusCode, body, headers}) => {
            fs.appendFileSync('../artifacts/clfCommands.txt', body);
        })
        .catch((e) => {
            console.log(e);
        });
    }
    console.log("The file has been saved!");    
};

curling();