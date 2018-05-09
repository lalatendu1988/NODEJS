var mysql      = require('mysql');
var express    = require("express");
var bodyParser = require("body-parser");
var path       = require("path");

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'employees'
})

var app    = express();
connection.connect(function(err) {
    if (err) throw err
    console.log('You are now connected...')
    app.get('/:id', function(req, res){
        console.log(req.params.id);
    });

})