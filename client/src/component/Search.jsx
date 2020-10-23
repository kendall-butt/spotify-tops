import App from './App.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

function Search(props) {
  return (
    <div className="search">
      <Button
        variant="contained"
        color="green"
        onClick={props.getTopArtistsAllTime}
        >Get top artists</Button>
    </div>
  );
}

export default Search;
