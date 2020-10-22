import App from './App.jsx';
import React from 'react';
import ReactDOM from 'react-dom';

function Result(props) {
  return (
    <div>
      <img className="image" src={props.result.image_url}></img>
      <div>Common Name: {props.result.common_name}</div>
      <div>Scientific Name: {props.result.scientific_name}</div>
    </div>
  )
}

export default Result;
