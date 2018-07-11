const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const json = require("../artifacts/commands.json");

const url = 'mongodb://localhost:27017';

const dbName = 'clf_commands';

MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
    assert.equal(null, err);
    console.log("Connected correctly to server");

    const db = client.db(dbName);

	db.collection('commands').insertMany(json, function(err, r) {
		client.close();
	});
});


