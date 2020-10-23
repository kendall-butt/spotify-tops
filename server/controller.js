const model = require('../db/model.js');

var controller = {
  postArtistsAll: (req, res) => {
    model.postArtistsAll(req, (err) => {
      if (err) {
        res.status(400).send('Controller: Error in post')
      }
      res.status(200).send(req);
    })
  },
  postArtistsMonth: (req, res) => {
    model.postArtistsMonth(req, (err) => {
      if (err) {
        res.status(400).send('Controller: Error in post')
      }
      res.status(200).send(req);
    })
  },
  postSongsAll: (req, res) => {
    model.postSongsAll(req, (err) => {
      if (err) {
        res.status(400).send('Controller: Error in post')
      }
      res.status(200).send(req);
    })
  },
  postSongsMonth: (req, res) => {
    model.postSongsMonth(req, (err) => {
      if (err) {
        res.status(400).send('Controller: Error in post')
      }
      res.status(200).send(req);
    })
  }
}

module.exports = controller;
