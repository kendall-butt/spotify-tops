const express = require('express')
const app = express()
const port = 3000
const axios = require('axios');
let SPOTIFY_CLIENT_ID = '8da67a5154734d75a87eb6f788362b36';
// let url = 'https://accounts.spotify.com/authorize';

app.use(express.static('./client/dist'))

app.get('/authorize', (req, res) => {
  res.redirect(`https://accounts.spotify.com/authorize?client_id=${SPOTIFY_CLIENT_ID}&response_type=token&redirect_uri=http://localhost:3000/`)
  // axios({
  //   url: 'https://accounts.spotify.com/authorize',
  //   method: 'get',
  //   params: {
  //     client_id: SPOTIFY_CLIENT_ID,
  //     response_type: 'token',
  //     redirect_uri: 'http://localhost:3000/'
  //   }
  // })
  //   .then(function (response) {
  //     console.log(response.request)
  //     res.send(response);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
