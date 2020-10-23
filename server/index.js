const express = require('express')
const app = express()
const port = 3000
const axios = require('axios');
let SPOTIFY_CLIENT_ID = '8da67a5154734d75a87eb6f788362b36';
// let url = 'https://accounts.spotify.com/authorize';

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
      res.send(response.data.items);
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
      res.send(response.data.items);
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
      res.send(response.data.items);
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
      res.send(response.data.items);
    })
    .catch(function (error) {
      console.log(error);
    })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


// res.redirect(`https://accounts.spotify.com/authorize?client_id=${SPOTIFY_CLIENT_ID}&response_type=token&redirect_uri=http://localhost:3000/`)
