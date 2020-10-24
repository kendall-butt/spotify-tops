import App from './App.jsx';
import Result from './Result.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import Box from '@material-ui/core/Box';

function ResultsList(props) {
  return(
    <Box display="flex" flexDirection="row" flexWrap="wrap" alignItems="center" justifyContent="space-around">
      <br></br>
      {props.resultList.map(result => {
        return <Result result={result}/>
      })}
      <br></br>
    </Box>
  )
}

export default ResultsList;
