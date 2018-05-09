var mysql = require('mysql')

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'employees'
})

connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected...')

  connection.query('INSERT INTO employees (emp_no,birth_date, first_name,last_name,gender,hire_date) VALUES (?,?,?,?,?,?)', [3,'1987-04-15','SHASANK','DASH','','2016-04-15'], function(err, result) {
    if (err) throw err
    connection.query('SELECT * FROM employees', function(err, results) {
      if (err) throw err
      console.log(results)
    })
  })
})
