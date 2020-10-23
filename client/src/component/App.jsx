import React from 'react';
import ReactDOM from 'react-dom';
import authorize from '../authorize.js';
import SPOTIFY_CLIENT_ID from '../config/client.js';
import { Button } from '@material-ui/core';

// import searchTrefle from '../searchTrefle.js';
// import TREFLE_API_KEY from '../config/trefle.js';
import Search from './Search.jsx';
import ResultsList from './ResultsList.jsx';
import exampleData from '../exampleData.js';
import CssBaseline from '@material-ui/core/CssBaseline';

const authEndpoint = 'https://accounts.spotify.com/authorize?';
const redirect_uri = 'http://localhost:3000/';
const scopes = ["user-top-read"];
const axios = require('axios');

// Get the hash of the url
const hash = window.location.hash
  .substring(1)
  .split("&")
  .reduce(function(initial, item) {
    if (item) {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
    }
    return initial;
  }, {});

window.location.hash = "";

class App extends React.Component {
  constructor(props) {
    super(props);
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSearch = this.handleSearch.bind(this);
    // this.handleAuth = this.handleAuth.bind(this);
    // this.searchTrefle = searchTrefle;
    this.authorize = authorize;
    this.state = {
      value: '',
      results: exampleData,
      me: null,
      token: null
    };
  }

  componentDidMount() {
    let _token = hash.access_token;
    if (_token) {
      this.setState({
        token: _token
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <div>
          <h1>Top Artists</h1>
          <Button
            variant="contained"
            color="green"
            href={`${authEndpoint}client_id=${SPOTIFY_CLIENT_ID}&response_type=token&redirect_uri=${redirect_uri}&scope=${scopes.join("%20")}`}
          >Login to Spotify</Button>
          <ResultsList results={this.state.results} />
          <br></br>
          <Search
            handleAuth={this.handleAuth}
            token={this.state.token}
          />
        </div>
    </React.Fragment>
    );
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);

export default App;

  // handleSearch(e) {
  //   e.preventDefault();
  //   let searchString = this.state.value;
  //   this.searchTrefle(searchString);
  //   // TODO:
  //   // this.setState({ results: API RESPONSE })
  // }

  // handleChange(e) {
  //   this.setState({ value: e.target.value });
  // }

// handleAuth() {
//   axios.get('/authorize')
  // let popup = window.open(`https://accounts.spotify.com/authorize?client_id=${SPOTIFY_CLIENT_ID}&response_type=token&redirect_uri=http://localhost:3000/`)

  // window.spotifyCallback = (payload) => {
  //   popup.close()
  //   axios.get({
  //     url: 'https://api.spotify.com/v1/me',
  //     headers: {
  //       'Authorization': `Bearer ${payload}`
  //     }
  //   }).then(response => {
  //     return response.json()
  //   }).then(data => {
  //     this.state.me = data;
  //   })
  // }
// }
