const db = require('./index.js');

var model = {
  postArtistsAll: (artistsAllTimeArray, cb) => {
    var query = 'INSERT INTO tops SET artists_all = ?';
    var args = [JSON.stringify(artistsAllTimeArray)];
    db.query(query, args, function(err, data) {
      if (err) {
        cb(err)
      }
      // this code would be used to get data from DB, but we are using the data from the initial spotify API call

      // let id = data.insertId;
      // var query = 'SELECT artists_all FROM tops WHERE user_id = ?';
      // var args = [id]
      // db.query(query, args, function(err, data) {
      //   if (err) {
      //     cb(err)
      //   }
      // })
      cb(null, data);
    });
  },
  postArtistsMonth: (artistsMonthArray, cb) => {
    var query = 'INSERT INTO tops SET artists_month = ?';
    var args = [JSON.stringify(artistsMonthArray)];
    db.query(query, args, function (err, data) {
      if (err) {
        cb(err)
      }
      cb(null, data);
    });
  },
  postSongsAll: (songsAllTimeArray, cb) => {
    var query = 'INSERT INTO tops SET songs_all = ?';
    var args = [JSON.stringify(songsAllTimeArray)];
    db.query(query, args, function (err, data) {
      if (err) {
        cb(err)
      }
      cb(null, data);
    });
  },
  postSongsMonth: (songsMonthArray, cb) => {
    var query = 'INSERT INTO tops SET songs_month = ?';
    var args = [JSON.stringify(songsMonthArray)];
    db.query(query, args, function (err, data) {
      if (err) {
        cb(err)
      }
      cb(null, data);
    });
  },
}

module.exports = model;
