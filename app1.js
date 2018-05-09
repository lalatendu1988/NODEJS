var express    = require("express");
var bodyParser = require("body-parser");
var path       = require("path");


var app    = express();
// Statically passing Argument to query string.
app.get('/',function(req,res){
	res.send("Hello World");
});

app.get('/user',function(req,res){
	res.send("Hello !!!!");
});

app.get('/user/lala', function(req, res){
   res.send('HELLO lala');
});

app.get('/user/bikash', function(req, res){
   res.send('HELLO bikash');
});
 
// Dynamically passing Argument to query string.
app.get('/user/:name', function(req, res){
   res.send('HELLO ' + req.params.name);
});

app.post('/query', function(req, res){
   res.send('Post Method Begins');
});

app.put('/put', function(req, res){
   res.send('Put Method Begins');
});

app.delete('/del', function(req, res){
   res.send('DELETE Method Begins');
});

app.listen(3000, function(){
	console.log("Server Started on port 3000...");
})
