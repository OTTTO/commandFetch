#!/bin/bash

if [ ! -f ./artifacts/clfCommands.txt ]; then
    node ./commandFetch.js && node ./commandParse.js && node ./mongoWrangle.js
fi

echo "Your commandlinefu Mongo Database is now ready!"