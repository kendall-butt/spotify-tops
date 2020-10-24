import App from './App.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@material-ui/core';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import TextField from '@material-ui/core/TextField';

function Search(props) {
  return (
    <div>
      <br></br>
      <ButtonGroup size="large" variant="contained" color="primary" aria-label="large outlined primary button group">
        <div className="search">
          <Button
            bgcolor="success.main" color="success.contrastText"
            variant="contained"
            color="green"
            onClick={() => props.getTopResults('topArtistsAllTime')}
            >Get top artists: All Time</Button>
        </div>
        <br></br>
        <div className="search">
          <Button
            variant="contained"
            color="green"
            onClick={() => props.getTopResults('topArtistsThisMonth')}
            >Get top artists: This Month</Button>
        </div>
        <br></br>
        <div className="search">
          <Button
            variant="contained"
            color="green"
            onClick={() => props.getTopResults('topSongsAllTime')}
            >Get top songs: All Time</Button>
        </div>
        <br></br>
        <div className="search">
          <Button
            variant="contained"
            color="green"
            onClick={() => props.getTopResults('topSongsThisMonth')}
            >Get top songs: This Month</Button>
        </div>
      </ButtonGroup>
    </div>
  );
}

export default Search;
