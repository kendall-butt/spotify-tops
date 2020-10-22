import App from './App.jsx';
import Result from './Result.jsx';
import React from 'react';
import ReactDOM from 'react-dom';

function ResultsList(props) {
  return(
    <div>
      {props.results.map(result => {
        return <Result result={result}/>
      })}
    </div>
  )
}

export default ResultsList;
