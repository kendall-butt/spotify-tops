import TREFLE_API_KEY from '/client/src/config/trefle.js';
import fetch from 'node-fetch';
const axios = require('axios');

var searchTrefle = (options) => {
  var url = `https://trefle.io/api/v1/plants?token=${TREFLE_API_KEY}`
  // axios.defaults.baseURL = url;
  axios.get(url, {
    // crossdomain: true
    // params: {
    //   'filter[common_name]': 'beach strawberry',
    // }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
}

export default searchTrefle;
