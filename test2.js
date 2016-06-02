var express = require("express");
var bodyparser = require("body-parser");
var request = require("request");
var couchbase = require("couchbase");

var Cluster = new couchbase.Cluster("couchbase://localhost");
var bucket = Cluster.openBucket('test');



var app = express();
app.use(bodyparser.urlencoded( {extended:false}));
app.use(bodyparser.json());

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Acces-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.all('/', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Acces-Control-Allow-Headers", "X-Requested-With");
	next();
});

app.use(express.static('./static/Spirometer-website'));

app.post("/api/stat/doquery", function(req, res) {
	console.log(req.body);
	var para = req.body;
});

app.get("/api/stat/getdata", function(req, res) {
	var id = req.param('id');
	bucket.get(id, function(err, ress) {
		res.json(ress.value);
	});
});


