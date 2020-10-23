import SPOTIFY_CLIENT_ID from '/client/src/config/client.js';
const axios = require('axios');

var authorize = (options) => {
  let url = 'https://accounts.spotify.com/authorize';
  axios.get(url, {
    headers: { crossorigin: true },
    client_id: SPOTIFY_CLIENT_ID,
    response_type: 'token',
    redirect_uri: 'http://localhost:3000/'
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
}

export default authorize;
