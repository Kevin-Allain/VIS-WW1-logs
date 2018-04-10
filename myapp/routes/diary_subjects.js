var express = require('express');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var databasename = "worldwar1data";
var collection = "war_diary_subjects";

/* GET users listing. */
router.get('/', function(req, res, next) {
	console.log("inside diary_subjects.js get");

	MongoClient.connect(url, function(err, db) {
	  if (err) throw err;
	  console.log("inside MongoClient.connect");	  
	  var dbo = db.db(databasename);
	  // , { _id: 0, name: 1, address: 1 }
	  dbo.collection(collection).find({}).toArray(function(err, result) {
	    if (err) throw err;
	    res.send( JSON.stringify(result) );
	    db.close();
	  });
	});

  console.log('42');
});

module.exports = router;
