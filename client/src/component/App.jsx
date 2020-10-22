import React from 'react';
import ReactDOM from 'react-dom';
import searchTrefle from '../searchTrefle.js';
import TREFLE_API_KEY from '../config/trefle.js';
import Search from './Search.jsx';
import ResultsList from './ResultsList.jsx';
import exampleData from '../exampleData.js';
import CssBaseline from '@material-ui/core/CssBaseline';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.searchTrefle = searchTrefle;
    this.state = {
      value: '',
      results: exampleData,
    };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSearch(e) {
    e.preventDefault();
    let searchString = this.state.value;
    this.searchTrefle(searchString);
    // TODO:
    // this.setState({ results: API RESPONSE })
  }

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <div>
          <h1>Search Plants</h1>
          <Search
            handleSearch={this.handleSearch}
            handleChange={this.handleChange}
            value={this.state.value}
          />
          <ResultsList results={this.state.results} />
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
