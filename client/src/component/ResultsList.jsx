import App from './App.jsx';
import Result from './Result.jsx';
import React from 'react';
import ReactDOM from 'react-dom';

function ResultsList(props) {
  return(
    <div>
      <br></br>
      {props.resultList.map(result => {
        return <Result result={result}/>
      })}
      <br></br>
    </div>
  )
}

export default ResultsList;
