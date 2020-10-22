import TREFLE_API_KEY from '/client/src/config/trefle.js';
import fetch from 'node-fetch';
const axios = require('axios');

var server = `https://trefle.io/api/v1/plants?token=${TREFLE_API_KEY}`

var searchTrefle = (options) => {
  axios.get({
    method: 'get',
    url: server,
    headers: { 'X-Requested-With': 'XMLHttpRequest' },
    params: {
      q: 'string to search',
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
}

export default searchTrefle;
