var express = require('express');
var app     = express();
var low     = require('lowdb');
var fs      = require('lowdb/adapters/FileSync');
var adapter = new fs('db.json');
var db      = low(adapter);

// configure express to serve static files from public directory
// ------------------------------------------------------------------
app.use(express.static('public'));

// allow Cross-Origin Resource Sharing (CORS)
var cors = require('cors');
app.use(cors());

// init the data store
db.defaults({ accounts: []}).write();

// list posts
app.get('/data', function(req, res){     

    res.send(db.get('accounts').value());

});

// ----------------------------------------------------
// add post - test using:
//      curl http://localhost:3000/posts/ping/1/false
// ----------------------------------------------------
app.get('/accounts/:name/:email/:balance/:password/:transactions', function(req, res){

    var post = {
        "name"          : req.params.name,
        "email"         : req.params.email,
        "balance"       : req.params.balance,
        "password"      : req.params.password,
        "transactions"  : req.params.transactions,
    };
    db.get('accounts').push(post).write();
    console.log(db.get('accounts').value());   
    res.send(db.get('accounts').value());
});

// ----------------------------------------------------
// filter by published state - test using:
//      curl http://localhost:3000/published/true
// ----------------------------------------------------
app.get('/published/:boolean', function(req, res){

    // YOUR CODE

});

// ----------------------------------------------------
// update published value - test using:
//      curl http://localhost:3000/published/1/true
// ----------------------------------------------------
app.get('/published/:id/:boolean', function(req, res){

    // YOUR CODE

});

// ----------------------------------------------------
// delete entry by id - test using:
//      curl http://localhost:3000/delete/5
// ----------------------------------------------------
app.get('/delete/:id/', function(req, res){

    // YOUR CODE

});

// start server
// -----------------------
app.listen(3000, function(){
    console.log('Running on port 3000');
});
