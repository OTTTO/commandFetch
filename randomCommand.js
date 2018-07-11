const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017';

const dbName = 'clf_commands';

MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
    assert.equal(null, err);
    console.log("Connected correctly to server");

    const db = client.db(dbName);

    var commands = db.collection('commands');
   
    commands.aggregate([{ $sample: { size: 1 } }])
        .forEach((doc) => {
            console.log("description: ", doc.description);
            console.log("command: ", doc.command);
        });
    
    client.close();
});


