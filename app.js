var express    = require('express');
var app        = express();
var mysql      = require('mysql');
var bodyParser = require('body-parser');
 
//start mysql connection
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'employee'
});
 
connection.connect(function(err) {
  if (err) throw err
  console.log('Database connected Successfully...')
})
//end mysql connection
 
//start body-parser configuration
app.use( bodyParser.json() );  // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
//end body-parser configuration
 
//create app server
var server = app.listen(3000,  "127.0.0.1", function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("Example app listening at http://%s:%s", host, port)
 
});
 
//Node api to get all results
app.get('/employees', function (req, res) {
   connection.query('select * from employees', function (error, results, fields) {
   if (error) throw error;
   res.end(JSON.stringify(results));
 });
});
 
//Node api to get a single employee data
app.get('/employees/:id', function (req, res) {
   connection.query('select * from employees where emp_no=?', [req.params.id], function (error, results, fields) {
   if (error) throw error;
   res.end(JSON.stringify(results));
 });
});
 
//Node api to create a new record into mysql database
app.post('/employees', function (req, res) {
   var postData  = req.body;
   connection.query('INSERT INTO `employees` SET  ?', postData, function (error, results, fields) {
   if (error) throw error;
   res.end(JSON.stringify(results));
 });
});
 
//Node api to update record into mysql database
app.put('/employees', function (req, res) {
	   connection.query('UPDATE `employees` SET `first_name`=? where `emp_no`=?', [req.body.first_name,req.body.emp_no], function (error, results, fields) {
	   if (error) throw error;
	   res.end(JSON.stringify(results));
	});
});
 
//rest api to delete record from mysql database
app.delete('/employees', function (req, res) {
   console.log(req.body);
   connection.query('DELETE FROM `employees` WHERE `emp_no`=?', [req.body.emp_no], function (error, results, fields) {
   if (error) throw error;
   res.end('Record has been deleted!');
 });
});