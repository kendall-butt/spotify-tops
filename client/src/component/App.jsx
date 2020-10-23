import React from 'react';
import ReactDOM from 'react-dom';
import SPOTIFY_CLIENT_ID from '../config/client.js';
import Search from './Search.jsx';
import ResultsList from './ResultsList.jsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Button } from '@material-ui/core';

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
    this.getTopResults = this.getTopResults.bind(this);
    this.state = {
      token: null,
      display: null,
      topArtistsAllTime: null,
      topArtistsThisMonth: null,
      topSongsAllTime: null,
      topSongsThisMonth: null,
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

  getTopResults(id) {
    console.log(id)
    let that = this;
    axios.get(`/${id}`, {
      params: {
        token: this.state.token
      }
    })
      .then(function(response) {
        that.setState({
          [`${id}`]: response.data,
          display: `${id}`
        })
        console.log('topSongsAllTime', that.state.topSongsAllTime)
      })
      .catch(function (error) {
        console.log(that.state.topSongsAllTime);
      })
  }


// ** TODO: conditionally render the login button **
  render() {
    let displayResultList;

    let whichDisplay = this.state.display;
    let resultList;
    if (whichDisplay === 'topArtistsAllTime') {
      resultList = this.state.topArtistsAllTime;
    } else if (whichDisplay === 'topArtistsThisMonth') {
      resultList = this.state.topArtistsThisMonth
    } else if (whichDisplay === 'topSongsAllTime') {
      resultList = this.state.topSongsAllTime
    } else if (whichDisplay === 'topSongsThisMonth') {
      resultList = this.state.topSongsThisMonth
    } else {
      resultList = [1,2,3,4,5]
    }

    if (this.state.display) {
      displayResultList = <ResultsList resultList={resultList} />
    }

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
          <br></br>
          <Search
            getTopResults={this.getTopResults}
          />
          <br></br>
          {displayResultList}
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
