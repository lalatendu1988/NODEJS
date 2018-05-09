var mysql = require('mysql')

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'employees'
})

connection.connect(function(err) {
  if (err) throw err
  //console.log('You are now connected...')
  connection.query("SELECT * FROM employees", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
})
