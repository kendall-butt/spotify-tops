const express = require('express')
const app = express()
const port = 3000
const axios = require('axios');
const controller = require('./controller.js');

app.use(express.static('./client/dist'))

app.get('/topArtistsAllTime', (req, res) => {
  axios({
    url: 'https://api.spotify.com/v1/me/top/artists',
    method: 'get',
    headers: {
      Authorization: "Bearer " + req.query.token
    },
    params: {
      limit: 5,
      time_range: 'long_term'
    }
  })
    .then(function (response) {
      return controller.postArtistsAll(response.data.items, res)
    })
    .catch(function (error) {
      console.log(error);
    })
})

app.get('/topArtistsThisMonth', (req, res) => {
  axios({
    url: 'https://api.spotify.com/v1/me/top/artists',
    method: 'get',
    headers: {
      Authorization: "Bearer " + req.query.token
    },
    params: {
      limit: 5,
      time_range: 'short_term'
    }
  })
    .then(function (response) {
      return controller.postArtistsMonth(response.data.items, res)
    })
    .catch(function (error) {
      console.log(error);
    })
})

app.get('/topSongsAllTime', (req, res) => {
  axios({
    url: 'https://api.spotify.com/v1/me/top/tracks',
    method: 'get',
    headers: {
      Authorization: "Bearer " + req.query.token
    },
    params: {
      limit: 5,
      time_range: 'long_term'
    }
  })
    .then(function (response) {
      return controller.postSongsAll(response.data.items, res)
    })
    .catch(function (error) {
      console.log(error);
    })
})

app.get('/topSongsThisMonth', (req, res) => {
  axios({
    url: 'https://api.spotify.com/v1/me/top/tracks',
    method: 'get',
    headers: {
      Authorization: "Bearer " + req.query.token
    },
    params: {
      limit: 5,
      time_range: 'short_term'
    }
  })
    .then(function (response) {
      return controller.postSongsMonth(response.data.items, res)
    })
    .catch(function (error) {
      console.log(error);
    })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
