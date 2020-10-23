var mysql = require('mysql');

var connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'spotify_tops'
});

connection.connect((err) => {
  if (err) {
    console.log(err)
  }
  console.log('users DB is connected')
});

module.exports = connection;
