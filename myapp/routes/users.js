var express = require('express');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var databasename = "worldwar1data";
var collection = "war_diary_groups";

/* GET users listing. */
router.get('/', function(req, res, next) {
	console.log("inside users.js get");
	res.send("didn't receive anything");
});

// With parameters
router.get('/:userId', function(req, res, next) {
	console.log("inside users.js get");
	res.send(req.params);
});

router.get('/soldier/:userId.:nameSoldier', function(req, res, next) {
    var data = {
        "fruit": {
            "userId": req.params.userId,
            "nameSoldier": req.params.nameSoldier
        }
    }; 

	res.send(data);
});

router.get('/:userId-:nameSoldier', function(req, res, next) {
	console.log("inside users.js get");
	res.send(req.params);
});

router.get('/:userId&:nameSoldier', function(req, res, next) {
	console.log("inside users.js get");
	res.send(req.params);
});

router.get('/fruit/:fruitName', function(req, res) {
    var data = {
        "fruit": {
            "fruitName": req.params.fruitName,
        }
    }; 

	res.send(data);
});


router.get('/fruit/:fruitName/:fruitColor', function(req, res) {
    var data = {
        "fruit": {
            "fruitName": req.params.fruitName,
            "fruitColor": req.params.fruitColor
        }
    }; 

	res.send(data);
});


router.get('/fruit/:fruitName.:fruitColor', function(req, res) {
    var data = {
        "fruit": {
            "apple": req.params.fruitName,
            "color": req.params.fruitColor
        }
    }; 

	res.send(data);
});


router.get('/userId/:userId/books/:bookId', function(req,res,next){
	console.log("inside users.js get");
	res.send(req.params);
});

module.exports = router;
