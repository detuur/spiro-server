var express = require("express");
var bodyparser = require("body-parser");
var request = require("request");

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

console.log("online");
app.listen(3306);
