import App from './App.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@material-ui/core';

function Search(props) {
  return (
    <div className="search">
      <form >
        <input type="text" value={props.value} onChange={props.handleChange} />
      </form>
      <Button variant="contained"  color="green" onClick={(e) => { props.handleSearch(e)}}>Search for Plants</Button>
    </div>
  );
}

export default Search;
