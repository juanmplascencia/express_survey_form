// Load the express module (Where do you think this comes from?)
var express = require("express");

var session = require('express-session');

// invoke var express and store the resulting application in var app
var app = express();

// require body-parser
var bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded({extended: true}));

app.use(session({secret: 'codingdojorocks'}));  // string for encryption

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res){
    res.render('index.ejs', {});
});
// route to process new user form data:
app.get('/result', function (req, res){
    //code to add user to db goes here!
    res.render('result.ejs', {data: req.session.data});
});

app.post('/submit', function (req, res){
    //code to add user to db goes here!
    console.log("POST DATA \n\n", req.body)
    req.session.data = req.body;
    res.redirect('/result');
});

// Tell the express app to listen on port 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
});
// this line will almost always be at the end of your server.js file (we only tell the server to listen after we have set up all of our rules)